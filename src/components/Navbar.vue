<template>
  <div>
    <section class="w-full text-gray-700 bg-white">
      <div
        class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-6xl"
      >
        <div class="relative flex flex-col md:flex-row">
          <router-link
            to="/"
            class="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
          >
            <span
              class="mx-auto text-xl font-black leading-none text-blue-900 select-none"
              >THIRM</span
            >
          </router-link>
          <nav
            class="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200 justify-center"
          >
            <router-link
              to="/blockchain"
              class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
              >Blockchains</router-link
            >
            <router-link
              to="/faq"
              class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
              >FAQs</router-link
            >
            <router-link
              to="/roadmap"
              class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
              >Roadmap</router-link
            >
            <router-link
              to="/about"
              class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
              >About</router-link
            >
            <router-link
              to="/contact"
              class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
              >Contact</router-link
            >
          </nav>
        </div>

        <div class="inline-flex items-center ml-5 space-x-6 lg:justify-end">
          <a
            href="https://docs.thirm.com/"
            class="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900"
          >
            Documentation
          </a>
          <a
            href="https://bridge.thirm.com"
            class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
          >
            Bridge
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
