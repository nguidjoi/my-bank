	'use strict';

    var languages = {
        'fr': { name: 'Français' }
    };

    export function findLanguageFromKey() {
        return findLanguageFromKeyFilter;

        function findLanguageFromKeyFilter(lang) {
            return languages[lang].name;
        }
    }

    export function findLanguageRtlFromKey() {
        return findLanguageRtlFromKeyFilter;

        function findLanguageRtlFromKeyFilter(lang) {
            return languages[lang].rtl;
        }
    }


