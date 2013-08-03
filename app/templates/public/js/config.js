//Setting up route
window.app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/articles', { templateUrl: 'views/articles/list.html' }).
	when('/articles/create', { templateUrl: 'views/articles/create.html' }).
	when('/articles/:articleId/edit', { templateUrl: 'views/articles/edit.html' }).
	when('/articles/:articleId', { templateUrl: 'views/articles/view.html' }).
	when('/', { templateUrl: 'views/index.html' }).
	otherwise({redirectTo: '/'});
}]);

//Removing tomcat unspported headers
window.app.config(['$httpProvider', function($httpProvider, Configuration) {
    //delete $httpProvider.defaults.headers.common["X-Requested-With"];
}]);

//Setting HTML5 Location Mode
window.app.config(['$locationProvider', function($locationProvider) {
    //$locationProvider.html5Mode(true);
    $locationProvider.hashPrefix("!");
}]);

//Setting i18next
i18n.init({
	lng: 'en',
	detectLngQS: 'locale',
	cookieName: 'locale',
	supportedLngs: ['en'],
	fallbackLng: 'en',
	resGetPath: "locales/resources.json?lng=__lng__&ns=__ns__",
	dynamicLoad: true,
});

//Setting i18next with jQuery
$.i18n.init({
	lng: 'en',
	detectLngQS: 'locale',
	cookieName: 'locale',
	supportedLngs: ['en'],
	fallbackLng: 'en',
	resGetPath: "locales/resources.json?lng=__lng__&ns=__ns__",
	dynamicLoad: true,
});
