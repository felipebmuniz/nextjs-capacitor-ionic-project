import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'nextjs-capacitor-ionic-project',
  webDir: 'out',
  server: {
    url: 'http://10.0.0.108:3000', // Localhost
    cleartext: true,
  },
};

export default config;
