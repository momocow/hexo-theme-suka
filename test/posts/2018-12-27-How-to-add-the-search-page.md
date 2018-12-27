---
title: How to add the search page?
created: 2018-12-27 18:03:18
categories: [Demo]
tags: [search]
thumbnail: images/search-page.png
---

Search page is only supported if you **use Veripress as the backend**.

<!-- more -->

Search page is actually implemented as a layout in Veripress, thus in order to place a "Search" button in the navigation bar, you have to implement a custom page yourself using the `searchbar` layout.

### Create a new custom page
Under the `pages` folder, create a new subfolder for the custom search page.

Here we name it after `_search` and create an `index.md` for the custom page.

> Caution!
> ---
> You cannot use `search` as the custom page name since it will conflict with Veripress `/search` endpoint.
> 
> The endpoint does not allow requests without parameter `q` in query string.
> That's why we implement a custom search page here.

Change the `layout` in the YAML header to `searchbar` in the `index.md`.

Unlike pages in other layouts, page body in `/pages/_search/index.md` means nothing to layout `searchbar`.

### Configure the navigation bar

Apply these settings in your `config.py`.

```
#!python
SUKA_NAV_SEARCH_USE = True
SUKA_NAV_SEARCH_LINK = '/_search' # replace it with your custom page name
```

After you restart the Veripress server, the search page is shown in the navigation bar and ready to serve queries.