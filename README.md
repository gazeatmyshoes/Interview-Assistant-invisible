# Interview Assistant – Invisible Edition

> An Electron + React desktop app that protects its own window from screen-capture and ships with a built-in desktop screenshot shortcut.

![Electron](https://img.shields.io/badge/Electron-Forge-47848F?logo=electron)
![License](https://img.shields.io/github/license/gazeatmyshoes/Interview-Assistant-invisible)

---

## ✨ What's New in the *Invisible Edition*

| Feature | Details |
|---------|---------|
| **Screen-Capture Protection** | `BrowserWindow#setContentProtection(true)` blocks OS-level screenshot / recording on macOS & Windows. |
| **Screenshot Shortcut** | Press **⌘/Ctrl + Shift + S** → the window hides, the entire desktop is captured with [`screenshot-desktop`](https://github.com/bencevans/screenshot-desktop), a save-dialog appears, then the window re-shows. |
| **Strict CSP** | All requests run through a hardened Content-Security-Policy header. |
| **Typed & Linted** | TypeScript + ESLint, custom typings for `screenshot-desktop`. |
| **Zero-Config Dev** | Hot-reload via Electron Forge + Webpack; native modules kept external. |

---

## 🚀 Quick Start

```bash
git clone https://github.com/gazeatmyshoes/Interview-Assistant-invisible.git
cd Interview-Assistant-invisible
npm install
npm start          # launches dev mode with hot-reload
```

> **Windows users:** Run PowerShell/Command Prompt as Administrator if the global shortcut doesn't register.

---

## 🗺️ Project Structure

```text
.
├── src/
│   ├── index.ts          # Main process (Electron)
│   ├── preload.ts        # Context-isolated bridge
│   ├── renderer.tsx      # React UI
│   └── custom.d.ts       # Typings for screenshot-desktop
├── webpack.main.config.ts
├── webpack.renderer.config.ts
└── forge.config.ts
```

---

## 🛠 Development

### Prerequisites

- Node.js 18+
- npm 9+

### Commands

| Command | Action |
|---------|--------|
| `npm start` | Start dev server with hot-reload |
| `npm run make` | Package app for current platform |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript type checker |

### Key Files

- `src/index.ts` - Main Electron process with window management and IPC
- `src/preload.ts` - Exposes safe Node.js APIs to renderer
- `webpack.*.config.ts` - Webpack configs for main/renderer
- `forge.config.ts` - Electron Forge configuration

---

## 📦 Packaging

Build platform-specific packages:

```bash
npm run make
```

Outputs to `out/make/` directory.

---

## 🔐 Security

- **Screen Capture Protection**: Uses Electron's `setContentProtection()` API
- **CSP**: Strict Content Security Policy headers
- **Context Isolation**: Enabled by default
- **Node Integration**: Disabled in renderer

---

## 📄 License

MIT © 2025 gazeatmyshoes