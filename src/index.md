---
title: My first blog post
layout: "layout.njk"
---

# {{ title }}

## Blog posts

<ul>
  {%  for post in collections.posts %}
  <li><a href="{{ post.url }}">{{ post.data.title }}</li>
  {% endfor %}
</ul>
