    'use strict';

    localStorageConfig.$inject = ['$localStorageProvider', '$sessionStorageProvider'];

    export function localStorageConfig($localStorageProvider, $sessionStorageProvider) {
        $localStorageProvider.setKeyPrefix('mbank-');
        $sessionStorageProvider.setKeyPrefix('mbank-');
    }