let table;

function preload() {
  table = loadTable('data.csv', 'csv');
}

function setup() {
  noCanvas();
  //loadCSV();	enable this in PRD
}

function loadCSV(){
  print(table.getRowCount() + ' total rows in table');
  print(table.getColumnCount() + ' total columns in table');
  let r = 0;
  select('#firstDoseTotal').html(table.getString(r++, 0))
  select('#secondDoseTotal').html(table.getString(r++, 0))
  select('#thirdDoseTotal').html(table.getString(r++, 0))
  select('#fourthDoseTotal').html(table.getString(r++, 0))
  select('#fifthDoseTotal').html(table.getString(r++, 0))
}