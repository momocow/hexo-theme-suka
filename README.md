# veripress-theme-suka
🎨Modern, powerful and simple theme ported from [hexo-theme-suka](https://github.com/SukkaW/hexo-theme-suka).

> 🚧 WIP

## Scripts
```
npm run dev
```
1. Prepare the test folder
2. Start Veripress preview server
3. Watch to sync file changes to the test folder.

## Changelog
> Descending order, i.e., latest first.

- 2018.12.18
  - Skip valine counter.
  - Skip listing categories.
  - Add `_partial/post-entry-content`.
  - Add `_partial/post-entry`.
  - Add config `SUKA_DATE_FORMAT`.
  - Add config `SUKA_AVATAR`.
  - Add config `SUKA_READ_MORE`.
  - Add config `SUKA_POST_ENTRY_EXCERPT`.
  - Rewrite `_partial/head/site-title`.
  - Add macro `where`.
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