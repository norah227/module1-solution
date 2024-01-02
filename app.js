(function(){
    'use strict';
    
        angular.module('LunchCheck', [])
    
        .controller('LunchCheckController', function($scope){
    
            $scope.inputdata = "";
            $scope.message = "";
            $scope.checkdata = function(){
                var splitData = $scope.inputdata.split(",");
                console.log(splitData.length);
                if(splitData.length > 3)
                {
                    document.getElementById("resultData").style.color = "red";
                    $scope.message = "Too much!";
                }
                else if($scope.inputdata == "")
                {
                    document.getElementById("resultData").style.color = "red";
                    $scope.message = "Please enter data first";
                }
                else{
                    document.getElementById("resultData").style.color = "green";
                    $scope.message = "Enjoy";
                }
            }
        });
    })();
