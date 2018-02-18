'use strict';
import accountCtrl from './account-controller';
import account from './account-service';
import accountConfig from './routes';

export default angular
    .module('ae.account', [])
    .controller('accountCtrl', accountCtrl)
    .factory('account', account)
    .config(accountConfig);