module.exports = {
    "Case study link": function(browser){
        browser
            .url("https://www.finn.ai/solutions/")
            .waitForElementVisible("body")
            .assert.visible("a[class=button][href=\"https://www.finn.ai/article/fidor-changes-the-game-in-europe/\"]")
            .click("a[class=button][href=\"https://www.finn.ai/article/fidor-changes-the-game-in-europe/\"]")
            .assert.urlEquals("https://www.finn.ai/article/fidor-changes-the-game-in-europe/")
    }
};