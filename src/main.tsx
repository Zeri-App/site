import React from "react";
import ReactDOM from "react-dom/client";
import ReactMarkdown from "react-markdown";

import "./index.css";

const markdown = `

# Zeri (Early Development)

Play music, even when you're offline.

- Zeri's app size is just lower than 20mb.

- Zeri doesn't use your internet connection unless you want it to.

- Zeri is built with \`TypeScript\`, \`Svelte\`, \`Tauri\`, \`Vite\` and \`TailwindCSS\`.

# Build your own Zeri app

If you want to build Zeri by yourself:

- Install Tauri [prerequisites](https://tauri.app/v1/guides/getting-started/prerequisites).
- Install pnpm (recommended package manager) \`npm i -g pnpm\` or follow this [guide](https://pnpm.io/installation).
- Install packages \`pnpm i\`
- Build the app \`pnpm tauri build\`
- After that you can find executable in \`src-tauri/target\` folder. The installer is available at \`src-tauri/target/release/bundle\`

# Contributing

If you want to contribute, feel free to clone this repository and open a pull request.

# License

See [LICENSE.md](/LICENSE.md)
`;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          width="256px"
          height="256px"
          src="https://github.com/Zeri-App/zeri/blob/master/src-tauri/icons/128x128@2x.png?raw=true"
        />
      </div>
      <ReactMarkdown children={markdown} />
    </>
  </React.StrictMode>
);
