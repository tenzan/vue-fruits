<template>
<div>
      <div class="container" v-for="fruit in fruits" :key="fruit.id">
      <ul>{{ fruit.name }}</ul>
  </div>
</div>
</template>

<script>
import sourceData from "@/data";

export default {
  name: 'FruitList',
  data() {
    return {
      fruits: sourceData.fruits
    };
  }
};
</script>