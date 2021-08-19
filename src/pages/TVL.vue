<template>
  <section class="py-20 2xl:py-40 overflow-hidden">
    <div class="container px-4 mx-auto">
      <div class="max-w-5xl mx-auto">
        <ul>
          <li class="flex pb-10 mb-8 border-b border-gray-50">
            <div class="mr-8">
              <span
                class="
                  flex
                  justify-center
                  items-center
                  w-14
                  h-14
                  bg-blue-50
                  text-lg
                  font-bold
                  rounded-full
                "
              >
                1
              </span>
            </div>
            <div class="max-w-xs">
              <h3 class="mb-6 text-lg font-bold font-heading">NANO</h3>
              <p class="text-lg">
                {{ tNANO.supply }} NANO / {{ tNANO.tvl }} USD
              </p>
            </div>
          </li>

          <li class="flex pb-10 border-b border-gray-50">
            <div class="mr-8">
              <span
                class="
                  flex
                  justify-center
                  items-center
                  w-14
                  h-14
                  bg-blue-50
                  text-lg
                  font-bold
                  rounded-full
                "
              >
                3
              </span>
            </div>
            <div class="max-w-xs">
              <h3 class="mb-6 text-lg font-bold font-heading">BTC</h3>
              <p class="text-lg">{{ tBTC.supply }} BTC / {{ tBTC.tvl }} USD</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>


<script>
import axios from "axios";

async function requestdata() {
  return axios
    .get("https://api.thirm.com/tvl.json")
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
      tBTC: "",
      tNANO: "",
    };
  },
  async mounted() {
    var data = await requestdata();

    this.tBTC = data.tBTC;
    this.tNANO = data.tNANO;
  },
};
</script>
