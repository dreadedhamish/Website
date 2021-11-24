<template>
  <section class="banner roadmap-wrapper">
    <div class="container">
      <div class="roadmap">
        <div class="timeline columns is-multiline is-desktop">
          <div
            class="column  is-one-third"
            v-for="(roadmap, index) of roadmaps"
            :key="index"
          >
            <i
              :class="
                roadmap.status === 'done'
                  ? 'fas fa-check done-status'
                  : roadmap.status === 'current'
                  ? 'fas current-status'
                  : 'fas next-status'
              "
            ></i>

            <div
              :class="
                roadmap.status === 'current'
                  ? 'timeline-boxed'
                  : roadmap.status === 'done'
                  ? 'timeline-boxed'
                  : 'timeline-boxed timeline-next'
              "
            >
              <div class="timeline-title ">
                {{ roadmap.title }}
              </div>
              <div class="timeline-desc box">
                {{ roadmap.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@keyframes ripple {
  0% {
    transform: scale(1);
    opacity: 0;
  }
  10% {
    opacity: 0.5;
  }
  60% {
    opacity: 0;
  }
  100% {
    transform: scale(3);
    opacity: 0;
  }
}

.banner.roadmap-wrapper {
  padding: 80px 16px;
  height: auto;
}
.roadmap {
  .timeline {
    padding: 16px;
    margin: 36px;
    text-align: center;
    i {
      width: 36px;
      height: 36px;
      background: #f1f1f1;
      padding: 9px;
      border-radius: 50%;
      margin-bottom: 8px;
      margin-top: 16px;
      font-size: 18px;
    }
    .timeline-boxed {
      padding: 16px 8px;
      margin-top: 8px;
    }
    .timeline-next {
      opacity: 0.5;
    }
    i.done-status {
      background: #27ae60;
      color: #ffffff;
    }
    .timeline-hide {
      display: none;
    }
    .timeline-current-info {
      background: #8e2de2;
      background: -webkit-linear-gradient(to right, #4a00e0, #8e2de2);
      background: linear-gradient(to right, #4a00e0, #8e2de2);
      margin: 8px -16px -16px -16px;
      color: #fff;
      padding: 8px 4px;
    }
    i.current-status {
      background: #8e2de2;
      position: relative;
      &:before {
        width: 20px;
        height: 20px;
        background: #8e2de2;
        border: 4px solid #ffffff;
        content: "";
        top: 0;
        left: 0;
        margin: 8px;
        z-index: 99999;
        position: absolute;
        border-radius: 50%;
      }
      &:after {
        -webkit-animation: ripple 2s linear infinite;
        animation: ripple 2s linear infinite;
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 36px;
        height: 36px;
        background: #8e2de2;
        border-radius: 50%;
      }
    }
    i.next-status {
      &:before {
        width: 16px;
        height: 16px;
        background: #fff;
        content: "";
        top: 0;
        left: 0;
        margin: 10px;
        z-index: 99999;
        position: absolute;
        border-radius: 50%;
      }
      background-color: #4f5286;
      position: relative;
    }
    .timeline-title {
      font-size: 20px;
      margin-bottom: 8px;
      font-weight: 600;
      color: #fff;
    }
    .timeline-desc {
      margin-bottom: 16px;
      font-style: italic;
      background-color: #30336b;
      color: #f1f1f1;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      roadmaps: [
        {
          title: "Protocol Development Start",
          description: "Started the development of thirm protocol.",
          status: "done",
        },
        {
          title: "Token Creation",
          description: "Created the THIRM token.",
          status: "done",
        },
        {
          title: "Internal Research & Testing",
          description: "Released the Alpha version of the DAPP.",
          status: "done",
        },
        {
          title: "Stateofthedapps Listing",
          description: 'Listed THIRM protocol on "stateofthedapps".',
          status: "done",
        },
        {
          title: "Realease BETA",
          description: "Getting users to test the DAPP & Protocol.",
          status: "done",
        },
        {
          title: "Uniswap Listing",
          description: 'Listed THIRM protocol on "uniswap".',
          status: "done",
        },
        {
          title: "THIRM Deflation Started",
          description:
            "Enabled THIRM Defaltion, DAPP now charges THIRM as fees and burns them.",
          status: "done",
        },
        {
          title: "THIRM LP Contract",
          description: "Regular expansion in Liquidity Pool On Uniswap.",
          status: "done",
        },
        {
          title: "Code AUDIT",
          description: "Audited all the smart contracts with solidity.finance.",
          status: "done",
        },
        {
          title: "Test NANO",
          description: "Testing NANO with the experts.",
          status: "done",
        },
        {
          title: "Test BTC",
          description: "Testing BTC with the experts.",
          status: "done",
        },
        {
          title: "THIRM Bridge for projects",
          description: "Designed cross-chain bridge for projects.",
          status: "done",
        },
        {
          title: "Test DOGE",
          description: "Work in progress.",
          status: "current",
        },
        {
          title: "Test LTC",
          description: "Work in progress.",
          status: "current",
        },

        {
          title: "List on All DEX & Protocols",
          description: "Coming soon.",
          status: "next",
        },
      ],
    };
  },
  async created() {},
};
</script>
