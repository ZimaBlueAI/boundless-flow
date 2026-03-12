# Boundless Flow Docs Site

Documentation and landing pages for **Boundless Flow (无界音流)**.

🌐 Live site: https://boundless-flow.github.io/

## Project Overview

This folder contains the static documentation site for Boundless Flow, including:

- product landing pages in Chinese and English
- end-user guides for STT, translation, proofreading, summaries, and TTS
- appendix pages for installation, model downloads, and beginner-friendly setup
- shared screenshots and visual assets used across the site

## Main Pages

- `index.html` / `index-en.html`: product landing pages
- `welcome.html` / `welcome-en.html`: what Boundless Flow is and how to get started
- `stt.html` / `stt-en.html`: real-time STT and native-stt offline transcription
- `translation.html` / `translation-en.html`: real-time translation workflow
- `proofreading-summary.html` / `proofreading-summary-en.html`: AI proofreading and summary features
- `tts-voice-cloning.html` / `tts-voice-cloning-en.html`: TTS and voice cloning
- `appendix.html` / `appendix-en.html`: installation and configuration appendix
- `style.css`: shared site stylesheet
- `images/`: screenshots, banners, and product illustrations

## Deploy to GitHub Pages

1. **Create the repo** as `boundless-flow/boundless-flow.github.io`  
   (the special `<username>.github.io` naming makes GitHub Pages serve the site directly at `https://boundless-flow.github.io/`).

2. Push this folder as the `main` branch root:
   ```bash
   git init
   git remote add origin https://github.com/boundless-flow/boundless-flow.github.io.git
   git add .
   git commit -m "chore: initial site publish"
   git push -u origin main
   ```

3. In the repo **Settings → Pages**:
   - Source: **Deploy from branch**
   - Branch: `main` / `(root)`
   - Save.

The site is live in ~1 minute.

## Syncing with the Plugin Source

Source docs live in `ai-whiteboard-next/plugins/boundless-flow/docs/`.

After editing docs there, re-sync with:
```powershell
Copy-Item -Path "plugins\boundless-flow\docs\*" `
          -Destination "..\..\boundless-flow.github.io\" `
          -Recurse -Force
```

## Relationship to Main Project

This site is maintained from the Boundless Flow plugin workspace and should stay aligned with the main project README, screenshots, and feature set.

## License

See [boundless-flow](https://github.com/ZimaBlueAI/boundless-flow) for the main project license.
