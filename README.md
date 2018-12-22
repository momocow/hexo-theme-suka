# veripress-theme-suka

🎨Modern, powerful and simple theme ported from [Hexo](https://hexo.io) to [Veripress](https://github.com/veripress/veripress).

Hexo theme: [hexo-theme-suka](https://github.com/SukkaW/hexo-theme-suka)

> 🚧 WIP

- [veripress-theme-suka](#veripress-theme-suka)
  - [Configuration](#configuration)
    - [Supported Comment Plugins](#supported-comment-plugins)
  - [Customizable templates](#customizable-templates)
  - [Development](#development)
    - [Post header](#post-header)
    - [Differences against hexo-theme-suka](#differences-against-hexo-theme-suka)
    - [Additional functions to Veripress](#additional-functions-to-veripress)
    - [Scripts](#scripts)
    - [Todo](#todo)

## Configuration

All configurations are done via `config.py`.

| Config                         | Default                                                         | Description                                 |
| ------------------------------ | --------------------------------------------------------------- | ------------------------------------------- |
| SUKA_COMMENT_USE               | `"disqus"` if `DISQUS_ENABLED` is `True`;<br>otherwise, `None`. | Comment plugins                             |
| SUKA_COMMENT_DISQUS_SHORT_NAME | `DISQUS_SHORT_NAME` or `None`                                   | Disqus short name                           |
| SUKA_POST_ENTRY_EXCERPT        | `120`                                                           | Max content for each post in the index page |
| SUKA_READ_MORE                 | `"Read more"`                                                   | Read-more text                              |
| SUKA_AVATAR                    | `"/static/img/default_avatar.png"`                              | URL to your avatar                          |
| SUKA_DATE_FORMAT               | `"%Y-%m-%d"`                                                    | Date format for display                     |
| SUKA_UIUX_BG_COLOR             | `None`                                                            |
| SUKA_UIUX_LINK_COLOR           | `None`                                                            |
| SUKA_UIUX_PRIMARY_COLOR        | `None`                                                            |
| SUKA_ANALYTICS_BAIDU_SITE_ID   | `None`                                                            |
| SUKA_ANALYTICS_GOOGLE_SITE_ID  | `None`                                                            |
| SUKA_ANALYTICS_GTAGS_SITE_ID   | `None`                                                            |
| SUKA_ANALYTICS_CNZZ_SITE_ID    | `None`                                                            |
| SUKA_ANALYTICS_TENCENT_SITE_ID | `None`                                                            |
| SUKA_ANALYTICS_TENCENT_MTA_ID  | `None`                                                            |
| SUKA_BUSUANZI_ENABLE           | `False`                                                           |
| SUKA_HANABI_ENABLE             | `False`                                                           |

### Supported Comment Plugins
Options for `SUKA_COMMENT_USE`
- `disqus`
- `disqusjs`
- `changyan`
- `gitalk`
- `gitment`
- `livere`
- `valine`

## Customizable templates
- `head.html`
- `header.html`
- `footer.html`
- `foot.html`
- `nav.html`

## Development

### Post header
- `solitude`
- `hide_license`
- `thumbnail`
- `license`

### Differences against hexo-theme-suka
- Only Atom RSS is supported.
- QRCode generation is not supported yet.
- Boolean, `solitude`, in post meta can make a post not explicitly linked from index page.

### Additional functions to Veripress
- Post thumbnail.
- Post description.
- Gallery page.
- New meta `hide_license`.

### Scripts

```
npm run dev
```

1. Prepare the test folder
2. Start Veripress preview server
3. Watch to sync file changes to the test folder.
4. Watch config.py to restart the server.

### Todo
- [ ] Support spoiler alert 💥