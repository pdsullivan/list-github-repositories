(function () {

    angular.module('app', ['ngRoute']);

}());

(function (app) {
    var UserCtrl = function ($scope, linksService, $timeout) {
        var onError = function () {
            //alert('error!!');
        };
        var onLinks = function (response) {
            //$scope.user = response.data;
        };

        var init = function () {
            //$scope.user = linksService.getUser().then(onLinks, onError);
            $scope.user = "{
                          'login': 'pdsullivan',
                          'id': 2042218,
                          'avatar_url': 'https://avatars.githubusercontent.com/u/2042218?',
                          'gravatar_id': '6c31ab5c683dcbc45085e6716d5ff176',
                          'url': 'https://api.github.com/users/pdsullivan',
                          'html_url': 'https://github.com/pdsullivan',
                          'followers_url': 'https://api.github.com/users/pdsullivan/followers',
                          'following_url': 'https://api.github.com/users/pdsullivan/following{/other_user}',
                          'gists_url': 'https://api.github.com/users/pdsullivan/gists{/gist_id}',
                          'starred_url': 'https://api.github.com/users/pdsullivan/starred{/owner}{/repo}',
                          'subscriptions_url': 'https://api.github.com/users/pdsullivan/subscriptions',
                          'organizations_url': 'https://api.github.com/users/pdsullivan/orgs',
                          'repos_url': 'https://api.github.com/users/pdsullivan/repos',
                          'events_url': 'https://api.github.com/users/pdsullivan/events{/privacy}',
                          'received_events_url': 'https://api.github.com/users/pdsullivan/received_events',
                          'type': 'User',
                          'site_admin': false,
                          'name': 'Patrick Sullivan',
                          'company': '',
                          'blog': 'pdsullivan.com',
                          'location': 'Birmingham, Alabama',
                          'email': 'patdsully88@gmail.com',
                          'hireable': true,
                          'bio': null,
                          'public_repos': 6,
                          'public_gists': 0,
                          'followers': 1,
                          'following': 2,
                          'created_at': '2012-07-25T18:55:33Z',
                          'updated_at': '2014-05-13T11:57:23Z'
                        }";
        };
        init();
    };
    app.controller('UserCtrl', ['$scope', 'linksService', '$timeout', UserCtrl]);
}(angular.module('app')));


(function (app) {
    var baseUrl = ' 'https://api.github.com'';

    var linksService = function ($http) {
        var linksFactory = {};
        linksFactory.getUser = function () {
            return $http.get(baseUrl + '/users/pdsullivan');    
            
        };
        return linksFactory;
    };
    app.factory('linksService', ['$http', linksService]);
}(angular.module('app')));

/*
return '{
                          'login': 'pdsullivan',
                          'id': 2042218,
                          'avatar_url': 'https://avatars.githubusercontent.com/u/2042218?',
                          'gravatar_id': '6c31ab5c683dcbc45085e6716d5ff176',
                          'url': 'https://api.github.com/users/pdsullivan',
                          'html_url': 'https://github.com/pdsullivan',
                          'followers_url': 'https://api.github.com/users/pdsullivan/followers',
                          'following_url': 'https://api.github.com/users/pdsullivan/following{/other_user}',
                          'gists_url': 'https://api.github.com/users/pdsullivan/gists{/gist_id}',
                          'starred_url': 'https://api.github.com/users/pdsullivan/starred{/owner}{/repo}',
                          'subscriptions_url': 'https://api.github.com/users/pdsullivan/subscriptions',
                          'organizations_url': 'https://api.github.com/users/pdsullivan/orgs',
                          'repos_url': 'https://api.github.com/users/pdsullivan/repos',
                          'events_url': 'https://api.github.com/users/pdsullivan/events{/privacy}',
                          'received_events_url': 'https://api.github.com/users/pdsullivan/received_events',
                          'type': 'User',
                          'site_admin': false,
                          'name': 'Patrick Sullivan',
                          'company': '',
                          'blog': 'pdsullivan.com',
                          'location': 'Birmingham, Alabama',
                          'email': 'patdsully88@gmail.com',
                          'hireable': true,
                          'bio': null,
                          'public_repos': 6,
                          'public_gists': 0,
                          'followers': 1,
                          'following': 2,
                          'created_at': '2012-07-25T18:55:33Z',
                          'updated_at': '2014-05-13T11:57:23Z'
                        }';
*/