// TODO lemj Change all language to Upper Case
// TODO belm Change the name "DEVICE" for "MODULE" to comply with the proper naming.

var fr = {
    '' : '!#Error#!',
    'USERNAME' : 'Le nom de l\'utilisateur est requis.',
    'USERNAME_RANGE' : 'Le nom doit contenir 3 Ã  10 caractÃ¨res',
    'STATE_DEVICE' : 'État',
    'TUTORIAL_TEXT_TABLE_OF_CONTENT': 'Table des matières',
    
    'DEVICE_STATUS' : 'Ã‰tat de l\'appareil'
}; 

var en = {
    '' : '!#Error#!',
    'ABOUT_US_TITLE' : 'About us',
	'ABOUT_US_TEXT' : 'To know more about us, go visit our website at <a href="http://curuba.org/team">http://curuba.org/team</a>',
    'CANCEL'  :'Cancel',
    'CONFIGURE_DEVICE_BUTTON_TEXT' : 'Configure module...',
    'DEVICE_CONFIGURATION_ADD_SCHEDULE_BUTTON': 'Add a new uptime schedule',
    'DEVICE_CONFIGURATION_LABEL_DEVICE_NAME' : 'Module name',
    'DEVICE_CONFIGURATION_SCHEDULE_DEVICE_NAME_FIELDSET': 'Module name',
    'DEVICE_CONFIGURATION_SCHEDULE_AREA_FIELDSET': 'Schedule #',
    'DEVICE_CONFIGURATION_SCHEDULE_REMOVE_BUTTON': 'Remove',
    'DEVICE_CONFIGURATION_SCHEDULE_TEXTFIELD_FROM': 'From',
    'DEVICE_CONFIGURATION_SCHEDULE_TEXTFIELD_STATUS' : 'Status',
    'DEVICE_CONFIGURATION_SCHEDULE_TEXTFIELD_TO': 'To',
    'DEVICE_CONFIGURATION_SCHEDULE_TEXTFIELD_VALUE' : 'Value',
    'DEVICE_LIST_TITLE' : 'Modules List',
    'HELP_TITLE' : 'Help',
    'SAVE' : 'Save',
    'SETTINGS_TITLE' : 'Settings',
    'SETTINGS_SERVER_ADDRESS_FIELDSET' : 'Server address',
    'STATISTICS_CHART_BY_YEAR_BUTTON' : 'by year',
    'STATISTICS_CHART_BY_YEAR_TITLE' : 'Energy consumption for this year',
    'STATISTICS_CHART_BY_MONTH_BUTTON' : 'by month',
    'STATISTICS_CHART_BY_MONTH_TITLE' : 'Energy consumption for this month',
    'STATISTICS_CHART_BY_WEEK_BUTTON' : 'by week',
    'STATISTICS_CHART_BY_WEEK_TITLE' : 'Energy consumption for this week',
    'STATISTICS_CHART_BY_DAY_BUTTON' : 'by day',
    'STATISTICS_CHART_BY_DAY_TITLE' : 'Energy consumption for today',
    'STATISTICS_CHART_Y_AXIS_LABEL' : 'Energy consumed',
    'TAB_BAR_ICON_TITLE_DEVICES' : 'Modules',
    'TAB_BAR_ICON_TITLE_SETTINGS' : 'Settings',
    'TAB_BAR_ICON_TITLE_HELP' : 'Help',
	'TUTORIAL_TEXT_DEVICE_ASSEMBLY' : 'The first thing you will need to do is assemble a module. Make sure the holes for the screws match on both parts of the module, otherwise it will not work nor fit in a device box.',
	'TUTORIAL_TEXT_DEVICE_ASSEMBLY_AJUST_DEVICE_PURPOSE' : 'On the control module (the bottom part), there is a box with little switches. To configure the module for it\' purpose, ajust the switches according to the diagram below. The black switches are raised, the white ones are down.',
	'TUTORIAL_TEXT_DEVICE_ASSEMBLY_WIRING' : 'The image below demonstrate how to do the wiring of the module. You will need to solder 4 wires on the application module (the one that goes on top).',
	'TUTORIAL_TEXT_DEVICE_ASSEMBLY_WARNINGS' : 'To be used in a wall, a module MUST be coated in heat conducting epoxy to prevent short circuits and fire hazards. If not, the module must be used in an open-air environment whitout any metal toutching the module\'s pins.',
	'TUTORIAL_TEXT_DEVICE_CONFIGURATION_LIGHT_SIGNIFICATION' : 'There is two lights on the module. The green one indicate if the module is powered up. The yellow light indicate a communication is taking place. While the module is plugged to the server, the yellow light should light up dans blink slowly (once each second). It means the module is being configured with the WiFi network\'s informations : do not unplug the USB cable! If the yellow light stops blinking, it means the communication is done : you can unplug the module. If the light starts to blink fast, there was a problem.',
	'TUTORIAL_TEXT_DEVICE_CONFIGURATION_PLUG' : 'It\'s time to configure the modules! Use a mini-USB cable and connect the module to the server.',
	'TUTORIAL_TEXT_DEVICE_CONFIGURATION_UNPLUG' : 'Once the configuration is done (yellow light stops blinking), unplug the device. It is ready to be installed!',
	'TUTORIAL_TEXT_DEVICE_INSTALLATION_LIGHT_SIGNIFICATION' : 'Install the module at its intended location (don\'t forget to turn off the breaker!!). Whe powered up, the green light should be visible. The yellow light should blink fast if there is a problem. Otherwise it should blink slowly.',
	'TUTORIAL_TEXT_DEVICE_INSTALLATION_WIRING' : 'It is time to wire the module to it\'s device. The image below demonstrate how to do the wiring of the module. Insert the wires in the connectors with screws. Screw them firmly and connect the wires on the divece to control (the outlet for example).',
	'TUTORIAL_TEXT_DEVICE_INTRODUCTION' : 'The electric modules (or just "modules") execute the commands they receive and compute energy consumption statistics for the server.',	    
    'TUTORIAL_TEXT_HOW_IT_WORKS_INTRODUCTION' : 'Here\'s how it works: when a module connects to the wifi network, it registers itself to the server and starts an active communication. The mobile app can then control the modules.',
    'TUTORIAL_TEXT_HOW_TO_USE_THIS_TUTORIAL' : 'To navigate through the tutorial, swipe to the right or the left. On some pages, you can also navigate up or down.',
    'TUTORIAL_TEXT_MOBILE_APP_CONFIGURE_DEVICE' : 'In the module configuration page, you can change the module name and give it a schedule so that it turns on or off automatically.',
    'TUTORIAL_TEXT_MOBILE_APP_CONGRATULATION' : 'You can now use your module!',
    'TUTORIAL_TEXT_MOBILE_APP_DEVICE_TAB' : 'From now on, we will use the mobile app core funcitonnality. You can select the "Devices" tab without losing you progress in this tutorial.',
    'TUTORIAL_TEXT_MOBILE_APP_DEVICE_LIST' : 'The first thing you should see in the "Modules" tab is a list of the connecte modules. Your newly installed module should appear with a generic name and its status. Click on it to see its details.',
    'TUTORIAL_TEXT_MOBILE_APP_DEVICE_DETAILS_ONOFF_BUTTON' : 'At the top of the module details page, there is a control button. Use it to turn on or off the module.',
    'TUTORIAL_TEXT_MOBILE_APP_DEVICE_DETAILS_HISTOGRAM' : 'At the bottom , there is an histogram showing consumption statistics. You can view statistics with different time periods.',
    'TUTORIAL_TEXT_MOBILE_APP_DEVICE_DETAILS_CONFIGURE_DEVICE' : 'There is a "configure module" button in the middle of the page. Click on it to configure the module further.',
    'TUTORIAL_TEXT_MOBILE_APP_INTRODUCTION' : 'The mobile application (or "mobile app") is used to issue commands and to view information about the system.',
    'TUTORIAL_TEXT_MOBILE_APP_SETTINGS' : 'Go to the "Settings" tab. You will see some configuration options. Enter your server address in the corresponding text field.',
    'TUTORIAL_TEXT_MORE_INFORMATION_GET_INVOLVED' : 'CURUBA is an open-source project which evolves with people like you. We would like you to consider giving some of your time to contribute to the project to make it beter!',
    'TUTORIAL_TEXT_MORE_INFORMATION_GET_INVOLVED_LINK' : 'You can go to <a href="http://curuba.org/supportdevelopment">http://curuba.org/supportdevelopment</a> to look how you can help us.',
    'TUTORIAL_TEXT_MORE_INFORMATION_WEBSITE' : 'For additionnal informations, visit our website: <a href="http://curuba.org/">http://curuba.org/</a>.',
    'TUTORIAL_TEXT_MORE_INFORMATION_WIKI' : 'There is also a wiki where you can find iinformation and contribute: <a href="http://curuba.org/center-wiki">http://curuba.org/center-wiki</a>',
    'TUTORIAL_TEXT_SERVER_CONFIGURATION' : 'When the server is up and running, it must be configured with the Wifi password. *** DONNER LA PROCÉDURE ***',
    'TUTORIAL_TEXT_SERVER_INSTALLATION' : 'The server can be installed on any computer, but is usually deployed on a Raspberry Pi. To view instruction about how to install it on a Raspberry Pi, swipe up. To install it on something else, swipe down.', // TODO revoir pour indiquer comment installer selon l'option 
    'TUTORIAL_TEXT_SERVER_INSTALLATION_COMPUTER' : 'To install the server on a computer, use the latest live CD available at this site and install the custom Linux OS.',
    'TUTORIAL_TEXT_SERVER_INSTALLATION_RASPBERRY_PI' : 'To install the server on a Raspberry Pi, install the custom Linux OS on the SD card.',
    'TUTORIAL_TEXT_SERVER_INTRODUCTION' : 'The server manages the connected devices, forwards commands to each one and saves information about thier energy consumption.',
    'TUTORIAL_TEXT_SYSTEM_INTRODUCTION' : 'The system is made of three parts: the electric modules, the server and the mobile application.',
    'TUTORIAL_TEXT_WEBSITE_GET_INVOLVED_LINK' : 'http://curuba.org/supportdevelopment',
    'TUTORIAL_TEXT_WEBSITE_LINK' : 'http://curuba.org/',
    'TUTORIAL_TEXT_WIKI_LINK' : 'http://curuba.org/center-wiki',
    'TUTORIAL_TITLE' : 'Tutorial',
    'TUTORIAL_TOC_INTRODUCTION_BUTTON' : 'Introduction',
    'TUTORIAL_TOC_SERVER_CONFIG_BUTTON' : 'Server configuration',
    'TUTORIAL_TOC_DEVICE_CONFIG_BUTTON' : 'Module configuration',
    'TUTORIAL_TOC_GUI_BUTTON' : 'Graphical user interface',
    'TUTORIAL_TOC_USER_CONFIG_BUTTON' : 'User preferences',
    'TUTORIAL_TOC_OTHER_LINK_BUTTON' : 'Useful links',
    'TUTORIAL_TOC_GET_INVOLVED_BUTTON' : 'Get involved!',
    'TUTORIAL_TEXT_TABLE_OF_CONTENT': 'Table of content',
    'USERNAME' : 'Username is required.',
    'USERNAMERANGE' : 'Range 3 and 10 charaters;',
    'STATE_DEVICE' : 'State',
    'DEVICE_STATUS' : 'Module status'
};

var language = {
   lang : [en, fr],
   currentLang : en,

   get : function (id) {
      id = id || '';
      
      return this.currentLang[id];
   },

   set : function (id) {
      id = id || 0;

      this.currentLang = this.lang[id];
   }
};
