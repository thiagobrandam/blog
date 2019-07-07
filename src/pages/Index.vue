<template>
  <Layout>
    <div class="index">
      <div class="index__content">
        <h1>Thiago Brandão</h1>

        <p>
          This is where I snapshot my life into bytes
        </p>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style lang="scss" scoped>
.index {
  height: 100%;
  padding-left: 8em;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &__content {
    h1 {
      text-transform: uppercase;
    }
  }
}
</style>
