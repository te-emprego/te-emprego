<template>
  <div class="chat">
    <div class="image online">
      <img src="https://avatarfiles.alphacoders.com/880/88081.jpg">
    </div>
    <div class="name">
      Juliana Lima
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chat {
  position: fixed;
  bottom: 0;
  right: 20px;
  min-width: 200px;
  display: flex;
  align-items: center;

  background-color: #fff;
  color: #222;
  padding: 5px 10px;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;

  box-shadow: 0 0 10px rgba(#000, .2);

  .image {
    width: 25px;
    height: 25px;
    box-shadow: 0 3px 6px rgba(0,0,0,.2);
    border-radius: 32px;
    margin-right: 10px;
    position: relative;
    img {
      max-width: 100%;
      border-radius: 32px;
    }

    &.online::after {
      content: '';
      display: block;
      position: absolute;
      background-color: #4caf50;
      width: 10px;
      height: 10px;
      border-radius: 8px;
      bottom: -2px;
      right: 0;
    }
  }

  .name {
    position: relative;
  }
}
</style>
