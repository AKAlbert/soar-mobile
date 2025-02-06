import mainPage from '../pageobjects/main.page.js';

describe('Navigation Tests', () => {
    it('should navigate through all tabs and return home', async () => {
        // Navigate through all tabs with 3s pause at each
        await mainPage.navigateThroughTabs();
        
        // Verify we returned to home/explore page
        await expect($('~Explore')).toBeDisplayed();
    });
}); 
