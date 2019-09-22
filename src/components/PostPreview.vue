<template>
  <!-- Used when listing writing posts -->
  <div class='post-preview'>
    <h2 class='post-preview__title'>
      <g-link class='post-preview__link' :to='post.path'>{{ post.title }}</g-link>
    </h2>
    <post-meta class="post-preview__meta" :post="post" />
    <p class='post-preview__description'>{{ post.description }}</p>

    <btn class='post-preview__link' :to="post.path">Read more</btn>
  </div>
</template>

<script>
import Btn from './Btn.vue';
import PostMeta from './PostMeta.vue';

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  components: {
    Btn,
    PostMeta
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/css/_variables.scss";

.post-preview__title {
  font-weight: bold;
}
.post-preview__meta {
  margin-top: 0.25em;
}
.post-preview__description {
  font-family: 'Barlow Condensed', sans-serif;
  margin-top: 1em;
  margin-bottom: 1em;
  color: map-get($color, "standout");

}
.post-preview + .post-preview {
  margin-top: 2em;
}
</style>
