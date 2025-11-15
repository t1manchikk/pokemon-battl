import { addLog } from "./logger.js";

export default class Pokemon{
  constructor({name,hp,selectors}){
    this.name=name;
    this.hp={current:hp,total:hp};

    this.elName=document.querySelector(selectors.name);
    this.elHP=document.querySelector(selectors.hp);
    this.elProgress=document.querySelector(selectors.progress);

    this.elName.textContent=this.name;
    this.render();
  }

  changeHPAnimated(amount){
    const start=this.hp.current;
    this.changeHP(amount);
    this.animateBar(start,this.hp.current);
  }

  changeHP(amount){
    this.hp.current-=amount;
    if(this.hp.current<0) this.hp.current=0;
    this.render();
    addLog(`${this.name} отримав ${amount} dmg (HP: ${this.hp.current})`);
  }

  animateBar(from,to){
    let val=from;
    const step = (from>to)?-1:1;
    const interval=setInterval(()=>{
      if(val===to){clearInterval(interval);return;}
      val+=step;
      this.elProgress.style.width=(val/this.hp.total*100)+"%";
    },10);
  }

  render(){
    this.elHP.textContent=`${this.hp.current} / ${this.hp.total}`;
    this.elProgress.style.width=(this.hp.current/this.hp.total*100)+"%";
  }

  resetHP(){
    this.hp.current=this.hp.total;
    this.render();
    addLog(`${this.name} відновив HP`);
  }
}
