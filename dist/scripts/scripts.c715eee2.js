"use strict";angular.module("devWorkApp",["ngCookies","ngResource","ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("devWorkApp").controller("MainCtrl",["$scope","data",function(a,b){b.products(function(b){b&&(a.visibleData=b)}),a.visibleData=[],a.paginationView="./views/paginationView.html",a.currentPage=0,a.pageSize=7,a.next=function(){return a.currentPage>=a.visibleData.length/a.pageSize-1?!1:void(a.currentPage+=1)},a.prev=function(){return 0===a.currentPage?!1:void(a.currentPage-=1)},a.numberOfPages=function(){return Math.ceil(a.visibleData.length/a.pageSize)},a.getNumber=function(a){return new Array(a())},a.onCLickPagedNumber=function(b){a.currentPage=b}}]),angular.module("devWorkApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("devWorkApp").controller("MainParentCtrl",["$scope",function(a){a.moduleName="MainParentCtrl"}]),angular.module("devWorkApp").filter("pageFilter",function(){return function(a,b){return b=+b,a.slice(b)}}),angular.module("devWorkApp").service("data",["$http",function(a){this.products=function(b){a({method:"GET",url:"./json/products.json"}).success(function(a,c,d,e){b(a)}).error(function(a,c,d,e){b(!1)})}}]);var tour={id:"hello-hopscotch",steps:[{title:"My Header",content:"Header of the page.",target:"header",placement:"left"},{title:"Content Heading",content:"Here is where I put my content.",target:"heading",placement:"bottom",xOffset:"center"},{title:"Table Content",content:"Content Area.",target:"table-content",placement:"left",yOffset:"center",arrowOffset:"center"},{title:"Page Index",content:"Indexing of page happen here.",target:"page-Index",placement:"left",yOffset:"center",arrowOffset:"center"}],showPrevButton:!0},addClickListener=function(a,b){a.addEventListener?a.addEventListener("click",b,!1):a.attachEvent("onclick",b)},init=function(){var a="startTourBtn",b="startTourCallout",c=hopscotch.getCalloutManager();setTimeout(function(){c.createCallout({id:b,target:a,placement:"right",title:"Take an example tour",content:"Start by taking an example tour to see Hopscotch in action by : <br/><img src=./images/yeoman.png />",yOffset:-25,arrowOffset:20,width:240,onClose:d})},100),addClickListener(document.getElementById(a),function(){hopscotch.isActive||(c.removeAllCallouts(),hopscotch.startTour(tour))});var d=function(){document.getElementById("startTourBtn").disabled=!0}};init();