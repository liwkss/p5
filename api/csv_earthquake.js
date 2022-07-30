var url="https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_day.csv";

var query;
var results;

function preload(){
  results=loadStrings(url);  
}

function setup() {
  noCanvas();
  
  for (e of results){
    var data=e.split(/,/);
    if(data[2])
      createP(`${data[0]} ${data[1]} ${data[2]}`);
  }
}


