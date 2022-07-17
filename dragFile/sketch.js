

function setup() {
  noCanvas();
    
  let d=createElement("div","Drag file to upload");
  d.addClass("msg");  
  d.dragOver(dropping);
  d.dragLeave(notdropping);
  d.drop(gotFile,notdropping);
}
function gotFile(file){
  createP(`${file.name} type:${file.type} size:${file.size}`);
}
function dropping(){
  this.style("background-color","rgba(255,255,200,0.5)");
}
function notdropping(){  
  this.style("background-color","rgba(255,255,255,0.5)");
}