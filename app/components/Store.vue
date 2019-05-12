<template>  
    <Page @loaded="getStoreProducts" class="home">
        <AppActionBar title="Wedding Store"/>
        <ScrollView orientation="vertical">        
            <FlexboxLayout class="wrapper" flexDirection="column">
                <ListView ref="storeItens" for="item in getStoreItems">
                    <v-template>
                        <SItem :img="url+item.img" :sendToCart="sendToCart" :title="item.name" :desc="item.desc" :price="item.price" :amount="item.amount"/>
                    </v-template>
                </ListView>  
                <Button class="store-button" text="Go to Cart" @tap="goToCart"/>                          
            </FlexboxLayout>                       
        </ScrollView> 
    </Page>    
</template>

<script>
    import axios from 'axios'
    import AppActionBar from './AppActionBar'
    import Cart from './Cart'
    import SItem from './StoreItem'

    export default {
        components: {
            AppActionBar,
            SItem
        },
        data() {
            return {
                url: 'http://192.168.0.101:3000/api/v1/files?path='
            }
        },
        computed: {
            getStoreItems() {                                
                return this.$store.state.store
            }
        },
        methods: {
            sendToCart(t, i, d, p, a) {                
                this.$store.dispatch('addToCart', 
                { title: t, img: i, desc: d,
                price: p, amount: a })                              
            },
            goToCart() {
                this.$navigateTo(Cart)
            },
            getStoreProducts() {
                this.$store.dispatch('getStoreItens')
            }
        },
        mounted() {
            this.getStoreProducts() 
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