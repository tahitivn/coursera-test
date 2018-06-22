(function () {
'user restrict';

angular.module('NameCalculator',[])

.controller('NameCalculatorController',function ($scope) {
  $scope.name ="";
  $scope.totalValue = 0;

  $scope.CalculateDisplay = function () {
    var calculate = CalculateName($scope.name); //CalculateName($scope.name);
    $scope.totalValue = calculate;
  };

  function CalculateName(string) {
    var stringcalculate = 0;
    for (var i = 0; i < string.length; i++)
    {
     stringcalculate = stringcalculate + string.CharCodeAt(i);
    }
     return stringcalculate;
   }

});

})();
