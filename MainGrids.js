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






var gridNH;
var columnsNH = [
    { id: "player", name: "Player", field: "player", sortable: true, minWidth: 50 },
    { id: "nemesisName", name: "Nemesis", field: "nemesisName", sortable: true, minWidth: 50 },
    { id: "nemesisAmount", name: "Amount", field: "nemesisAmount", sortable: true, minWidth: 42 },
    { id: "heroName", name: "Hero", field: "heroName", sortable: true, minWidth: 50 },
    { id: "heroAmount", name: "Amount", field: "heroAmount", sortable: true, minWidth: 42 },
];

gridNH = new Slick.Grid("#myGridNH", nhList, columnsNH, options);


gridNH.onSort.subscribe(function (e, args) {
    var cols = args.sortCols;

    nhList.sort(function (dataRow1, dataRow2) {
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

    gridNH.invalidate();
    gridNH.render();
});


var gridPla;
var columnsPla = [
  {id: "player", name: "Player", field: "player", sortable: true, formatter: htmlFormatter, minWidth:50},
  {id: "wonLost", name: "Won or Lost", field: "wonLost", sortable: true, formatter: wonLostFormatter, minWidth:42},
  {id: "numHands", name: "# Hands", field: "numHands", sortable: true, minWidth:42},
  {id: "numWins", name: "# Wins", field: "numWins", sortable: true, minWidth:42},
  {id: "numUncalledWins", name: "# Uncalled Wins", field: "numUncalledWins", sortable: true, minWidth:42},
  {id: "showedHoleCards", name: "SHC for UW", field: "showedHoleCards", sortable: true, toolTip: "% of showed hole cards for uncalled pot", minWidth:42},
  {id: "VPIP", name: "VPIP", field: "VPIP", sortable: true, toolTip: "% of calls and raises preflop", minWidth:42},
  {id: "PFR", name: "PFR", field: "PFR", sortable: true, toolTip: "% of raises preflop", minWidth:42},
  {id: "VPIPPFR", name: "PFR/VPIP", field: "VPIPPFR", sortable: true, toolTip: "", minWidth:42},
  { id: "AggFact", name: "Agg%", field: "AggFact", sortable: true, toolTip: "Postflop - ((Bets + All Raises) / (Bets + All Raises + Calls + Checks - CheckRaises))", minWidth: 42 },
  { id: "numFoldedWH", name: "# Daves", field: "numFoldedWH", sortable: true, toolTip: "Hand you folded preflop that would of won minimum of $5", minWidth: 42 },
  {id: "time", name: "Time (ms)", field: "time", sortable: true, toolTip: "time (ms) on average to take an action", minWidth: 42 },
  { id: "lastHand", name: "Last Hand (EST)", field: "lastHand", sortable: true, toolTip: "time last hand was played", minWidth: 60 },
  
];

gridPla = new Slick.Grid("#myGridPla", dataPla, columnsPla, options);

  
gridPla.onSort.subscribe(function (e, args) {
  var cols = args.sortCols;

  dataPla.sort(function (dataRow1, dataRow2) {
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


var gridTab;
var columnsTab = [
  {id: "table", name: "Table", field: "table", sortable: true, formatter: addLinkToTable, minWidth:50},
  {id: "player", name: "Player", field: "player", sortable: true, formatter: addLinkToPlayer, minWidth:50},
  {id: "wonLost", name: "Won or Lost", field: "wonLost", sortable: true, formatter: wonLostFormatter, minWidth:42},
  {id: "numHands", name: "# Hands", field: "numHands", sortable: true, minWidth:42},
  {id: "numWins", name: "# Wins", field: "numWins", sortable: true, minWidth:42},
  {id: "numUncalledWins", name: "# Uncalled Wins", field: "numUncalledWins", sortable: true, minWidth:42},
  { id: "consecutiveHandsWOWin", name: "W/O Win", toolTip: "# Hands with out Win", field: "consecutiveHandsWOWin", sortable: true, minWidth: 42 },
  {id: "biggestWin", name: "Biggest Win", field: "biggestWin", sortable: true, formatter: addLinkToBiggestWinHand, minWidth:42},
  {id: "biggestLoss", name: "Biggest Loss", field: "biggestLoss", sortable: true, formatter: addLinkToBiggestLossHand, minWidth:42},
  {id: "showedHoleCards", name: "SHC for UW", field: "showedHoleCards", sortable: true, toolTip: "% of showed hole cards for uncalled pot", minWidth:42},
  {id: "VPIP", name: "VPIP", field: "VPIP", sortable: true, toolTip: "% of calls and raises preflop", minWidth:42},
  {id: "PFR", name: "PFR", field: "PFR", sortable: true, toolTip: "% of raises preflop", minWidth:42},
  {id: "VPIPPFR", name: "PFR/VPIP", field: "VPIPPFR", sortable: true, toolTip: "", minWidth:42},
  { id: "AggFact", name: "Agg%", field: "AggFact", sortable: true, toolTip: "Postflop - ((Bets + All Raises) / (Bets + All Raises + Calls + Checks - CheckRaises))", minWidth: 42 },
  { id: "numFoldedWH", name: "# Daves", field: "numFoldedWH", sortable: true, toolTip: "Hand you folded preflop that would of won minimum of $5", minWidth: 42 },
  { id: "biggestLosingHand", name: "Biggest Losing Hand", field: "biggestLosingHand", sortable: false, toolTip: "Must use both hole cards",formatter: addLinkToBiggestLosingHand, minWidth: 120 },
  
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

function addLinkToBiggestLossHand (row, cell, value, columnDef, dataContext) { 
   var rtn = "<a href='" + dataContext.table + "-Details.html?hand=" + dataContext.biggestLossHand + "'>" + dataContext.biggestLoss + "</a>";
   return rtn;
}

function addLinkToTable (row, cell, value, columnDef, dataContext) { 
    var rtn = "<a href='" + dataContext.table + "-Details.html'>" + value + "</a>";
    return rtn;
}

function addLinkToBB(row, cell, value, columnDef, dataContext) {
    var rtn = "<a href='" + dataContext.link + "'>" + value + "</a>";
    return rtn;
}

function addLinkToBiggestWinHand (row, cell, value, columnDef, dataContext) { 
   var rtn = "<a href='" + dataContext.table + "-Details.html?hand=" + dataContext.biggestWinHand + "'>" + dataContext.biggestWin + "</a>";
   return rtn;
}

function addLinkToBiggestLosingHand(row, cell, value, columnDef, dataContext) {
    var rtn = "<a href='" + dataContext.table + "-Details.html?hand=" + dataContext.biggestLosingHandNum + "'>" + dataContext.biggestLosingHand + "</a>";
    return rtn;
}

function addLinkToPlayer (row, cell, value, columnDef, dataContext) { 
    var rtn = "<a href='" + dataContext.player + "-" + dataContext.table + "-Details.html'>" + dataContext.player + "</a>";
    return rtn;
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

function htmlFormatter (row, cell, value, columnDef, dataContext) { 
  if (value == null) return ''; 

   return value.toString(); 
}   
