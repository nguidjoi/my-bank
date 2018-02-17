    'use strict';

    localStorageConfig.$inject = ['$localStorageProvider', '$sessionStorageProvider'];

    export default function localStorageConfig($localStorageProvider, $sessionStorageProvider) {
        $localStorageProvider.setKeyPrefix('mbank-');
        $sessionStorageProvider.setKeyPrefix('mbank-');
    }