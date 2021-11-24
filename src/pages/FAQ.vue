<template>
  <section class="banner">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column">
          <lottie-player
            src="/animations/faq.json"
            background="transparent"
            speed="1"
            style="width: 100%; height: 100%"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div class="column is-offset-1">
          <b-collapse
            class="card"
            animation="slide"
            v-for="(collapse, index) of collapses"
            :key="index"
            :open="isOpen == index"
            @open="isOpen = index"
          >
            <div
              slot="trigger"
              slot-scope="props"
              class="card-header"
              role="button"
            >
              <p class="card-header-title">
                {{ collapse.title }}
              </p>
              <a class="card-header-icon">
                <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"> </b-icon>
              </a>
            </div>
            <div class="card-content">
              <div class="content">
                {{ collapse.text }}
              </div>
            </div>
          </b-collapse>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.collapse.card {
  margin: 16px;
}
.card {
  background-color: #30336b;
  color: #f3f3f3;
}
.card-header {
  background-color: #4834d4;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
}
.card-header-title {
  color: #fff;
}
.card-header-icon {
  color: #fff;
}
</style>

<script>
export default {
  data() {
    return {
      isOpen: 0,
      collapses: [
        {
          title: "Blockchain Support",
          text:
            "THIRM is primarily used on Ethereum Blockchain. it's also available on MATIC, BSC, Optimistic by using bridges.",
        },
        {
          title: "THIRM Token Supply",
          text:
            "THIRM Token supply started at 100,000 with daily fixed inflation of 10.368 tokens by THIRM Protocol.",
        },
        {
          title: "THIRM DAO",
          text:
            "Decentralised Autonomous Organisations (DAOs) is an organization represented by rules encoded as a computer program that is transparent, controlled by the organization members ie token holders.",
        },
        {
          title: "THIRM BRIDGE",
          text:
            "It allows you to move your assets from other blockchains ( example - BTC, NANO, LTC, DOGE ) to the blockchain ( example - ETH, BSC, MATIC ) and vice versa.",
        },
        {
          title: "THIRM Protocol Audited",
          text: "THIRM is audited with solidity.finance.",
        },
        {
          title: "Bridge Fees",
          text:
            "THIRM Bridge fees depend on blockchains you are using. While they are mostly dynamic, In simple terms Fees = (total gas fees + dynamic THIRM fees).",
        },
        {
          title: "Bridge Minimum & Maximum amounts",
          text:
            "THIRM Bridge shows you minimum and maximum amounts, the minimum amount is influenced by gas fees and the maximum amount is influenced by node operators.",
        },
      ],
    };
  },
};
</script>
