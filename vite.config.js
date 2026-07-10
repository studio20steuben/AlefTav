# AlefTav

A Hebrew Torah word-index and gematria study tool.

## Deploying this (no coding tools required on your end)

This project builds itself automatically once connected to Netlify or
Vercel — you don't need Node.js, npm, or any command line installed on
your own computer for this path.

### Step 1 — Put the code on GitHub

1. Go to **github.com** and create a free account if you don't have one.
2. Click **New repository**. Name it `aleftav`. Keep it Public or
   Private (either works). Don't add a README — this project already has
   one.
3. On the new repo's page, click **uploading an existing file**.
4. Drag this entire project folder's contents into the upload box
   (everything except `node_modules` and `dist`, which shouldn't exist
   yet anyway).
5. Click **Commit changes**.

### Step 2 — Connect it to Netlify (or Vercel)

**Netlify:**
1. Go to **netlify.com**, sign up free, choose "Sign up with GitHub" —
   this is the simplest option since it connects the two automatically.
2. Click **Add new site → Import an existing project**.
3. Choose **GitHub**, then select your `aleftav` repository.
4. Netlify will auto-detect the build settings from this project
   (build command: `npm run build`, publish directory: `dist`). Leave
   them as detected.
5. Click **Deploy**. In a minute or two, you'll get a live link like
   `https://aleftav-123abc.netlify.app`.

**Vercel** works the same way: sign up with GitHub, "Add New Project",
pick the repo, and click Deploy — it also auto-detects Vite projects.

### Step 3 — Test it for real

Open the live link on your phone. This is a real website now, so things
that couldn't work in the preview sandbox — the file picker, downloads,
print, clipboard — should all behave normally, since there's no sandbox
restricting them anymore.

### Making changes later

Every time new code is provided, replace `src/App.jsx` in your GitHub
repo with the updated version (GitHub's web interface lets you edit or
re-upload a single file directly — no need to redo the whole project).
Netlify/Vercel will automatically rebuild and redeploy within a minute
of any change to the repo.

## Notes on current limitations

- **Storage**: word-index data is cached in the browser's local storage
  per-device. Very large combined datasets could approach browser
  storage limits (typically several MB) — if that becomes an issue,
  the next step is moving to IndexedDB, which isn't a small change.
- **Accounts, subscriptions, ads, biometrics**: still mocked/UI-only, as
  discussed. Real versions require native app infrastructure
  (RevenueCat, Firebase Auth, Google AdMob) that only applies once this
  becomes an iOS/Android app via React Native — not this web version.
