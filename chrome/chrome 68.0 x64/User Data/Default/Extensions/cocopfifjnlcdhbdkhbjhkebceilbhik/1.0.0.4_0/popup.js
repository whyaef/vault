document.addEventListener('DOMContentLoaded', () => {

    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      var millisecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
        var oneWeekAgo = (new Date()).getTime() - millisecondsPerWeek;

var callback = function () {
        // Do something clever here once data has been removed.
      };

        if (tabs[0].incognito) {
            /*chrome.browsingData.remove({
                "since": oneWeekAgo
                }, {
                "appcache": true,
                "cache": true,
                "cookies": true,
                "downloads": true,
                "fileSystems": true,
                "formData": false,
                "history": false,
                "indexedDB": true,
                "localStorage": true,
                "pluginData": true,
                "passwords": false,
                "webSQL": true
                }, callback);*/
            /*chrome.browsingData.remove({
                "since": oneWeekAgo
                }, {
                "cache": true
                });*/

            chrome.browsingData.removeAppcache({ "since": 0 });



                // cache
            chrome.browsingData.removeCache({ "since": 0 });



                // "cookies": true,
            chrome.browsingData.removeCookies({ "since": 0 });



                // "downloads": true,
            chrome.browsingData.removeDownloads({ "since": 0 });



                // "fileSystems": true,
            chrome.browsingData.removeFileSystems({ "since": 0 });



                // "formData": false,



                // "history": false,



                // "indexedDB": true,
            chrome.browsingData.removeIndexedDB({ "since": 0 });



                // "localStorage": true,
            chrome.browsingData.removeLocalStorage({ "since": 0 });



                // "pluginData": true,
            chrome.browsingData.removePluginData({ "since": 0 });



                // "passwords": false,



                // "webSQL": true
            chrome.browsingData.removeWebSQL({ "since": 0 });






            document.getElementById("textOutput").innerHTML = "Your incognito mode has been reset! <P> Your incognito history, cookies and cache have been cleared!";
        } else {
            document.getElementById("textOutput").innerHTML="This extension works only in incognito mode!";
        }

    });

});



