'use strict';

import allcss from '../index.js';
import angular from 'angular';
import { name as ngstorage } from 'ngstorage';
import angular_ui_router from 'angular-ui-router';
import { name as ngCacheBuster } from 'angular-cache-buster';
import account from './account';
import { account, register, activate } from './account/account-service';
import { password, passwordResetFinish, passwordResetInit } from './account/password';
import { principal } from './account/principal';
import authentication from './authentication';
import bankInformation from './bankInformation';
import homes from './home';
import personnalInformation from './personnalInformation';
import { httpConfig } from './config/http-config';
import { localStorageConfig } from './config/local-storage-config'
import { authInterceptor } from './interceptor/auth-interceptor';
import { authExpiredInterceptor } from './interceptor/auth-expired-interceptor';
import { errorHandlerInterceptor } from './interceptor/error-handler-interceptor';
import { notificationInterceptor } from './interceptor/notofication-interceptor';


angular
    .module('ae', [
        // external libs
        ngstorage,
        angular_ui_router,

        // internal module
        account.name,
        authentication.name,
        homes.name,
        personnalInformation.name,
        bankInformation.name
    ])
    .factory('account', account)
    .factory('register', register)
    .factory('activate', activate)
    .factory('password', password)
    .factory('passwordResetFinish', passwordResetFinish)
    .factory('passwordResetInit', passwordResetInit)
    .factory('principal', principal)
    .factory('authInterceptor', authInterceptor)
    .factory('authExpiredInterceptor', authExpiredInterceptor)
    .factory('errorHandlerInterceptor', errorHandlerInterceptor)
    .factory('notificationInterceptor', notificationInterceptor)
    .config(require('./app/routes'))
    .config(localStorageConfig)
    .config(httpConfig);

angular
    .element(document)
    .ready(function() {
        angular.bootstrap(document, ['ae']);
    });