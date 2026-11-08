# yasserpulido.com

Minimal personal landing page for Yasser Pulido, built with React, TypeScript, Vite, and Firebase Hosting.

Professional details intentionally live in the downloadable PDF resumes rather than in the application.

## Requirements

- Node.js 18 or newer
- npm

## Development and validation

```bash
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
npm run preview
```

## Resume files

Place the real PDF files in `public/` with these permanent names:

- `public/cv-es.pdf`
- `public/cv-en.pdf`
- `public/cv-pt.pdf`

To update professional experience, replace those files without changing the React application. Do not create placeholder PDFs or duplicate one language into another.

## Deployment

Firebase Hosting serves the generated `dist/` directory. Existing GitHub Actions workflows provide pull request previews and deployment from `main`. Run all validation commands and ensure all three PDFs are present before deploying.
