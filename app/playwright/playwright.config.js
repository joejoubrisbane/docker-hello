// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  timeout: 30000, // 每個 test 最多 30 秒
  use: {
    baseURL: 'http://localhost:3000',
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },
});