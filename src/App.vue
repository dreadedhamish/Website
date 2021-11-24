<template>
  <div id="app">
    <template>
      <scroll-fixed-header :fixed.sync="fixed" :threshold="56">
        <b-navbar wrapper-class="container">
          <template slot="brand">
            <b-navbar-item class="logo" tag="router-link" :to="{ path: '/' }"
              ><strong>THIRM</strong></b-navbar-item
            >
          </template>

          <template slot="start">
            <b-navbar-item tag="router-link" :to="{ path: '/about' }"
              ><strong>About</strong></b-navbar-item
            >
            <b-navbar-item tag="router-link" :to="{ path: '/roadmap' }"
              ><strong>Roadmap</strong></b-navbar-item
            >
            <b-navbar-item tag="router-link" :to="{ path: '/faq' }"
              ><strong>FAQs</strong></b-navbar-item
            >
          </template>

          <section slot="end" class="social-icons">
            <b-navbar-item
              target="_blank"
              href="https://medium.com/thirmprotocol"
            >
              <i class="fab fa-medium"></i>
            </b-navbar-item>
            <b-navbar-item
              target="_blank"
              href="https://github.com/thirmprotocol"
            >
              <i class="fab fa-github"></i>
            </b-navbar-item>
            <b-navbar-item
              target="_blank"
              href="https://twitter.com/thirmprotocol"
            >
              <i class="fab fa-twitter"></i>
            </b-navbar-item>
            <b-navbar-item target="_blank" href="https://t.me/thirm">
              <i class="fab fa-telegram"></i>
            </b-navbar-item>
            <b-navbar-item target="_blank" href="https://discord.gg/sA8AdfF7ac">
              <i class="fab fa-discord"></i>
            </b-navbar-item>
            <b-navbar-item
              target="_blank"
              href="https://www.linkedin.com/company/thirm"
            >
              <i class="fab fa-linkedin"></i>
            </b-navbar-item>
          </section>
        </b-navbar>
      </scroll-fixed-header>
    </template>

    <router-view />

    <footer class="footer-wrapper">
      <div class="content has-text-centered">
        <p>Copyright © 2021 | <strong>THIRM SOLUTIONS</strong></p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      fixed: false,
    };
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800&family=Ubuntu:wght@400;500;700&display=swap");

@import "~bulma/sass/utilities/_all";

$family-primary: "Ubuntu", $family-sans-serif;

@import "~bulma";
@import "~buefy/src/scss/buefy";

body {
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
}

.banner {
  background: #130f40;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 36px 18px;
  .content.box {
    padding: 32px;
    background-color: #30336b;
    color: #e3e3e3;
    line-height: 30px;
    strong {
      color: #fff;
    }
  }
}
.scroll-fixed-header {
  .navbar {
    background: #130f40;
    height: 60px;
    .social-icons {
      margin: 8px 0;
    }
  }
  .navbar-end {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .navbar-item {
      margin: 4px 0;
      padding: 4px 10px;
      display: inline-block;
      background: transparent;
    }
  }
  .navbar-item {
    .fab {
      font-size: 24px;
      color: #bdbdbd;
      &:hover {
        background: transparent;
        color: #fff;
      }
    }
    color: #bdbdbd;
    margin: 0 2px;
    &:hover {
      background: transparent;
      color: #fff;
    }
    &:active {
      background: transparent;
      color: #fff;
    }
  }
  .navbar-item.router-link-active {
    background: transparent;
    color: #fff;
  }
}
.scroll-fixed-header.is-fixed {
  .navbar {
    background: #fff;
    box-shadow: 0 5px 10px rgba(154, 160, 185, 0.4),
      0 15px 40px rgba(166, 173, 201, 0.2);
    .navbar-item {
      color: #444;
      .fab {
        color: #444;
        &:hover {
          color: #191919;
        }
      }
      &:hover {
        color: #191919;
      }
    }
  }
  .logo {
    strong {
      color: #6ab04c;
    }
  }
  a.navbar-burger {
    color: #191919 !important;
    background: transparent;
    &:hover {
      color: #000 !important;
      background: transparent;
    }
  }
}
.footer-wrapper {
  background: #130f40;
  color: #f1f1f1;
  padding: 60px 16px;
  strong {
    color: #f1f1f1;
  }
}
button {
  transition: all 0.5s ease-in-out !important;
}
.logo {
  strong {
    color: #badc58;
    font-size: 18px;
    margin-right: 36px;
  }
}
.navbar-menu.is-active {
  .navbar-item {
    color: #444;
    color: #444;
    .fab {
      color: #444;
      &:hover {
        color: #191919;
      }
    }
    &:hover {
      color: #191919;
    }
  }
  .navbar-item.router-link-active {
    color: #191919;
  }
}
.thirm-title {
  text-align: center;
  font-size: 30px;
  line-height: 36px;
  color: #191919;
  font-family: "Raleway", sans-serif;
  padding: 8px 0 40px 0;
  font-weight: 500;
  strong {
    font-weight: 700;
  }
}
.thirm-subtitle {
  text-align: center;
  font-size: 16px;
  color: #777;
  text-transform: uppercase;
  font-weight: 500;
}
.thirm-title.text-left {
  text-align: left;
}
.thirm-subtitle.text-left {
  text-align: left;
}
a.navbar-burger {
  color: #f3f3f3 !important;
  background: transparent;
  &:active {
    background: transparent;
  }
}
.navbar-item {
  a.navbar-burger {
    &:hover {
      color: #fff;
      background: transparent;
    }
  }
}
a.navbar-burger.is-active {
  background: transparent;
}
@media screen and (max-width: 1023px) {
  .scroll-fixed-header {
    .navbar-end {
      .navbar-item {
        margin: 16px 0;
      }
    }
  }
}
</style>
