export function addLog(text){
  const box=document.querySelector("#logs");
  const p=document.createElement("p");
  p.textContent=text;
  box.prepend(p);
}