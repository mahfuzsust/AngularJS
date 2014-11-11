angular.module('angularTest',[])
         .controller('mainController', function( $scope ) {
      $scope.stories = [
        {title:'Story 0', description:'This is a text'},
        {title:'Story 1', description:'No Portion'},
        {title:'Story 2', description:'Click Me'},
        {title:'Story 3', description:'Are you sure?'},
        {title:'Story 4', description:'After your mark'},
        {title:'Story 5', description:'Propagation Delay'}
      ];

      $scope.friends = [
  		{name:'John', age:25, gender:'boy'},
  		{name:'Jessie', age:30, gender:'girl'},
  		{name:'Johanna', age:28, gender:'girl'},
  		{name:'Joy', age:15, gender:'girl'},
  		{name:'Mary', age:28, gender:'girl'},
  		{name:'Peter', age:95, gender:'boy'},
  		{name:'Sebastian', age:50, gender:'boy'},
  		{name:'Erika', age:27, gender:'girl'},
  		{name:'Patrick', age:40, gender:'boy'},
  		{name:'Samantha', age:60, gender:'girl'}
	  ];
  });