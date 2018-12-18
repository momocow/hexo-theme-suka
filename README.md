# veripress-theme-suka
🎨Modern, powerful and simple theme ported from [hexo-theme-suka](https://github.com/SukkaW/hexo-theme-suka).

> 🚧 WIP

## Changelog
> Descending order, i.e., latest first.

- 2018.12.18
  - Rewrite test script via NodeJS Gulp.
  - Fix including wrong partial paths.
  - Fix `index.html`.
  - Add test script.
- 2018.12.17
  - Skip `_partial/head/custom-head`.
  - Skip `_partial/head/structured-data`.
  - Skip `_partial/head/analytics`.
  - Skip `_partial/head/open-graph`.
  - Skip `_partial/head/webapp`.
  - Skip `_partial/head/rss`.
  - Skip `_partial/head/site-verification`.
  - Skip gallery layout.
  - Add `_partial/head/meta`.
  - Comment `meta:keywords` as not in use.
  - Replace `meta:description` with subtitle.
  - Skip `_partial/head/favicon`.
  - Skip `_partial/source/preload`.
  - Finish `_partial/head/dns-prefetch`.
  - Add config `SUKA_COMMENT_DISQUS_SHORT_NAME`.
  - Add config `SUKA_COMMENT_USE`.
  - Skip `_partial/head/lsVersion`.
  - Create basic veripress theme structure.
  - Mark hexo files as archived and moved into `.hexo/` folder.