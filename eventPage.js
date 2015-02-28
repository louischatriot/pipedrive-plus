(function () {

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(request);
  console.log(sender);
  console.log(sendResponse);
});



function buttonClicked() {
  var tab, i;

  chrome.tabs.query({ active: true }, function (tabs) {
    console.log("=====================");

    // Get the only real active tab, not dev tools or background page
    for (i = 0; i < tabs.length; i += 1) {
      if (tabs[i].url.match(/^http/)) {
        tab = tabs[i];
      }
    }
    
    console.log(tab);

    chrome.tabs.executeScript(tab.id, {
      file: 'insideLinkedIn.js'
    }, function(res) {
      console.log(res);
      window.a = res;
    });


  });
}


console.log("===== ENGAGED =====");
chrome.browserAction.onClicked.addListener(buttonClicked);
})()
