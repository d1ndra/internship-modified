(function(){
    
    var userRepoService = function($http){
      
      var getUsers = function(username){
            return $http.get('/index/content')
                        .then(function(response){
                           return response.data; 
                        });
      };
  
      return {
          get: getUsers
      };
        
    };
    
    var module = angular.module("postExample");
    module.factory("userRepoService", userRepoService);
    
}());