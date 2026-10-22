<div align="center">
<img src="docs/images/v050/brand-mark.png" width="72" alt="Boundless Flow">
<h1>Boundless Flow · 无界音流</h1>
<p>录音、转写、项目资料、灵录报告与声音创作的桌面语音工作台。</p>
<p><a href="README.md">English</a> · <a href="https://boundless-flow.zimablueai.com/">使用手册</a> · <a href="https://boundless-flow.zimablueai.com/policy.html">隐私政策</a> · <a href="https://github.com/ZimaBlueAI/boundless-flow/releases">发布页</a> · <a href="https://github.com/ZimaBlueAI/boundless-flow/issues">反馈</a></p>
</div>

## 当前版本与发布状态

更新于 **2026 年 10 月 22 日**，以已交付 **Windows v0.5.0.r514** 为基线。本仓库公开产品介绍和使用手册，**不包含桌面程序源码**。

使用正式发布者标识的 Windows x64 MSIX 候选包已通过 Partner Center **上传验证**。商店产品仍为提交草稿，上传验证不等于微软认证、打包后功能验收或已经上架。Windows 版本保留现有 CPU 与可选 NVIDIA CUDA 路径；是否加速取决于具体模型、硬件和驱动，模型需另行准备。

r515 配置复用改进尚未交付，不作为已发布功能介绍。Linux、macOS、Windows ARM64 的包或源码套件有各自版本和验收范围，不能因 Windows 已到 r514 就认定其他平台同版完成。

## 使用场景

| 场景 | 当前能力及边界 |
| --- | --- |
| 语音转文字 | 麦克风字幕与文件转写；配置引导集中登记兼容模型，在对应任务中选择。 |
| 中文语音输入 | 识别、文字整理、术语与输入投递；人名、数字和事实需要复核，指定声纹自动输入不等于已经普遍验证。 |
| 会议与灵录 | 音频依据、逐字稿、说话人标签、编辑和结构化报告；分段处理，停止后处理不足一段的尾音。已提示的后台任务可能在关闭面板后继续。 |
| 项目资料 | 分层整理、重命名、继续记录、按选定资料生成报告，以及对应项目的导出和导入。 |
| 声音工具 | 按引擎支持范围进行合成、设计、克隆和情绪调节，参考声音须有相应许可。 |
| 语音同传 | 连续分段识别、翻译和合成，配合 Mini 控件；延迟受模型、硬件、分段和服务影响，不保证零延迟真同传。 |
| 声纹与情绪 | 可选本地分析辅助整理，不是身份认证或医疗、心理诊断。 |
| 合成来源标记 | 部分生成声音带离线可验证水印，同传不加该水印；不证明身份，不保证经 MP3 或其他处理后仍可检出。 |

## 新用户开始使用

1. 安装适合实际设备的平台版本。商店提交用未签名 MSIX 不用于直接双击旁加载。
2. 进入 **配置引导页 → 本地模型库**，选择保存磁盘，登记兼容模型，或配置模型服务与 API。
3. 检查模型和组件，先做短录音或合成试验。登记成功、下载完成不等于模型已经运行成功。
4. 在转写、声音工具或 STS 同传工作台选择已登记条目。
5. 整理项目和生成报告时，保留原始音频，并在分享前复核内容。

[配置引导](docs/onboarding.html) · [小白场景教程](docs/scenarios/index.html) · [模型与 API](docs/models.html)

## 模型、API 与运行组件

麦克风识别支持已接入的 SenseVoice ONNX、Fun-ASR-Nano 等路径；原生 Whisper / SenseVoice 文件转写有独立格式要求。具体引擎、模型大小、量化版本、组件和用途须按模型目录匹配。

本地原生路径使用对应原生组件，不能一概认为都需要 Python，也不能认为所有第三方引擎都不需要单独服务或环境。本机、局域网与云端的数据位置不同；Qwen 实时协议不能当作通用 OpenAI 兼容转写接口配置。

本仓库不提交模型权重、私钥、API 凭证、测试录音、安装包或编译中间文件。

## 使用手册

| 主题 | 入口 |
| --- | --- |
| 总览与入门 | [首页](docs/index.html)、[欢迎](docs/welcome.html)、[配置引导](docs/onboarding.html) |
| 转写与输入 | [转文字](docs/stt.html)、[校正与摘要](docs/proofreading-summary.html) |
| 会议与项目 | [会议视图](docs/meeting.html)、[项目资料库](docs/project-library.html) |
| 灵录与亲子记录 | [灵录](docs/linglu.html)、[成长报告](docs/growth.html) |
| 翻译与声音 | [字幕翻译](docs/translation.html)、[声音工具](docs/tts-voice-cloning.html)、[STS 同传](docs/sts.html) |
| 分析与配置 | [声纹](docs/voiceprints.html)、[模型与 API](docs/models.html)、[附录](docs/appendix.html) |
| 数据与隐私 | [隐私政策](docs/policy.html) |

保留整个 docs 文件夹可离线阅读。原来的[设计哲学页面](docs/design-philosophy-v04.html)保留作历史资料，不作为当前操作说明。

## 隐私与反馈

本地模型在本机推理；主动选择服务或 API 时，任务内容会发送到配置端点，对方有独立的留存与训练政策。导出和备份也可能保留敏感资料。请阅读隐私政策。

支持、隐私与数据请求、AI 内容反馈：**bf-support@zimablueai.com**。公开反馈请提供版本、平台、引擎、复现步骤和脱敏报错，不要上传私人录音、可识别声纹、API 密钥或私钥。

第三方模型和组件各有独立许可，本公开文档仓库不包含桌面源码，也不授予第三方模型权重的使用权。

Copyright © 2026 ZimaBlueAI & WaytoAGI-dev.
