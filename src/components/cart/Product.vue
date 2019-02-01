<template>
  <v-list-tile>
    <v-list-tile-title>
      {{ product.name}}
    </v-list-tile-title>
    <v-list-tile-sub-title>
      {{ product.price }}
    </v-list-tile-sub-title>
    <v-list-tile-action>
      <v-btn flat @click.stop="removeProduct()">
        <v-icon>delete</v-icon>
      </v-btn>
    </v-list-tile-action>
  </v-list-tile>
</template>

<script>
export default {
  props: {
    product: {},
    index: 0
  },
  methods: {
    removeProduct() {
      this.$store.commit('removeFromCart', this.index)
    }
  }
}
</script>

