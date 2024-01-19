<script setup>






const mainInfo = ref(0)

const { data } = await useFetch("http://localhost:3000/products")
const mainData = data.value.map((item, index) => {
  return {
    id: data.value[index].id,
    model: data.value[index].model,
    year: data.value[index].year,
    power: data.value[index].power,
    kuzov: data.value[index].kuzov,
    transmission: data.value[index].transmission,
    engine: data.value[index].engine,
    color: data.value[index].color,
    price: data.value[index].price,
    image: {
      1: data.value[index].image1,
      2: data.value[index].image2,
      3: data.value[index].image3,
      4: data.value[index].image4,
      5: data.value[index].image5
    }
  }
})
mainInfo.value = mainData

</script>

<style>
.main {
    color: #05141f;
    width: 415px;
    display: inline-block;
    margin-left: 40px;
    margin-top: 40px;
    border-radius: 1.5ch;
    border: 1px solid;
    border-color: #cdd0d2;
}

.newCar {
    border: 1px solid;
    width: 85px;
    text-align: center;
    border-radius: 10px;
    font-size: 14px;
    border-color: #cdd0d2;
    margin: 15px;
}

.name {
    color: black;
    font-size: 19px;
    font-weight: 500;
    margin: 15px;
}

.info {
    color: #697279;
    padding: 15px;
    font-size: 17px;
}

.homeImg {
    height: 260px;
    margin-left: -70px;
    margin-bottom: -30px;
}

.price {
    color: black;
    font-size: 20px;
    font-weight: 600;
    margin-left: 20px;
}

.kredit {
    color: #697279;
    font-size: 18px;
    margin-left: 20px;
}

.buyButton {
    width: 350px;
    height: 50px;
    background-color: #05141f;
    color: white;
    margin: 10px 20px 20px 20px;
    font-size: 14px;
    font-weight: 600;
}


</style>
<template>


  <div v-for="main, index in mainInfo" class="main">

    <div class="newCar">Новое авто</div>

    <div class="name">{{ main.model }} {{ main.year
    }}</div>

    <div class="info">
      {{ main.power }}л.с. / {{ main.engine }} / {{ main.transmission }} / {{ main.kuzov }} / {{ main.color }}</div>

    <img class="homeImg" :src=main.image[1]>

    <div class="price"> {{ main.price }} ₽</div>

    <div class="kredit"> {{ Math.round(main.price / 84) }} ₽/мес</div>

    <button class="buyButton" @click="recycleInfo.push(main), summInfo = +summInfo + +main.price">Купить</button>
  </div>





  <!-- <StoreHero />
  <StoreCollection />
  <StoreTechnicalSpecs /> -->

</template>
