# 🔑 Generador de Hash Online Gratis — MD5, SHA-1, SHA-256, SHA-512

**Free Hash Generator.** Generate MD5, SHA-1, SHA-256 and SHA-512 hashes simultaneously in real time. Verify file and text integrity by comparing hashes. Hash any file directly in the browser — no uploads required. No sign-up, no ads, 100% client-side.

🌐 **Demo en vivo / Live demo:** [miguelacm.es/tools/hash-generator](https://miguelacm.es/tools/hash-generator)

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green)](LICENSE)

---

## ✨ Features

- **4 algoritmos simultáneos / 4 simultaneous algorithms:** MD5, SHA-1, SHA-256 and SHA-512 computed at the same time for any input
- **Tiempo real / Real time:** Hashes update instantly as you type
- **Hash de archivos / File hashing:** Select any file to compute its cryptographic hash directly in the browser — nothing is uploaded
- **Verificación de integridad / Integrity check:** Paste a known hash to compare it against the computed result with visual match/mismatch indicator
- **Copiar al portapapeles / Copy to clipboard:** One-click copy for each algorithm
- **Web Crypto API:** Uses the browser's native SubtleCrypto for SHA algorithms — fast and secure
- **Embebible / Embeddable:** Use it as an iframe on any website
- **Open source:** MIT license, use it freely

---

## 🚀 Quick start

```bash
git clone https://github.com/m-a-c-m/HashGenerator.git
cd HashGenerator
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables (optional)

```env
NEXT_PUBLIC_SITE_URL=https://miguelacm.es/tools/hash-generator
NEXT_PUBLIC_EMBED_URL=https://miguelacm.es/embed/hash-generator
```

---

## 📦 Embed on your website

### Iframe (plug & play)

```html
<iframe
  src="https://miguelacm.es/embed/hash-generator"
  width="100%"
  height="700"
  style="border:none;border-radius:12px;"
  title="Generador de Hash Online — miguelacm.es"
  loading="lazy"
></iframe>
```

### Link with attribution (recommended for backlink)

```html
<a href="https://miguelacm.es/tools/hash-generator" target="_blank" rel="noopener">
  Generador de hash MD5 SHA-256 gratis por MACM
</a>
```

> 💡 The link option generates a real backlink that benefits the project. Recommended if your platform supports custom HTML.

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org) | 16 | React framework + SSG |
| [TypeScript](https://www.typescriptlang.org) | 5 | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Styling |
| [react-icons](https://react-icons.github.io/react-icons/) | 5 | Icons |

---

## 📄 License

MIT © [Miguel Ángel Colorado Marin (MACM)](https://miguelacm.es)

Built with ❤️ by **[MACM](https://miguelacm.es)** — Full Stack Developer & Cybersecurity Specialist from Guadalajara, Spain.

- 🌐 Portfolio: [miguelacm.es](https://miguelacm.es)
- 💼 LinkedIn: [linkedin.com/in/macm](https://www.linkedin.com/in/macm/)
- 🐙 GitHub: [github.com/m-a-c-m](https://github.com/m-a-c-m)
