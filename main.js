import Pokemon from "./modules/pokemon.js";
import { getRandom } from "./modules/utils.js";

const player1 = new Pokemon({
  name: "Pikachu",
  hp: 120,
  selectors:{name:"#player1-name",hp:"#player1-hp",progress:"#player1-progress"}
});

const player2 = new Pokemon({
  name: "Charmander",
  hp: 100,
  selectors:{name:"#player2-name",hp:"#player2-hp",progress:"#player2-progress"}
});

document.querySelector("#btn-attack").onclick=()=>{
  const dmg=getRandom(20);
  player2.changeHPAnimated(dmg);
  if(player2.hp.current===0) alert(player1.name+" виграв!");
};

document.querySelector("#btn-enemy").onclick=()=>{
  const dmg=getRandom(15);
  player1.changeHPAnimated(dmg);
  if(player1.hp.current===0) alert(player2.name+" виграв!");
};

document.querySelector("#btn-newgame").onclick=()=>{
  player1.resetHP();
  player2.resetHP();
  document.querySelector("#logs").innerHTML="";
};
