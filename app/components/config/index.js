'use strict';
import httpConfig from './http-config';
import localStorageConfig from './local-storage-config';
export default angular
    .module('ae.config')
    .config(httpConfig)
    .config(localStorageConfig);