/**
 * home page display - a listing of most recent events
 */
(function() {
"use strict"
  
angular.module('events')
.config(routes)
.controller("HomeCtrl", HomeCtrl)


function HomeCtrl(
  Event
) {
  
  var self = this;

	// TODO retrieve events 

}

function routes($routeProvider) {

  $routeProvider
    .when("/", {
      templateUrl: "/src/home/home.html",
      controller: "HomeCtrl",
      controllerAs: "ctrl",
    })
  
}

})();
