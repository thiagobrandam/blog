<template>
  <Layout>
    <div class="project">
      <h1 class="project__title">
        <g-image :src="$page.project.logo"/>

        {{ $page.project.name }}
      </h1>
      <div class="project__content" v-html='$page.project.content'></div>
    </div>
  </Layout>
</template>

<script>

export default {
  metaInfo () {
    return {
      title: this.$page.project.name,
      meta: [
        {
          name: 'description',
          key: 'description',
          content: `${this.$page.project.name}: ${this.$page.project.description}`
        }
      ]
    }
  }
}
</script>

<page-query>
query Project ($id: ID!) {
  project (id: $id) {
    id
    name
    description
    content
    logo (width: 40, height: 40)
  }
}
</page-query>

<style lang="scss" scoped>
.project {
  &__title {
    font-weight: bold;
  }
  &__content {
    margin-top: 1.5em;
    margin-bottom: 3em;

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
}
</style>
