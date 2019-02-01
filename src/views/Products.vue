<template>
    <v-container>
        <h1>Productos</h1>
        <v-layout row wrap>
            <v-flex xs12 md4>

            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        productst: []
    }),
    computed: {
        
    },
    created() {
        this.$store.dispatch('getProducts');
    }
    
}
</script>
