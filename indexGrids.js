var options = {
    enableCellNavigation: true,
    enableColumnReorder: true,
    multiColumnSort: true,
    autoHeight: true,
  };

var gridHC;
var columnsHC = [
    { id: "playerName", name: "Player", field: "playerName", sortable: true },
    { id: "AAnum", name: "# AA", field: "AAnum", sortable: true, minWidth: 42 },
    { id: "AAamount", name: "AA amount", field: "AAamount", sortable: true, minWidth: 42, toolTip: "amount won or lost with AA hole cards" },
    { id: "AAhandfreq", name: "AA freq", field: "AAhandfreq", sortable: true, minWidth: 42, toolTip: "frequency per hand AA is in hole cards" },
    { id: "KKnum", name: "# KK", field: "KKnum", sortable: true, minWidth: 42 },
    { id: "KKamount", name: "KK amount", field: "KKamount", sortable: true, minWidth: 42, toolTip: "amount won or lost with KK hole cards" },
    { id: "KKhandfreq", name: "KK freq", field: "KKhandfreq", sortable: true, minWidth: 42, toolTip: "frequency per hand KK is in hole cards" },
    { id: "AKnum", name: "# AK", field: "AKnum", sortable: true, minWidth: 42 },
    { id: "AKamount", name: "AK amount", field: "AKamount", sortable: true, minWidth: 42, toolTip: "amount won or lost with AK hole cards" },
    { id: "AKhandfreq", name: "AK freq", field: "AKhandfreq", sortable: true, minWidth: 42, toolTip: "frequency per hand AK is in hole cards" },
];

gridHC = new Slick.Grid("#myGridHC", bigholecards, columnsHC, options);


gridHC.onSort.subscribe(function (e, args) {
    var cols = args.sortCols;

    bigholecards.sort(function (dataRow1, dataRow2) {
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

    gridHC.invalidate();
    gridHC.render();
});






var gridSess;
var columnsSess = [
  {id: "sessionName", name: "Name", field: "sessionName", sortable: true, width:120, formatter: addLinkToMain},
  {id: "numPlayers", name: "# Players", field: "numPlayers", sortable: true, minWidth:42},
  {id: "bigWinner", name: "Big Winner", field: "bigWinner", sortable: true},
//  {id: "winnerAmount", name: "Big Win Amount", field: "winnerAmount", sortable: true, minWidth:42},
//  {id: "bigLoser", name: "Big Loser", field: "bigLoser", sortable: true, minWidth:42},
//  {id: "loserAmount", name: "Big Loss Amount", field: "loserAmount", sortable: true, minWidth:42},
  {id: "totalMoney", name: "Total Money", field: "totalMoney", sortable: true, minWidth:42},
  {id: "numHands", name: "# Hands", field: "numHands", sortable: true, minWidth:42},
  {id: "numTables", name: "# Tables", field: "numTables", sortable: true, minWidth:42},
];

gridSess = new Slick.Grid("#gridSessions", sessList, columnsSess, options);

  
gridSess.onSort.subscribe(function (e, args) {
  var cols = args.sortCols;

  sessList.sort(function (dataRow1, dataRow2) {
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


var gridPla;
var columnsPla = [
  {id: "player", name: "Player", field: "player", formatter: addLinkToPlayer, sortable: true, minWidth:50},
  {id: "numBigWinner", name: "Big Winner", field: "numBigWinner", sortable: true, toolTip: "# of times big winner for a session", minWidth:42},
  {id: "numSessions", name: "# Sessions", field: "numSessions", sortable: true, minWidth:42},
  {id: "numHands", name: "# Hands", field: "numHands", sortable: true, minWidth: 42 },
  {id: "showedHoleCardsForUncalledPercent", name: "SHC for UW", field: "showedHoleCardsForUncalledPercent", sortable: true, toolTip: "% of showed hole cards for uncalled pot", minWidth:42},
  {id: "VPIP", name: "VPIP", field: "VPIP", sortable: true, toolTip: "% of calls and raises preflop", minWidth:42},
  {id: "PFR", name: "PFR", field: "PFR", sortable: true, toolTip: "% of raises preflop", minWidth:42},
  {id: "preflopAggressive", name: "PFR/VPIP", field: "preflopAggressive", sortable: true, toolTip: "", minWidth:42},
  {id: "aggFact", name: "AggFact", field: "aggFact", sortable: true, toolTip: "((Bets + Raises) / (Beta + Raises + Calls - CheckRaises))", minWidth:42},
  
];


  gridPla = new Slick.Grid("#myGridPla", plaList, columnsPla, options);
  
  gridPla.onSort.subscribe(function (e, args) {
    var cols = args.sortCols;

    plaList.sort(function (dataRow1, dataRow2) {
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
    gridPla.invalidate();
    gridPla.render();
  });

function addLinkToPlayer (row, cell, value, columnDef, dataContext) { 
    var playerLinkName = dataContext.player.replace(/\s/g,'').toLowerCase();
    var rtn = "<a href='" + playerLinkName + "-Graph.html'>" + dataContext.player + "</a>";
    return rtn;
}

function addLinkToMain (row, cell, value, columnDef, dataContext) { 
    var rtn;
    if (dataContext.link !== "") {
        rtn = "<a href='" + dataContext.link + "'>" + value + "</a>";
    }
    else { rtn = value; }

    return rtn;
}

function htmlFormatter (row, cell, value, columnDef, dataContext) { 
  if (value == null) return ''; 

   return value.toString(); 
}   

function wonLostFormatter(row, cell, value, columnDef, dataContext) {
  var rtn = { text: value, removeClasses: 'cellGood cellBad' };
  if (value !== null || value !== "") {
    if (value < 0) {
      rtn.addClasses = "cellBad";
    } else {
      rtn.addClasses =  "cellGood";
    }
  }
  return rtn;
}	

