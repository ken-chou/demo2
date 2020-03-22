module.exports = {
    "Navigation menu loads": function(browser){
        browser
            .url("https://www.finn.ai/solutions/")
            .waitForElementVisible("body")
            .assert.visible("div[id=\"header-container\"]")
            .assert.visible("div[class=\"navigation-desktop-container\"]")
            .assert.elementPresent("nav[id=\"mobile-menu\"]")
            .assert.elementPresent("div[id=\"navigation-mobile\"]")
    }
};