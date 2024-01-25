<script setup>
import { useCartStore } from '../../../../stores/store'
const store = useCartStore();



// const mainInfo = ref(0)
// const store = useCartStore();

// const { data } = await useFetch("http://localhost:3000/products")
// const mainData = data.value.map((item, index) => {
//   return {
//     id: data.value[index].id,
//     model: data.value[index].model,
//     year: data.value[index].year,
//     power: data.value[index].power,
//     kuzov: data.value[index].kuzov,
//     transmission: data.value[index].transmission,
//     engine: data.value[index].engine,
//     color: data.value[index].color,
//     price: data.value[index].price,
//     image: {
//       1: data.value[index].image[1],
//       2: data.value[index].image[2],
//       3: data.value[index].image[3],
//       4: data.value[index].image[4],
//       5: data.value[index].image[5]
//     }
//   }
// })
// mainInfo.value = mainData

// function addToCart(value) {
//   store.addToCart(value);
// }

</script>
  
<!-- <style>
#box {
  display: inline-block;
  margin: 20px
}

.rounded-t-lg {
  margin-left: -35px;
}
</style> -->
<template>
  <div id="box" class="max-w-sm bg-white border border-gray-200 rounded-lg shadow " v-for="main, index in store.getCart">
    <div class="p-5">


      <h5 class="mb-2 text-1xl font-bold text-gray-900">
        <NuxtLink :to="`/store/${main.id}`">
          {{ main.model }} {{ main.year }}
        </NuxtLink>
      </h5>


      <p class="mb-3  text-gray-700" style="height: 20px;">{{ main.power }}л.с. / {{ main.engine }} / {{
        main.transmission }} / {{ main.kuzov }} / {{ main.color }}</p>


      <img class="rounded-t-lg" :src=main.image[1] />



      <h5 class="mb-2 text-1xl font-bold tracking-tight text-gray-900">
        {{ main.price }} ₽
      </h5>


      <p class="mb-3 text-gray-700">
        {{ Math.round(main.price / 84) }} ₽/мес
      </p>

      <!-- 
      <button type="submit" class="w-full text-white bg-gray-900 text-sm px-5 py-2.5 text-center"
        @click="addToCart(main)">Купить</button> -->

    </div>
  </div>






  <!-- <div class="newCar">Новое авто</div>
      <NuxtLink :to="`/store/${main.id}`">
        <div class="name">{{ main.model }} {{ main.year }}</div>
      </NuxtLink>
      <div class="info">
        {{ main.power }}л.с. / {{ main.engine }} / {{ main.transmission }} / {{ main.kuzov }} / {{ main.color }}</div>
  
      <img class="object-cover" :src=main.image[1]>
  
      <div class="price"> {{ main.price }} ₽</div>
  
      <div class="kredit"> {{ Math.round(main.price / 84) }} ₽/мес</div>
  
      <button class="buyButton bg-primary-500 rounded-lg" @click="addToCart(main)">Купить</button>
    </div> -->


  <!-- <StoreHero />
    <StoreCollection />
    <StoreTechnicalSpecs /> -->
</template>
  
  

  