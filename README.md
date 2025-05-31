# Google Meet Clone

A minimalist, modern video meeting app inspired by Google Meet. Built with [Next.js](https://nextjs.org/), [React](https://react.dev/), [PeerJS](https://peerjs.com/), and [Socket.IO](https://socket.io/).

## Features

- Create or join video meeting rooms with unique IDs
- Real-time peer-to-peer video and audio using WebRTC (via PeerJS)
- Instant room sharing and joining
- Responsive, modern UI with minimalist branding
- Built with Next.js 13, React 18, and styled with CSS Modules

## Tech Stack

- **Frontend:** Next.js, React, CSS Modules
- **WebRTC:** PeerJS
- **Real-time Communication:** Socket.IO
- **Utilities:** uuid, lodash, classnames, react-copy-to-clipboard, react-player

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or newer recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/google-meet-clone.git
   cd google-meet-clone
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

### Running Locally

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## Deployment

### Deploying to Netlify

This project is ready for Netlify deployment and includes the necessary plugins.

1. **Push your code to GitHub, GitLab, or Bitbucket.**
2. **Go to [Netlify](https://app.netlify.com/) and create a new site from Git.**
3. **Configure build settings:**
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
4. **Netlify will auto-detect and use the Next.js plugin.**
5. **Click "Deploy Site".**

For more details, see [Netlify Next.js docs](https://docs.netlify.com/integrations/frameworks/next-js/overview/).

---

## Scripts

- `npm run dev` — Start the development server
- `npm run build` — Build for production
- `npm start` — Start the production server
- `npm run lint` — Run ESLint

---

## Folder Structure

```
/pages         # Next.js pages (routes)
/styles        # CSS Modules for styling
/public        # Static assets
/components    # (If present) React components
```

---

## Customization

- **Colors & Branding:** Edit `/styles/home.module.css` for UI colors and styles.
- **Logo:** The minimalist logo SVG is in `/pages/index.js` inside the `logoWrap` div.

---

## License

This project is for educational/demo purposes.  
Feel free to fork and modify!

---

## Credits

- Inspired by [Google Meet](https://meet.google.com/)
- Built with [Next.js](https://nextjs.org/), [PeerJS](https://peerjs.com/), [Socket.IO](https://socket.io/)
