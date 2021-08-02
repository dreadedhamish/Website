<template>
  <div>
    <section class="py-20">
      <div
        class="
          container
          px-4
          flex flex-col
          justify-center
          p-4
          mx-auto
          md:p-8
          max-w-6xl
        "
      >
        <h1
          class="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl"
        >
          Frequently Asked Questions
        </h1>

        <br />
        <div
          class="grid grid-cols-1 gap-0 text-gray-600 md:grid-cols-3 md:gap-16"
        >
          <div v-for="(collapse, index) of collapses" :key="index">
            <h5 class="mt-10 mb-3 font-semibold text-gray-900">
              {{ collapse.title }}
            </h5>
            <p>{{ collapse.text }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapses: [
        {
          title: "Blockchain Support",
          text: "THIRM is primarily used on Ethereum Blockchain, it's available on MATIC, BSC, Optimistic by using bridges.",
        },
        {
          title: "THIRM Token Supply",
          text: "THIRM Token supply started at 100,000 with daily fixed inflation of 10.368 tokens by THIRM Protocol.",
        },
        {
          title: "THIRM DAO",
          text: "Decentralised Autonomous Organisations (DAOs) is an organization represented by rules encoded as a computer program that is transparent, controlled by the organization members ie token holders.",
        },
        {
          title: "THIRM BRIDGE",
          text: "It allows you to move your assets from other blockchains ( example - BTC, NANO, LTC, DOGE ) to the blockchain ( example - ETH, BSC, MATIC ) and vice versa.",
        },
        {
          title: "Bridge Fees",
          text: "THIRM Bridge fees depend on blockchains you are using. While they are mostly dynamic, In simple terms Fees = (total gas fees + dynamic THIRM fees)",
        },
        {
          title: "Bridge Minimum & Maximum amounts",
          text: "THIRM Bridge shows you minimum and maximum amounts, the minimum amount is influenced by gas fees and the maximum amount is influenced by node operators",
        },
      ],
    };
  },
};
</script>
