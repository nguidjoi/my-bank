account.$inject = ['$resource'];
register.$inject = ['$resource'];
activate.$inject = ['$resource'];
export function account($resource) {
    console.log('account get');
    var service = $resource('http://localhost:8080/api/account', {}, {
        'get': {
            method: 'GET',
            params: {},
            isArray: false,
            interceptor: {
                response: function(response) {
                    return response;
                }
            }
        }
    });

    return service;
}

export function register($resource) {
    return $resource('http://localhost:8080/api/register', {}, {});
}

export function activate($resource) {
    var service = $resource('http://localhost:8080/api/activate', {}, {
        'get': { method: 'GET', params: {}, isArray: false }
    });

    return service;
}