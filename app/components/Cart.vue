<template>    
    <Page class="home">
        <AppActionBar title="Wedding Store"/>
        <ScrollView orientation="vertical">        
            <FlexboxLayout class="wrapper" flexDirection="column">
                <ListView for="item in getCartItems">
                    <v-template>
                        <CItem :id="item.id" :remove="removeFromCart" :img="item.img" :title="item.title" desc="dsadsadasdsa" price="1.00" amount="10"/>
                    </v-template>
                </ListView>
                <FlexboxLayout justifyContent="space-around" flexDirection="row">
                    <FlexboxLayout>
                        <Label class="item-title" text="Wallet: U$" />
                        <Label class="item-title" :text="getWallet" />
                    </FlexboxLayout>
                    <FlexboxLayout>
                        <Label class="item-title" text="Total: U$" />
                        <Label class="item-title" :text="getTotal" />
                    </FlexboxLayout>
                </FlexboxLayout>
                <!-- BUY ITEM -->            
                <Button class="cart-button" text="Buy" @tap="buy"/>
                <!-- BACK TO STORE -->
                <Button class="cart-button" text="Back to Store" @tap="$navigateBack"/>
            </FlexboxLayout>       
        </ScrollView> 
    </Page>   
</template>
<script>
    import axios from 'axios'
    import CItem from './CartItem'
    import Store from './Store'
    import AppActionBar from './AppActionBar'

    export default {
        components: {
            AppActionBar,
            CItem
        },
        data() {
            return {
                wallet: 0,
                items: []
            }
        },
        computed: {
            getWallet() {
                return this.$store.state.wallet
            },
            getCartItems() {                                
                return this.$store.state.cart
            },
            getTotal() {
                return this.$store.state.total
            }
        },
        methods: {
            buy() {
                this.$store.dispatch('buy')
            },
            goToStore() {
                this.$navigateTo(Store)
            },
            removeFromCart(id) {
                this.$store.dispatch('removeProductFromCart', { 'id': id })
            }
        }
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
</style>