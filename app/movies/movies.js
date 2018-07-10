angular.module('myApp.movies', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/movies', {
    templateUrl: 'movies/movies.html',
    controller: 'MoviesCtrl'
  });
}])

.controller('MoviesCtrl', ['$scope', function($scope) {
  
  $scope.num = -1;

  $scope.changeShow = function(index){
    if ($scope.num == index){
      $scope.num = -1;
    }
    else{
      $scope.num = index;
    }    
  };

  $scope.movies = [
    {
      idMovie: 1,
      title: "Um Sonho de Liberdade",
      releaseYear: "1994",
      length: "200 mim",
      rating: "9.4" 
    },
    {
      idMovie: 2,
      title: "O Poderoso Chefão",
      releaseYear: "1973",
      length: "220 mim",
      rating: "9.3" 
    },
    {
      idMovie: 2,
      title: "O Poderoso Chefão",
      releaseYear: "1973",
      length: "220 mim",
      rating: "9.3" 
    },
    {
      idMovie: 2,
      title: "O Poderoso Chefão",
      releaseYear: "1973",
      length: "220 mim",
      rating: "9.3" 
    },
    {
      idMovie: 2,
      title: "O Poderoso Chefão",
      releaseYear: "1973",
      length: "220 mim",
      rating: "9.3" 
    },
    {
      idMovie: 2,
      title: "O Poderoso Chefão",
      releaseYear: "1973",
      length: "220 mim",
      rating: "9.3" 
    },
    {
      idMovie: 2,
      title: "O Poderoso Chefão",
      releaseYear: "1973",
      length: "220 mim",
      rating: "9.3" 
    },
    {
      idMovie: 2,
      title: "O Poderoso Chefão",
      releaseYear: "1973",
      length: "220 mim",
      rating: "9.3" 
    },
    {
      idMovie: 2,
      title: "O Poderoso Chefão",
      releaseYear: "1973",
      length: "220 mim",
      rating: "9.3" 
    },
    {
      idMovie: 2,
      title: "O Poderoso Chefão",
      releaseYear: "1973",
      length: "220 mim",
      rating: "9.3" 
    },
    {
      idMovie: 2,
      title: "O Poderoso Chefão",
      releaseYear: "1973",
      length: "220 mim",
      rating: "9.3" 
    }
  ]
}]);

/*angular.module('myApp.modalActor', ['ngRoute'])

.controller('modalActorCtrl', ['$scope', function($scope) {
  console.log("modalActor");
  
}]);*/