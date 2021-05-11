<template>
  <section class="px-4 py-16 md:py-32">
    <div class="container mx-auto">
      <div
        class="container items-center px-5 mx-auto space-y-3 text-center mb-16"
      >
        <h1
          class="text-4xl font-bold tracking-tight text-center text-gray-900 md:text-5xl"
        >
          <span class="block"
            >Frequently Asked
            <span class="block mt-1 text-indigo-500 md:inline md:mt-0">
              Questions</span
            ></span
          >
        </h1>
        <p
          class="w-full mx-auto text-base text-center text-gray-500 md:max-w-md sm:text-lg lg:text-2xl md:max-w-3xl"
        >
          Got a Question? We’ve got answers
        </p>
      </div>

      <div
        v-for="(collapse, index) of collapses"
        :key="index"
        class="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3"
      >
        <h3 class="text-lg font-bold text-indigo-500 sm:text-xl md:text-2xl">
          {{ collapse.title }}
        </h3>
        <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
          {{ collapse.text }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      collapses: [
        {
          title: "THIRM TOKEN",
          text:
            "THIRM TOKEN is a governance/ownership tracking smart contract written on the ethereum blockchain. THIRM TOKEN is mainly used for purpose of governance.",
        },
        {
          title: "TOKEN SUPPLY",
          text:
            "THIRM token expands by 17.28 tokens daily. THIRM token is burned regularly on every transaction on the bridge.",
        },
        {
          title: "CODE AUDITS",
          text:
            "THIRM is still in BETA and has not been audited, please test the protocol with small amounts. Audits will be followed as soon as we have a stable release.",
        },
      ],
    };
  },
};
</script>
