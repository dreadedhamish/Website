<template>
  <div class="contact-wrapper is-large">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column is-6">
          <lottie-player
            src="/animations/contact.json"
            background="transparent"
            speed="1"
            style="width: 100%; height: 500px"
            loop
            autoplay
          ></lottie-player>
        </div>

        <div class="column">
          <h3 class="thirm-subtitle text-left">Get in touch with us</h3>
          <h1 class="thirm-title text-left"><strong>Contact Us</strong></h1>
          <article class="message is-dark">
            <div class="message-body">General : contact@thirm.com</div>
          </article>
          <article class="message is-dark">
            <div class="message-body">Developer : developer@thirm.com</div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.contact-wrapper {
  padding: 20px 16px 60px 16px;
}
.title-text {
  font-size: 24px;
  position: relative;
  padding: 16px 0;
  margin-bottom: 36px;
  font-family: "Poppins", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
  &::after {
    content: "";
    position: absolute;
    width: 40px;
    height: 5px;
    background-color: #3742fa;
    bottom: 0;
    left: 0;
  }
}
.message.is-dark {
  .message-body {
    border-color: #3742fa !important;
    border-left-width: 6px;
    background-color: #f3f3f3;
    color: #191919;
  }
}
</style>
