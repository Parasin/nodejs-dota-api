dotaApp.controller('homeController', ['$scope', '$resource', '$location', 'matchService', function($scope, $resource, $location, matchService) {
    $scope.city = matchService.city;
    
    $scope.$watch('city', function() {
        matchService.city = $scope.city;
    });
    
    $scope.submit = function() {
        $location.path('/forecast');
    };
}]);

dotaApp.controller('matchController', ['$scope', '$routeParams', 'matchDetailsService', 'matchService', function($scope, $routeParams, matchDetailsService, matchService) {
    $scope.matchId = matchService.matchId;
    $scope.days = $routeParams.days || '2';
    $scope.matchResult = ' ';
    matchDetailsService.getMatch($scope.matchId).$promise.then(function(match) {
    	$scope.matchResult = _.pick(match, 'players');
    }, function(err) {
        console.error(err);
    });
   // $scope.matchResult = $scope.matchResult[1];
    //console.log(JSON.stringify(_.pick($scope.matchResult, 'players')));
    console.log($scope.matchResult);
}]);