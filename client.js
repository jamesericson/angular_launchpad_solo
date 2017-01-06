console.log('JS');
var myApp = angular.module( 'myApp', [] );

myApp.controller ( 'LaunchpadController', [ '$scope' , function( $scope ){
  console.log('NG');

  $scope.favoriteMovies = [];

  $scope.getMovieName = function(){
    console.log('in getMovieName, with: ', $scope.movieName , $scope.movieActor );
    var movie = {
      title: $scope.movieName,
      actor: $scope.movieActor
    };

    $scope.favoriteMovies.push( movie );
    console.log('favorite movies: ', $scope.favoriteMovies);
    $scope.movieName = '';
    $scope.movieActor = '';
  }// end getMovieName()
}]); // end LaunchpadController controller
