<template>
  <Layout>
    <h1 class='a-tt-u a-fw-b'>Projects</h1>
    <ul class='projects a-mt(1.5em)'>
      <li>
        <project-preview v-for="edge in $page.projects.edges" :key="edge.node.id" :project="edge.node"/>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
{
  projects: allProject(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        name
        description
        content
        path
        logo (width: 22, height: 22)
      }
    }
  }
}
</page-query>

<script>
import ProjectPreview from '../components/ProjectPreview.vue';

export default {
  metaInfo: {
    title: 'Projects'
  },
  components: {
    ProjectPreview
  }
}
</script>

<style lang="scss" scoped>

</style>