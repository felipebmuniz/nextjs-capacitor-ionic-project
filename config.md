npx create-next-app name-project

new action command and image configuration nextjs {

  package.json => "static": "next build && next export";

  next.config.js => images: {
    unoptimized: true,
  }

  execute => yarn static

  add capacitor => yarn add @capacitor/cli

  execute => npx cap init
}