<template>
  <section class="px-4 py-16 md:py-32">
    <div class="container flex flex-wrap flex-col mx-auto max-w-5xl px-8">
      <div
        v-for="(collapse, index) of collapses"
        :key="index"
        class="flex relative pb-10 sm:items-center sm:w-1/2"
      >
        <div
          class="h-full w-6 absolute inset-0 flex items-center justify-center"
        >
          <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
        </div>
        <div
          class="
            bg-white
            rounded-full
            flex-shrink-0
            w-6
            h-6
            mt-10
            sm:mt-0
            inline-flex
            items-center
            justify-center
            relative
            z-10
            title-font
            font-medium
            text-3xl
            py-8
          "
        >
          {{ collapse.icon }}
        </div>
        <div
          class="
            flex-grow
            md:pl-8
            pl-6
            flex
            sm:items-center
            items-start
            flex-col
            sm:flex-row
          "
        >
          <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
            <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
              {{ collapse.title }}
            </h2>
            <p class="leading-relaxed">{{ collapse.text }}</p>
          </div>
        </div>
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
          icon: "✔",
          title: "Protocol Development Start",
          text: "Started the development of thirm protocol.",
        },
        {
          icon: "✔",
          title: "Token Creation",
          text: "Created the THIRM token.",
        },
        {
          icon: "✔",
          title: "Internal Research & Testing",
          text: "Released the Alpha version of the DAPP.",
        },
        {
          icon: "✔",
          title: "Bridge Realease",
          text: "Allow Users to use Platform",
        },
        {
          icon: "✔",
          title: "Adding Blockchains",
          text: "Adding New Blockchains",
        },
        {
          icon: "✔",
          title: "Protocol Audit ",
          text: "Protocol Audit ",
        },
        {
          icon: "👀",
          title: "BETA Testing",
          text: "Testing Blockchains",
        },
        {
          icon: "🤞",
          title: "Stress Testing",
          text: "Testing Systems",
        },
        {
          icon: "🤞",
          title: "Solver Release",
          text: "Solver Release",
        },
        {
          icon: "🤞",
          title: "Protocol Insurance ",
          text: "Protocol Insurance ",
        },
      ],
    };
  },
};
</script>
