<template>
  <!-- Used when listing writing posts -->
  <div class='post-preview a-mt(1em)'>
    <h2 class='post-preview__title'>{{ post.title }}</h2>
    <post-meta class="post-preview__meta" :post="post" />
    <p class='post-preview__description a-mt(0.5em) a-mb(1em)'>{{ post.description }}</p>
    <g-link class='post-preview__link' :to='post.path'>Read more</g-link>
  </div>
</template>

<script>
import PostMeta from './PostMeta.vue';

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  components: {
    PostMeta
  }
}
</script>

<style lang="scss" scoped>
p.post-preview__description {
  font-family: 'Barlow Condensed', sans-serif;
}
</style>
