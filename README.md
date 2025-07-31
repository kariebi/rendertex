# Contributing to rendertex

Thanks for your interest in contributing to **rendertex**! 🎉  
This project is focused on providing high-quality Markdown/LaTeX/KaTeX rendering with customization and extensibility in mind.

---

## 🛠️ Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/kariebi/rendertex.git
   cd rendertex
    ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development**

   ```bash
   npm run build
   ```

## 💻 In your project:

```ts
import { MDLatextText, renderMarkdownToHtml } from "marktex";

// 1. Use the component in React
<MDLatextText markdown="E = mc^2 and $\\frac{a}{b}$" />

// 2. Or use the utility function
const html = renderMarkdownToHtml("E = mc^2 and $\\frac{a}{b}$");
```

---

## 🚧 Code Guidelines

* Use **TypeScript**.
* Follow consistent code formatting (we recommend [Prettier](https://prettier.io/)).
* Write meaningful **commit messages**.
* Ensure any **new feature** includes:

  * Inline JSDoc comments
  * Tests (if applicable)
  * Updated README (if necessary)

---

## 🔀 Pull Requests

* Fork the repo and create your feature branch:
  `git checkout -b feat/your-feature-name`

* Commit your changes with clear messages.

* Push to your fork and submit a **pull request** to the `main` branch.

* Provide a detailed description of your changes.

---

## 💬 Communication

Open issues for bugs, feature requests, or design suggestions.
We welcome all feedback and contributions!

---

## 🧪 Coming Soon

* Unit tests

---
📬 [Want to contribute? Here's how.](CONTRIBUTING.md)
---

Made with ❤️ by [@kariebi](https://github.com/kariebi).

```

---