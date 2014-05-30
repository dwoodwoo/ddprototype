// var filterApp = angular.module('filterApp', ['ui.bootstrap', 'angles', 'ngAnimate', 'duScroll', 'firebase'])

app.controller('searchController', function($scope, $document, searchService, $timeout) {

        // DONE:  Link from filtering search form to specific candidate result page
        $scope.init = function(){
          $scope.politicalentities = searchService.politicalentities;
        };

        // runs once per controller instantiation
        $scope.init();

        // $scope.onKeyPress = function($event) {
        //     console.log($event.charCode);
        //     console.log($event.altKey);
        //     console.log($event.ctrlKey);
        //     };



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
        })
});