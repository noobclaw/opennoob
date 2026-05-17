# opennoob

<p align="center">
  <strong>Open building blocks of <a href="https://www.noobclaw.com/">NoobClaw</a> — the world's first plug-and-play Web3 AI assistant.</strong>
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" alt="MIT License"></a>
  <br>
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Node-20%2B-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node">
  <img src="https://img.shields.io/badge/Tauri-2-FFC131?style=for-the-badge&logo=tauri&logoColor=white" alt="Tauri">
</p>

<p align="center">
  English · <a href="README_zh.md">Chinese</a>
</p>

---

## About

**opennoob** is the open-source TypeScript toolkit behind **[NoobClaw](https://www.noobclaw.com/)**, the world's first plug-and-play Web3 AI assistant. NoobClaw combines an autonomous AI Agent, a full Web3 ecosystem, and a multi-platform social-growth toolkit — wallet authentication, token economics, crypto market tracking, decentralized identity, plus one-click viral engagement on **Binance Square, X (Twitter), YouTube, TikTok, Xiaohongshu, Douyin, WeChat Channels, Bilibili, and Kuaishou** — all in one desktop app. Use it and mine $NoobCoin along the way.

This repository ships the open building blocks that power the product: IM gateways (DingTalk, Feishu, Telegram, Discord), agent skills (web search, IMAP/SMTP email), and the Electron/Tauri packaging utilities used to ship a multi-platform desktop binary. MIT licensed — use them in your own product, fork them, or contribute upstream.

## What NoobClaw Does

Tell NoobClaw what you need — analyze data, draft a report, create a video, search the web, send an email, or grow your account across multiple social platforms — and the Agent gets it done. Connect your Web3 wallet to access the built-in AI service with no API key required, earn $NoobCoin through usage and referrals, and stay on top of the Web3 world with real-time news, KOL tracking, job listings, and exchange discovery.

At its core is **Cowork mode**: the Agent executes tools, manipulates files, and runs commands in a local or sandboxed environment, all under your explicit approval. You stay in control; NoobClaw does the heavy lifting.

## Highlights

| | Feature | What It Means |
|---|---------|---------------|
| **Multi-Platform Auto-Engage** | Binance Square, X (Twitter), YouTube, TikTok, Xiaohongshu, Douyin, WeChat Channels, Bilibili, Kuaishou | One click to like / follow / comment / post with human-like pacing |
| **Web3 Wallet** | Wallet-based auth, BNB payments, token balance, order management | No accounts, no passwords — connect your wallet and go |
| **$NoobCoin Economy** | Earn tokens through usage, referrals, and airdrops | The more you use it, the more you earn |
| **Web3 Hub** | Crypto news feed, KOL tracking, Web3 job board, exchange directory | Your Web3 information center |
| **All-in-One AI Agent** | Data analysis, PPT, video, docs, web search, email | One Agent handles your entire workflow |
| **21 Built-in Skills** | Office docs, Playwright automation, Remotion video, canvas design, email, weather | Rich out-of-the-box capabilities |
| **Skill Store** | Browse, install, and create community skills | Infinitely extensible |
| **Free AI Access** | Built-in NoobClaw AI with 1M free tokens for new users; also supports OpenAI, DeepSeek, and other mainstream providers |
| **Local + Sandbox** | Run on your machine or in an isolated Alpine Linux VM | Speed when you want it, safety when you need it |
| **Scheduled Tasks** | Cron-based recurring tasks via conversation or GUI | Daily news, weekly reports, inbox cleanup — on autopilot |
| **Persistent Memory** | Auto-extracts preferences and facts from conversations | Gets smarter the more you use it |
| **Mobile via IM** | Telegram, Discord, DingTalk, Feishu (Lark) | Your Agent in your pocket |
| **MCP Integration** | stdio / SSE / HTTP Model Context Protocol servers | Plug in any external tool or data source |
| **Permission Gating** | Every sensitive tool call requires your approval | You're always in control |
| **Cross-Platform** | macOS (Intel + Apple Silicon), Windows, Linux, Mobile via IM | Works everywhere |
| **Local Data** | SQLite on-device storage | Your data never leaves your machine |

## Social Growth Suite

NoobClaw bundles a multi-platform engagement engine for creators and Web3 KOLs. Each platform has its own configuration wizard with a consistent flow: pick a track, set your per-round quotas, hit start.

| Platform | Theme | What It Does |
|----------|------:|--------------|
| 🔶 **Binance Square** | amber | Auto-publish posts (text + AI-generated images), comment, like |
| 🐦 **X (Twitter)** | sky | Search → like / reply / follow with quota loops |
| ▶️ **YouTube** | indigo | Keyword search → like / subscribe / comment |
| 🎵 **TikTok** | cyan | Keyword search → like / follow / comment |
| 📕 **Xiaohongshu** | rose | Discover by track, auto-reply with on-brand persona |
| 🎬 **Douyin** | violet | Keyword search → like / follow / comment |
| 📡 **WeChat Channels** | emerald | Keyword search → like / follow / comment |
| 📺 **Bilibili** | pink | Search → like / coin / follow / comment |
| ⚡ **Kuaishou** | orange | Keyword search → like / follow / comment |

**Designed to look human.** Quota-based loops use configurable random min–max ranges per round. Replies are LLM-generated and language-matched to the source post (Chinese in → Chinese out, English in → English out).

**Track presets, server-driven.** Each platform ships with curated tracks (bilingual ZH + EN). Track lists live on the server, so new ones can ship without a client update.

**Browser tab groups.** A bundled Chrome extension auto-tags tabs into per-platform groups so a busy session stays readable.

## Web3 Features

### Wallet & Payments

NoobClaw uses wallet-based authentication — no traditional accounts required. Connect your wallet to unlock the built-in AI service and manage your tokens.

- **Wallet Authentication** — Log in by connecting your Web3 wallet; auth token and wallet address stored locally
- **BNB Payments** — Purchase AI usage credits with BNB; full order lifecycle (pending → confirming → completed)
- **Token Balance** — Real-time balance display and refresh
- **Order History** — Full payment history with filtering and search

### $NoobCoin Token Economy

- **Earn $NoobCoin** through usage and engagement
- **Referral Rewards** — invite friends and earn bonus tokens
- **Airdrops** — claim airdrop rewards directly in the app
- **Lucky Bag** — surprise token rewards

### Web3 Information Hub

The **Hot Topics** view and **Web3 Connection** panel keep you plugged into the decentralized world:

- **Crypto Ticker** — live prices for BTC, ETH, SOL, BNB, AVAX, DOT, ADA, DOGE, XRP
- **News Feed** — curated Web3 news with category filtering and pagination
- **KOL Tracking** — follow key opinion leaders in the crypto space
- **Web3 Jobs** — aggregated listings from Web3.Career, CryptoJobs, DeJob
- **Exchange Directory** — browse and visit cryptocurrency exchanges

### Events & Partners

Dedicated view for Web3 partnership announcements, community events, and ecosystem updates.

## What's in This Repo

### `src/main/im/` — Chat platform gateways

Production-grade adapters for four chat platforms. Plug in a single `IMChatHandler` and one bot becomes reachable on:

| Platform | Highlights |
|----------|------------|
| **DingTalk** | Stream API, OAuth token caching, media upload |
| **Feishu (Lark)** | Long-connection WebSocket, system-proxy aware |
| **Telegram** | Long-polling, media downloads, MarkdownV2 |
| **Discord** | Gateway v10 |

Manager surface in `imGatewayManager.ts`, public API in `index.ts`.

### `skills/web-search/`

Drop-in skill that runs live web searches through a Playwright-controlled headless browser. Google + Bing with automatic fallback. Exposes a local HTTP bridge any agent runtime can call.

### `skills/imap-smtp-email/`

IMAP/SMTP email skill. Works with Gmail, Outlook, and Chinese mail providers (163, 126, QQ Mail) where most open-source SMTP code mishandles authorization-code auth.

### `scripts/`

| Script | Purpose |
|--------|---------|
| `setup-mingit.js` | Bundle a portable Git runtime into Windows builds of an Electron/Tauri app |
| `setup-python-runtime.js` | Bundle an embeddable CPython 3.11 runtime with `pip` |
| `generate-tray-icons.js` | Generate cross-platform tray icons from one source PNG |
| `build-sidecar.js` | Build a Node.js sidecar binary for Tauri via esbuild + `@yao-pkg/pkg` |

### `patches/`

`patch-package` patches against upstream npm dependencies.

## Quick Start

```bash
git clone https://github.com/noobclaw/opennoob.git
cd opennoob
npm install
```

Each skill is independently installable:

```bash
cd skills/web-search
npm install
npm start
```

## Supported AI Providers (in NoobClaw)

| Provider | Notable Models | API Format |
|----------|---------------|------------|
| **NoobClaw AI** (default) | GPT / Gemini / DeepSeek / Qwen / Minimax | OpenAI |
| OpenAI | GPT-5.2, GPT-5.2 Codex | OpenAI |
| Anthropic | Claude Sonnet 4.5/4.6, Claude Opus 4.6 | Anthropic |
| DeepSeek | DeepSeek Chat, DeepSeek Reasoner | Anthropic |
| Moonshot (Kimi) | Kimi K2.5 | Anthropic |
| Qwen (Alibaba) | Qwen 3.5 Plus, Qwen 3 Coder Plus | Anthropic |
| Zhipu (GLM) | GLM 5, GLM 4.7 | Anthropic |
| Gemini | Gemini 3 Pro / 3.1 Pro / 3 Flash | OpenAI |
| Minimax | MiniMax M2.5, M2.1 | Anthropic |
| Custom | Any OpenAI-compatible endpoint | Configurable |

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Shell | Tauri 2 (Rust) |
| Frontend | React 18 + TypeScript 5 |
| Build | Vite 5 |
| Styling | Tailwind CSS 3 |
| State | Redux Toolkit |
| Storage | sql.js (SQLite) |
| Browser Bridge | Chrome Extension (Manifest V3) |
| IM | grammY · discord.js · dingtalk-stream · @larksuiteoapi/node-sdk |

## License

[MIT License](LICENSE)

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=noobclaw/opennoob&type=date&legend=top-left)](https://www.star-history.com/#noobclaw/opennoob&type=date&legend=top-left)

---

Built and maintained by [NoobClaw](https://www.noobclaw.com/).
