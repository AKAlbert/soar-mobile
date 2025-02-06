import BasePage from './base.page.js';

class MainPage extends BasePage {
    // Selectors
    get myListsTab() { return $('~My lists'); }
    get historyTab() { return $('~History'); }
    get nearbyTab() { return $('~Nearby'); }
    get searchButton() { return $('~Search Wikipedia'); }
    get searchInput() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")'); }
    get searchResults() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_results_list")'); }
    get closeButton() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_close_btn")'); }
    get settingsButton() { return $('~More options'); }

    /**
     * Navigate through tabs
     */
    async navigateThroughTabs() {
        await this.waitAndClick(this.myListsTab);
        await browser.pause(3000);
        
        await this.waitAndClick(this.historyTab);
        await browser.pause(3000);
        
        await this.waitAndClick(this.nearbyTab);
        await browser.pause(3000);
        
        // Return to home
        await this.waitAndClick($('~Explore'));
    }

    /**
     * Search for a term
     * @param {String} searchTerm 
     */
    async searchFor(searchTerm) {
        await this.waitAndClick(this.searchButton);
        await this.waitForDisplayed(this.searchInput);
        await this.searchInput.setValue(searchTerm);
        await this.waitForDisplayed(this.searchResults);
    }

    /**
     * Close search
     */
    async closeSearch() {
        await this.waitAndClick(this.closeButton);
        await this.waitAndClick(this.closeButton);
    }
}

export default new MainPage(); 
