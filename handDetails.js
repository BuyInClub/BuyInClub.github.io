var numHands = 0;
var numFound = 0;
var numWon = 0;
var searchResults = "";


$("#clearFilters").click(function () {
    document.getElementById('winnerSearch').value = "";
    document.getElementById('amountWonSearch').value = "";

    document.getElementById('playerActionSearch').value = "";
    document.getElementById('actionSearch').value = "";
    document.getElementById('stepSearch').value = "";
    document.getElementById('actionAmountSearch').value = "";
    document.getElementById('amountToPotSearch').value = "";

    numHands = 0;
    numFound = 0;
    numWon = 0;
    searchResults = "";
    // clear search results
    document.getElementById('searchResults').innerHTML = searchResults;

    // clear highlighting
    dataView.refresh();    
    // collapse all 
    document.getElementById('collapse').click();
})


function childCriteriaMet(item) {
    if ((document.getElementById('playerActionSearch').value !== "") &&
        (document.getElementById('playerActionSearch').value !== item.player)) {
        return "NoMatch";
    }
    if ((document.getElementById('actionSearch').value !== "") &&
        (!item.action.includes(document.getElementById('actionSearch').value))) {
        return "NoMatch";
    }
    if ((document.getElementById('stepSearch').value !== "") &&
        (document.getElementById('stepSearch').value !== item.step)) {
        return "NoMatch";
    }
    if ((document.getElementById('actionAmountSearch').value !== "") &&
        (parseFloat(document.getElementById('actionAmountSearch').value) > parseFloat(item.amount))) {
        return "NoMatch";
    }
    // item.amountToPot can be blank
    var amountToPot = 0;
    if (item.amountToPot !== "") { amountToPot = parseFloat(item.amountToPot); }
    if ((document.getElementById('amountToPotSearch').value !== "") &&
        (parseFloat(document.getElementById('amountToPotSearch').value) > item.amountToPot)) {
        return "NoMatch";
    }

    if ((document.getElementById('playerActionSearch').value === "") &&
        (document.getElementById('actionSearch').value === "") &&
        (document.getElementById('stepSearch').value === "") &&
        (document.getElementById('amountToPotSearch').value === "") &&
        (document.getElementById('actionAmountSearch').value === "")) {
        return "NoCriteria";
    }

    return "Match";
}

function parentCriteriaMet(item)
{
    if ((document.getElementById('winnerSearch').value !== "") &&
        (document.getElementById('winnerSearch').value !== item.winner)) {
        return "NoMatch";
    }
    if ((document.getElementById('amountWonSearch').value !== "") &&
        (parseFloat(document.getElementById('amountWonSearch').value) > parseFloat(item.won))) {
        return "NoMatch";
    }
    if ((document.getElementById('winnerSearch').value === "") && (document.getElementById('amountWonSearch').value === "")) {
        return "NoCriteria";
    }

    return "Match";
}

// needs to be global for filter
var handsThatMeetFilter = new HashTable();
// need for exanpaing and collapsing
var idsThatMeetFilter = new HashTable();

function addFilterItem(item)
{
    var handNum;
    if (item.indent === 0)
    { 
        handNum = item.handNum;
    }
    else 
    {
        handNum = data[item.parent].handNum;
        // add the parents id
        if (!idsThatMeetFilter.hasItem(data[item.parent].id)) {
            idsThatMeetFilter.setItem(data[item.parent].id, data[item.parent]);
        }
    }
    if (!handsThatMeetFilter.hasItem(handNum)) {
        handsThatMeetFilter.setItem(handNum, item);
    }
    if (!idsThatMeetFilter.hasItem(item.id)) {
        idsThatMeetFilter.setItem(item.id, item);
    }
}

$("#search").click(function () {
    // to make things always update collapse all first.
    document.getElementById('collapse').click();


    handsThatMeetFilter.clear();
    idsThatMeetFilter.clear();
    //var childResult;
    var leng = data.length;
    for(var i = 0; i < leng; i++) {
        // no children criteria, so just check parent
        if (data[i].indent === 0 && childCriteriaMet(data[i]) === "NoCriteria")
        {
            if (parentCriteriaMet(data[i]) === "Match")
            {
                addFilterItem(data[i]);
            }
        }
        // check if children meet the filters
        if (data[i].indent === 1)
        {
            var childResult = childCriteriaMet(data[i]);
            if (childResult === "Match")
            {
                var parentResult = parentCriteriaMet(data[data[i].parent]);
                if (parentResult === "Match" || parentResult === "NoCriteria")
                {
                    addFilterItem(data[i]);
                }
            }
        }
    }
    // have ony hands the meet criteria be expanded
    curData = dataView.getItems();
    curDataLength = curData.length;
    numHands = 0;
    numFound = 0;
    numWon = 0;

    for(var k = 0; k < curDataLength; k++) {
        item = curData[k];
        if (item.indent === 0) {
            numHands++;
            if (handsThatMeetFilter.hasItem(item.handNum)) {
                item._collapsed = false;
                numFound++;
                numWon = numWon + parseFloat(item.won);
            }
            else {
                item._collapsed = true;
            }
            dataView.updateItem(item.id, item);
        }
    }

    // display search results
    searchResults = "# Hands: " + numHands + "; # Found: " + numFound + "; Amount Won: " + numWon.toFixed(2);
    document.getElementById('searchResults').innerHTML = searchResults;

    // do highlighting
    dataView.refresh();
    //grid.render();
})

$("#collapse").click(function () {
    var leng = dataView.getLength();

    for(var i = 0; i < leng;i++) {
        var item = dataView.getItem(i);
        if (item) {
            if (!item._collapsed) {
                item._collapsed = true;
                dataView.updateItem(item.id, item);
            }
        }
    }
    searchResults = "";
    // clear search results
    document.getElementById('searchResults').innerHTML = searchResults;
})

$("#expand").click(function () {
    var leng = dataView.getLength();
    var curItem = 0;

    while (leng > curItem) {
        var item = dataView.getItem(curItem);
        if (item) {
            if (item._collapsed) {
                item._collapsed = false;
                dataView.updateItem(item.id, item);
                curItem = curItem + dataView.getLength() - leng + 1;
                leng = dataView.getLength();
            }
            else {
                curItem++;
            }
        }
    }
    searchResults = "";
    // clear search results
    document.getElementById('searchResults').innerHTML = searchResults;
})

var HtmlFormatter = function (row, cell, value, columnDef, dataContext) { 
    if (value == null) return ''; 

     return value.toString(); 
} 

var HandFormatter = function (row, cell, value, columnDef, dataContext) {
  if (value == null || value == undefined || dataContext === undefined) { return ""; }
  
  value = value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  var spacer = "<span style='display:inline-block;height:1px;width:" + (15 * dataContext["indent"]) + "px'></span>";
  var idx = dataView.getIdxById(dataContext.id);
  if (data[idx + 1] && data[idx + 1].indent > data[idx].indent) {
    if (dataContext._collapsed) {
      return spacer + " <span class='toggle expand'></span>&nbsp;" + value;
    } else {
      return spacer + " <span class='toggle collapse'></span>&nbsp;" + value;
    }
  } else {
    return spacer + " <span class='toggle'></span>&nbsp;" + value;
  }
};


function cellFound(row, cell, value, columnDef, dataContext) {
    var rtn = { text: value, removeClasses: 'cellFound' };
    if (value !== null || value !== "") {
        if (idsThatMeetFilter.hasItem(dataContext.id)) {            
            if (columnDef.id === "winner" && document.getElementById('winnerSearch').value !== "") {
                if (value === document.getElementById('winnerSearch').value)
                    { rtn.addClasses = "cellFound"; }
            }
            if (columnDef.id === "won" && document.getElementById('amountWonSearch').value !== "") 
                if (parseFloat(value) >= parseFloat(document.getElementById('amountWonSearch').value)) {
                    { rtn.addClasses = "cellFound"; }
            }


            if (columnDef.id === "player" && document.getElementById('playerActionSearch').value !== "") {
                if (value === document.getElementById('playerActionSearch').value)
                    { rtn.addClasses = "cellFound"; }
            }        
            if (columnDef.id === "action" && document.getElementById('actionSearch').value !== "") {
                if (value.includes(document.getElementById('actionSearch').value))
                    { rtn.addClasses = "cellFound"; }
            }        
            if (columnDef.id === "step" && document.getElementById('stepSearch').value !== "") {
                if (value === document.getElementById('stepSearch').value)
                    { rtn.addClasses = "cellFound"; }
            }            

            if (columnDef.id === "amount" && document.getElementById('actionAmountSearch').value !== "") 
                if (parseFloat(value) >= parseFloat(document.getElementById('actionAmountSearch').value)) {
                    { rtn.addClasses = "cellFound"; }
            }

            if (columnDef.id === "amountToPot" && document.getElementById('amountToPotSearch').value !== "") 
                if (parseFloat(value) >= parseFloat(document.getElementById('amountToPotSearch').value)) {
                    { rtn.addClasses = "cellFound"; }
            }

        }
    }
    return rtn;
}	
function addLinkToPlayer(row, cell, value, columnDef, dataContext) {
    var rtn = { text: value, removeClasses: 'cellFound' };
    if (columnDef.id === "player" && value !== "") {
        rtn.text = "<a href='" + value + "-" + tableName + "-Details.html?hand=" + data[dataContext.parent].handNum + "'>" + value + "</a>";
    }
    if (columnDef.id === "player" && document.getElementById('playerActionSearch').value !== "") {
        if (value === document.getElementById('playerActionSearch').value)
        { rtn.addClasses = "cellFound"; }
    }
    return rtn;
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

function gotoHand()
{
    var scrolltoHand = getUrlVars()["hand"];
    var numIndex = 0;
    if (scrolltoHand == null) { return 0; }
    else 
    {
        for (var i = 0; i < data.length; i++)
        {
            if (data[i].handNum === scrolltoHand)
            {
                numIndex = data[i].id;
                break;
            }
        }
        return numIndex;
    }
}

var dataView;
var grid;

var columns = [
  {id: "handNum", name: "Hand #", field: "handNum", width: 60, cssClass: "cell-title", formatter: HandFormatter},
  {id: "numPlayers", name: "# Players", field: "numPlayers"},
  {id: "numAllIns", name: "# All In's", field: "numAllIns", width: 80},
  {id: "finalStep", name: "Final Step", field: "finalStep", minWidth: 60},
  {id: "winner", name: "Winner", field: "winner", formatter: cellFound, sortable:true},
  {id: "won", name: "Won", field: "won", formatter: cellFound},
  {id: "finalHand", name: "Final Hand", field: "finalHand", width:140},
  { id: "step", name: "Step", field: "step", width: 80, formatter: cellFound},
  { id: "boardCards", name: "Board Cards", field: "boardCards", formatter: HtmlFormatter, width: 100 },
  //{id: "player", name: "Player", field: "player", formatter: cellFound },
  {id: "player", name: "Player", field: "player", formatter: addLinkToPlayer},
  {id: "holeCards", name: "Hole Cards", field: "holeCards", formatter: HtmlFormatter},
  {id: "action", name: "Action", field: "action", width:100, formatter: cellFound},
  {id: "amount", name: "Amount", field: "amount", formatter: cellFound},
  {id: "potSizeToWin", name: "Pot Size", field: "potSizeToWin"},
  { id: "amountToPot", name: "Amount/Pot", field: "amountToPot", width: 100, formatter: cellFound},
];

var options = {
  editable: true,
  enableAddRow: true,
  enableCellNavigation: true,
  asyncEditorLoading: false
};


var percentCompleteThreshold = 0;
var searchString = "";


function myFilter(item) {   
  if (item.parent != null) {
    var parent = data[item.parent];

    while (parent) {
      if (parent._collapsed || (parent["percentComplete"] < percentCompleteThreshold) || (searchString !== "" && parent["title"].indexOf(searchString) === -1)) {
        return false;
      }

      parent = data[parent.parent];
    }
  }

  return true;
}

$(function () {


  // initialize the model
  dataView = new Slick.Data.DataView({ inlineFilters: true });

  // initialize the grid
  grid = new Slick.Grid("#myGrid", dataView, columns, options);
  grid.init();

  // wire up model events to drive the grid
  dataView.onRowCountChanged.subscribe(function (e, args) {
    grid.updateRowCount();
    grid.render();
  });

  dataView.onRowsChanged.subscribe(function (e, args) {
    grid.invalidateRows(args.rows);
    grid.render();
  });

  dataView.beginUpdate();
  dataView.setItems(data);
  dataView.setFilter(myFilter);
  dataView.endUpdate();

  //grid.scrollRowIntoView(gotoHand()-1);     
    setTimeout(() => grid.scrollRowToTop(gotoHand()), 0);

  grid.onCellChange.subscribe(function (e, args) {
    dataView.updateItem(args.item.id, args.item);
  });

  // expand or collapse grid based on clicking on row icon.
  grid.onClick.subscribe(function (e, args) {
    if ($(e.target).hasClass("toggle")) {
      var item = dataView.getItem(args.row);
      if (item) {
        if (!item._collapsed) {
          item._collapsed = true;
        } else {
          item._collapsed = false;
        }

        dataView.updateItem(item.id, item);
      }
      e.stopImmediatePropagation();
    }
  });

    // create the Resizer plugin
    // you need to provide a DOM element container for the plugin to calculate available space
    resizer = new Slick.Plugins.Resizer({
        container: '.container', // DOM element selector, can be an ID or a class name

        // optionally define some padding and dimensions
        rightPadding: 5,    // defaults to 0
        bottomPadding: 10,  // defaults to 20
        minHeight: 150,     // defaults to 180
        minWidth: 250,      // defaults to 300
    },
    );
    grid.registerPlugin(resizer);

})

// examples here - http://www.mojavelinux.com/articles/javascript_hashes.html
function HashTable(obj)
{
    this.length = 0;
    this.items = {};
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            this.items[p] = obj[p];
            this.length++;
        }
    }

    this.setItem = function(key, value)
    {
        var previous = undefined;
        if (this.hasItem(key)) {
            previous = this.items[key];
        }
        else {
            this.length++;
        }
        this.items[key] = value;
        return previous;
    }

    this.getItem = function(key) {
        return this.hasItem(key) ? this.items[key] : undefined;
    }

    this.hasItem = function(key)
    {
        return this.items.hasOwnProperty(key);
    }
   
    this.removeItem = function(key)
    {
        if (this.hasItem(key)) {
            previous = this.items[key];
            this.length--;
            delete this.items[key];
            return previous;
        }
        else {
            return undefined;
        }
    }

    this.keys = function()
    {
        var keys = [];
        for (var k in this.items) {
            if (this.hasItem(k)) {
                keys.push(k);
            }
        }
        return keys;
    }

    this.values = function()
    {
        var values = [];
        for (var k in this.items) {
            if (this.hasItem(k)) {
                values.push(this.items[k]);
            }
        }
        return values;
    }

    this.each = function(fn) {
        for (var k in this.items) {
            if (this.hasItem(k)) {
                fn(k, this.items[k]);
            }
        }
    }

    this.clear = function()
    {
        this.items = {};
        this.length = 0;
    }
}
