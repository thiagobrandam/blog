<template>
  <div class="uppercase">
    <g-link class="btn" :to="to">
      <div class="btn__slot"><slot></slot></div>
    </g-link>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
@import "~/assets/css/_variables.scss";

.btn {
  $self: &;

  box-sizing: border-box;
  display: inline-block;

  &__slot {
    display: table;
    border: 1px solid map-get($color, "standout");
    padding: 0.25em 0.5em;
    white-space: nowrap;
    width: 100%;
    text-align: center;
  }

  &.active--exact,
  &:hover {
    #{$self}__slot {
      background-color: map-get($color, "standout");
      color: white;
    }
  }
}
</style>
