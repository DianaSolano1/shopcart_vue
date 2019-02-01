<template>
  <v-stepper v-model="tab">
    <v-stepper-header>
      <v-stepper-step :complete="tab > 1" step="1">Productos agregados</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="tab > 2" step="2">Confirmar compra</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <div v-if="productsAdded.length > 0">
          <v-list>
            <product
              v-for="(product, index) in productsAdded"
              :key="product.id + index + 1"
              :product="product"
              :index="index"
            ></product>
          </v-list>
          <div>
            <h1>Precio total: ${{ price }}</h1>
          </div>
          <div>
            <v-btn color="blue" @click.stop="confirm">Confirmar compra</v-btn>
          </div>
        </div>
        <v-alert v-else :value="true" type="success">No hay productos
          <v-btn flat :to="{name: 'products'}">
            <v-icon>add</v-icon>Agregar
          </v-btn>
        </v-alert>
      </v-stepper-content>

      <v-stepper-content step="2">
        <div class="text-xs-center">
          <h1>Gracias por su compra!</h1>
          <h2>El valor final de la compra es ${{ price }}</h2>
        </div>
        <div>
          <v-btn color="green" @click.stop="goToProducts">Ok!</v-btn>
        </div>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import Product from "./Product.vue";

export default {
  components: {
    Product
  },
  data() {
    return {
      tab: 0
    };
  },
  computed: {
    productsAdded() {
      return this.$store.getters.addedProducts;
    },
    price() {
      return this.$store.getters.totalPrice;
    }
  },
  methods: {
    confirm() {
      this.tab = 2;
    },
    goToProducts() {
      this.$store.commit('resetCart')
      this.$router.push({name: 'products'})
    }
  }
};
</script>
