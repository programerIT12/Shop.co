# Shop.co

A responsive multi-page e-commerce storefront built with semantic HTML, CSS and vanilla JavaScript. No frameworks, no build step — open a file and it runs.

## Live Demo

https://programerIT12.github.io/Shop.co/

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero banner, brand strip, product listings |
| About Us | `about_us.html` | Company information page |
| Account | `account.html` | User account / sign-in page |

## Project Structure

```
Shop.co/
├── index.html          # Home page
├── about_us.html       # About page
├── account.html        # Account page
├── css/                # Stylesheets
├── js/                 # JavaScript
├── img/                # Images
├── icons/              # Icons and SVG assets
├── fonts/              # Web fonts
└── .gitignore
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/programerIT12/Shop.co.git
cd Shop.co
```

Then open `index.html` in your browser.

For a local server (recommended, so fonts and fetch requests load correctly):

```bash
# Python 3
python -m http.server 8000

# or Node.js
npx serve
```

Open http://localhost:8000 in your browser.

## Built With

- HTML5 — semantic markup
- CSS3 — Flexbox and Grid, responsive layout
- JavaScript (ES6) — interactive components

## Browser Support

Latest versions of Chrome, Firefox, Safari and Edge.

## Contributing

The `main` branch is protected — all changes go through a pull request.

```bash
git checkout -b feature/your-feature
git add .
git commit -m "Add your feature"
git push -u origin feature/your-feature
```

Then open a pull request on GitHub against `main`.

## Deployment

The site is deployed with GitHub Pages from the `main` branch, root folder.
Every push to `main` triggers an automatic redeploy.

## License

This project is for educational purposes.