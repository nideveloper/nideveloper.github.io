if(navigator.userAgent.indexOf('MSIE')!==-1 || navigator.appVersion.indexOf('Trident/') > -1){
    /* Microsoft Internet Explorer detected in. */
    document.body.innerHTML = '<h2 class="text-4xl pl-6 mt-12 text-gray-700">This site does not support Internet Explorer.<br /><br />Please update to a modern browser like chrome or visit github.com/cdk-patterns/serverless for basic content.</h2>';
}