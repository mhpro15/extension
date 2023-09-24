try {
  // content.js
  function collectWebsiteData() {
    const websiteUrl = window.location.href;
    const links = Array.from(document.querySelectorAll("a")).map(
      (link) => link.href
    );

    chrome.runtime.sendMessage({
      type: "collectData",
      data: {
        url: websiteUrl,
        links: links,
      },
    });
  }

  // Initially collect data
  collectWebsiteData();

  // Listen for messages to collect data again
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "collectDataAgain") {
      collectWebsiteData();
    }
  });
} catch (error) {
  console.log(error);
}
