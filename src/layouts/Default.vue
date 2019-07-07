<template>
  <div class="layout">
    <div class="layout__sidebar">
      <nav class="layout__nav">
        <g-link class="layout__nav-link a-tt-u" to="/">Home</g-link>
        <g-link class="layout__nav-link a-tt-u" to="/writing">Writing</g-link>
        <g-link class="layout__nav-link a-tt-u" to="/books">Books</g-link>
        <g-link class="layout__nav-link a-tt-u" to="/projects">Projects</g-link>
        <g-link class="layout__nav-link a-tt-u" to="/online-courses">Online Courses</g-link>
        <g-link class="layout__nav-link a-tt-u" to="/podcasts">Podcasts</g-link>
        <g-link class="layout__nav-link a-tt-u" to="/nihongo">日本語</g-link>
      </nav>

      <hr>

      <div class="layout__sidebar-info-list">
        <div class="layout__sidebar-info-list-item">
          <div class="layout__sidebar-info-list-item-key">
            <g-link class="layout__nav-link" to="/thiagobrandam">thiagobrandam</g-link>
          </div>
          <div class="layout__sidebar-info-list-item-value">
            <a class='a-mr(0.25em)' target="_blank" href="https://github.com/thiagobrandam" rel="noopener noreferer">
              <github-icon class="layout__sidebar-social"></github-icon>
            </a>

            <a class='a-mr(0.25em)' target="_blank" href="https://twitter.com/thiagobrandam" rel="noopener noreferer">
              <twitter-icon class="layout__sidebar-social"></twitter-icon>
            </a>

            <a target="_blank" href="https://linkedin.com/in/thiagobrandam/" rel="noopener noreferer">
              <linked-in-icon class="layout__sidebar-social"></linked-in-icon>
            </a>
          </div>
        </div>
        <div class="layout__sidebar-info-list-item">
          <div class="layout__sidebar-info-list-item-key">
            location
          </div>
          <div class="layout__sidebar-info-list-item-value">
            são paulo, brazil
          </div>
        </div>
        <div class="layout__sidebar-info-list-item">
          <div class="layout__sidebar-info-list-item-key">
            contact
          </div>
          <div class="layout__sidebar-info-list-item-value">
            thiagobrandam(at)
          </div>
          <div class="layout__sidebar-info-list-item-value">
            gmail(dot)com
          </div>
        </div>
      </div>
    </div>
    <main class='layout__main'>
      <slot></slot>
    </main>
  </div>
</template>

<script>
  import TwitterIcon from '~/assets/images/twitter.svg';
  import GithubIcon from '~/assets/images/github.svg';
  import LinkedInIcon from '~/assets/images/linkedin.svg';

  export default {
    components: {
      TwitterIcon, GithubIcon, LinkedInIcon
    }
  }
</script>


<style lang="scss" scoped>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  box-sizing: border-box;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 992px;
  margin: 100px auto 0 auto;
  display: flex;

  &__sidebar {
    flex: 1 1 25%;
    padding-right: 1em;
    padding-left: 1em;
    text-align: right;

    hr {
      display: inline-block;
      width: 100px;
      margin: 0;
      border: 1px solid black;
    }
  }

  &__nav {
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;

    &-link {
      font-weight: bold;
      text-decoration: underline;

      &--uppercased {
        text-transform: uppercase;
      }
    }
  }

  &__sidebar-social {
    width: 1.25em;
    height: 1.25em;
  }

  &__sidebar-info-list {
    margin-top: 1em;

    &-item {
      margin-bottom: 0.5em;
    }

    &-item-key {
      font-weight: bold;
    }

    &-item-value {
      font-size: 0.875em;
    }
  }

  &__main {
    flex: 1 1 75%;
    padding-right: 1em;
    padding-left: 1em;
  }
}
</style>
