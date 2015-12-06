  var app = angular.module('app',['app.state', 'ngRoute', 'ngResource']);

  app.config(function($routeProvider) {

      $routeProvider.otherwise({redirectTo: '/stateList'});
  });



///////////////////////////////////////////////////

/**
 *
 *
 */
function createFilters (element, dataTable) {
  var filtersRow = element.find("thead > tr.filters");

  dataTable.columns().every( function (idx) {
    var column = this;
    filtersRow.find("input").eq(idx).on('keyup change', function () {
      column.search( this.value ).draw();
    });
  });
}

/**
 *
 *
 */
function bindActions(element, dataTable, config) {
  var actions = config.actions;
  
  //bind click events
  $(element).on("click", "[data-table-click-action]", function() {
    var _this = $(this),
        actionId = _this.attr("data-table-action-id"),
        id = _this.attr("data-table-id");

    actions[actionId].onclick(id);
  });
  
}

/**
 *
 *
 */
function renderAction(action, idx, id) {
  var html = '<a ';
  //create href attribute
  if(action.href) {
    html += ' href="' + action.href.replace(":id", id) + '"';
  }
  //create events attributes
  if(action.onclick) {
    html += ' data-table-click-action ';
  }
  html += ' data-table-action-id="' + idx + '"';
  html += ' data-table-id="' + id + '"';
  //create class attribute
  html += ' class="' + action.className + '"';
  html += '>' + action.title + '</a>';
  return html;
}

/**
 *
 *
 */
function createActionsColumn(config) {
  
  if(!config.actions || !config.actions.length) {
    return {};
  }

  var column = {},
      actions = config.actions,
      lastRow = config.data[0].length - 1;

  //create render function
  column.render = function ( data, type, row ) {
    var html = "";

    actions.forEach(function(action, idx){
      html += renderAction(action, idx, row[lastRow]);
    });
    return html;
  };
  //target will be the last row
  column.targets = lastRow;

  return column;
}
/**
 *
 *
 */
function renderDataTable(element, config) {
  var columnDefs = [];
    columnDefs.push(createActionsColumn(config));

  var dataTable = $(element).DataTable({
    data: config.data,
    columnDefs: columnDefs
  });

  createFilters(element, dataTable, config);
  bindActions(element, dataTable, config);

  return dataTable;
}

/**
 *
 *
 */
app.directive('ngDataTable', function() {
  return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var dataTable;
        //watch for change on dataTable object
        scope.$watch('dataTable', function(config) {
          if(config && config.data && config.data.length) {
            //render DataTable
            if(!dataTable) {
              dataTable = renderDataTable(element, config);
            } else {
              //update data
              dataTable.rows().remove();
              config.data.forEach(function(item){
                dataTable.row.add(item);
              });
              dataTable.draw();
            }
          }
        });
      }
  };
});