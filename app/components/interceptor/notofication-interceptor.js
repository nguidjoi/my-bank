    'use strict';

    notificationInterceptor.$inject = ['$q'];

    export function notificationInterceptor($q) {
        var service = {
            response: response
        };

        return service;

        function response(response) {
            var headers = Object.keys(response.headers()).filter(function(header) {
                return header.indexOf('app-alert', header.length - 'app-alert'.length) !== -1 || header.indexOf('app-params', header.length - 'app-params'.length) !== -1;
            }).sort();
            var alertKey = response.headers(headers[0]);
            if (angular.isString(alertKey)) {
                console.log("Alert success")
            }
            return response;
        }
    }