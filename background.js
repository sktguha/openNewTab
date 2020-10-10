chrome.contextMenus.create({
    title: "Open New Tab",
    onclick: () => chrome.tabs.create({})
});
chrome.commands.onCommand.addListener(function (command) {
    if (command === "openNewTab") {
        chrome.tabs.create({});
    }
});