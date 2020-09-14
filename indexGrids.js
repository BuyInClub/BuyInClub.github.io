var options = {
    enableCellNavigation: true,
    enableColumnReorder: true,
    multiColumnSort: true,
    autoHeight: true,
  };

var gridSess;
var columnsSess = [
  {id: "sessionName", name: "Name", field: "sessionName", sortable: true, width:120, formatter: addLinkToMain},
  {id: "numPlayers", name: "# Players", field: "numPlayers", sortable: true, minWidth:42},
  {id: "bigWinner", name: "Big Winner", field: "bigWinner", sortable: true},
  {id: "winnerAmount", name: "Big Win Amount", field: "winnerAmount", sortable: true, minWidth:42},
  {id: "bigLoser", name: "Big Loser", field: "bigLoser", sortable: true, minWidth:42},
  {id: "loserAmount", name: "Big Loss Amount", field: "loserAmount", sortable: true, minWidth:42},
  {id: "totalMoney", name: "Total Money", field: "totalMoney", sortable: true, minWidth:42},
  {id: "numHands", name: "# Hands", field: "numHands", sortable: true, minWidth:42},
  {id: "numTables", name: "# Tables", field: "numTables", sortable: true, minWidth:42},
];

gridSess = new Slick.Grid("#gridSessions", sessList, columnsSess, options);

  
gridSess.onSort.subscribe(function (e, args) {
  var cols = args.sortCols;

  dataSess.sort(function (dataRow1, dataRow2) {
    for (var i = 0, l = cols.length; i < l; i++) {
      var field = cols[i].sortCol.field;
      var sign = cols[i].sortAsc ? 1 : -1;
      var value1 = dataRow1[field], value2 = dataRow2[field];
      var result = (value1 == value2 ? 0 : (value1 > value2 ? 1 : -1)) * sign;
      if (result != 0) {
        return result;
      }
    }
    return 0;
  });
  
  gridSess.invalidate();
  gridSess.render();
});

/*
var gridTab;
var columnsTab = [
  {id: "table", name: "Table", field: "table", sortable: true, formatter: addLinkToTable, minWidth:50},
  {id: "player", name: "Player", field: "player", sortable: true, formatter: addLinkToPlayer, minWidth:50},
  {id: "wonLost", name: "Won or Lost", field: "wonLost", sortable: true, formatter: wonLostFormatter, minWidth:42},
  {id: "numHands", name: "# Hands", field: "numHands", sortable: true, minWidth:42},
  {id: "numWins", name: "# Wins", field: "numWins", sortable: true, minWidth:42},
  {id: "numUncalledWins", name: "# Uncalled Wins", field: "numUncalledWins", sortable: true, minWidth:42},
  {id: "biggestWin", name: "Biggest Win", field: "biggestWin", sortable: true, formatter: addLinkToBiggestWinHand, minWidth:42},
  {id: "biggestLoss", name: "Biggest Loss", field: "biggestLoss", sortable: true, formatter: addLinkToBiggestLossHand, minWidth:42},
  {id: "showedHoleCards", name: "SHC for UW", field: "showedHoleCards", sortable: true, toolTip: "% of showed hole cards for uncalled pot", minWidth:42},
  {id: "VPIP", name: "VPIP", field: "VPIP", sortable: true, toolTip: "% of calls and raises preflop", minWidth:42},
  {id: "PFR", name: "PFR", field: "PFR", sortable: true, toolTip: "% of raises preflop", minWidth:42},
  {id: "VPIPPFR", name: "PFR/VPIP", field: "VPIPPFR", sortable: true, toolTip: "", minWidth:42},
  {id: "AggFact", name: "AggFact", field: "AggFact", sortable: true, toolTip: "((Bets + Raises) / (Beta + Raises + Calls - CheckRaises))", minWidth:42},
  
];


  gridTab = new Slick.Grid("#myGridTab", dataTab, columnsTab, options);
  
  gridTab.onSort.subscribe(function (e, args) {
    var cols = args.sortCols;

    dataTab.sort(function (dataRow1, dataRow2) {
      for (var i = 0, l = cols.length; i < l; i++) {
        var field = cols[i].sortCol.field;
        var sign = cols[i].sortAsc ? 1 : -1;
        var value1 = dataRow1[field], value2 = dataRow2[field];
        var result = (value1 == value2 ? 0 : (value1 > value2 ? 1 : -1)) * sign;
        if (result != 0) {
          return result;
        }
      }
      return 0;
    });
    gridTab.invalidate();
    gridTab.render();
  });
*/
function addLinkToMain (row, cell, value, columnDef, dataContext) { 
    var rtn;
    if (dataContext.link !== "") {
        rtn = "<a href='" + dataContext.link + "'>" + value + "</a>";
    }
    else { rtn = value; }

    return rtn;
}

function addLinkToPlayer (row, cell, value, columnDef, dataContext) { 
    var rtn = "<a href='" + dataContext.player + "-" + dataContext.table + "-Details.html'>" + dataContext.player + "</a>";
    return rtn;
 }
 
function htmlFormatter (row, cell, value, columnDef, dataContext) { 
  if (value == null) return ''; 

   return value.toString(); 
}   
