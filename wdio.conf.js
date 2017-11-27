var path = require('path');
var releaseApkPath = path.resolve(`./android/app/build/outputs/apk/app-debug.apk`).replace(/\\/g,'/');

module.exports.config = {
    specs: [
        './__tests__/test.js'
    ],

    port: 4723,

    capabilities: [{
        app: releaseApkPath,
        browserName: '',
        deviceName: 'Android',
        'device-orientation': 'portrait',
        platformName: 'Android',
        newCommandTimeout :300,
        autoLaunch: false,
        noReset : true,
    }],

    maxInstances: 1,
    sync: true,
    logLevel: 'silent',
    coloredLogs: true,    
    baseUrl: 'http://localhost',
    waitforTimeout: 30000,
    connectionRetryTimeout: 900000,
    connectionRetryCount: 0,
    framework: 'mocha',
    reporters: ['dot'],

    mochaOpts: {
        ui: 'bdd',
        compilers: ['js:babel-core/register'],
        timeout: 3000000
    },

    afterCommand: function (commandName, args, result, error) {
        var commandResult;
        if (error) {
            const errorMessage = error.message;
            const errorExtraData = JSON.stringify(error);
            commandResult = errorMessage + ", " + errorExtraData

        } else {
            commandResult = result ? JSON.stringify(result.value) : 'OK';
        }

        const text = `* Command Result: ${commandName}(${args.join(',')}) => ${commandResult}`;
        console.log(text)
    },
};
