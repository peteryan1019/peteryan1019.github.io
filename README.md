# Peter Yan — Personal Website

A fast, fully static personal website built with **React + Vite** (no backend). It ships as a
single-page app served by **nginx** inside a small Docker image — easy to deploy on any virtual
machine.

## Pages

- **Home** — short intro plus a one-line tour of every section
- **Software Projects** — alternating image/video + text sections (from my resume)
- **Work Experiences** — a timeline of roles
- **Thoughts & Blogs** — a blog landing page with article pages (placeholder posts)
- **Club Activities** — placeholder sections; each picture links to an article page
- **Hobbies** — Cello (GanJing World) and Piano (YouTube) video embeds
- **Contact** — email, LinkedIn, GitHub, and a photo

## Tech stack

- React 18 + React Router 6
- Vite 5 (build tool / dev server)
- Plain CSS with a navy-blue + white theme (no UI framework)
- nginx (production static serving) + Docker

## Project structure

```
.
├── Dockerfile              # multi-stage build -> nginx
├── docker-compose.yml      # one-command run
├── nginx.conf              # SPA fallback + caching + gzip
├── index.html
├── public/
│   ├── favicon.svg
│   └── images/             # drop real photos here (see images/README.md)
└── src/
    ├── main.jsx            # entry + router
    ├── App.jsx             # routes
    ├── index.css           # theme tokens + global styles
    ├── components/         # Navbar, Footer, Section, Media, Icon
    ├── data/               # site / projects / experience / clubs / blogs / hobbies
    └── pages/              # one file per page
```

All content lives in `src/data/*.js`, so you can edit text without touching components.

---

## Run locally

Requires **Node 18+**.

```bash
npm install        # first time only
npm run dev        # http://localhost:5173
```

Build and preview the production bundle:

```bash
npm run build      # outputs to dist/
npm run preview    # serves dist/ at http://localhost:4173
```

---

## Run with Docker (recommended for deployment practice)

Build the image and start the container:

```bash
docker compose up -d --build
```

Then open **http://localhost:8080**.

Without compose:

```bash
docker build -t peter-yan-website .
docker run -d --name peter-yan-website -p 8080:80 peter-yan-website
```

Stop / remove:

```bash
docker compose down          # or: docker rm -f peter-yan-website
```

---

## Deploy on a virtual machine

A typical flow on a fresh Ubuntu VM:

1. **Install Docker** (one-time):
   ```bash
   curl -fsSL https://get.docker.com | sh
   sudo usermod -aG docker $USER   # log out / back in so the group applies
   ```

2. **Get the code onto the VM** — either `git clone <your-repo>` or `scp` this folder over.

3. **Build & run**:
   ```bash
   cd personal_website
   docker compose up -d --build
   ```

4. **Open the firewall** for the port (cloud VMs only):
   - Allow inbound TCP **8080** in your provider's security group / firewall.
   - Visit `http://<vm-public-ip>:8080`.

5. **(Optional) Serve on port 80 / a domain.** Edit the port mapping in `docker-compose.yml`
   to `"80:80"`, or put a reverse proxy (nginx / Caddy / Traefik) in front to add HTTPS.

The container restarts automatically (`restart: unless-stopped`) if the VM reboots.

---

## Customizing the content

| Want to change…                | Edit…                                  |
| ------------------------------ | -------------------------------------- |
| Name, email, social links      | `src/data/site.js`                     |
| Projects                       | `src/data/projects.js`                 |
| Work experience                | `src/data/experience.js`               |
| Club activities                | `src/data/clubs.js`                    |
| Blog posts / articles          | `src/data/blogs.js`                    |
| Hobby videos                   | `src/data/hobbies.js`                  |
| Colors / theme                 | `:root` variables in `src/index.css`   |
| Photos & images                | drop files in `public/images/` (see its README) |

### Adding images

Each project/club/blog item has a `media` (or `cover`) object. Leave it as
`{ type: 'image' }` to show a styled placeholder, or point it at a file:

```js
media: { type: 'image', src: '/images/my-photo.jpg', alt: 'Description' }
```

Add your portrait as `public/images/peter.jpg` and it appears on the Home and Contact pages.

---

## Notes

- **Blog layout:** the original screenshot referenced for the blog format wasn't attached, so a
  clean, conventional blog landing layout (featured post + card grid) is used. Easy to adjust.
- **Video embeds:** YouTube and GanJing World are embedded via iframe, each with a
  “Watch on …” fallback link in case a platform blocks embedding.
