var url="https://api.giphy.com/v1/gifs/search?api_key=";
var api_key= config.SECRET_GIPHY_API_KEY;
var url2="&q="

var query;
var result;

function setup() {
  noCanvas();
  query=createInput();
  query.changed(()=>{
    result.html("");
    createP("Loading for "+query.value()).parent(result);
    print(url + api_key +url2+ query.value());
    loadJSON(url + api_key +url2+ query.value(), gotData);
  });
  result=createP("Enter the query and press ENTER");
}

function gotData(giphy) {
  var datas=giphy.data;
  
  result.html("");
  for(var d of datas){
    createImg(d.images.original.url,query.value()).parent(result);
  }
  
}
