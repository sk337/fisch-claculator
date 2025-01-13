import { defineConfig } from 'vite'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import { spawnSync } from 'child_process';
import path from "path";
import react from '@vitejs/plugin-react-swc'


// run `git log -1 --pretty=format:'{"hash": "%H", "author": "%an", "email": "%ae", "date": "%ad", "message": "%s"}' --date=iso` and export it in the define config of vite

const git_process = spawnSync('git', ['log', '-1', '--pretty=format:{"hash": "%H", "author": "%an", "email": "%ae", "date": "%ad", "message": "%s"}', '--date=iso']);
const git_log = git_process.stdout.toString();



// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    TanStackRouterVite({
    }),
  ],
  define: {
    __GIT_LOG__: git_log,
  },
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "$": path.resolve(__dirname, "./src/fisch"),
    },
  },
})
