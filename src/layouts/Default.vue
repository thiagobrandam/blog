<template>
  <div class="layout">
    <div id="overlay"><slot name="overlay"></slot></div>

    <nav>
      <nav-btn id="home" to="/" :exact="true">Home</nav-btn>
      <nav-btn id="writing" to="/writing">Writing</nav-btn>
      <nav-btn id="books" to="/books">Books</nav-btn>
      <nav-btn id="projects" to="/projects">Projects</nav-btn>
      <nav-btn id="online-courses" to="/online-courses">Online Courses</nav-btn>
      <nav-btn id="podcasts" to="/podcasts">Podcasts</nav-btn>
      <nav-btn id="nihongo" to="/nihongo">日本語</nav-btn>
    </nav>

    <aside class="sidebar-info-list">
      <div class="sidebar-info-list-item">
        <div class="sidebar-info-list-item-key a-mb(0.25em)">
          <g-link class="nav-link a-tc-u" to="/thiagobrandam"
            >thiagobrandam</g-link
          >
        </div>
        <div class="sidebar-info-list-item-value">
          <a
            class="a-mr(0.25em)"
            target="_blank"
            href="https://github.com/thiagobrandam"
            rel="noopener noreferer"
            aria-label="my github"
          >
            <github-icon class="sidebar-social"></github-icon>
          </a>

          <a
            class="a-mr(0.25em)"
            target="_blank"
            href="https://twitter.com/thiagobrandam"
            rel="noopener noreferer"
            aria-label="my twitter"
          >
            <twitter-icon class="sidebar-social"></twitter-icon>
          </a>

          <a
            target="_blank"
            href="https://linkedin.com/in/thiagobrandam/"
            rel="noopener noreferer"
            aria-label="my linkedin"
          >
            <linked-in-icon class="sidebar-social"></linked-in-icon>
          </a>
        </div>
      </div>
      <div class="sidebar-info-list-item">
        <div class="sidebar-info-list-item-key">
          location
        </div>
        <div class="sidebar-info-list-item-value">
          são paulo, brazil
        </div>
      </div>
      <div class="sidebar-info-list-item">
        <div class="sidebar-info-list-item-key">
          contact
        </div>
        <div class="sidebar-info-list-item-value">
          thiagobrandam(at)
        </div>
        <div class="sidebar-info-list-item-value">
          gmail(dot)com
        </div>
      </div>
    </aside>

    <main>
      <slot></slot>
    </main>
    <footer></footer>
  </div>
</template>

<script>
  import TwitterIcon from "~/assets/images/twitter.svg";
  import GithubIcon from "~/assets/images/github.svg";
  import LinkedInIcon from "~/assets/images/linkedin.svg";
  import MainTitle from "../components/MainTitle.vue";
  import NavBtn from "../components/NavBtn.vue";

  export default {
    components: {
      TwitterIcon,
      GithubIcon,
      LinkedInIcon,
      MainTitle,
      NavBtn
    }
  };
</script>

<style lang="scss" scoped>
  @import "~/assets/css/_mixins.scss";

  .layout {
    height: 100%;
    display: grid;

    nav {
      grid-area: nav;
    }

    main {
      grid-area: main;
    }

    aside {
      grid-area: aside;
    }

    @include desktop {
      max-width: 992px;
      margin: 100px auto 0 auto;

      grid-template-columns: 1fr 3fr;
      grid-template-rows: auto 1fr;
      grid-template-areas:
        "nav main"
        "aside main";
      column-gap: 3em;
      row-gap: 3em;

      nav,
      aside {
        justify-self: end;
        text-align: right;
      }

      nav {
        display: grid;
        row-gap: 0.25em;
      }

      #overlay {
        grid-column: 2 / 3;
        grid-row: 1 / 2;
      }
    }

    @include mobile {
      padding: 1em;
      grid-template-columns: 100%;
      grid-template-rows: auto auto 1fr;
      grid-template-areas:
        "header"
        "nav"
        "main";
      row-gap: 1em;

      aside {
        display: none;
      }

      nav {
        display: grid;
        grid-template-columns: repeat(12, auto);
        grid-template-rows: auto auto;
        row-gap: 0.5em;
        column-gap: 0.5em;

        #home {
          grid-column: span 3;
        }
        #writing {
          grid-column: span 3;
        }
        #books {
          grid-column: span 3;
        }
        #projects {
          grid-column: span 3;
        }
        #online-courses {
          grid-column: span 4;
        }
        #podcasts {
          grid-column: span 4;
        }
        #nihongo {
          grid-column: span 4;
        }
      }
    }

    .separator {
      position: relative;
      height: 1px;

      hr {
        display: block;
        position: absolute;
        right: 0;
        width: 6.25em;
        margin: 0;
        border: 1px solid map-get($color, "standout");
      }
    }

    .sidebar-social {
      width: 1.25em;
      height: 1.25em;
    }

    .sidebar-info-list {
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
  }
</style>
