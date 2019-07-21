<template>
  <Layout>
    <h1>Writing</h1>

    <div class='posts a-mt(1.5em)'>
      <post-preview v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
    </div>
  </Layout>
</template>

<page-query>
{
  posts: allPost(filter: { section: { eq: "writing" }, published: { eq: true }}) {
    edges {
      node {
        id
        title
        content
        path
        tags {
          id
          title
          path
        }
        date (format: "D MMMM YYYY")
        timeToRead
        description
        ...on Post {
            id
            title
            path
            excerpt
        }
      }
    }
  }
}
</page-query>

<script>
import PostPreview from '../components/PostPreview.vue';

export default {
  metaInfo: {
    title: 'Writing'
  },
  components: {
    PostPreview
  }
}
</script>