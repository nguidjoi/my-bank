    'use strict';

    localStorageConfig.$inject = ['$localStorageProvider', '$sessionStorageProvider'];

    export default function localStorageConfig($localStorageProvider, $sessionStorageProvider) {
        $localStorageProvider.setKeyPrefix('myBank-');
        $sessionStorageProvider.setKeyPrefix('myBank-');
    }