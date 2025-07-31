
# 📦 rendertex

**RenderTex** provides high-quality **Markdown**, **LaTeX**, and **KaTeX** rendering for React projects — with extensibility and developer experience in mind.

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)

---

## ✨ Features

* ✅ Markdown + LaTeX + KaTeX rendering
* 💡 Component-based + utility-based usage
* 🎯 TypeScript support
* 🎨 Extensible and customizable

---

## 🚀 Getting Started

### 1. Install

```bash
npm install rendertex
# or
yarn add rendertex
```

### 2. Usage in Your Project

```tsx
import { MDLatextText, renderMarkdownToHtml } from "rendertex";

// 1. Use the component (React)
<MDLatextText markdown="E = mc^2 and $\\frac{a}{b}$" />

// 2. Use the rendering utility function
const html = renderMarkdownToHtml("E = mc^2 and $\\frac{a}{b}$");
```

---

## 📂 Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/kariebi/rendertex.git
   cd rendertex
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Build the package**

   ```bash
   npm run build
   ```

---

## 🧑‍💻 Contributing

Thanks for your interest in contributing to **rendertex**! 🎉

### Code Guidelines

* Use **TypeScript**
* Keep code clean and consistent (we recommend [Prettier](https://prettier.io/))
* Write clear, descriptive **commit messages**
* Ensure any feature additions include:

  * 🔍 Inline JSDoc comments
  * ✅ Tests (if applicable)
  * 📖 Updated README/docs (if applicable)

### Pull Requests

1. Fork the repo and create your feature branch:

   ```bash
   git checkout -b feat/your-feature-name
   ```

2. Commit your changes with a clear message

3. Push to your fork and submit a PR to `main`

4. Include a detailed explanation of your changes

---

## 📬 Communication

* Found a bug? Have an idea?
* Open an issue — we're always open to feedback and discussion!

---

## 🧪 Coming Soon

* ✅ Unit tests
* 🌐 Live demo playground
* ⚙️ CI/CD pipeline

---

📄 MIT License
📬 [Want to contribute? Here's how.](CONTRIBUTING.md)

---

Made with ❤️ by [@kariebi](https://github.com/kariebi)

---
