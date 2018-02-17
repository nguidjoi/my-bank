'use strict';

import allcss from '../index.js';
import angular from 'angular';
import { name as ngstorage } from 'ngstorage';
import angular_ui_router from 'angular-ui-router';
import { name as ngCacheBuster } from 'angular-cache-buster';
import account from './account'
import authentication from './authentication';
import bankInformation from './bankInformation';
import homes from './home';
import personnalInformation from './personnalInformation';
//import { name as httpConfig } from './config/http-config';
//import { name as localStorageConfig } from './config/local-storage-config'
//import { name as authInterceptor } from './interceptor/auth-interceptor';
//import { name as autExpiredInterceptor } from './interceptor/auth-expired-interceptor';
//import { name as errorHandlerInterceptor } from './interceptor/error-handler-interceptor';
//import { name as notificationInterceptor } from './interceptor/notofication-interceptor';


angular
    .module('ae', [
        // external libs
        ngstorage,
        angular_ui_router,
        ngCacheBuster,
        // internal module
        account.name,
        authentication.name,
        homes.name,
        personnalInformation.name,
        bankInformation.name
    ])
    .config(require('./app/routes'));

angular
    .element(document)
    .ready(function() {
        angular.bootstrap(document, ['ae']);
    });