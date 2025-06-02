// @ts-check
import {test, expect} from '@playwright/test';
import {describe} from "node:test";

const URL = 'file:///C:/sources/NHLS/a11y/index2.html';
test.describe('TestenIndex2', () => {
    test('has title', async ({page}) => {
        await page.goto(URL);

        // Expect a title "to contain" a substring.
        await expect(page).toHaveTitle(/A11Y Demo/);
    });

    test('get started link', async ({page}) => {
        await page.goto(URL);

        // Expects page to have a heading with the name of Installation.
        await expect(page.getByRole('heading', {name: 'A11Y Demo'})).toBeVisible();

        const navigation = await page.getByRole('navigation');

        // click the Page 2 link
        await expect(navigation.getByRole('link', {name: 'Page 1'})).toBeVisible();
        await expect(navigation.getByRole('link', {name: 'Page 2'})).toBeVisible();
        await expect(navigation.getByRole('link', {name: 'Page 3'})).toBeVisible();
        await expect(navigation.getByRole('link', {name: 'Page 4'})).toBeVisible();

    });

    test('Goto Page 2', async ({page}) => {
        await page.goto(URL);

        // click the Page 2 link
        const page2Link = await (page.getByRole('link', {name: 'Page 2'}));
        await expect.toBeVisible(page2Link);
        await page2Link.click();

        await expect(page).toHaveURL('file:///C:/sources/NHLS/a11y/pages2/Page2.html');
        const navigation = await page.getByRole('navigation');


        await expect(page.getByRole('heading', {name: 'A11Y Demo - Page 2'})).toBeVisible();
        await expect(page.getByRole('heading')).toHaveText('A11Y Demo - Page 2');

        await expect(navigation.getByRole('link', {name: 'Page 2'})).toHaveClass('selected');

    });
});