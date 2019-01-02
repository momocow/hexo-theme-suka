# Configuration

## Entry Table
| Entry                                                        | Type                            | Default                      | Description |
| ------------------------------------------------------------ | ------------------------------- | ---------------------------- | ----------- |
| `SUKA_KEYWORDS`                                              | list&lt;string&gt;                    | `[]`                         |
| `SUKA_COMMENT_USE`                                           | [CommentPlugin](#commentplugin) | `None`                       |
| `SUKA_COMMENT_DISQUS_SHORT_NAME`                             | string                          | `None`                       |
| `SUKA_COMMENT_FACEBOOK_ADMIN_FB_APPID` <sup>[1](#1)</sup>    | string                          | `None`                       |
| `SUKA_COMMENT_FACEBOOK_ADMIN_FB_USERNAME` <sup>[1](#1)</sup> | string                          | `None`                       |
| `SUKA_COMMENT_FACEBOOK_NUM_POSTS` <sup>[1](#1)</sup>         | number                          | `10`                         |
| `SUKA_COMMENT_FACEBOOK_COLOR_SCHEME` <sup>[1](#1)</sup>      | string                          | `"light"`                    |
| `SUKA_COMMENT_FACEBOOK_ORDER_BY` <sup>[1](#1)</sup>          | string                          | `"social"`                   |
| `SUKA_COMMENT_GITALK_CLIENT_ID`                              | string                          | `None`                       |
| `SUKA_COMMENT_GITALK_CLIENT_SECRET`                          | string                          | `None`                       |
| `SUKA_COMMENT_GITALK_REPO`                                   | string                          | `None`                       |
| `SUKA_COMMENT_GITALK_OWNER`                                  | string                          | `None`                       |
| `SUKA_COMMENT_GITMENT_CLIENT_ID`                             | string                          | `None`                       |
| `SUKA_COMMENT_GITMENT_CLIENT_SECRET`                         | string                          | `None`                       |
| `SUKA_COMMENT_GITMENT_REPO`                                  | string                          | `None`                       |
| `SUKA_COMMENT_GITMENT_OWNER`                                 | string                          | `None`                       |
| `SUKA_COMMENT_CHANGYAN_APPID`                                | string                          | `None`                       |
| `SUKA_COMMENT_CHANGYAN_CONF`                                 | string                          | `None`                       |
| `SUKA_COMMENT_DISQUSJS_SHORTNAME`                            | string                          | `None`                       |
| `SUKA_COMMENT_DISQUSJS_SITENAME`                             | string                          | `None`                       |
| `SUKA_COMMENT_DISQUSJS_API`                                  | string                          | `None`                       |
| `SUKA_COMMENT_DISQUSJS_APIKEY`                               | string                          | `None`                       |
| `SUKA_COMMENT_DISQUSJS_ADMIN`                                | string                          | `None`                       |
| `SUKA_COMMENT_DISQUSJS_ADMIN_LABEL`                          | string                          | `None`                       |
| `SUKA_COMMENT_LIVERE_DATA_UID`                               | string                          | `None`                       |
| `SUKA_COMMENT_VALINE_GUEST_INFO`                             | string                          | `None`                       |
| `SUKA_COMMENT_VALINE_LEANCLOUD_APPID`                        | string                          | `None`                       |
| `SUKA_COMMENT_VALINE_LEANCLOUD_APPKEY`                       | string                          | `None`                       |
| `SUKA_COMMENT_VALINE_PLACEHOLDER`                            | string                          | `None`                       |
| `SUKA_COMMENT_VALINE_PAGE_SIZE`                              | number                          | `10`                         |
| `SUKA_COMMENT_VALINE_AVATAR`                                 | string                          | `None`                       |
| `SUKA_COMMENT_VALINE_LANG`                                   | string                          | `None`                       |
| `SUKA_COMMENT_VALINE_NOTIFY`                                 | string                          | `None`                       |
| `SUKA_COMMENT_VALINE_VERIFY`                                 | string                          | `None`                       |
| `SUKA_POST_ENTRY_EXCERPT`                                    | number                          | `120`                        |
| `SUKA_AVATAR`                                                | string                          | `None`                       |
| `SUKA_DATE_FORMAT`                                           | string                          | `"%Y-%m-%d"`                 |
| `SUKA_UIUX_SLOGAN`                                           | string                          | `None`                       |
| `SUKA_UIUX_BG_COLOR`                                         | string                          | `None`                       |
| `SUKA_UIUX_LINK_COLOR`                                       | string                          | `None`                       |
| `SUKA_UIUX_PRIMARY_COLOR`                                    | string                          | `None`                       |
| `SUKA_BUSUANZI_ENABLE`                                       | boolean                         | `False`                      |
| `SUKA_BUSUANZI_POST_PV_ENABLE`                               | boolean                         | `False`                      |
| `SUKA_BUSUANZI_POST_PV_AFTER`                                | HTML                            | `None`                       |
| `SUKA_BUSUANZI_POST_PV_BEFORE`                               | HTML                            | `None`                       |
| `SUKA_BUSUANZI_SITE_PV_ENABLE`                               | boolean                         | `False`                      |
| `SUKA_BUSUANZI_SITE_PV_BEFORE`                               | HTML                            | `None`                       |
| `SUKA_BUSUANZI_SITE_PV_AFTER`                                | HTML                            | `None`                       |
| `SUKA_BUSUANZI_SITE_PV_DIVIDER`                              | HTML                            | `None`                       |
| `SUKA_BUSUANZI_SITE_PV_OFFSET`                               | number                          | `0`                          |
| `SUKA_BUSUANZI_SITE_UV_ENABLE`                               | boolean                         | `False`                      |
| `SUKA_BUSUANZI_SITE_UV_BEFORE`                               | HTML                            | `None`                       |
| `SUKA_BUSUANZI_SITE_UV_AFTER`                                | HTML                            | `None`                       |
| `SUKA_BUSUANZI_SITE_UV_DIVIDER`                              | HTML                            | `None`                       |
| `SUKA_BUSUANZI_SITE_UV_OFFSET`                               | number                          | `0`                          |
| `SUKA_HANABI_ENABLE`                                         | boolean                         | `False`                      |
| `SUKA_ANALYTICS_BAIDU_SITE_ID`                               | string                          | `None`                       |
| `SUKA_ANALYTICS_GOOGLE_SITE_ID`                              | string                          | `None`                       |
| `SUKA_ANALYTICS_GTAGS_SITE_ID`                               | string                          | `None`                       |
| `SUKA_ANALYTICS_CNZZ_SITE_ID`                                | string                          | `None`                       |
| `SUKA_ANALYTICS_TENCENT_SITE_ID`                             | string                          | `None`                       |
| `SUKA_ANALYTICS_TENCENT_MTA_ID`                              | string                          | `None`                       |
| `SUKA_HEAD_SITE_VERIFICATION_GOOGLE`                         | string                          | `None`                       |
| `SUKA_HEAD_SITE_VERIFICATION_BAIDU`                          | string                          | `None`                       |
| `SUKA_HEAD_COLOR`                                            | string                          | `None`                       |
| `SUKA_HEAD_PWA_MANIFEST`                                     | string                          | `None`                       |
| `SUKA_HEAD_OPEN_SEARCH`                                      | string                          | `None`                       |
| `SUKA_HEAD_FAVICON_LARGE`                                    | string                          | `None`                       |
| `SUKA_HEAD_FAVICON_APPLE_TOUCH_ICON`                         | string                          | `None`                       |
| `SUKA_HEAD_FAVICON_MEDIUM`                                   | string                          | `None`                       |
| `SUKA_HEAD_FAVICON_SMALL`                                    | string                          | `None`                       |
| `SUKA_HEAD_FAVICON_ICO`                                      | string                          | `None`                       |
| `SUKA_VENDORS_BUSUANZI`                                      | string                          | `None`                       |
| `SUKA_VENDORS_HANABI`                                        | string                          | `None`                       |
| `SUKA_VENDORS_SUKA_HANABI_BROWSER_JS`                        | string                          | `None`                       |
| `SUKA_VENDORS_SUKA_GALLERY_JS`                               | string                          | `None`                       |
| `SUKA_VENDORS_SUKA_LOCAL_SEARCH_JS`                          | string                          | `None`                       |
| `SUKA_VENDORS_LAZYLOAD`                                      | string                          | `None`                       |
| `SUKA_VENDORS_PRETTIFY`                                      | string                          | `None`                       |
| `SUKA_VENDORS_PRETTIFY_THEME`                                | string                          | `None`                       |
| `SUKA_SEARCH_USE`                                            | [SearchBy](#searchby)           | `None`                       |
| `SUKA_NAV_SEARCH_LINK`                                       | string                          | `None`                       |
| `SUKA_NAV_HOME_USE`                                          | boolean                         | `True`                       |
| `SUKA_NAV_ARCHIVES_USE`                                      | boolean                         | `True`                       |
| `SUKA_NAV_SEARCH_USE`                                        | boolean                         | `False`                      |
| `SUKA_NAV_SEARCH_SWIFTYPE_KEY`                               | string                          | `None`                       |
| `SUKA_NAV_SHARE_USE`                                         | boolean                         | `True`                       |
| `SUKA_NAV_RSS_USE`                                           | boolean                         | `True`                       |
| `SUKA_NAV_PAGES`                                             | list&lt;string&gt;                    | `None`                       |
| `SUKA_SNS_SHARE_WEIBO`                                       | boolean                         | `True`                       |
| `SUKA_SNS_SHARE_TWITTER`                                     | boolean                         | `True`                       |
| `SUKA_SNS_SHARE_FACEBOOK`                                    | boolean                         | `True`                       |
| `SUKA_SNS_SHARE_GOOGLEPLUS`                                  | boolean                         | `True`                       |
| `SUKA_SNS_SHARE_LINKEDIN`                                    | boolean                         | `True`                       |
| `SUKA_SNS_SHARE_QQ`                                          | boolean                         | `True`                       |
| `SUKA_SNS_SHARE_TELEGRAM`                                    | boolean                         | `True`                       |
<!-- SUKA_QRCODE_POST_SHARE -->
| `SUKA_VALINE_COUNTER_INDEX_POST_PV_ENABLE`                   | boolean                         | `False`                      |
| `SUKA_VALINE_COUNTER_INDEX_POST_PV_BEFORE`                   | HTML                            | `None`                       |
| `SUKA_VALINE_COUNTER_INDEX_POST_PV_AFTER`                    | HTML                            | `None`                       |
| `SUKA_VALINE_COUNTER_POST_PV_ENABLE`                         | boolean                         | `False`                      |
| `SUKA_VALINE_COUNTER_POST_PV_BEFORE`                         | HTML                            | `None`                       |
| `SUKA_VALINE_COUNTER_POST_PV_AFTER`                          | HTML                            | `None`                       |
| `SUKA_VALINE_COUNTER_SITE_PV_ENABLE`                         | boolean                         | `False`                      |
| `SUKA_VALINE_COUNTER_SITE_PV_BEFORE`                         | HTML                            | `None`                       |
| `SUKA_VALINE_COUNTER_SITE_PV_AFTER`                          | HTML                            | `None`                       |
| `SUKA_FOOTER_CUSTOM_TEXT`                                    | string                          | `None`                       |
| `SUKA_FOOTER_COPYRIGHT_SINCE`                                | number                          | `0` (means **current year**) |
| `SUKA_PRETTIFY_ENABLE`                                       | boolean                         | `False`                      |
| `SUKA_PRETTIFY_THEME`                                        | string                          | `None`                       |
| `SUKA_PRETTIFY_LINENUMBER`                                   | boolean                         | `False`                      |
| `SUKA_POST_SHARE`                                            | boolean                         | `True`                       |
| `SUKA_POST_LICENSE`                                          | string                          | `None`                       |
| `SUKA_POST_EXPIRE`                                           | number                          |                              | in days     |

## CommentPlugin
One of
- `disqus`
- `disqusjs`
- `changyan`
- `gitalk`
- `gitment`
- `livere`
- `valine`

## SearchBy
One of
- `local`
- `google`
- `swiftype`

## Footnotes
###### 1
https://developers.facebook.com/docs/plugins/comments/#settings