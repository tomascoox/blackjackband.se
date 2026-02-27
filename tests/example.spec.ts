import { test, expect } from '@playwright/test';

// Detta körs innan varje test i den här filen
test.beforeEach(async ({ page }) => {
  // Vi går till den lokala servern (viktigt för automatiseringen sen!)
  await page.goto('/');

  // Letar efter knappen som stänger cookie-rutan. 
  // Om knappen t.ex. heter "Acceptera alla" eller "OK":
  const acceptButton = page.getByRole('button', { name: /acceptera|godkänn|ok/i });

  // Om knappen dyker upp så klickar vi på den
  if (await acceptButton.isVisible()) {
    await acceptButton.click();
  }
});

test('Kontrollera startsida och navigering', async ({ page }) => {
  // 1. Kolla titeln
  await expect(page).toHaveTitle(/BlackJack - Dansband från Sverige/);

  // 2. Klicka på länken (här byter vi namn från 'get started link' i logiken)
  await page.getByRole('link', { name: 'Studio Joox AB' }).click();

  // 3. Verifiera att vi hamnade rätt
  await expect(page.getByRole('heading', { name: 'Nyheter' })).toBeVisible();
});