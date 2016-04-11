'use strict';

app.config(function ($stateProvider, $urlRouterProvider){
  
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('persons', {
    url: '/',
    templateUrl: './views/persons.html'
  })
  .state('graph', {
    url: '/graph',
    templateUrl: './views/graph.html'
  })
});

