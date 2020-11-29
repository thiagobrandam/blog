<template>
  <div class='project-preview'>
    <div class='project-preview__description'>
      <g-link class='project-preview__link' :to='project.path'>
        <g-image :src="project.logo" class='project-preview__logo a-mr(0.25em)'/>
        <b>{{ project.name }}</b>: {{ project.description }}
      </g-link>
    </div>
  </div>
</template>

<script>
import Btn from './Btn.vue';

export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  components: {
    Btn
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/css/_variables.scss";

.project-preview__title {
  font-weight: bold;
}
.project-preview__meta {
  margin-top: 0.25em;
}
.project-preview__description {
  font-family: 'Barlow Condensed', sans-serif;
  margin-top: 1em;
  margin-bottom: 1em;
  font-size: 1.125rem;
  color: map-get($color, "standout");

}
.project-preview + .project-preview {
  margin-top: 2em;
}

.project-preview__logo {
  display: inline-block;
  vertical-align: middle;
  position: relative;
  top: -1px;
}
</style>
