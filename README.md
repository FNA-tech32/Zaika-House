# Zaika House

Zaika House is a one-page restaurant website. It presents the brand, popular dishes, delivery, guest reviews, a short blog, and a table-booking form. The page is built with HTML, CSS, and JavaScript and adapts from phones to wide screens.

## Pages and sections

The site is a single page, `index.html`. The header links jump to these sections:

| Section | What it shows |
| --- | --- |
| Home | Hero with a booking button, plus featured items such as pizza, drinks, fries, burgers, and chicken masala |
| About Us | Restaurant story, family zone, music, and home delivery |
| Shop | Popular dishes with prices |
| Blog | Three food articles |
| Contact Us | Phone, email, address, opening hours, and the Book a Table form |

The header also includes search and a reservation button. A delivery illustration moves as you scroll, and a back-to-top control appears after you leave the top of the page.

## Contact

These details are shown in the footer:

- Phone: [+91 22 6789 4410](tel:+912267894410)
- Email: [hello@zaikahouse.in](mailto:hello@zaikahouse.in)
- Address: 14 Carter Road, Bandra West, Mumbai 400050

Opening hours:

- Monday–Friday: 08:00–22:00
- Tuesday from 4 PM until midnight
- Saturday: 10:00–16:00

## Run locally

Node.js is required.

From this folder, start the site:

```bash
node server.js
```

Then open [http://localhost:8080/](http://localhost:8080/).

In Cursor or VS Code, choose **Launch Zaika House** and press F5. That starts the same server and opens it in your browser.

## Project files

- `index.html` — page structure and content
- `assets/css/style.css` — layout and styling
- `assets/js/script.js` — menu, search, sticky header, and delivery animation
- `assets/images/` — photos and illustrations
- `server.js` — local static server on port 8080
