<template>
  <v-flex xs12 md4>
    <v-card>
      <v-img :src="product.image_path"></v-img>
      <v-card-title primary-title>
        <div>
          <h3>{{ product.name }}</h3>
          <h4>${{ product.price }}</h4>
          <p>{{ product.description }}</p>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn flat color="blue" @click.stop="addToCart">Agregar al carrito</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
export default {
    props: {
        product: {}
    },
    methods: {
        addToCart() {
            this.$store.commit('addToCart', this.product)
        }
    }
}
</script>

