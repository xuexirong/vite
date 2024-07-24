import {ConfigEnv, defineConfig, UserConfig} from 'vite'
import path from 'path'
// vite.config.ts中无法使用import.meta.env 所以需要引入
import vue from '@vitejs/plugin-vue'
import {createSvgIconsPlugin} from 'vite-plugin-svg-icons'
// 增加 vue文件 script name值
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
// 生产gz文件
import viteCompression from 'vite-plugin-compression'
// 按需加载
// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
//import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite';
import {AntDesignVueResolver} from 'unplugin-vue-components/resolvers';

function resolve(dir) {
    return path.join(__dirname, '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig(({mode}: ConfigEnv): UserConfig => {
    return {
        //base: '/media/distadmin',
        plugins: [
            vue(),
            Components({
                resolvers: [
                    AntDesignVueResolver({
                        importStyle: false, // css in js
                    }),
                ],
            }),
            vueSetupExtend(),
            // AutoImport({
            //   resolvers: [ElementPlusResolver()],
            // }),
            // Components({
            //   resolvers: [ElementPlusResolver()],
            // }),
            // * 使用 svg 图标
            createSvgIconsPlugin({
                // 指定需要缓存的图标文件夹
                iconDirs: [path.resolve(process.cwd(), 'src/icons/svg')],
                // 指定symbolId格式
                symbolId: 'icon-[dir]-[name]',
            }),
            // gzip压缩 生产环境生成 .gz 文件
            mode === 'production' &&
            viteCompression({
                verbose: true,
                disable: false,
                threshold: 10240,
                algorithm: 'gzip',
                ext: '.gz',
            }),
        ],
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@use "./src/styles/index.scss" as *;`,
                },
            },
        },
        // 配置别名
        resolve: {
            alias: {
                '@': resolve('src'),
                static: resolve('public/static'),
            },
            // 忽略后缀名的配置选项, 添加 .vue 选项时要记得原本默认忽略的选项也要手动写入
            extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
        },
        //启动服务配置
        server: {
            host: '0.0.0.0',
            proxy: {
                '/wgcrm': {
                    target: 'http://47.94.141.80:8080',
                    changeOrigin: true
                }
            }
        },
        // 生产环境打包配置
        //去除 console debugger
        // esbuild: {
        //   pure:mode==='production' ? ["console.log", "debugger"] : []
        // },

        // build: {
        //   terserOptions: {
        //     compress: {
        //       drop_console: true,
        //       drop_debugger: true,
        //     },
        //   },
        // },
    }
})
