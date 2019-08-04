<template>
  <Layout>
    <template v-slot:overlay>
      <div class="index desktop">
        <main-title></main-title>
      </div>
    </template>
    <div class="index mobile">
      <main-title></main-title>
      <div class='info-item'>
        <pin-icon height="16px"></pin-icon>
        <span>são paulo, brazil</span>
      </div>
      <div class='info-item'>
        <at-icon height="16px"></at-icon>
        <span>thiagobrandam(at)gmail(dot)com</span>
      </div>
      <div class='info-item'>
        <twitter-icon height="16px"></twitter-icon>
        <a target="_blank" href="https://twitter.com/thiagobrandam" rel="noopener noreferer" aria-label="my twitter">
          @thiagobrandam
        </a>
      </div>
      <div class='info-item'>
        <github-icon height="16px"></github-icon>
        <a target="_blank" href="https://github.com/thiagobrandam" rel="noopener noreferer" aria-label="my github">
          github.com/thiagobrandam
        </a>
      </div>
      <div class='info-item'>
        <linked-in-icon height="16px"></linked-in-icon>
        <a target="_blank" href="https://linkedin.com/in/thiagobrandam/" rel="noopener noreferer" aria-label="my linkedin">
          linkedin.com/in/thiagobrandam
        </a>
      </div>
      <div class='info-item'>
        <me-icon height="16px"></me-icon>
        <g-link class="a-tc-u" to="/thiagobrandam">? thiagobrandam ?</g-link>
      </div>
    </div>
  </Layout>
</template>

<script>
import MainTitle from '../components/MainTitle.vue';
// at and pin icon by fontawesome
import PinIcon from '~/assets/images/pin.svg';
import AtIcon from '~/assets/images/at.svg';
import TwitterIcon from '~/assets/images/twitter.svg';
import GithubIcon from '~/assets/images/github.svg';
import LinkedInIcon from '~/assets/images/linkedin.svg';
import MeIcon from '~/assets/images/me.svg';

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    MainTitle,
    PinIcon,
    AtIcon,
    TwitterIcon,
    GithubIcon,
    LinkedInIcon,
    MeIcon
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/css/_mixins.scss";

.index {
  height: 100%;
}
.index.desktop {
  @include mobile {
    display: none;
  }

  padding-left: 6em;
  position: relative;

  .main-title {
    position: absolute;
    bottom: -3em;
  }
}
.index.mobile {
  @include desktop {
    display: none;
  }

  display: grid;
  grid-template-rows: repeat(24,1fr);
  justify-items: center;
  align-items: center;

  .main-title {
    text-align: center;
    grid-row: 1 / 6;
  }

  .info-item {
    display: flex;

    svg { margin-right: .5em; }
  }
}
</style>
