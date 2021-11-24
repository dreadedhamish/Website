<template>
  <div class="all-wrapper">
    <section class="container">
      <h3 class="thirm-subtitle">Read Documentation To Know More</h3>
      <h1 class="thirm-title">
        Current <strong> Blockchains</strong> Supported
      </h1>

      <div class="column is-offset-1">
        <div class="columns is-multiline">
          <div class="column" v-for="item in lot" :key="item.symbol">
            <b-tooltip :label="item.name" position="is-top">
              <figure class="coin-image is-128x128">
                <img v-bind:src="item.logoURI.trim()" />
              </figure>
            </b-tooltip>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.all-wrapper {
  padding: 60px 16px 60px 16px;
}
.box.style1 {
  .comp-title {
    font-size: 21px;
    color: #4834d4;
    text-transform: uppercase;
    font-weight: 600;
    padding: 16px 0;
  }
}
.b-tooltip {
  width: 100%;
}
.coin-image {
  margin: 0 auto;
  padding: 16px;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>

<script>
export default {
  data() {
    return {
      lot: [
        {
          name: "Thirm Nano",
          symbol: "tNANO",
          logoURI:
            "https://raw.githubusercontent.com/thirmprotocol/API/master/icons/tnano.png",
        },
        {
          name: "Thirm Bitcoin",
          symbol: "tBTC",
          logoURI:
            "https://raw.githubusercontent.com/thirmprotocol/API/master/icons/tbtc.png",
        },
        {
          name: "Thirm DOGE (In Development)",
          symbol: "tDOGE",
          logoURI:
            "https://raw.githubusercontent.com/thirmprotocol/API/master/icons/tdoge.png",
        },
      ],
    };
  },
  async created() {},
};
</script>
