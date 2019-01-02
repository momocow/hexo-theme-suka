# veripress-theme-suka

🎨Modern, powerful and simple theme ported from [Hexo](https://hexo.io) to [Veripress](https://github.com/veripress/veripress).

Hexo theme: [hexo-theme-suka](https://github.com/SukkaW/hexo-theme-suka)

Demo: http://momocow.me/veripress-theme-suka/


- [veripress-theme-suka](#veripress-theme-suka)
  - [Features](#features)
  - [Configuration](#configuration)
  - [Customizable templates](#customizable-templates)
  - [Post headers](#post-headers)
  - [How to add the search page?](#how-to-add-the-search-page)
  - [Differences against hexo-theme-suka](#differences-against-hexo-theme-suka)

## Features
- Support thumbnail
- Support solitude post
- Support sharing pages or posts via several popular social platforms (TG, FB, QQ, etc)
- Provide `searchbar` layout
- ~~Provide `gallery` layout~~ 🚧 *(not ported yet)*

## Configuration

All configurations are done via `config.py` with keys started with `"SUKA_"`.

See [configs](CONFIGS.md) for more details.

## Customizable templates

- `head.html`
- `header.html`
- `footer.html`
- `foot.html`
- `nav.html`
- `i18n/{language}.html`
  - Custom translation can be **partial**, missing terms are tanslated via built-in i18n files.
  - If `{language}.html` is not found either in custom or built-in directory, `en_US.html` is used as fallback.

## Post headers

| Entry          | Type    | Default                                                                                          | Description                                                        |
| -------------- | ------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `solitude`     | boolean | `False`                                                                                          | Solitude post is a post without explicit link from the index page. |
| `hide_license` | boolean | `False`                                                                                          | Hide the license for this page if global license is enabled.       |
| `thumbnail`    | string  | A link to the thumbnail image, which can be located in `/static/` directory or an external link. |
| `license`      | string  | License text for this page.                                                                      |

## How to add the search page?
http://momocow.me/veripress-theme-suka/post/2018/12/27/How-to-add-the-search-page/

## Differences against hexo-theme-suka
- Only Atom RSS is supported.
- QRCode generation is not supported yet.
- TOC still has some problems porting to Veripress, so not supported yet.
- Headless posts (posts w/o titles) is not supported since Veripress RSS requires post titles.
- Changyan THREAD_KEY_TYPE, "id", is not supported.
- Searching is only supported when Veripress serves as the backend.
- Fix several typos and bugs.
- Support `solitude` posts.
