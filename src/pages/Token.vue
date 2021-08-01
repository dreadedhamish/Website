<template>
  <div>
    <section class="py-20">
      <div class="container mx-auto max-w-6xl px-10">
        <div class="grid grid-cols-1 text-gray-600 md:grid-cols-2 md:gap-16">
          <div class="col-span-1">
            <lottie-player
              autoplay=""
              loop=""
              mode="normal"
              src="animation/token.json"
              class="object-cover object-center w-full h-full"
              background="transparent"
            ></lottie-player>
          </div>
          <div class="col-span-1 m-auto">
            <h2
              class="
                mb-4
                text-3xl
                font-bold
                leading-tight
                tracking-tight
                sm:text-4xl
                font-heading
              "
            >
              <span class="text-white bg-red-400">THIRM</span> TOKEN
            </h2>
            <p class="mb-4 font-medium tracking-tight xl:mb-6">
              THIRM Token is governance token, used for voting on THIRM
              Protocol.
            </p>

            <div class="relative flex flex-col md:flex-row md:space-x-4">
              <a
                href="https://app.uniswap.org/#/swap?outputCurrency=0xb526fd41360c98929006f3bdcbd16d55de4b0069"
                class="
                  inline-flex
                  items-center
                  justify-center
                  px-6
                  py-3
                  text-white
                  bg-red-400
                  rounded-xl
                  sm:w-auto
                  sm:mb-0
                "
              >
                BUY ON UNISWAP
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  class="w-4 h-4 ml-1"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path></svg
              ></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 gap-20 md:grid-cols-5">
          <div
            class="
              flex
              items-center
              justify-center
              col-span-1
              md:col-span-2
              lg:col-span-1
            "
          >
            <a
              href="https://info.uniswap.org/#/tokens/0xb526fd41360c98929006f3bdcbd16d55de4b0069"
            >
              <img
                src="tags/uniswap.png"
            /></a>
          </div>
          <div
            class="
              flex
              items-center
              justify-center
              col-span-1
              md:col-span-2
              lg:col-span-1
            "
          >
            <a
              href="https://etherscan.io/token/0xb526fd41360c98929006f3bdcbd16d55de4b0069"
            >
              <img
                src="tags/etherscan.png"
            /></a>
          </div>
          <div
            class="
              flex
              items-center
              justify-center
              col-span-1
              md:col-span-2
              lg:col-span-1
            "
          >
            <a href="https://coinmarketcap.com/currencies/thirm-protocol/">
              <img
                src="tags/coingecko.png"
            /></a>
          </div>
          <div
            class="
              flex
              items-center
              justify-center
              col-span-1
              md:col-span-3
              lg:col-span-1
            "
          >
            <a href="https://www.coingecko.com/en/coins/thirm-protocol">
              <img
                src="tags/coinmarketcap.png"
            /></a>
          </div>
          <div
            class="
              flex
              items-center
              justify-center
              col-span-2
              md:col-span-3
              lg:col-span-1
            "
          >
            <a
              href="https://matcha.xyz/markets/1/0xb526fd41360c98929006f3bdcbd16d55de4b0069"
            >
              <img
                src="tags/matcha.png"
            /></a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
