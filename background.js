try {
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "collectData") {
      const { url, links } = message.data;

      chrome.storage.local.set({ websiteData: { url, links } });
    }
  });
  // background.js
  chrome.tabs.onActivated.addListener((activeInfo) => {
    const tabId = activeInfo.tabId;

    // Send a message to the content script to collect data again
    chrome.tabs.sendMessage(tabId, { type: "collectDataAgain" });
  });
} catch (error) {
  console.log(error);
}
