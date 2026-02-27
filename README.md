<div align="center">

<picture>
  <img alt="BoundlessFlow" src="docs/images/banner.png" width="100%" height="auto">
</picture>
<a href="http://boundless-flow.zimablueai.com">Website</a> · <a href="https://github.com/ZimaBlueAI/boundless-flow">GitHub</a> · <a href="https://github.com/ZimaBlueAI/boundless-flow/issues">Issues</a> · <a href="https://boundless-flow.github.io/docs">Docs</a>


[![][release-shield]][release-link]
[![][github-stars-shield]][github-stars-link]
[![][github-issues-shield]][github-issues-shield-link]
[![][github-contributors-shield]][github-contributors-link]
[![][license-shield]][license-shield-link]
[![][last-commit-shield]][last-commit-shield-link]

👋 Join our Community

📱 <a href="docs/images/lark-group.jpg">Lark Group</a> · <a href="#">WeChat</a> · <a href="https://discord.gg/mJphrXatyK">Discord</a> 

</div>

---

# Boundless Flow (无界音流)

An on-device intelligent voice assistant designed to boost creation and recording efficiency. Built with Tauri 2 (Rust backend) + Vite (TypeScript frontend), it delivers smooth realtime **STT (SenseVoice ONNX local inference)** and powerful **TTS (Rust libtorch + Python bridge + local/cloud models)** while running entirely on your local device to protect privacy.

## Project Overview

- **Core capabilities**: on-device realtime recording and recognition (cursor-follow injection supported), realtime translation, AI proofreading and summarization, text-to-speech and voice cloning
- **Main stack**: Tauri 2 (Rust), Vite (TypeScript), ONNX Runtime (Rust `ort`), Python (PyTorch/Transformers)
- **Scenarios**: meeting/interview notes, bilingual captions, speak-while-you-type (input injection), dubbing and voice cloning

## Features

### Realtime Speech-to-Text (STT)
- SenseVoice ONNX local inference with realtime and final results
- Three output modes: **cursor-follow injection** (recommended) / **realtime output** / **final auto-enter**
- Global hotkey `RightAlt` to start/stop recording anytime
- Supported languages: `auto` / `zh` / `en` / `yue` / `ja` / `ko` / `nospeech`
- Mini Mode: floating realtime captions window at the bottom-right

Download the STT model: [SenseVoiceSmall](https://github.com/FunAudioLLM/SenseVoice)
```
modelscope download --model iic/SenseVoiceSmall --local_dir ./SenseVoiceSmall
```

### Realtime Translation
- Built-in translation proxy with Ollama / OpenAI-compatible APIs
- Recommended local translation model: `ZimaBlueAI/HY-MT1.5-1.8` (Ollama)
- Bilingual captions in the same view with streaming output
- Strategies: translate only final results (saves API quota) or translate realtime results too

### AI Proofreading & Smart Summaries
- **AI proofreading** ("Principal" feature): auto-polish recognized text with configurable concurrency (default 2, max 4)
- **Smart summaries**: scheduled meeting/recording summaries (recommended every 60 seconds), shown as a tree or queue
- Supports OpenAI / Ollama / Volcengine; recommended local model: `qwen3:4b`

### Speech Synthesis & Voice Cloning (TTS)
- **Qwen3-TTS** with three modes:
  - `Base`: high-quality synthesis without reference audio
  - `CustomVoice`: clone a voice with 5-15 seconds of reference audio
  - `VoiceDesign`: generate a new voice from text prompts (no reference audio)
- **Index-TTS2** emotional vector control + prompt guidance for more expressive cloning
- **Cloud API support**:
  - Volcengine: rich high-quality voices, supports dialects/foreign languages
  - OpenAI TTS: alloy / echo / fable / onyx / nova / shimmer
  - MiniMax: high-expressiveness TTS models
- TTS runtime can be packaged in the full installer or downloaded on demand via Lite packages

### Other
- System tray: close the window to minimize to tray, restore or exit from the tray menu

## Quick Start

### Regular Users (Release)

1. Download and install the latest Release package, then double-click to launch
2. Open settings and point **Model Directory** to the SenseVoice model folder (must include `model.onnx` and `tokens.json`)
3. Press `RightAlt` to start recording

For model downloads and FAQs, see [INSTALL.md](INSTALL.md).

### Developers (Local Debugging)

```powershell
cd /path/to/boundless-flow
pnpm install
pnpm run tauri:dev
```

Full environment setup (Rust/MSVC, Python/TTS, Lite packages, packaging outputs) is in [INSTALL.md](INSTALL.md).

## Usage Guide

### STT Settings (In App)

| Setting | Description | Recommendation |
| --- | --- | --- |
| Model Directory | SenseVoice model folder (must include `model.onnx`, `tokens.json`) | Point to the exact model directory |
| Frame Interval (ms) | Audio frame send frequency; lower is more realtime but higher CPU | `20ms` |
| Language | auto/zh/en/yue/ja/ko/nospeech | `auto` |
| TextNorm | Text normalization | `auto` |
| Output Mode | Cursor-follow injection / realtime output / final auto-enter | Choose by scenario |

> Auto-downgrades if a platform does not support a feature (e.g., cursor-follow injection may be unavailable on some platforms).

### Translation Settings

| Setting | Example |
| --- | --- |
| Translation API Base URL | `http://localhost:11434/v1` (Ollama) / `https://api.openai.com/v1` |
| Translation Model | `ZimaBlueAI/HY-MT1.5-1.8` / `gpt-4o-mini` / `translategemma` |
| Translation API Key | Can be empty for Ollama |
| Streaming Output | Recommended (smoother for local models) |

### AI Proofreading & Summary Settings

| Setting | Description | Example |
| --- | --- | --- |
| Enable proofreading & summarization (LLM) | Global toggle | Enabled |
| Summary Provider | OpenAI / Ollama / Volcengine | Ollama |
| Summary API Base URL | Service endpoint | `http://localhost:11434/v1` |
| Summary Model | Model ID | `qwen3:4b` / `doubao-seed-1-6` |
| Proofreading Concurrency | 1-4 | `2` |
| Summary Update Interval (s) | Frequency of summaries | `60` |

### TTS Model Downloads (ModelScope)

**Qwen3-TTS:**
```bash
modelscope download --model Qwen/Qwen3-TTS-12Hz-1.7B-Base --local_dir ./Qwen/Qwen3-TTS-12Hz-1.7B-Base
modelscope download --model Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice --local_dir ./Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice
modelscope download --model Qwen/Qwen3-TTS-12Hz-1.7B-VoiceDesign --local_dir ./Qwen/Qwen3-TTS-12Hz-1.7B-VoiceDesign
```

**Index-TTS2:**
```bash
modelscope download --model IndexTeam/IndexTTS-2 --local_dir ./IndexTeam/IndexTTS-2
```

After downloading, set **TTS Model Directory** to the corresponding model folder in settings.

### TTS Cloud API Configuration (Volcengine example)

In settings, choose **Volcengine TTS** and fill in:

| Field | Description |
| --- | --- |
| AppId | Volcengine app identifier |
| Token | Access token |
| Cluster | Cluster identifier (e.g., `volcano_tts`) |
| VoiceType | Voice identifier |

Optional: UID, audio encoding, sample rate, speed/volume/pitch multipliers, emotion, and more.

## API Reference (Brief)

The Boundless Flow frontend calls backend commands via Tauri `invoke`, including:

- Config: `get_app_config` / `set_app_config`
- Recording: `start_listening` / `stop_listening`
- Injection: `inject_text`
- Translation proxy: `translate_via_backend`
- TTS: `tts_generate` / `tts_read_audio_base64`

Backend entrypoint: [src-tauri/src/main.rs](src-tauri/src/main.rs).

## Directory Structure

- Frontend: `src/` (Vite)
- Rust backend: `src-tauri/`
- Python bridge (TTS): `src-tauri/python/`
- Tauri config: `src-tauri/tauri.conf.json` (plus platform-specific configs)
- Docs: `docs/` (detailed user guides in Chinese and English)

## Docs Overview

- `docs/index.html`: documentation entry and core capabilities
- `docs/stt.html`: realtime STT and model configuration
- `docs/translation.html`: realtime translation flow and settings
- `docs/proofreading-summary.html`: AI proofreading and smart summaries
- `docs/tts-voice-cloning.html`: speech synthesis and voice cloning
- `docs/appendix.html`: model downloads and API configuration guide
- `docs/context-landing.html`: design philosophy, quick start, and best practices landing page

English docs are located alongside as `*-en.html`.

## Contribution Guide

Local checks before submitting:

```powershell
cd /path/to/boundless-flow
pnpm run type-check
pnpm run build
pnpm run tauri:build
pnpm run tauri:bundle
```

Recommended submission: a single goal, reproducible steps, screenshots/logs (especially for UI/audio issues).

## UI Preview

![Main panel](docs/images/img.png)

---

Copyright  2026 ZimaBlueAI & WaytoAGI-dev. All rights reserved.  

<!-- Link Definitions -->

[release-shield]: https://img.shields.io/github/v/release/ZimaBlueAI/boundless-flow?color=369eff&labelColor=black&logo=github&style=flat-square
[release-link]: https://github.com/ZimaBlueAI/boundless-flow/releases
[license-shield]: https://img.shields.io/badge/license-apache%202.0-white?labelColor=black&style=flat-square
[license-shield-link]: https://github.com/ZimaBlueAI/boundless-flow/blob/main/LICENSE
[last-commit-shield]: https://img.shields.io/github/last-commit/ZimaBlueAI/boundless-flow?color=c4f042&labelColor=black&style=flat-square
[last-commit-shield-link]: https://github.com/ZimaBlueAI/boundless-flow/commits/main
[github-stars-shield]: https://img.shields.io/github/stars/ZimaBlueAI/boundless-flow?labelColor&style=flat-square&color=ffcb47
[github-stars-link]: https://github.com/ZimaBlueAI/boundless-flow
[github-issues-shield]: https://img.shields.io/github/issues/ZimaBlueAI/boundless-flow?labelColor=black&style=flat-square&color=ff80eb
[github-issues-shield-link]: https://github.com/ZimaBlueAI/boundless-flow/issues
[github-contributors-shield]: https://img.shields.io/github/contributors/ZimaBlueAI/boundless-flow?color=c4f042&labelColor=black&style=flat-square
[github-contributors-link]: https://github.com/ZimaBlueAI/boundless-flow/graphs/contributors