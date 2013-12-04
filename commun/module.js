var payload = {
    payload10 : function (data) {
        var payloadID = 0x0a;
        return new Buffer([payloadID]);
    },
    payload20 : function (buffer) {
        return buffer.word8('payload')
						   .word8('mac_nic_1')
						   .word8('mac_nic_2')
						   .word8('mac_nic_3')
							.word8('type')
							.word8('deviceNumber')
                     .word8('status')
                     .word8('state')
                     .word8('analogicRead')
                     .vars;
    },
    payload30 : function (data) {
        var payloadID = 0x1e;
        return new Buffer([payloadID, data.deviceNumber, data.status, data.state, data.analogRead]);
    },
    payload40 : function (buffer) {
        return buffer.word8('payload')
                     .word8('mac_nic_1')
 						   .word8('mac_nic_2')
						   .word8('mac_nic_3')
							.word8('type')
							.word8('deviceNumber')
                     .word8('status')
                     .word8('state')
                     .word8('analogicRead')
                     .vars;
    },
    payload50 : function (buffer) {
        return buffer.word8('payload')
                     .word32('addr_ip')
                     .word32('mask_ip')
                     .word32('dsRouter_ip')
                     .word32('dsServer_ip')
                     .word64('mac_adr')
                     .vars;
    },
    payload51 : function (buffer) {
        return buffer.word8('payload')
                     .word32('ssid')
                     .word32('wifi_ch')
                     .word32('wifi_mode')
                     .word32('sec_opt')
                     .word64('sec_key')
                     .vars;
    },
    payload52 : function (buffer) {
        return buffer.word8('payload')
                     .word32('default_state')
                     .word32('module_id')
                     .word32('module_type')
                     .vars;
    },
    payload60 : function (buffer) {
        return buffer.word8('payload')
                     .word32('addr_ip')
                     .word32('mask_ip')
                     .word32('dsRouter_ip')
                     .word32('dsServer_ip')
                     .word64('mac_adr')
                     .vars;
    },
    payload61 : function (buffer) {
        return buffer.word8('payload')
                     .word32('ssid')
                     .word32('wifi_ch')
                     .word32('wifi_mode')
                     .word32('sec_opt')
                     .word64('sec_key')
                     .vars;
    },
    payload62 : function (buffer) {
        return buffer.word8('payload')
                     .word32('default_state')
                     .word32('module_id')
                     .word32('module_type')
                     .vars;
    }
};

exports.payload = payload;
