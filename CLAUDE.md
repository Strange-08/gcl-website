# Golden Creep Law Associates — website

Client website for an advocate's office in Chengalpattu. Plain static site: no build step, no server code, no database.

## Files
- `index.html` — the whole site (single page: About, Services, Why Us, Process, Founder, FAQ, Contact)
- `assets/css/style.css` — all styling
- `assets/js/main.js` — Bar Council disclaimer popup, mobile menu, scroll reveal, enquiry form → WhatsApp
- `assets/images/logo.jpg` — logo (also the favicon)

## Hosting
- GitHub Pages, deployed from branch `main`, folder `/ (root)`.
- Live URL: https://strange-08.github.io/gcl-website/
- Any push to `main` goes live in 1–2 minutes. No domain yet; a custom domain can be added later under Settings → Pages.

## Rules for changes
- Keep it static (HTML/CSS/JS only) — GitHub Pages cannot run PHP or a backend.
- Keep the Bar Council of India disclaimer popup; legally required for an advocate's site. No "best lawyer"-style claims, no client testimonials, no solicitation language.
- The enquiry form opens WhatsApp (no server); keep it that way unless a form service is agreed.
- Test on mobile width before pushing.
