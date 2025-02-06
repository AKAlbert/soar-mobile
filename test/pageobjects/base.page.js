class BasePage {
    /**
     * Wait for element to be displayed with timeout
     * @param {Object} element WebdriverIO element
     * @param {Number} timeout Timeout in milliseconds
     */
    async waitForDisplayed(element, timeout = 10000) {
        await element.waitForDisplayed({ timeout });
    }

    /**
     * Scroll to element
     * @param {Object} element WebdriverIO element
     */
    async scrollToElement(element) {
        await element.scrollIntoView();
    }

    /**
     * Get element by accessibility ID
     * @param {String} id Accessibility ID
     */
    async getElementByAccessibilityId(id) {
        return await $(`~${id}`);
    }

    /**
     * Take screenshot
     * @param {String} name Screenshot name
     */
    async takeScreenshot(name) {
        await browser.saveScreenshot(`./screenshots/${name}.png`);
    }

    /**
     * Wait and click element
     * @param {Object} element WebdriverIO element
     */
    async waitAndClick(element) {
        await this.waitForDisplayed(element);
        await element.click();
    }
}

export default BasePage; 
