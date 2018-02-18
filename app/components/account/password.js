'use strict';

password.$inject = ['$resource'];

export function password($resource) {
    var service = $resource('http:localhost:8080/api/account/change-password', {}, {});

    return service;
}

passwordResetFinish.$inject = ['$resource'];

export function passwordResetFinish($resource) {
    var service = $resource('http:localhost:8080/api/account/reset-password/finish', {}, {});

    return service;
}

passwordResetInit.$inject = ['$resource'];

export function passwordResetInit($resource) {
    var service = $resource('http:localhost:8080/api/account/reset-password/init', {}, {});

    return service;
}