<template>
  <div>
    <div
      class="container px-16 py-24 md:pt-60 md:pb-10 mx-auto text-center md:text-center"
    >
      <h1
        class="text-5xl font-extrabold leading-12 tracking-tight text-center text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl"
      >
        <span class="inline block ">THIRM </span>
        <span
          class="relative text-transparent bg-clip-text bg-gradient-to-br from-indigo-800 to-indigo-500 md:inline-block"
          >PROTOCOL</span
        >
      </h1>
      <div
        class="mx-auto mt-4 text-gray-500 md:max-w-lg text-center lg:text-xl text-lg"
      >
        allows you to transfer your cryptocurrency assets between multiple
        blockchains.
      </div>
      <div class="flex flex-col items-center mt-12 text-center">
        <span class="relative inline-flex w-full md:w-auto">
          <a
            href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x21da60b286baefd4725a41bb50a9237eb836a9ed"
            type="button"
            class="inline-flex items-center justify-center w-full px-16 py-4 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
          >
            GET THIRM
          </a>
          <span
            class="absolute top-0 right-0 px-2 py-1 -mt-3 -mr-6 text-xs font-medium leading-tight text-white bg-green-400 rounded-full"
            >PANCAKESWAP</span
          >
        </span>
        <a href="#" class="mt-3 text-sm text-indigo-500">Learn More</a>
      </div>
    </div>

    <div class="py-8 md:py-32 container mx-auto max-w-6xl">
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

        <div class="list-items">
          <a
            class="listing"
            target="_blank"
            href="https://pancakeswap.info/token/0x21da60b286baefd4725a41bb50a9237eb836a9ed"
          >
            <img src="../assets/tags/pancake.png"
          /></a>
        </div>

        <div class="list-items">
          <a
            class="listing"
            target="_blank"
            href="https://bscscan.com/token/0x21da60b286baefd4725a41bb50a9237eb836a9ed"
          >
            <img src="../assets/tags/bscscan.png"
          /></a>
        </div>
      </div>

      <div class="listing-box">
        <div class="list-items greyscale">
          <a
            class="listing"
            target="_blank"
            href="https://uniswap.info/token/0xb526fd41360c98929006f3bdcbd16d55de4b0069"
          >
            <img src="../assets/tags/uniswap.png"
          /></a>
        </div>

        <div class="list-items greyscale">
          <a
            class="listing"
            target="_blank"
            href="https://etherscan.io/token/0xb526fd41360c98929006f3bdcbd16d55de4b0069"
          >
            <img src="../assets/tags/etherscan.png"
          /></a>
        </div>

        <div class="list-items greyscale">
          <a
            class="listing"
            target="_blank"
            href="https://matcha.xyz/markets/0xb526fd41360c98929006f3bdcbd16d55de4b0069"
          >
            <img src="../assets/tags/matcha.png"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.listing-box {
  margin: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.listing-box .listing img {
  width: 200px;
  padding: 8px;
}
.list-items {
  width: 250px;
  margin: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.4s ease-in-out;
}
.list-items:hover {
  transform: scale(1.15);
}
.list-items.greyscale {
  opacity: 0.3;
}
.list-items.greyscale a > img {
  filter: grayscale(100%);
}
@media screen and (max-width: 1023px) {
  .listing-box {
    flex-direction: column;
  }
}
</style>
