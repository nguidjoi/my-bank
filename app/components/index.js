'use strict';

import allcss from '../index.js';
import angular from 'angular';
import { name as ngstorage } from 'ngstorage';
import ngResource from 'angular-resource';
import angular_ui_router from 'angular-ui-router';
import angular_dynamic_locale from 'angular-dynamic-locale';
import { name as ngCacheBuster } from 'angular-cache-buster';
import angulartranslate from 'angular-translate';
import ngCookies from 'angular-cookies';
import angularTranslateInterpolationMessageformat from 'angular-translate-interpolation-messageformat';
import angularTranslateLoaderPartial from 'angular-translate-loader-partial';
import accounts from './account';
import { account, register, activate } from './account/account-service';
import { password, passwordResetFinish, passwordResetInit } from './account/password';
import { principal } from './account/principal';
import authentication from './authentication';
import bankInformation from './bankInformation';
import {languageController} from './language/language-controller';
import homes from './home';
import personnalInformation from './personnalInformation';
import { httpConfig } from './config/http-config';
import { localStorageConfig } from './config/local-storage-config';
import { translationConfig } from './config/translation-config';
import {translationStorageProvider} from './config/translation-storage-provider';
import { authInterceptor } from './interceptor/auth-interceptor';
import { authExpiredInterceptor } from './interceptor/auth-expired-interceptor';
import { errorHandlerInterceptor } from './interceptor/error-handler-interceptor';
import { notificationInterceptor } from './interceptor/notofication-interceptor';
import {translationHandler} from './handlers/translation-handler';
import {stateHandler} from './handlers/state-handler';
import {languageService} from './language/language-service';
import {findLanguageFromKey, findLanguageRtlFromKey } from './language/language-filter';

angular
    .module('ae', [
        // external libs
        ngCookies,
        ngstorage,
        angular_ui_router,
        ngResource,
        angularTranslateInterpolationMessageformat,
        angularTranslateLoaderPartial,
        
        'tmh.dynamicLocale',
        'pascalprecht.translate',
        // internal module
        accounts.name,
        authentication.name,
        homes.name,
        personnalInformation.name,
        bankInformation.name
    ])
    .controller('languageController',languageController)
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
    .factory('languageService',languageService)
    .factory('translationStorageProvider', translationStorageProvider)
    .factory('translationHandler',translationHandler)
    .factory('stateHandler', stateHandler)
    .filter(findLanguageFromKey)
    .filter(findLanguageRtlFromKey)
    .config(require('./app/routes'))
    .config(translationConfig)
    .config(localStorageConfig)
    .config(httpConfig)
    .constant('LANGUAGES', ['fr'])
    .constant('VERSION', "0.0.1-SNAPSHOT")
    .constant('DEBUG_INFO_ENABLED', true)
    .constant('BUILD_TIMESTAMP', "")
    .run(run);

     run.$inject = ['stateHandler', 'translationHandler'];

    function run(stateHandler, translationHandler) {
        stateHandler.initialize();
        translationHandler.initialize();
    }

angular
    .element(document)
    .ready(function() {
        angular.bootstrap(document, ['ae']);
        run();
    }).;