var url =
  "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=";

var query1;
var result;

function setup() {
  noCanvas();
  query1 = createInput();
  query1.changed(() => {
    result.html("");
    createP("Loading for " + query1.value()).parent(result);
    print(url + query1.value());
    loadJSON(url + query1.value(), gotData, "jsonp");
  });
  result = createP("Enter the query and press ENTER");
}

function gotData(data) {
  var r = data.query.search;

  if (r.length) {
    result.html("");
    for (var d of r) {
      createElement("h2", d.title).parent(result);
      createP(d.snippet).parent(result);
    }
  } else {
    result.html("No results");
  }
}
