var url="https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
var url2="&api-key="+config.SECRET_NYT_API_KEY;

var query;
var result;

function setup() {
  noCanvas();
  query=createInput();
  query.changed(()=>{
    //result.html("");
    //createP(query.value()).parent(result);
    loadJSON(url + query.value()+url2, gotData);
  });
  result=createP("Enter the query and press ENTER");
}

function gotData(data) {
  var articles=data.response.docs;
  
  result.html("");
  for(var a of articles){
    createElement('h1',a.headline.main).parent(result);
    createP(a.snippet).parent(result);
  }
  
}

