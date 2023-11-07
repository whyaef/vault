/*
chrome.windows.onFocusChanged.addListener(function() {

     chrome.browserAction.setIcon({path: "icon2_grey.png"});

     chrome.tabs.query({ currentWindow: true, active: true }, function (tabsl) {

          if(tabsl.length == 0)
               {
               }
               else
               {
               if(tabsl[0].incognito)
                    {
                    chrome.tabs.onActivated.addListener(function () {chrome.browserAction.setIcon({path: "icon2_light.png"});});
                    }
                    else
                    {
                    chrome.tabs.onActivated.addListener(function () {chrome.browserAction.setIcon({path: "icon2.png"});});
                    }
               }
          });
     });


*/
