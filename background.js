chrome.commands.onCommand.addListener(function (command) {
    if (command === "openNewTab") {
        chrome.tabs.create({});
    }
});