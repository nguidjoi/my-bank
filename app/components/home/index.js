'use strict';
import homeCtrl from './homeController';
import homeConfig from './routes';
export default angular
    .module('ae.home', [])
    .controller('homeCtrl', homeCtrl)
    .config(homeConfig);