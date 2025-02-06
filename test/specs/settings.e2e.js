import mainPage from '../pageobjects/main.page.js';
import settingsPage from '../pageobjects/settings.page.js';

describe('Settings Tests', () => {
    it('should disable all settings options and return home', async () => {
        await mainPage.waitAndClick(mainPage.settingsButton);
        await settingsPage.disableAllOptions();
        
        // Return to home
        await browser.back();
        await expect($('~Explore')).toBeDisplayed();
    });
}); 
