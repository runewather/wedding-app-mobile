<template>  
    <Page class="home">
        <ScrollView orientation="vertical">        
            <FlexboxLayout class="wrapper" flexDirection="column">
                <ListView ref="storeItens" for="item in getStoreItems">
                    <v-template>
                        <SItem img="~/assets/Logo.png" :addToCart="addToCart" :title="item.name" :desc="item.desc" :price="item.price" :amount="item.amount"/>
                    </v-template>
                </ListView>  
                <Button class="store-button" text="Go to Cart" @tap="goToCart"/>                          
            </FlexboxLayout>                       
        </ScrollView> 
    </Page>    
</template>

<script>
    import axios from 'axios'
    import Cart from './Cart'
    import SItem from './StoreItem'

    export default {
        components: {
            SItem
        },
        computed: {
            getStoreItems() {                                
                return this.$store.state.store
            }
        },
        methods: {
            addToCart(t, i, d, p, a) {                
                this.$store.commit('addToCart', 
                { title: t, img: i, desc: d,
                price: p, amount: a })                              
            },
            goToCart() {
                this.$navigateTo(Cart)
            }
        },
        mounted() {
            this.$store.dispatch('getStoreItens') 
        },
    }
</script>

<style>
    .action-label {
        color: #D51A1A;
        font-size: 22px;
    } 
    .wrapper {
        height: 100%;
    }
    .store-button {
        height: 25%;
    }
</style>