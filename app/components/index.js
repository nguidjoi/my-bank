'use strict';

import allcss from '../index.js';
import angular from 'angular';
import { name as ngstorage } from 'ngstorage';
import angular_ui_router from 'angular-ui-router';
import ngCacheBuster from "angular-cache-buster";
import account from './account'
import authentication from './authentication';
import bankInformation from './bankInformation';
import homes from './home';
import personnalInformation from './personnalInformation';
import httpConfig from './config/http-config';
import localStorageConfig from './config/local-storage-config'
import authInterceptor from './interceptor/auth-interceptor';
import autExpiredInterceptor from './interceptor/auth-expired-interceptor';
import errorHandlerInterceptor from './interceptor/error-handler-interceptor';
import notificationInterceptor from './interceptor/notofication-interceptor';


angular
    .module('ae', [
        // external libs
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