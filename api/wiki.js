var queryUrl =
  "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=";
var contentUrl =
  "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&formatversion=2&page=";

var queryInput;
var result;

function setup() {
  noCanvas();
  queryInput = createInput();
  queryInput.changed(() => {
    result.html("");
    createP("Loading for " + queryInput.value()).parent(result);
    print(queryUrl + queryInput.value());
    loadJSON(queryUrl + queryInput.value(), searchTitle, "jsonp");
  });
  result = createP("Enter the query and press ENTER");

  var path = window.location.pathname;
  var page = path.split("/").pop();
  console.log(page);
}

function searchTitle(data) {
  var r = data.query.search;

  if (r.length) {
    result.html("");
    for (var d of r) {
      createElement("h2", d.title).parent(result);
      createP(d.snippet).parent(result);
    }
    var firstTitle = r[0].title.replace(/\s+/g, "_");
    loadJSON(contentUrl + firstTitle, showFirstPage, "jsonp");
  } else {
    result.html("No results");
  }
}

function showFirstPage(data) {
  var d = data.parse;
  createElement("h1", d.title).parent(result);
  createP(d.text).parent(result);
}
