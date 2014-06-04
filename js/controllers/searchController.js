// var filterApp = angular.module('filterApp', ['ui.bootstrap', 'angles', 'ngAnimate', 'duScroll', 'firebase'])

app.controller('searchController', function($scope, $document, searchService, transactionsService, $timeout, $filter) {

        // DONE:  Link from filtering search form to specific candidate result page
        $scope.init = function(){
          $scope.politicalentities = searchService.politicalentities;
          $scope.politicaltransactions = transactionsService.politicaltransactions;
          $scope.viewdiv = ['entities', 'transactions'];
          $scope.selection = $scope.viewdiv[0];
        };

        // runs once per controller instantiation
        $scope.init();

        $scope.onKeyPress = function($event) {
            console.log($event.charCode);
            console.log($event.altKey);
            console.log($event.ctrlKey);

            if ($event.charCode == 49 && $event.ctrlKey == true) {
                console.log("control 1!!!");
                $scope.selection = "entities";
                }
            if ($event.charCode == 50 && $event.ctrlKey == true) {
                console.log("control 2!!!");
                $scope.selection = "transactions";
                }
            };

            $scope.testcall = transactionsService.politicaltransactionsByEntity();

//debounce http://stackoverflow.com/questions/15304562/how-to-put-a-delay-on-angularjs-instant-search
        $scope.filterText = '';

        // Instantiate these variables outside the watch
        var tempFilterText = '',
            filterTextTimeout;
        $scope.$watch('search', function (val) {
            if (filterTextTimeout) $timeout.cancel(filterTextTimeout);

            tempFilterText = val;
            filterTextTimeout = $timeout(function() {
                $scope.filterText = tempFilterText;
            }, 2000); // delay 250 ms
        });




});