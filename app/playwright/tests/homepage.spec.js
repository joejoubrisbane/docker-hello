// docker-hello/app/playwright/tests/homepage.spec.js
const { test, expect } = require('@playwright/test');

test('homepage should have Hello React', async ({ page }) => {
    await page.goto('/');
  await expect(page.locator('h1')).toHaveText('Hello React from Docker');
});