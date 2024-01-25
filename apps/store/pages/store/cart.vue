<template>
    КОРЗИНА
    {{ store.getCart }}
    <!-- <div v-for="main, index in mainInfo" class="main">
      <div class="newCar">Новое авто</div>
      <div class="name">{{ main.model }} {{ main.year
      }}</div>
      <div class="info">
        {{ main.power }}л.с. / {{ main.engine }} / {{ main.transmission }} / {{ main.kuzov }} / {{ main.color }}</div>
  
      <img class="homeImg" :src=main.image[1]>
  
      <div class="price"> {{ main.price }} ₽</div>
  
      <div class="kredit"> {{ Math.round(main.price / 84) }} ₽/мес</div>
  
      <button class="buyButton" @click="addToCart(main)">Купить</button>
    </div> -->
  
  
    <!-- <StoreHero />
    <StoreCollection />
    <StoreTechnicalSpecs /> -->
  </template>
  
  
  <script setup>
  import {useCartStore} from '../../../../stores/store'
  
//   const mainInfo = ref(0)
  const store = useCartStore();

  </script>
  

  