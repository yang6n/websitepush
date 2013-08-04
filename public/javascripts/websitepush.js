function querypermission() {
    // Ensure that the user can receive OS X Website Push Notifications.
    if ('safari' in window && 'pushNotification' in window.safari) {
        var permissionData = window.safari.pushNotification.permission('web.com.digby.test.jaysorc');
        checkRemotePermission(permissionData);
    }
};
 
var checkRemotePermission = function (permissionData) {
    if (permissionData.permission === 'default') {
	console.log('pushNotification.permission: default');
        // This is a new web service URL and its validity is unknown.
        var ret = window.safari.pushNotification.requestPermission(
            //'https://api.zhangxianli.cn/v1/pushPackages/web.com.digby.test.jaysorc', // The web service URL.
            'https://api.zhangxianli.cn', // The web service URL.
            'web.com.digby.test.jaysorc',     // The Website Push ID.
            {"userId": "jyang@digby.com"}, // Data that you choose to send to your server to help you identify the user.
            checkRemotePermission         // The callback function.
        );
	console.log(JSON.stringify(ret));
    }
    else if (permissionData.permission === 'denied') {
        // The user said no.
        console.log('pushNotification.permission: denied');
    }
    else if (permissionData.permission === 'granted') {
        // The web service URL is a valid push provider, and the user said yes.
        // permissionData.deviceToken is now available to use.
        console.log('pushNotification.permission: granted');
    }
};

