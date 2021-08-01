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
              <span class="text-white bg-gray-400">THIRM</span> TOKEN
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
                  bg-gray-400
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
              <img src="tags/uniswap.png"
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
              <img src="tags/etherscan.png"
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
              <img src="tags/coingecko.png"
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
              <img src="tags/coinmarketcap.png"
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
              <img src="tags/matcha.png"
            /></a>
          </div>
        </div>
      </div>
    </section>

    <section class="px-2 py-32 bg-white md:px-0">
      <div class="container items-center max-w-6xl px-8 mx-auto xl:px-5">
        <div class="flex flex-wrap items-center sm:-mx-3">
          <div class="w-full md:w-1/2 md:px-3">
            <div
              class="
                w-full
                pb-6
                space-y-6
                sm:max-w-md
                lg:max-w-lg
                md:space-y-4
                lg:space-y-8
                xl:space-y-9
                sm:pr-5
                lg:pr-0
                md:pb-0
              "
            >
              <h1 class="text-4xl font-extrabold tracking-tight text-gray-900">
                LIVE <span class="text-white bg-gray-400">TOKENOMICS</span>
              </h1>

              <div class="grid gap-6 grid-cols-1 md:grid-cols-2 text-left">
                <div
                  class="
                    flex
                    items-center
                    p-4
                    bg-white
                    rounded-lg
                    shadow-xs
                    dark:bg-gray-800
                  "
                >
                  <div>
                    <p
                      class="
                        mb-2
                        text-sm
                        font-medium
                        text-gray-600
                        dark:text-gray-400
                      "
                    >
                     UNISWAP LP
                    </p>
                    <p
                      class="
                        text-lg
                        font-semibold
                        text-gray-700
                        dark:text-gray-200
                      "
                    >
                      {{ pool }} THIRM
                    </p>
                  </div>
                </div>

                <div
                  class="
                    flex
                    items-center
                    p-4
                    bg-white
                    rounded-lg
                    shadow-xs
                    dark:bg-gray-800
                  "
                >
                  <div>
                    <p
                      class="
                        mb-2
                        text-sm
                        font-medium
                        text-gray-600
                        dark:text-gray-400
                      "
                    >
                      Pending Expansion
                    </p>
                    <p
                      class="
                        text-lg
                        font-semibold
                        text-gray-700
                        dark:text-gray-200
                      "
                    >
                      {{ nextexpansion }} THIRM
                    </p>
                  </div>
                </div>

                <div
                  class="
                    flex
                    items-center
                    p-4
                    bg-white
                    rounded-lg
                    shadow-xs
                    dark:bg-gray-800
                  "
                >
                  <div>
                    <p
                      class="
                        mb-2
                        text-sm
                        font-medium
                        text-gray-600
                        dark:text-gray-400
                      "
                    >
                      With Holders
                    </p>
                    <p
                      class="
                        text-lg
                        font-semibold
                        text-gray-700
                        dark:text-gray-200
                      "
                    >
                      {{ supply - pool }} THIRM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full md:w-1/2 py-10">
            <div class="w-full h-96 sm:h-auto overflow-hidden rounded-md">
              <div id="chart">
                <apexchart
                  type="donut"
                  :options="chartOptions"
                  :series="series"
                ></apexchart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>




<script>
import axios from "axios";

async function requestdata() {
  return axios
    .get("https://api.thirm.com/token.json")
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return null;
    });
}

export default {
  data: function () {
    return {
      supply: 10,
      nextexpansion: 10,
      pool: 10,

      series: [0],
      chartOptions: {
        legend: { position: "bottom" },
        labels: ["Holders", "LP", "Rewards"],
        chart: {
          type: "donut",
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  },
  async mounted() {
    var data = await requestdata();

    this.supply = parseFloat(data["supply"]);
    this.pool = parseFloat(data["pool"]);
    this.nextexpansion = parseFloat(data["nextexpansion"]);

    this.series = [this.supply - this.pool, this.pool, this.nextexpansion];
  },
};
</script>
