# Univers - The Neural Social Nexus

A high-performance social ecosystem blending TikTok, Instagram, and Facebook with Gemini-powered neural creative tools.

## Features

- 🏠 **Feed** - Main social feed with posts, stories, and content
- ⚡ **Pulse** - Reels/shorts content discovery
- 🛒 **Shop** - E-commerce integration
- 📰 **Actualite** - News feed
- 📡 **Live** - Live streaming
- 🎨 **Studio** - AI-powered content creation with Gemini
- 💬 **Messenger** - Real-time messaging
- 👤 **Profile** - User profile management

## Tech Stack

- React 19 + TypeScript
- Vite 6
- Supabase (Backend)
- Google Gemini AI (Content generation)
- Tailwind CSS (Styling)
- Lucide React (Icons)

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
   - Copy `.env.local` and update the `GEMINI_API_KEY`
   - Supabase keys are already configured in `src/lib/supabase.ts`

3. Run development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Configuration

### Supabase
The app uses Supabase for:
- User authentication
- Real-time database
- Storage (if enabled)

### Gemini API
Gemini AI powers:
- Smart caption generation
- AI image generation
- AI assistant responses

## License

MIT
