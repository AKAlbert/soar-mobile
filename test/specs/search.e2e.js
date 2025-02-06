import mainPage from '../pageobjects/main.page.js';

describe('Search Tests', () => {
    it('should search for New York and verify results', async () => {
        // Add retry logic and longer timeout
        await browser.waitUntil(async () => {
            try {
                await mainPage.searchFor('New York');
                return true;
            } catch (error) {
                console.log('Retrying search due to:', error.message);
                return false;
            }
        }, {
            timeout: 30000,
            interval: 2000,
            timeoutMsg: 'Search failed after multiple retries'
        });

        // Verify search results with retry
        await browser.waitUntil(async () => {
            try {
                await expect(mainPage.searchResults).toBeDisplayed();
                return true;
            } catch (error) {
                return false;
            }
        }, {
            timeout: 20000,
            interval: 1000
        });
        
        await mainPage.closeSearch();
        await expect($('~Explore')).toBeDisplayed();
    });
}); 
