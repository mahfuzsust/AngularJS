angular.module('angularTest',[])
  .controller('mainController', function( $scope ) {
      var increasingId = 11;

      $scope.friends = [
  		  {name:'John', id: 1},
  		  {name:'Jessie', id: 2},
  		  {name:'Johanna', id: 3},
  		  {name:'Joy', id: 4},
  		  {name:'Mary', id: 5},
  		  {name:'Peter', id: 6},
  		  {name:'Sebastian', id: 7},
  		  {name:'Erika', id: 8},
  		  {name:'Patrick', id: 9},
  		  {name:'Samantha', id: 10}
	   ];
    $scope.addFriend=function(){
      $scope.friends.push({name: $scope.newName, id: increasingId++});
    };
    $scope.removeFriend=function(friend){
      var deleteIdIndex = $scope.friends.indexOf(friend);
      $scope.friends.splice(deleteIdIndex, 1);
    };



});