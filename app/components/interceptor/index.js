import authInterceptor from './auth-interceptor';
import autExpiredInterceptor from './auth-expired-interceptor';
import errorHandlerInterceptor from './error-handler-interceptor';
import notificationInterceptor from './notofication-interceptor';

export default angular
    .module('ae.interceptor')
    .factory('authInterceptor', authInterceptor)
    .factory('autExpiredInterceptor', autExpiredInterceptor)
    .factory('errorHandlerInterceptor', errorHandlerInterceptor)
    .factory('notificationInterceptor', notificationInterceptor);