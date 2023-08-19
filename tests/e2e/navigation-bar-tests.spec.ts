import { test, expect } from '@playwright/test'

const navBarLinks = ['Home', 'Audio Services', 'Equipment Hire']

test.describe('nav bar tests', () => {
    test('headers are visible for each page in navigation', async ({
        page,
    }) => {
        await page.goto('http://localhost:3000')

        for (const link of navBarLinks) {
            await page
                .getByRole('navigation')
                .getByRole('link', { name: link.toString() })
                .click()

            await expect(
                page.getByRole('heading', { name: link.toString() })
            ).toBeVisible()
        }
    })

    test('footer is visible for each page in navigation', async ({ page }) => {
        await page.goto('http://localhost:3000')

        for (const link of navBarLinks) {
            await page
                .getByRole('navigation')
                .getByRole('link', { name: link.toString() })
                .click()

            await expect(page.getByRole('contentinfo')).toHaveText('PTC 2023')
        }
    })

    test('navigation bar is visible from each page in navigation', async ({
        page,
    }) => {
        await page.goto('http://localhost:3000')

        for (const link of navBarLinks) {
            await page
                .getByRole('navigation')
                .getByRole('link', { name: link.toString() })
                .click()

            await expect(
                page
                    .getByRole('navigation')
                    .getByRole('link', { name: link.toString() }),
                `${link} not visible`
            ).toBeVisible()

            await expect(
                page
                    .getByRole('navigation')
                    .getByRole('heading', { name: 'Power Trip Productions' })
            ).toBeVisible()
        }
    })
})
