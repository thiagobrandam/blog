---
title: My first blog post
layout: "layout.njk"
---

<div>
  {{ title }} <p><a href="https://google.com">a link</a></p>
</div>

{% include "src/components/button.njk" %}

```js/1,3-5
function myFunction() {
  // …
  return true;
}
```
