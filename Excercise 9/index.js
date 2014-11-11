var demoApp = angular.module('angularTest',[]);


demoApp.service('dataService', function($http,$q) {

  //delete $http.defaults.headers.common['X-Requested-With'];
  this.getData = function() {
     deferred = $q.defer();
     $http({
         method: 'GET',
         url: 'http://football2014.herokuapp.com/api/recentMatches/'  + '?callback=JSON_CALLBACK',
         //params: 'limit=10, sort_by=created:desc',
         headers: {'Authorization': 'Token token=xxxxYYYYZzzz'}
     }).success(function(data){
         // With the data succesfully returned, we can resolve promise and we can access it in controller
         deferred.resolve();
     }).error(function(){
          alert("error");
          //let the function caller know the error
          deferred.reject(error);
     });
     return deferred.promise;
  }
});



var controllers = {};

controllers.myBusStopCtrl = function($scope, $http) {
  $scope.realTimeData;

    var url = "http://reis.trafikanten.no/reisrest/realtime/getrealtimedata/3010435" + "?callback=JSON_CALLBACK";

    $http.jsonp(url)
        .success(function(data){
            $scope.realTimeData = data;
        });
};

demoApp.controller(controllers);


demoApp.filter('fromNow', function() {
        return function(dateString) {
            //moment.lang('nb'); 
            return moment(dateString).fromNow();
        };
 }) 
