<template>
  <div class="medium-wrapper">
    <div class="container">
      <h3 class="thirm-subtitle">Read our blog posts</h3>
      <h1 class="thirm-title">Recent from <strong>Medium</strong></h1>
      <div
        ref="medium-widget"
        id="medium-widget"
        class="lcontainer__medium-widget"
        :class="{ 'lcontainer__medium-widget--loaded': isMediumLoaded }"
      ></div>
    </div>
  </div>
</template>

<style lang="scss">
#medium-widget {
  margin: 24px 0;
}
.medium-wrapper {
  padding: 120px 16px 120px 16px;
  margin: 60px 0 60px 0;
  background-image: radial-gradient(73% 147%, #eadfdf 59%, #ece2df 100%),
    radial-gradient(
      91% 146%,
      rgba(255, 255, 255, 0.5) 47%,
      rgba(0, 0, 0, 0.5) 100%
    );
  background-blend-mode: screen;
}
.medium-widget-article__image {
  img {
    border-radius: 8px;
    border: 1px solid #e3e3e3;
    background: #fff;
  }
}
.medium-widget-article__title {
  font-size: 16px;
  margin-top: 12px;
  color: #424242 !important;
}

.medium-widget-article__item {
  margin: 16px 0;
}
</style>

<script>
export default {
  data() {
    return {
      isMediumLoaded: false,
    };
  },
  mounted() {
    this.$loadScript("https://medium-widget.pixelpoint.io/widget.js")
      .then(() => {
        this.initMedium();
      })
      .catch(() => {
        console.error("Can't load Medium publication");
      });
  },
  beforeDestroy() {
    let element = this.$refs["medium-widget"];
    element.innerHTML = "";
    this.$unloadScript("https://medium-widget.pixelpoint.io/widget.js");
  },
  methods: {
    initMedium() {
      window.MediumWidget.Init({
        renderTo: "#medium-widget",
        params: {
          resource: "https://medium.com/thirmprotocol",
          postsPerLine: 3,
          limit: 6,
          picture: "big",
          fields: [],
          ratio: "landscape",
        },
      });

      setTimeout(() => {
        this.isMediumLoaded = true;
      }, 500);
    },
  },
};
</script>
