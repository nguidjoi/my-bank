'use strict';
import personnalInformationCtrl from './personnalInformationController';
import personnalInformationConfig from './routes';
export default angular
    .module('ae.personnalInformation', [])
    .controller('personnalInformationCtrl', personnalInformationCtrl)
    .config(personnalInformationConfig);