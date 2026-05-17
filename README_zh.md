# opennoob

<p align="center">
  <strong><a href="https://www.noobclaw.com/">NoobClaw</a> 的开源构建模块 —— 全球首款 Web3 即插即用 AI 智能助手。</strong>
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" alt="MIT License"></a>
  <br>
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Node-20%2B-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node">
  <img src="https://img.shields.io/badge/Tauri-2-FFC131?style=for-the-badge&logo=tauri&logoColor=white" alt="Tauri">
</p>

<p align="center">
  <a href="README.md">English</a> · 中文
</p>

---

## 关于

**opennoob** 是 **[NoobClaw](https://www.noobclaw.com/)** 背后的开源 TypeScript 工具集。NoobClaw 是全球首款 Web3 即插即用 AI 智能助手，将自主 AI Agent、完整 Web3 生态与一套多平台社交涨粉工具箱融为一体 —— 钱包认证、代币经济、加密市场追踪、去中心化身份，再加上 **币安广场、X（推特）、YouTube、TikTok、小红书、抖音、视频号、Bilibili、快手** 的一键互动 —— 全部集成在一个桌面应用中，更可以边玩边挖 $NoobCoin。

本仓库开放了产品所依赖的核心模块：IM 网关（钉钉、飞书、Telegram、Discord）、Agent 技能（网页搜索、IMAP/SMTP 邮件），以及用于打包多平台桌面应用的 Electron/Tauri 工具脚本。MIT 协议 —— 你可以自由用在自己的产品里、fork、或向上游贡献代码。

## NoobClaw 能做什么

告诉 NoobClaw 你需要什么 —— 分析数据、撰写报告、制作视频、搜索信息、收发邮件,或在多个社交平台上自动涨粉 —— 它就会自主完成。连接钱包即可使用内置 AI 服务,无需 API Key;通过使用和邀请好友赚取 $NoobCoin;实时关注 Web3 新闻、KOL 动态、岗位信息和交易所资讯。

核心是 **Cowork 模式**:Agent 在本地或沙箱环境中执行工具、操作文件、运行命令,一切都在你的明确授权下进行。你掌控全局,NoobClaw 负责干活。

## 核心亮点

| | 特性 | 说明 |
|---|------|------|
| **多平台一键涨粉** | 币安广场、X（推特）、YouTube、TikTok、小红书、抖音、视频号、Bilibili、快手 | 自动点赞 / 关注 / 评论 / 发帖，节奏拟人 |
| **Web3 钱包** | 钱包认证、BNB 支付、代币余额、订单管理 | 无需注册，连接钱包即用 |
| **$NoobCoin 经济** | 使用赚币、邀请返利、空投奖励 | 越用越赚 |
| **Web3 信息中心** | 加密新闻、KOL 追踪、Web3 求职、交易所目录 | 一站掌握 Web3 动态 |
| **全能 AI Agent** | 数据分析、PPT、视频、文档、搜索、邮件 | 一个 Agent 搞定日常工作全流程 |
| **21 种内置技能** | Office 文档、Playwright 自动化、Remotion 视频、Canvas 设计、邮件、天气等 | 开箱即用 |
| **技能商店** | 浏览、安装、创建社区技能 | 能力无限扩展 |
| **免费使用 AI** | 内置 NoobClaw AI 新用户赠送 100 万 Token，亦支持 OpenAI / DeepSeek 等主流 AI 厂商 |
| **本地 + 沙箱** | 本地直接运行或隔离的 Alpine Linux VM | 要速度有速度，要安全有安全 |
| **定时任务** | 对话式或 GUI 创建 Cron 定时任务 | 每日新闻、周报、邮箱整理 —— 全自动 |
| **持久记忆** | 自动从对话中提取偏好和个人信息 | 越用越懂你 |
| **手机远程操控** | Telegram、Discord、钉钉、飞书 | Agent 装进口袋 |
| **MCP 集成** | 支持 stdio / SSE / HTTP 协议的 MCP 服务器 | 接入任意外部工具和数据源 |
| **权限门控** | 每一次敏感工具调用都需要你的批准 | 你始终掌控一切 |
| **全平台** | macOS（Intel + Apple Silicon）、Windows、Linux、IM 移动端 | 哪里都能用 |
| **数据本地化** | SQLite 本地存储 | 数据不离开你的设备 |

## 社交涨粉套件

NoobClaw 内置一套覆盖多平台的智能互动引擎，专为内容创作者和 Web3 KOL 打造。每个平台都有独立的配置向导，流程统一：选赛道 → 设区间 → 一键开跑。

| 平台 | 主题色 | 核心能力 |
|------|------:|----------|
| 🔶 **币安广场** | amber | 自动发帖（文 + AI 配图）、评论、点赞 |
| 🐦 **X（推特）** | sky | 关键词搜索 → 点赞 / 回复 / 关注，按区间循环 |
| ▶️ **YouTube** | indigo | 关键词搜索 → 点赞 / 订阅 / 评论 |
| 🎵 **TikTok** | cyan | 关键词搜索 → 点赞 / 关注 / 评论 |
| 📕 **小红书** | rose | 按赛道发现笔记，符合人设的自动回复 |
| 🎬 **抖音** | violet | 关键词搜索 → 点赞 / 关注 / 评论 |
| 📡 **视频号** | emerald | 关键词搜索 → 点赞 / 关注 / 评论 |
| 📺 **Bilibili** | pink | 搜索 → 点赞 / 投币 / 关注 / 评论 |
| ⚡ **快手** | orange | 关键词搜索 → 点赞 / 关注 / 评论 |

**完全模拟人类行为不封号。** 配额循环采用每轮可配置的随机区间（min–max），回复内容由 LLM 即时生成，并与原帖语言匹配（中文进 → 中文出，英文进 → 英文出）。

**赛道服务端下发。** 每个平台都有官方精选赛道（中 + 英双语），按客户端语言自动选择。赛道列表后端可热更新，无需发版。

**浏览器分组管理。** 内置 Chrome 扩展按平台自动给标签页打分组色，多任务切换不再眼花。

## Web3 功能

### 钱包与支付

NoobClaw 采用钱包认证 —— 不需要传统账号。连接你的 Web3 钱包即可解锁内置 AI 服务并管理代币。

- **钱包认证** — 连接 Web3 钱包即可登录，认证令牌和钱包地址本地存储
- **BNB 支付** — 用 BNB 购买 AI 使用额度，完整的订单生命周期管理（待支付 → 确认中 → 已完成）
- **代币余额** — 应用内实时余额显示与刷新
- **订单历史** — 完整的支付记录，支持筛选和搜索

### $NoobCoin 代币经济

- **使用赚币** — 通过使用和互动积累 $NoobCoin
- **邀请返利** — 邀请好友赚取额外代币奖励
- **空投领取** — 在应用内直接领取空投奖励
- **幸运红包** — 领取惊喜代币奖励

### Web3 信息中心

**热点** 视图和 **Web3 连接** 面板让你时刻掌握去中心化世界的脉搏：

- **加密行情** — BTC、ETH、SOL、BNB、AVAX、DOT、ADA、DOGE、XRP 实时价格图标
- **新闻动态** — 精选 Web3 新闻，支持分类筛选和分页浏览
- **KOL 追踪** — 关注加密领域关键意见领袖
- **Web3 求职** — 聚合 Web3.Career、CryptoJobs、DeJob 等平台岗位
- **交易所目录** — 浏览和访问各大加密货币交易所

### 活动与合作伙伴

专属视图展示 Web3 合作公告、社区活动和生态更新。

## 本仓库内容

### `src/main/im/` — 聊天平台网关

四个聊天平台的生产级适配器。接入一个 `IMChatHandler`，同一个 Bot 即可在以下平台触达：

| 平台 | 特性 |
|------|------|
| **钉钉** | Stream API、OAuth Token 缓存、富媒体上传 |
| **飞书** | 长连接 WebSocket、系统代理感知 |
| **Telegram** | 长轮询、媒体下载、MarkdownV2 |
| **Discord** | Gateway v10 |

管理层在 `imGatewayManager.ts`，对外 API 在 `index.ts`。

### `skills/web-search/`

即插即用的网页搜索技能，通过 Playwright 控制的无头浏览器执行实时检索。Google + Bing 自动 fallback。本地 HTTP 桥，任何 Agent 运行时都可以调用。

### `skills/imap-smtp-email/`

IMAP/SMTP 邮件技能。可正常工作于 Gmail、Outlook，以及多数开源 SMTP 代码处理不好"授权码登录"的国内邮箱（163、126、QQ 邮箱）。

### `scripts/`

| 脚本 | 作用 |
|------|------|
| `setup-mingit.js` | 把可移植版 Git 打包进 Windows 版 Electron/Tauri 应用 |
| `setup-python-runtime.js` | 内嵌可分发的 CPython 3.11 运行时，pip 已 bootstrap |
| `generate-tray-icons.js` | 从单张源 PNG 生成跨平台托盘图标 |
| `build-sidecar.js` | 用 esbuild + `@yao-pkg/pkg` 构建 Tauri Node.js sidecar 二进制 |

### `patches/`

`patch-package` 针对上游 npm 依赖的补丁。

## 快速开始

```bash
git clone https://github.com/noobclaw/opennoob.git
cd opennoob
npm install
```

每个技能也可独立安装：

```bash
cd skills/web-search
npm install
npm start
```

## 支持的 AI 服务商（NoobClaw 内置）

| 服务商 | 代表模型 | API 格式 |
|--------|---------|----------|
| **NoobClaw AI**（默认） | GPT / Gemini / DeepSeek / Qwen / Minimax | OpenAI |
| OpenAI | GPT-5.2, GPT-5.2 Codex | OpenAI |
| Anthropic | Claude Sonnet 4.5/4.6, Claude Opus 4.6 | Anthropic |
| DeepSeek | DeepSeek Chat, DeepSeek Reasoner | Anthropic |
| Moonshot（Kimi） | Kimi K2.5 | Anthropic |
| 通义千问（阿里） | Qwen 3.5 Plus, Qwen 3 Coder Plus | Anthropic |
| 智谱（GLM） | GLM 5, GLM 4.7 | Anthropic |
| Gemini | Gemini 3 Pro / 3.1 Pro / 3 Flash | OpenAI |
| Minimax | MiniMax M2.5, M2.1 | Anthropic |
| 自定义 | 任意 OpenAI 兼容接口 | 可配置 |

## 技术栈

| 层 | 技术 |
|----|------|
| 外壳 | Tauri 2 (Rust) |
| 前端 | React 18 + TypeScript 5 |
| 构建 | Vite 5 |
| 样式 | Tailwind CSS 3 |
| 状态 | Redux Toolkit |
| 存储 | sql.js (SQLite) |
| 浏览器桥 | Chrome 扩展 (Manifest V3) |
| IM | grammY · discord.js · dingtalk-stream · @larksuiteoapi/node-sdk |

## 许可证

[MIT License](LICENSE)

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=noobclaw/opennoob&type=date&legend=top-left)](https://www.star-history.com/#noobclaw/opennoob&type=date&legend=top-left)

---

由 [NoobClaw](https://www.noobclaw.com/) 开发维护。
