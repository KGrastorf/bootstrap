angular.module("mtnApp")
    .controller("mainCtrl", function($scope, mainServ){
        $scope.name = mainServ.name;


    });
