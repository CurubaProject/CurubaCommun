var ClientRoutes = {
   CONFIGUREDEVICE : '/getDeviceConfiguration', // TODO belm2440 : implement this request.
   DETAILSDEVICE : '/getDeviceDetails', //TODO belm2440 : implement this request.
   LISTDEVICE : '/getListDevices',
   DEVICEDATA : '/getDeviceData',
   DEVICESTATISTICS : '/getDeviceStatistics',
   SETDEVICEDATA : '/setDeviceData',
   CONNECTE : '/connection',
   DEVICESTAT : '/getDeviceStat',
   SCHEDULER : '/scheduler',
   SETDEVICESTATE : '/setDeviceState'
};

var Connection = {
   route :  ClientRoutes.CONNECTE,
   validators : {
      username : {
         checking : function (param, value, that) {
            that.check(value, {name : param, code : 'USERNAMERANGE'}).len(3, 10);
            that.check(value, {name : param, code : 'USERNAME'}).notEmpty();
            that.check(value, {name : param, code : 'USERNAMEALPHANUMERIC'}).isAlphanumeric();
         }
      },
      password : {
         checking : function (param, value, that) {
            that.check(value, {name : param, code : 'PASSWORDRANGE'}).len(3, 10);
            that.check(value, {name : param, code : 'PASSWORD'}).notEmpty();
            that.check(value, {name : param, code : 'PASSWORDALPHANUMERIC'}).isAlphanumeric();
         }
      }
   }
};

var SetDeviceState = {
   route :  ClientRoutes.SETDEVICESTATE
};

var DeviceConfigurationRequest = {
   route :  ClientRoutes.CONFIGUREDEVICE
};

var DeviceDetailsRequest = {
   route :  ClientRoutes.DETAILSDEVICE
};

var ListDeviceRequest = {
   route :  ClientRoutes.LISTDEVICE
};

var DeviceStatisticsRequest = {
   route :  ClientRoutes.DEVICESTATISTICS
};

var Scheduler = {
   route :  ClientRoutes.SCHEDULER,
   validators : {
      device : {
         checking : function (param, value, that) {
            that.check(value, {name : param, code : 'UNDEFINED'}).len(10, 10);
         }
      },
      date : {
         checking : function (param, value, that) {
            that.check(value, {name : param, code : 'UNDEFINED'}).len(10, 10);
         }
      },
      form : {
         status : '',
         
         checking : function (param, value, that) {
            that.check(value, {name : param, code : ''}).len();
         }
      }
   }
};
