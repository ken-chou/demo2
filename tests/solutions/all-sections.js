module.exports = {
    "All sections present": function(browser){
        browser
            .url("https://www.finn.ai/solutions/")
            .waitForElementVisible("body")
            .assert.visible("section[class='page-section solutions-overview']")
            .assert.visible("section[class='page-section solutions-customer-logos']")
            .assert.visible("section[class='page-section solutions-customer-acquisition']")
            .assert.visible("section[class='page-section solutions-digital-services-video']")
            .assert.visible("section[class='page-section solutions-digital-services']")
            .assert.visible("section[class='page-section solutions-call-to-action']")
            .assert.visible("footer[class='footer']")
    }
};