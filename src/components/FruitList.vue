<template>
<div>
  <div v-for="fruit in fruits">{{ fruit.name }}</div>
</div>
</template>

<script>
export default {
  name: "FruitList"
};
</script>

