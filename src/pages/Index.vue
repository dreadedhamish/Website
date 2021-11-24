<template>
  <div>
    <div class="banner ">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column">
            <lottie-player
              src="/animations/thirm.json"
              background="transparent"
              speed="1"
              style="width: 100%; height: 100%"
              loop
              autoplay
            ></lottie-player>
          </div>
          <div class="column is-5 thirm-info">
            <div class="content box intro-box">
              <strong>THIRM PROTOCOL</strong>
              <p>
                connects non-EVM blockchains with Ethereum. Facilitating access
                to Defi using traditional blockchains like $NANO, $BTC, $DOGE,
                $LTC, and so on.
              </p>
            </div>
            <div class="columns is-vcentered">
              <div class="column">
                <a
                  href="https://app.uniswap.org/#/swap?outputCurrency=0xb526fd41360c98929006f3bdcbd16d55de4b0069"
                  target="_blank"
                >
                  <b-button class="access-button" block type="is-info" expanded>
                    <span>Buy on Uniswap</span>
                    <i class="fas fa-long-arrow-alt-right"></i>
                  </b-button>
                </a>
              </div>
            </div>
            <div class="columns is-vcentered">
              <div class="column">
                <a href="https://bridge.thirm.com/" target="_blank">
                  <b-button class="bridge-button" type="is-success" expanded
                    >Access Bridge</b-button
                  >
                </a>
              </div>
              <div class="column">
                <a href="https://docs.thirm.com/" target="_blank">
                  <b-button class="docs-button" type="is-danger" expanded
                    >Documentation</b-button
                  >
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <tags />
    <feature />
    <all />
    <medium class="is-hidden-mobile" />
    <contact />
  </div>
</template>

<script>
import medium from "../components/medium";
import tags from "../components/tags";
import all from "../components/all";
import feature from "../components/feature";
import contact from "../components/contact";

export default {
  components: {
    medium,
    tags,
    all,
    contact,
    feature,
  },
};
</script>

<style scoped lang="scss">
.intro-box {
  strong {
    font-size: 32px;
    color: #badc58 !important;
  }
}

.access-button {
  height: 60px !important;
  background: #523ed6 !important;
  &:hover {
    background: #4834d4 !important;
  }
  i {
    margin-left: 8px;
  }
}
.bridge-button {
  background-color: #30336b !important;
  color: #ff7979 !important;
  transition: 0.3s all ease-in-out;
  &:hover {
    background: #e74c3c !important;
    color: #fff !important;
  }
}
.docs-button {
  background-color: #30336b !important;
  color: #ffbe76 !important;
  transition: 0.3s all ease-in-out;
  &:hover {
    background: #27ae60 !important;
    color: #fff !important;
  }
}
.thirm-info {
  padding: 24px;
}
</style>
