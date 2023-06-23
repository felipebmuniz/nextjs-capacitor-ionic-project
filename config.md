https://devdactic.com/nextjs-and-capacitor

npx create-next-app name-project

new action command and image configuration nextjs {

  package.json => "static": "next build && next export"

  next.config.js => images: {
    unoptimized: true,
  }

  execute => yarn static

  add capacitor => yarn add @capacitor/cli

  execute => npx cap init

  add in capacitor.config.ts => webDir: 'out'

  execute add modules => yarn add @capacitor/core @capacitor/ios @capacitor/android

  execute =>  npx cap add ios

  execute =>  npx cap add android

  execute => npx cap open android

  obs: config android studio...

  add in capacitor.config.ts => "server": {
    "url": 'http://192.168.x.xx:3000', // localhost
    "cleartext": true
  }

  add => yarn add @capacitor/share

  index.tsx => {
    import { Share } from '@capacitor/share';

    const share = async () => {
      await Share.share({
        title: 'Felipe DEV UX Software',
        text: 'Felipe tá desenvolvendo uns app massa!!!',
        url: 'https://www.instagram.com/felipe_barros._/',
        dialogTitle: 'Compartilhar com amigos',
      });
    };
  }

  add => yarn add @ionic/react
  add => yarn add ionicons



}