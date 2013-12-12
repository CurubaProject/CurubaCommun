var message = require('./lang/lang');

var ClientRoutes = {
   LISTDEVICE : '/getListDevices',
   DEVICEDETAILS : '/getDeviceDetails',
   SETDEVICECONFIGURATION : '/setDeviceConfiguration',
	SETDEVICENAME : '/setDeviceName',
	SETDEVICESTATE : '/setDeviceState',
	DEVICECONFIGURATION : '/getDeviceConfiguration',
   CONNECTE : '/connection',
   DEVICESTAT : '/getDeviceStatistics'
};

var Connection = {
   route :  ClientRoutes.CONNECTE,
   validators : {
      username : {
         checking : function (param, value, that) {
            that.check(value, {name : param, code : 'USERNAMERANGE'}).len(3, 10);
            that.check(value, {name : param, code : 'USERNAME'}).notEmpty();
            that.check(value, {name : param, code : 'USERNAMEALPHANUMERIC'}).isAlphanumeric();

				return value;
         }
      },
      password : {
         checking : function (param, value, that) {
            that.check(value, {name : param, code : 'PASSWORDRANGE'}).len(3, 10);
            that.check(value, {name : param, code : 'PASSWORD'}).notEmpty();
            that.check(value, {name : param, code : 'PASSWORDALPHANUMERIC'}).isAlphanumeric();

				return value;
         }
      }
   }
};

var ListDeviceRequest = {
   route :  ClientRoutes.LISTDEVICE,
   validators : {
      callback : { 
      }
   }
};

var GetDeviceDetail = {
	route : ClientRoutes.DEVICEDETAILS,
	validators : {
      DeviceId : {
         checking : function (param, value, that) {
            that.check(value, {name : param, code : 'RANGE'}).len(6, 6);
            that.check(value, {name : param, code : 'UNDEFINED'}).notEmpty();

				return value;
         }
      },
      callback : {
      }
	}
};

var SetDeviceName = {
	route : ClientRoutes.SETDEVICENAME,
	validators : {
      Id : {
         checking : function (param, value, that) {
            that.check(value, {name : param, code : 'RANGE'}).len(6, 6);
            that.check(value, {name : param, code : 'UNDEFINED'}).notEmpty();

				return value;
         }
      },
		Name : {
         checking : function (param, value, that) {
            that.check(value, {name : param, code : 'RANGE'}).len(1, 25);
            that.check(value, {name : param, code : 'UNDEFINED'}).notEmpty();

				return value;
         }
		},
      callback : {
      }
	}
};

var SetDeviceState = {
	route : ClientRoutes.SETDEVICESTATE,
	validators : {
        DeviceId : {
			checking : function (param, value, that) {
            that.check(value, {name : param, code : 'RANGE'}).len(0, 15);
            that.check(value, {name : param, code : 'UNDEFINED'}).notEmpty();

				return value;
			}
        },
		DeviceNumber : {
			checking : function (param, value, that) {
				return value;
			}
		},
		Parameters : {
         checking : function (param, value, that) {
            that.check(value, {name : param, code : 'UNDEFINED'}).notEmpty();
	
				if (that.getErrors() && that.getErrors().length === 0) {
					var decoded = JSON.parse(value);

					that.check(decoded.DeviceState, {name : 'Parameters.DeviceState', code : 'RANGE'}).len(2, 3);
					that.check(decoded.DeviceState, {name : 'Parameters.DeviceState', code : 'UNDEFINED'}).notEmpty();

					that.check(decoded.DeviceValue, {name : 'Parameters.DeviceValue', code : 'UNDEFINED'}).notEmpty();

					value = decoded;
				}

				return value;
         }
		},
      callback : {
      }
	}
};

var DeviceStatistics = {
	route : ClientRoutes.DEVICESTAT,
	validators : {
		DeviceId : {
         checking : function (param, value, that) {
            that.check(value, {name : param, code : 'RANGE'}).len(1, 8);
            that.check(value, {name : param, code : 'UNDEFINED'}).notEmpty();

				return value;
         }
		},
		Granularity : {
         checking : function (param, value, that) {
            that.check(value, {name : param, code : 'RANGE'}).len(1, 8);
            that.check(value, {name : param, code : 'UNDEFINED'}).notEmpty();

				return value;
         }
		},
      callback : {
      }
	}
};

var DeviceConfiguration = {
	route : ClientRoutes.DEVICECONFIGURATION,
	validators : {
		DeviceId : {
         checking : function (param, value, that) {
            that.check(value, {name : param, code : 'RANGE'}).len(1, 8);
            that.check(value, {name : param, code : 'UNDEFINED'}).notEmpty();

				return value;
         }
		},
      callback : {
      }
	}
};

var SetDeviceConfiguration = {
	route : ClientRoutes.SETDEVICECONFIGURATION,
	validators : {
		DeviceId : {
         checking : function (param, value, that) {
            that.check(value, {name : param, code : 'RANGE'}).len(1, 8);
            that.check(value, {name : param, code : 'UNDEFINED'}).notEmpty();

				return value;
         }
		},
		DeviceName : {
         checking : function (param, value, that) {
            that.check(value, {name : param, code : 'RANGE'}).len(1, 25);
            that.check(value, {name : param, code : 'UNDEFINED'}).notEmpty();

				return value;
         }
		},
		DeviceSchedule : {
         checking : function (param, value, that) {
            //that.check(value, {name : param, code : 'UNDEFINED'}).notEmpty();
				console.log(value);
				if (that.getErrors() && that.getErrors().length === 0) {
					var decoded = JSON.parse(value);

					for (var index = decoded.length ; index--;) {
						that.check(decoded.From, {name : 'DeviceSchedule[].DeviceState', code : 'RANGE'}).len(2, 3);
						that.check(decoded.From, {name : 'DeviceSchedule[].DeviceState', code : 'UNDEFINED'}).notEmpty();

						that.check(decoded.To, {name : 'DeviceSchedule[].DeviceValue', code : 'UNDEFINED'}).notEmpty();
						that.check(decoded.Status, {name : 'DeviceSchedule[].DeviceValue', code : 'UNDEFINED'}).notEmpty();
						that.check(decoded.Value, {name : 'DeviceSchedule[].DeviceValue', code : 'UNDEFINED'}).notEmpty();

						value = decoded;
					}
				}

				return value;
         }
		},
      callback : {
      }
	}
};

exports.Connection = Connection;
exports.ListDeviceRequest = ListDeviceRequest;
exports.GetDeviceDetail = GetDeviceDetail;
exports.SetDeviceName = SetDeviceName;
exports.SetDeviceState = SetDeviceState;
exports.DeviceStatistics = DeviceStatistics;
exports.DeviceConfiguration = DeviceConfiguration;
exports.SetDeviceConfiguration = SetDeviceConfiguration;
