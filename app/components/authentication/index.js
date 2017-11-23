'use strict';
import authenticationCtrl from './authentication-controller';
import authConfig from './routes';
export default angular
    .module('ae.authentication', [])
    .controller('authenticationCtrl', authenticationCtrl)
    .config(authConfig);