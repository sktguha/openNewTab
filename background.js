chrome.contextMenus.create({
    title: "Open New Tab",
    id: "parent",
    onclick: () => chrome.tabs.create({})
});
const openUrl = (url) => chrome.tabs.create({ url });
const URLS = [
    "https://www.facebook.com/",
    "https://www.linkedin.com/",
    "https://www.quora.com/",
    "https://www.github.com/",
    "https://www.instagram.com/",
    "https://twitter.com/",
    "https://news.ycombinator.com/",
    "https://gmail.com/",
    "https://www.reddit.com/",
    "https://github.com/"
];
URLS.forEach(url => chrome.contextMenus.create({
    title: "Open " + url,
    parentId: "parent",
    onclick: openUrl.bind(this, url)
}));

chrome.commands.onCommand.addListener(function (command) {
    if (command === "openNewTab") {
        chrome.tabs.create({});
    }
});