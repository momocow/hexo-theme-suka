---
title: Markdown style demo
created: 2018-12-27 12:19:10
categories: [Demo]
tags: [markdown, css]
---

# Headers
<!-- more -->
# H1
## H2
### H3
#### H4
##### H5
###### H6

# Emphasis
Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with ***asterisks*** and ___underscores___.

Strikethrough uses two tildes. ~~Scratch this~~.

# Lists
```
#!markdown
## Ordered list
1. First ordered list item
2. Another item
     * Unordered sub-list.
3. Actual numbers don't matter, just that it's a number
     1. Ordered sub-list
4. And another item.  

## Unordered list
- Unordered list can use asterisks
- Or minuses
- Or pluses
```

## Ordered list
1. First ordered list item
2. Another item
     * Unordered sub-list.
3. Actual numbers don't matter, just that it's a number
     1. Ordered sub-list
4. And another item.  

## Unordered list
- Unordered list can use asterisks
- Or minuses
- Or pluses

# Inline HTML
```
#!markdown
<p>To reboot your computer, press <kbd>ctrl</kbd>+<kbd>alt</kbd>+<kbd>del</kbd>.</p>
```

<p>To reboot your computer, press <kbd>ctrl</kbd>+<kbd>alt</kbd>+<kbd>del</kbd>.</p>

# Definition Lists
```
#!markdown
Apple
: 🍎

Banana
: 🍌
```
Apple
: 🍎

Banana
: 🍌

# Links
```
#!markdown
[I’m an inline-style link](https://www.google.com/)

[I’m an inline-style link with title](https://www.google.com/ "Google's Homepage")

[I’m a reference-style link][Arbitrary case-insensitive reference text]

[I’m a path reference](/_search)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself][]

Some text to show that the reference links can follow later.

[Arbitrary case-insensitive reference text]: https://www.google.com/
  "Google's Homepage"
[1]: https://www.google.com/ "Google's Homepage"
[link text itself]: https://www.google.com/ "Google's Homepage"
```

[I’m an inline-style link](https://www.google.com/)

[I’m an inline-style link with title](https://www.google.com/ "Google's Homepage")

[I’m a reference-style link][Arbitrary case-insensitive reference text]

[I’m a path reference](/_search)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself][]

Some text to show that the reference links can follow later.

[Arbitrary case-insensitive reference text]: https://www.google.com/
  "Google's Homepage"
[1]: https://www.google.com/ "Google's Homepage"
[link text itself]: https://www.google.com/ "Google's Homepage"

# Images
```
#!markdown
hover to see the title text:

Inline-style:
![alt text](https://i1.wp.com/theme-suka.github.io/demo/img/suka-favicon.png "Logo Title Text 1")

Reference-style:
![alt text][logo]

[logo]: https://i1.wp.com/theme-suka.github.io/demo/img/suka-favicon.png "Logo Title Text 2"
```

hover to see the title text:

Inline-style:
![alt text](https://i1.wp.com/theme-suka.github.io/demo/img/suka-favicon.png "Logo Title Text 1")

Reference-style:
![alt text][logo]

[logo]: https://i1.wp.com/theme-suka.github.io/demo/img/suka-favicon.png "Logo Title Text 2"

# Code and Syntax Highlighting
Inline `code` has `back-ticks` around it.

```
#!js
var s = "JavaScript syntax highlighting";
alert(s);
console.log('Hello World!');
```

```
#!python
s = "Python syntax highlighting"
print s
```

Also see [https://python-markdown.github.io/extensions/code_hilite/#syntax]() for more information about highlighting diffenrent languages.

# Tables
```
#!markdown
| Function name | Description                    |
| ------------- | ------------------------------ |
| `help()`      | Display the help window.       |
| `destroy()`   | **Destroy your computer!**     |
```

| Function name | Description                    |
| ------------- | ------------------------------ |
| `help()`      | Display the help window.       |
| `destroy()`   | **Destroy your computer!**     |

# Blockquotes
```
#!markdown
> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let’s keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can put Markdown into a blockquote.

Quote break.

> Title
> ---
> Description
```
> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let’s keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can put Markdown into a blockquote.

Quote break.

> Title
> ---
> Description

# Horizontal Rule
```
#!markdown
Hyphens

---

Asterisks

***

Underscores

___
```
Hyphens

---

Asterisks

***

Underscores

___

# Line Breaks
```
#!markdown
Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a *separate paragraph*.

This line is also a separate paragraph, but...
This line is only separated by a single newline, so it's a separate line in the *same paragraph*.
```
Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a *separate paragraph*.

This line is also a separate paragraph, but...
This line is only separated by a single newline, so it's a separate line in the *same paragraph*.

# Footnotes
```
#!markdown
This is a sentence with footnote.[^1]

Long paragraph inside footnote. [^2]

[^1]: Footnote #1
[^2]:
     Long paragraph.

     Long long paragraph.

     Long long long paragraph.

     Long long long long paragraph.

     Long long long long long paragraph.

     Long long long long long long paragraph.
```
This is a sentence with footnote.[^1]

Long paragraph inside footnote. [^2]

[^1]: Footnote #1
[^2]:
     Long paragraph.

     Long long paragraph.

     Long long long paragraph.

     Long long long long paragraph.

     Long long long long long paragraph.

     Long long long long long long paragraph.

# Abbreviations
```
#!markdown
The HTML specification
is maintained by the W3C.

*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium
```

The HTML specification
is maintained by the W3C.

*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium

# Backslash Escapes
```
#!markdown

This|is|a|table
----|--|-|-----
|||

This\|is\|not\|a\|table
----\|--\|-\|-----
\|\|\|
```

This|is|a|table
----|--|-|-----
|||

This\|is\|not\|a\|table
----\|--\|-\|-----
\|\|\|

# Credits
Thanks for content from these sources.

- [https://theme-suka.skk.moe/demo/2018/07/24/markdown-style]()
- [https://michelf.ca/projects/php-markdown/extra]()