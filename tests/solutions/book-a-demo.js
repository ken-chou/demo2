module.exports = {
    "Book a demo button at bottom of page": function(browser){
        browser
            .url("https://www.finn.ai/solutions/")
            .waitForElementVisible("body")
            .assert.visible("a[class=button][id=\"solutions-get-demo-btn\"][href=\"https://demo.finn.ai/request\"]")
            .click("a[class=button][id=\"solutions-get-demo-btn\"][href=\"https://demo.finn.ai/request\"]")
            .windowHandles(function (result) {
                var handle = result.value[1];
                browser.switchWindow(handle);
                })
            .assert.urlEquals("https://demo.finn.ai/request")
            .closeWindow()
    }
};