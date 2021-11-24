<template>
  <div>
    <section class="banner">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column">
            <lottie-player
              src="/animations/about.json"
              background="transparent"
              speed="1"
              style="width: 100%; height: 100%"
              loop
              autoplay
            ></lottie-player>
          </div>
          <div class="column">
            <div class="content box">
              <strong>THIRM PROTOCOL, THIRM VM & THIRM TOKENS</strong> are
              developed and maintained by THIRM SOLUTIONS, a company operating
              from INDIA & CAYMAN ISLANDS. We believe that cryptocurrencies
              should be convenient for everyone. We aim to make crosschain
              cryptocurrency management a hassle-free, one-click process. We
              believe that cryptocurrencies should be convenient for everyone.
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="team-wrapper">
      <div class="container">
        <h3 class="thirm-subtitle">Our brains</h3>
        <h1 class="thirm-title"><strong>Meet the team</strong></h1>
        <div class="teams">
          <div class="columns is-multiline is-desktop">
            <div class="column is-one-fourth">
              <div class="box image-box level">
                <img
                  src="https://ipfs.io/ipfs/QmP61RC27XooEZxDU4W48qgFoxXoKP2wC37d7KoAffTvah"
                  alt=""
                />
              </div>
              <div class="box">
                <h5 class="title is-5">Aman S</h5>
                <p class="subtitle is-6">CEO, Developer</p>
              </div>
            </div>
            <div class="column is-one-fourth">
              <div class="box image-box level">
                <img
                  src="https://ipfs.io/ipfs/QmeEBZb4fUns8s5hxcSayp623Gr4JF5fNQkqoC5GKRjYXa"
                  alt=""
                />
              </div>
              <div class="box">
                <h5 class="title is-5">Madhav P</h5>
                <p class="subtitle is-6">CTO, Developer</p>
              </div>
            </div>
            <div class="column is-one-fourth">
              <div class="box image-box level">
                <img
                  src="https://ipfs.io/ipfs/QmbnXQuL5z7YnyjGTZDQz7gzGPkphSJSSMdACVy2BFAP5w"
                  alt=""
                />
              </div>
              <div class="box">
                <h5 class="title is-5">Suhail L</h5>
                <p class="subtitle is-6">Manager</p>
              </div>
            </div>
            <div class="column is-one-fourth">
              <div class="box image-box level">
                <img
                  src="https://ipfs.io/ipfs/QmRxVvi1ggkPAptY61iRbRUFW3F6NVHQcLQBRvAtsrs4Jz"
                  alt=""
                />
              </div>
              <div class="box">
                <h5 class="title is-5">Paul</h5>
                <p class="subtitle is-6">Tester (Part Time)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.image-box {
  padding: 0;
  border-radius: 8px;
  img {
    border-radius: 8px;
    width: 100%;
  }
}
.zoom {
  transition: all 0.1s ease-in-out;
  .box {
    padding: 40px 0;
    color: #191919;
    font-size: 18px;
    font-weight: 500;
  }
  &:hover {
    transform: scale(1.2);
  }
}
.team-wrapper {
  padding: 200px 16px 200px 16px;
  background-image: linear-gradient(
    89.9deg,
    rgba(178, 253, 238, 0.96) -8.1%,
    rgba(207, 244, 254, 1) 26.3%,
    rgba(207, 244, 254, 0.48) 47.5%,
    rgba(254, 219, 243, 0.63) 61.5%,
    rgba(254, 219, 243, 1) 78.7%,
    rgba(254, 207, 210, 1) 109.2%
  );
}

.teams {
  margin: 24px 0;
}
</style>
