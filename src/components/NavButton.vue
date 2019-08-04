<template>
  <div class='-a-ta-c a-tt-u'>
    <g-link class='nav-button' :to='to'>
      <div class='nav-button__slot'><slot></slot></div>
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
}
</script>

<style lang="scss">
@import "~/assets/css/_mixins.scss";

.nav-button {
  $navbutton: &;

  box-sizing: border-box;
  display: inline-block;
  width: 100%;

  @include mobile {
    &__slot {
      display: table;
      border: 1px solid black;
      padding: 0.25em 0.5em;
      white-space:nowrap;
      width: 100%;
      text-align: center;
    }

    &.active--exact, &:hover {
      #{$navbutton}__slot {
        background-color: black;
        color: white;
      }
    }
  }

  @include desktop {
    font-weight: bold;
  }
}
</style>
