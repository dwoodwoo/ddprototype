// var filterApp = angular.module('filterApp', ['ui.bootstrap', 'angles', 'ngAnimate', 'duScroll', 'firebase'])

app.controller('searchController', function($scope, $document, searchService) {

        // DONE:  Link from filtering search form to specific candidate result page
        $scope.init = function(){
          $scope.politicalentities = searchService.politicalentities;
        };

        // runs once per controller instantiation
        $scope.init();

        $scope.onKeyPress = function($event) {
            console.log($event.charCode);
            console.log($event.altKey);
            console.log($event.ctrlKey);
            };
});