<template>
  <div class="listing-wrapper ">
    <section class="container">
      <div class="listing-box">
        <div class="list-items ">
          <a
            class="listing"
            target="_blank"
            href="https://uniswap.info/token/0xb526fd41360c98929006f3bdcbd16d55de4b0069"
          >
            <img src="../assets/tags/uniswap.png"
          /></a>
        </div>

        <div class="list-items">
          <a
            class="listing"
            target="_blank"
            href="https://matcha.xyz/markets/0xb526fd41360c98929006f3bdcbd16d55de4b0069"
          >
            <img src="../assets/tags/matcha.png"
          /></a>
        </div>

        <div class="list-items">
          <a
            class="listing"
            target="_blank"
            href="https://etherscan.io/token/0xb526fd41360c98929006f3bdcbd16d55de4b0069"
          >
            <img src="../assets/tags/etherscan.png"
          /></a>
        </div>
      </div>

      <div class="listing-box">
        <div class="list-items">
          <a
            class="listing"
            target="_blank"
            href="https://www.stateofthedapps.com/dapps/thirm"
            ><img src="../assets/tags/sod.png"
          /></a>
        </div>

        <div class="list-items">
          <a
            class="listing"
            target="_blank"
            href="https://www.coingecko.com/en/coins/thirm-protocol"
          >
            <img src="../assets/tags/coingecko.png"
          /></a>
        </div>

        <div class="list-items">
          <a
            class="listing"
            target="_blank"
            href="https://coinmarketcap.com/currencies/thirm-protocol"
          >
            <img src="../assets/tags/coinmarketcap.png"
          /></a>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped lang="scss">
.listing-wrapper {
  padding: 120px 16px 60px 16px;
}
.listing-box {
  margin: 16px 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  .listing {
    img {
      width: 200px;
      padding: 8px;
    }
  }
}
.list-items {
  width: 250px;
  margin: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.4s ease-in-out;
  &:hover {
    transform: scale(1.15);
  }
}
.list-items.greyscale {
  opacity: 0.3;
  a {
    > img {
      filter: grayscale(100%);
    }
  }
}
@media screen and (max-width: 1023px) {
  .listing-box {
    flex-direction: column;
  }
}
</style>
