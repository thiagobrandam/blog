---
title: My first blog post
layout: "layout.njk"
---

{% import "src/components/nav_button.njk" as button %}

<nav>
  {{ button.build('/', 'Home') }}
  {{ button.build('/writing', 'Writing') }}
  {{ button.build('/books', 'Books') }}
  {{ button.build('/projects', 'Projects') }}
  {{ button.build('/online-courses', 'Online Courses') }}
  {{ button.build('/podcasts', 'Podcasts') }}
  {{ button.build('/nihongo', '日本語') }}
</nav>
<aside>
  <span>contact</span>
</aside>
<main>
  <h1>Thiago Brandão</h1>
  <h2>My life snapshot into bytes</h2>
</main>
<footer>

</footer>

<!-- <div>
  {{ title }} <p><a href="https://google.com">a link</a></p>
</div> -->

<!-- {% import "src/components/button.njk"  as button %} -->

<!-- {{ button.build('http://google.com', 'Google') }} -->

<!-- ```js/1,3-5
function myFunction() {
  // …
  return true;
}
``` -->
