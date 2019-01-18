<template>
  <div id="auth">
    <Loading color="black"/>
    <div class="wrapper">
      <div class="main-text">
        Autenticando
      </div>
      <div class="tip">
        Aguarde enquanto validamos suas credenciais
      </div>
    </div>
  </div>
</template>

<script>
import Loading from 'Components/UI/LoadingMin';

export default {
  components: {
    Loading,
  },
};
</script>

<style lang="scss">
#auth {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: .7s ease scale;

  width: 100vw;
  height: 100vh;

  .wrapper {
    max-width: 480px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;

    .main-text {
      font-size: 1em;
      text-align: center;
      font-weight: 700;
      color: rgba(#000, .6);
    }

    .tip {
      font-size: .85em;
      margin-top: 20px;
      text-align: center;
      max-width: 250px;
      color: rgba(#000, .3);
    }
  }
}


@keyframes scale {
  from {
    transform: scale(0);
  }
}
</style>
