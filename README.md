# Business Website – Automation Testing Portfolio

## Project Overview

This project demonstrates practical Web UI Automation Testing using **Playwright** and **JavaScript**.

The application under test is [Bielektra](https://bielektra.com/), a business website with five main pages.

The purpose of this project is to practice automated functional testing, navigation testing, responsive testing, and cross-browser testing.

## Technologies Used

- JavaScript
- Playwright
- Node.js
- Visual Studio Code

## Application Under Test

Website: https://bielektra.com/

Pages covered:
- Homepage
- About Us
- Services
- Projects
- Contacts

## Automated Test Coverage

| Test File | Description |
|---|---|
| `homepage.spec.js` | Verifies that the homepage loads successfully |
| `navigation.spec.js` | Verifies direct navigation to all five pages |
| `menu-navigation.spec.js` | Verifies navigation menu links |
| `about.spec.js` | Verifies the About Us page heading |
| `services.spec.js` | Verifies the Services page heading |
| `projects.spec.js` | Verifies the Projects page heading |
| `contacts.spec.js` | Verifies the Contacts page heading |
| `responsive.spec.js` | Checks for horizontal scrolling across five pages at three viewport sizes |

## Cross-Browser Testing

Tests are executed using:

- Chromium
- Firefox
- WebKit

## Responsive Testing

The following viewport sizes are covered:

| Device Category | Resolution |
|---|---|
| Desktop | 1920 × 1080 |
| Tablet | 768 × 1024 |
| Mobile | 375 × 812 |

## Running the Tests

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

Run all tests:

```bash
npx playwright test
```

Run a specific test:

```bash
npx playwright test tests/homepage.spec.js
```

Open the HTML test report:

```bash
npx playwright show-report
```

## Test Evidence and Reporting

Playwright is configured to collect:

- Screenshots on test failure
- Videos retained on test failure
- Execution traces retained on test failure
- HTML test reports

## Project Structure

```text
business-website-automation-portfolio/
│
├── README.md
├── tests/
│   ├── about.spec.js
│   ├── contacts.spec.js
│   ├── homepage.spec.js
│   ├── menu-navigation.spec.js
│   ├── navigation.spec.js
│   ├── projects.spec.js
│   ├── responsive.spec.js
│   └── services.spec.js
│
├── playwright.config.js
├── package.json
├── package-lock.json
├── .gitignore
├── test-results/
└── playwright-report/
```

## Project Status

- Automated test scripts implemented.
- Cross-browser execution configured.
- Responsive testing implemented.
- HTML reporting configured.
- Failure evidence collection configured.

This is a practical learning project developed as part of a QA Testing portfolio.
