'use strict';
import accountCtrl from './account-controller';
import accountConfig from './routes';

export default angular
    .module('ae.account', [])
    .controller('accountCtrl', accountCtrl)
    .config(accountConfig);