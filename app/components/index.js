'use strict';

import allcss from '../index.js';
import angular from 'angular';
import account from './account'
import authentication from './authentication';
import bankInformation from './bankInformation';
import homes from './home';
import personnalInformation from './personnalInformation';
import config from './config';
import interceptor from './interceptor';
import angular_ui_router from 'angular-ui-router';
import ngCookies from 'angular-cookies';

angular
    .module('ae', [
        // external libs
        angular_ui_router,
        ngCookies,
        config.name,
        interceptor.name,
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