<template>
  <div>
    Anúncio
    <div class="ad">
      <div class="image">
        <img src="https://knoji.com/images/logo/jetbrainscom.jpg" alt="">
      </div>
      <div class="text">
        Baixe o WebStorm, a melhor IDE para JavaScript. 30 dias de graça!
      </div>
      <div class="from">
        Anúncio por <a href="#">Fábrica de Aplicativos</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.ad {
  display: flex;
  align-items: flex-start;
  padding: 10px;
  border: 5px solid rgba(#000, .07);
  border-radius: 5px;
  position: relative;
  height: 145px;

  .image {
    width: 50%;
    height: 110px;
    margin-right: 10px;
    border-radius: 5px;
    box-shadow: 0 3px 6px rgba(#000, .1);
    overflow: hidden;
    background: #fff;

    img {
      display: table;
      width: 110px;
      margin: auto;
    }
  }

  .text {
    font-size: .9em;
    width: 66.6666%;
  }

  .from {
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: .7em;
    opacity: .7;

    a {
      text-decoration: none;
    }
  }
}
</style>
