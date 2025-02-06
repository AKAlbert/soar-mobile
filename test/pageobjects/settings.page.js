import BasePage from './base.page.js';

class SettingsPage extends BasePage {
    get settingsOptions() { 
        return $$('android=new UiSelector().className("android.widget.Switch")');
    }

    /**
     * Disable all settings options
     */
    async disableAllOptions() {
        const options = await this.settingsOptions;
        for (const option of options) {
            const isEnabled = await option.getAttribute('checked');
            if (isEnabled === 'true') {
                await this.waitAndClick(option);
            }
        }
    }
}

export default new SettingsPage(); 
