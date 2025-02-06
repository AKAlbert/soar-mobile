# Mobile Automation Testing Framework

This project is a mobile automation testing framework built using WebdriverIO and Appium for testing Android applications.

## Prerequisites

- Node.js (v14 or higher)
- Java JDK (v8 or higher)
- Android Studio
- Android SDK
- Appium Server
- Android Emulator or Physical Device

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Android Setup**
   - Install Android Studio
   - Set up ANDROID_HOME environment variable
   - Create an Android Virtual Device (AVD) or connect a physical device

3. **Appium Setup**
   ```bash
   npm install -g appium
   appium driver install uiautomator2
   ```

4. **Start Appium Server**
   ```bash
   appium
   ```

## Project Structure 