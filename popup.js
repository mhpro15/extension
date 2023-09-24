chrome.storage.local.get("websiteData", (data) => {
  const websiteUrl = data.websiteData.url || "N/A";
  const links = data.websiteData.links || [];

  document.getElementById("websiteUrl").textContent += websiteUrl;

  const linksList = document.getElementById("linksList");
  links.forEach((link) => {
    const listItem = document.createElement("li");
    listItem.textContent = link;
    linksList.appendChild(listItem);
  });
});
