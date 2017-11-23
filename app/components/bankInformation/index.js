'use strict';
import bankCtrl from './bankController';
import bankConfig from './routes';
export default angular
    .module('ae.bank', [])
    .controller('bankCtrl', bankCtrl)
    .config(bankConfig);