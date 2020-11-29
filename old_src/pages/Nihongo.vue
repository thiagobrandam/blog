<template>
  <Layout>
    <h1 class="a-tt-u a-fw-b">日本語</h1>

    <div class="a-mt(1.5em)">
      <div v-for="edge in $page.nihongos.edges" :key="edge.node.id">
        <g-link :to="edge.node.path">
          <span class="a-fw-b">{{
            $convert("Kanji", edge.node.position)
          }}</span>

          <span class="a-d-ib a-ml(0.5em)">{{ edge.node.title }}</span>
        </g-link>
      </div>
    </div>
  </Layout>
</template>

<page-query>
{
  nihongos: allNihongo(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        position
        title
        content
        slug
        path
        date (format: "D MMMM YYYY")
        timeToRead
        description
      }
    }
  }
}
</page-query>

<script>
  export default {
    metaInfo: {
      title: "日本語"
    }
  };
</script>
