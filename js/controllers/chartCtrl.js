'use strict'

app.config(['ChartJsProvider', function (ChartJsProvider) {
  
  ChartJsProvider.setOptions({
    colours: ['#37b878', '#949FB1', '#4D5360'],
    responsive: false
  });
  
  ChartJsProvider.setOptions('bar', {
    datasetFill: false
  });
  
}]);

app.controller("chartCtrl", function ($scope) {
  
  var getAges = function (array) {
    return array.map(x => x.age);
  }
  
  var transformToNumber = function (array) {
    return array.map(x => Number(x));
  }
  
  var filterNumbers = function(array) {
    return array.filter(x => !isNaN(x));
  }
  
  var ages = filterNumbers(transformToNumber(getAges(persons)));
  
  var createChartArray = function (array) {
    var chartArray = Array(11).fill(0);
    array.forEach(function(item) {
      if (item < 20) {
        chartArray[0] += 1;
      } else if (item > 64) {
        chartArray[10] += 1;
      } else {
        chartArray[Math.floor(item/5)-3] += 1;
      }
    });
    return chartArray;
  }
  
  var chartArrayOne = createChartArray(ages);
  
  $scope.labels = ['-19', '20-24', '25-29', '30-34', '35-39', '40-44', '45-49','50-54', '55-59', '60-64', '65-'];
  
  $scope.series = ['Persons ages'];

  $scope.data = [chartArrayOne];
  
  $scope.legend = true;

  $scope.onClick = function (points, evt) {
    points, evt;
  };
});
