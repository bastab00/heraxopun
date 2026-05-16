# HeraXopun

A full-stack Vite/TanStack React project showcasing memories and journeys from Northeast India.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:8080` in your browser.

## Build

```bash
npm run build
```

The client build output is in `dist/client`.

## Deploy

This project can be deployed to Netlify as a static site using:

- Build command: `npm run build`
- Publish directory: `dist/client`

If you use GitHub integration, Netlify will automatically deploy on push.

## Notes

- `src/` contains app source files.
- `src/lib/content.ts` holds content data and assets.
- `src/routes/index.tsx` is the homepage layout.
- `src/components` contains shared UI components.
