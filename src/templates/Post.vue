<template>
  <Layout>
    <div class="post-title">
      <h1 class="post-title__text">
        {{ $page.post.title }}
      </h1>

      <post-meta class='post-title__meta' :post="$page.post" />
    </div>

    <div class="post content-box">
      <div class="post__header">
        <g-image alt="Cover image" v-if="$page.post.coverImage" :src="$page.post.coverImage" />
      </div>

      <div class="post__content" v-html="$page.post.content" />

      <div class="post__footer">
        <post-tags :post="$page.post" />
      </div>
    </div>

    <div class="post-comments">
      <!-- Add comment widgets here -->
    </div>
  </Layout>
</template>

<script>
import PostMeta from '../components/PostMeta.vue';
import PostTags from '../components/PostTags.vue';

export default {
  metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          key: 'description',
          content: this.$page.post.description
        }
      ]
    }
  },
  components: {
    PostMeta,
    PostTags
  }
}
</script>

<page-query>
query Post ($path: String!) {
  post (path: $path) {
    title
    path
    date (format: "D MMMM YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
  }
}
</page-query>

<style lang="scss" scoped>
.post-title {
  .post-title__text {
    font-weight: bold;
  }
  .post-title__meta {
    margin-top: 0.5em;
  }
}
.post {
  margin-top: 1.5em;
}

.post__content {
  /deep/ a {
    text-decoration: underline;
  }

  /deep/ p {
    margin-top: 1em;
  }

  /deep/ img {
    max-width: 100%;
    height: auto;
  }
}
</style>
