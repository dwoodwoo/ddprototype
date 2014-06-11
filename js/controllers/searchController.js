// var filterApp = angular.module('filterApp', ['ui.bootstrap', 'angles', 'ngAnimate', 'duScroll', 'firebase'])

app.controller('searchController', function($scope, $document, searchService, transactionsService, $timeout, $filter) {
        window.scope = $scope;

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
            console.log('$scope.foo = ' + $scope.foo);


            // number key pressed?
            var myNum = $event.charCode - 48  // returns 0-9
            if (myNum >= 0 && myNum <= 9 && $event.ctrlKey == true) {
                $scope.testgetbyentity = transactionsService.politicaltransactionsByEntity(myNum);
                $scope.selection = "transactions";
            }

            // other control

            // ctrl-e for entities
            if ($event.charCode == 5 && $event.ctrlKey == true) {
                $scope.selection = "entities";
            }

            if ($event.charCode == 20 && $event.ctrlKey == true) {
                $scope.selection = "transactions";
            }

        };


            $scope.showTransactions = function (id) {
                console.log('id = ' + id);
                console.log('$scope.foo = ' + $scope.foo);
                $scope.selection = "transactions";




                $scope.testgetbyentity = transactionsService.politicaltransactionsByEntity(id);
            }

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