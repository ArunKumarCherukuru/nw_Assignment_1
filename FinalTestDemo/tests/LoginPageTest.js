module.exports = {
    'Sample test to check whether browser is getting launched or not': '' + function (browser) {
        browser
            .url("http://www.newtours.demoaut.com/")
            .waitForElementVisible("input[name='userName']", 5000)
            .click("input[name='userName']")
            .assert.elementPresent("input[name='userName']:focus")
            .pause(5000)
            .end()

    },
    'Verifying presence of username, password, register button': '' + function (browser) {
        browser
            .url("http://www.newtours.demoaut.com/")
            .waitForElementVisible("input[name='userName']", 5000)
            .assert.elementPresent("input[name='userName']")
            .waitForElementVisible("input[name='password']", 2000)
            .assert.elementPresent("input[name='password']")
            .waitForElementVisible("input[name='login']", 2000)
            .assert.elementPresent("input[name='login']")
            .pause(5000)
            .waitForElementVisible("", 5000)
            .assert.containsText("", 'REGISTER')
            .end()

    }
}
