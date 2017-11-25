'use strict';
import authenticationCtrl from './authentication-controller';
import authenticationSrv from './authentication-service';
import authConfig from './routes';
export default angular
    .module('ae.authentication', [])
    .controller('authenticationCtrl', authenticationCtrl)
    .factory('authenticationSrv', authenticationSrv)
    .config(authConfig);