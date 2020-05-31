<template>
  <div class="uppercase">
    <g-link class="nav-btn" :to="to" :exact="exact">
      <div
        class="nav-btn__slot table border border-solid border-coal px-2 py-1 w-full whitespace-no-wrap text-center"
      >
        <slot></slot>
      </div>
    </g-link>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true
    },
    exact: {
      type: Boolean,
      required: false
    }
  }
};
</script>

<style lang="scss">
.nav-btn {
  @apply text-coal;

  &.active,
  &:hover {
    @apply text-white;
    .nav-btn__slot {
      @apply bg-coal;
    }
  }

  @screen lg {
    @apply font-bold;

    &.active,
    &:hover {
      @apply text-coal;
      .nav-btn__slot {
        @apply bg-white;
      }
    }
  }
}
</style>
