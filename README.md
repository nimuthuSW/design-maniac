# Design Maniac

A design-forward React portfolio built to show off interface, motion, and craft — ready to deploy on **GitHub Pages**.

Built with [Vite](https://vitejs.dev), [React](https://react.dev), and [Framer Motion](https://www.framer.com/motion/). No backend, fully static.

## Features

- ✨ Animated hero with masked, staggered type reveal
- 🎨 Dark / light theme with system preference + persistence
- 🕹️ Interactive **Playground** (live gradient mixer, segmented control, animated switch & meter)
- 🖱️ Trailing cursor glow, floating gradient orbs, infinite marquee
- ♿ Accessible: keyboard focus rings, reduced-motion support, semantic markup
- 📱 Fully responsive

## Develop

```bash
npm install
npm run dev
```

Open the URL Vite prints (default http://localhost:5173).

## Make it yours

Most content lives in [`src/data.js`](src/data.js) — projects, skills, principles, and stats. Update social links in [`src/components/Footer.jsx`](src/components/Footer.jsx).

## Deploy to GitHub Pages

This repo ships a GitHub Actions workflow ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) that builds and publishes on every push to `main`.

1. Push this repo to GitHub as **`design-maniac`** (the name matters — see below).
2. In the repo: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. Push to `main`. Your site goes live at `https://<username>.github.io/design-maniac/`.

### Renaming the repo

The `base` path must match your repo name. If your repo is **not** called `design-maniac`, update it in two places:

- `base` in [`vite.config.js`](vite.config.js)
- the `favicon` / script paths are relative, so only `base` matters

For a user/organization site (`<username>.github.io`), set `base: '/'` instead.

### Manual deploy (alternative)

```bash
npm run build
npm run deploy
```

This uses the `gh-pages` package to push `dist/` to a `gh-pages` branch.

## License

MIT — use it, remix it, ship it.
