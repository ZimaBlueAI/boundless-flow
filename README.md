<div align="center">
<img src="docs/images/v050/brand-mark.png" width="72" alt="Boundless Flow">
<h1>Boundless Flow · 无界音流</h1>
<p>A desktop voice workspace for transcription, project records, LingLu reports and speech.</p>
<p><a href="README-zh.md">简体中文</a> · <a href="https://boundless-flow.zimablueai.com/">Manual</a> · <a href="https://boundless-flow.zimablueai.com/policy.html">Privacy</a> · <a href="https://github.com/ZimaBlueAI/boundless-flow/releases">Releases</a> · <a href="https://github.com/ZimaBlueAI/boundless-flow/issues">Issues</a></p>
</div>

## Current status

Updated **22 October 2026**, aligned with delivered **Windows v0.5.0.r514**. This repository publishes documentation and product information; it does **not** contain the desktop application's source tree.

The official-identity Windows x64 MSIX candidate has passed Partner Center **package upload validation**. The Store product remains a submission draft; certification, packaged functional acceptance and public availability must not be inferred from validation. Windows builds include existing CPU and optional NVIDIA CUDA runtime paths; acceleration depends on the selected model, hardware and driver. Models are prepared separately.

The r515 configuration-reuse work is unfinished and is not presented as delivered. Other-platform packages and source kits have independent revisions and hardware validation; Windows r514 does not establish matching Linux, macOS or Windows ARM64 delivery.

## Workflows

| Workflow | Current capability and limits |
| --- | --- |
| Speech-to-text | Microphone captions and file transcription. Register compatible models centrally in Setup, then select them for the relevant task. |
| Chinese voice input | Recognition, correction, terminology and text delivery. Review names, numbers and facts. Experimental speaker-filtered automatic input is not a generally verified capability. |
| Meetings and LingLu | Audio-backed transcripts, speaker labels, editing and structured reports. Chunked processing handles the final partial chunk after Stop; announced background work may outlive a panel. |
| Project records | Organize and rename material, continue records, build reports from selected material, and export/import supported project archives. |
| Speech generation | Synthesis, design, cloning and expression controls where the engine supports them. Use authorized reference voices. |
| Speech translation | Continuous segmented recognition → translation → synthesis, plus Mini controls. Latency depends on model, hardware, segmentation and service; zero-latency simultaneous speech is not guaranteed. |
| Speaker / emotion analysis | Optional local analysis assists review. It is not identity authentication or medical/psychological diagnosis. |
| Provenance | Some generated speech carries an offline-verifiable source watermark; live interpretation is excluded. Detection does not establish identity, and MP3/transcoding robustness is not guaranteed. |

## Get started

1. Install a published package appropriate for your platform. An unsigned Store-submission MSIX is not a double-click sideload installer.
2. Open **Setup → Local Model Library**. Choose a storage drive and register compatible models, or configure a service/API.
3. Check components and run a short recording or synthesis trial. Registration and downloaded files alone do not prove inference.
4. Select the registered entry in transcription, voice tools or the STS workbench.
5. Retain original audio and review generated text before sharing.

[Setup](docs/onboarding-en.html) · [Beginner scenarios](docs/scenarios/index-en.html) · [Model catalogue](docs/models-en.html)

## Models, APIs and runtimes

Supported local microphone paths include SenseVoice ONNX and Fun-ASR-Nano. Native Whisper / SenseVoice file transcription has its own compatible model formats. Consult the model catalogue for actual engine, variant and component requirements.

Compatible native paths use their corresponding native components. Do not assume every route requires Python, or that every third-party engine runs without its own runtime/service. Local, LAN and cloud endpoints are different data locations. Qwen realtime protocols are not interchangeable with generic OpenAI-compatible transcription endpoints.

No model weights, private keys, API credentials, test audio or installers are committed here.

## Documentation

| Topic | Guide |
| --- | --- |
| First use | [Overview](docs/index-en.html), [Welcome](docs/welcome-en.html), [Setup](docs/onboarding-en.html) |
| Transcription and input | [STT](docs/stt-en.html), [Correction](docs/proofreading-summary-en.html) |
| Meetings and projects | [Meeting workspace](docs/meeting-en.html), [Project library](docs/project-library-en.html) |
| LingLu and family records | [LingLu](docs/linglu-en.html), [Growth reports](docs/growth-en.html) |
| Translation and speech | [Translation](docs/translation-en.html), [Voice tools](docs/tts-voice-cloning-en.html), [STS](docs/sts-en.html) |
| Analysis and configuration | [Voiceprints](docs/voiceprints-en.html), [Models and APIs](docs/models-en.html), [Appendix](docs/appendix-en.html) |
| Privacy | [Policy](docs/policy.html) |

Keep the docs folder intact for offline reading. The old [design landing page](docs/design-philosophy-v04.html) remains as historical material, not the current setup guide.

## Privacy and feedback

Local inference runs on your device. Selecting a model service or API sends task content to the configured endpoint; that provider's retention and training policies apply separately. Exports and backups may retain sensitive material. Read the [privacy policy](docs/policy.html).

Support, privacy requests and AI-content reports: **bf-support@zimablueai.com**. In public issues, include the revision, platform, engine, reproduction steps and redacted errors. Do not post private recordings, identifiable voice features, credentials or private keys.

Third-party models and components have independent licenses. This documentation repository does not include desktop source or grant rights to third-party model weights.

Copyright © 2026 ZimaBlueAI & WaytoAGI-dev.
