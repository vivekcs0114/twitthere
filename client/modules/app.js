/**
 * Created by VIVEK on 3/5/2017.
 */

var app = angular.module('twitthere',['home','about','ui.router']);
app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider.state('home', {
        url        : '/home',
        templateUrl: '../../client/views/home.html'
    }).state('about', {
        url        : '/about',
        templateUrl: '../../client/views/about.html'
    });
});