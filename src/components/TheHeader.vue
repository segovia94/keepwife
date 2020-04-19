<template>
  <header class="header">
    <div class="header__logo-wrapper">
      <div class="header__logo"></div>
    </div>
    <h1 class="header__site-name">Can I Keep My Wife?</h1>
  </header>
</template>

<script>
export default {

}
</script>

<style>
  .header {
    background-color: rgba(255, 255, 255, 0.4);
    box-shadow: 0 2px 2px #2b2b2b;
    height: 4rem;
    margin: 1.5rem 0;
    padding: 0 1rem;
    display: flex;
    align-items: center;
  }

  @media (min-width: 1000px) {
    .header {
      height: 5rem;
      padding: 0 2rem;
    }
  }

  .header__logo-wrapper {
    margin-top: .25rem;
  }

  @media (min-width: 1000px) {
    .header__logo-wrapper {
      margin-top: .25rem;
    }
  }

  .header__logo {
    background-image: url('~@/assets/images/green-card-tilted.png');
    background-size: 100%;
    background-repeat: no-repeat;
    width: 6rem;
    height: 0;
    padding-bottom: 83%;
  }

  @media (min-width: 1000px) {
    .header__logo {
      width: 9rem;
    }
  }

  .header__site-name {
    color: #fff;
    font-size: 1.5rem;
    margin: 0;
    padding-left: 1rem;
    text-shadow: .1rem .1rem .2rem #000;
  }

  @media (min-width: 500px) and (max-width: 999px) {
    .header__site-name {
      font-size: 2rem;
    }
  }

  @media (min-width: 1000px) {
    .header__site-name {
      font-size: 2.75rem;
      padding-left: 1.5rem;
    }
  }
</style>
