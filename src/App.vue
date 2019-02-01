<template>
  <v-app>
    <v-navigation-drawer app>
      <v-list class="pa-1">
        <v-list-tile :to="{name: 'products'}">
          <v-list-tile-content>
            <v-list-tile-title>
              Productos
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to="{name: 'cart'}">
          <v-list-tile-content>
            <v-list-tile-title>
              Carrito
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

    </v-navigation-drawer>
    <v-toolbar app>
      
      <v-toolbar-title class="headline text-uppercase">
        Carrito de compras
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-badge class="mr-3">
        <span slot="badge">{{ productsLength }}</span>
        <v-icon>
          shopping_cart
        </v-icon>
      </v-badge>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      //
    }
  },
  computed: {
    productsLength() {
      return this.$store.getters.productsLength
    }
  }
}
</script>
