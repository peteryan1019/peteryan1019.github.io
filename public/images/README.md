# Images

Drop your real images in this folder. Anything in `public/` is served from the site root,
so a file named `peter.jpg` here is reachable at `/images/peter.jpg`.

Currently referenced (all optional — the site shows styled placeholders until you add them):

| File                  | Used on            | Notes                                  |
| --------------------- | ------------------ | -------------------------------------- |
| `peter.jpg`           | Home + Contact     | Your portrait photo                    |
| `bluetooth-mouse.jpg` | Software Projects  | Set `media.src` in `src/data/projects.js` |
| (club photos)         | Club Activities    | Set `media.src` in `src/data/clubs.js`    |
| (blog covers)         | Thoughts & Blogs   | Set `cover.src` in `src/data/blogs.js`    |

To use an image, set the matching `media.src` (or `cover.src`) field in the data file, e.g.:

```js
media: { type: 'image', src: '/images/bluetooth-mouse.jpg', alt: 'Bluetooth 3D mouse' },
```
