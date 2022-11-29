import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"

// https://vitejs.dev/config/
export default defineConfig({
    // server: {
    //     host: "0.0.0.0", // 监听所有 IP
    // },
    plugins: [
        vue(),
        AutoImport({
            imports: [
                "vue",
                "vue-router",
                "pinia",
                {
                    axios: [
                        // default imports
                        ["default", "axios"], // import { default as axios } from 'axios',
                    ],
                },
            ],
            // 自动引入 Element
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            // 自动引入 Element
            resolvers: [ElementPlusResolver()],
        }),
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
})
