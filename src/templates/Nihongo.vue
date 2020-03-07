<template>
  <Layout>
    <div class="post-title">
      <h1 class="post-title__text">
        {{ $convert("Kanji", $page.nihongo.position) }}
        <span class="a-d-ib a-ml(0.5em)">{{ $page.nihongo.title }}</span>
      </h1>

      <post-meta class="post-title__meta" :post="$page.nihongo" />
    </div>

    <div class="post content-box">
      <div class="post__header">
        <g-image
          alt="Cover image"
          v-if="$page.nihongo.coverImage"
          :src="$page.nihongo.coverImage"
        />
      </div>

      <div class="post__content" v-html="$page.nihongo.content" />
    </div>

    <div class="post-comments">
      <!-- Add comment widgets here -->
    </div>
  </Layout>
</template>

<script>
  import PostMeta from "../components/PostMeta.vue";

  export default {
    metaInfo() {
      return {
        title: this.$page.nihongo.title,
        meta: [
          {
            name: "description",
            key: "description",
            content: this.$page.nihongo.description
          }
        ]
      };
    },
    components: {
      PostMeta
    }
  };
</script>

<page-query>
query Nihongo ($path: String!) {
  nihongo (path: $path) {
    title
    position
    slug
    path
    date (format: "D MMMM YYYY")
    timeToRead
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
  .post.content-box {
    margin-bottom: 3em;
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
