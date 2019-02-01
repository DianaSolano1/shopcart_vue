<template>
  <v-container>
    <h1>Productos</h1>
    <v-container grid-list-md>
      <v-layout row wrap grid-list>
        <product v-for="product in products" :key="product.id"
          :product="product"></product>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
import product from "../components/products/Product.vue";

export default {
  components: {
    product
  },
  computed: {
    products() {
      return this.$store.getters.allProducts;
    }
  },
  created() {
    this.$store.dispatch("getProducts");
  }
};
</script>
