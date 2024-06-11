import { Google } from "./basePageGoogleObject";
const page = new Google();

test('do a search', async () => {
    await page.navigate();
    await page.search('Chicago Cubs');
    let results = await page.getResults();
    expect(results).toContain('Chicago Cubs');
    await page.driver.quit();
});