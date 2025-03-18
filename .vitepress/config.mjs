import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MYSR 文档",
  description: " ",

  outDir : 'build',  // 输出目录，和workflow里面的对应
  base:  process.env.RUNNING_DIRECTORY || '/', // 设置为相对路径,这样js css引用的时候就不是根目录了，抄vitepress的workflow的时候，加一个环境变量

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '文档', link: '/introduce' }
    ],

    sidebar: [
      {
        text: '文档',
        items: [
          { text: '介绍', link: '/introduce' },
          { text: '用前须知', link: '/before_use' },
          { text: '使用说明', link: '/usage' },
          { text: '接线说明', link: '/circuit_connection' },
          { text: '写入固件', link: '/flash_software' },
          { text: '手柄说明', link: '/gamepad_introduce' },
          { text: '常见问题', link: '/faq' },

        ]
      }
    ],

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
})
