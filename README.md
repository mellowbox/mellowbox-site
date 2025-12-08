
# Mellowbox — GitHub Pages Starter

This repo is pre-structured per the blueprint.

## Structure
- `index.html` — homepage
- `store.html` — all products with filters
- `product-folder/` — product pages (duplicate an existing file for new products)
- `freebies.html` and `freebies/*.html` — free downloads
- `affiliate.html` and `affiliate-guides/*.html` — affiliate grid + mini-guides
- `categories/*.html` — category pages
- `contact.html`, `privacy.html`, `terms.html`
- `assets/` — images, pdfs, mascot
- `css/style.css` — brand styling
- `js/scripts.js` — interactions

## Weekly Update Flow
1. Drop new cover image into `assets/images/`.
2. Duplicate a file in `product-folder/` (e.g., `safe-body-guide.html`) and rename.
3. Update title, price, image paths, “What’s Inside” bullets, and Razorpay link (see below).
4. Add a card in `store.html` (copy one `<article class="product-card">` block).
5. Add it to a category page.
6. (Optional) Add a related product card to older products.

## Razorpay Integration
Replace the placeholder buttons with your real Razorpay Checkout or Payment Button:
- If using **Payment Button**, paste their `<script>` and button markup where the placeholder link is.
- If using **Checkout.js**, call it from `scripts.js` on click with your order details.

## Branding
Colors and typography are defined in `css/style.css`. The logo wordmark uses Pacifico for the brand name (loaded from Google Fonts).

