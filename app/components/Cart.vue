<template>    
    <Page class="home">
        <ScrollView orientation="vertical">        
            <FlexboxLayout class="wrapper" flexDirection="column">
                <ListView for="item in getCartItems">
                    <v-template>
                        <CItem img="~/assets/Logo.png" :title="item.title" desc="dsadsadasdsa" price="1.00" amount="10"/>
                    </v-template>
                </ListView>
                <FlexboxLayout justifyContent="space-around" flexDirection="row">
                    <FlexboxLayout>
                        <Label class="item-title" text="Wallet: U$" />
                        <Label class="item-title" :text="getWallet" />
                    </FlexboxLayout>
                    <FlexboxLayout>
                        <Label class="item-title" text="Total: U$" />
                        <Label class="item-title" text="3.00" />
                    </FlexboxLayout>
                </FlexboxLayout>
                <!-- BUY ITEM -->            
                <Button class="item-buy-button" text="Buy" @tap="buy"/>
                <!-- BACK TO STORE -->
                <Button text="Back to Store" @tap="$navigateBack"/>
            </FlexboxLayout>       
        </ScrollView> 
    </Page>   
</template>

<script>
    import axios from 'axios'
    import CItem from './CartItem'
    import Store from './Store'

    export default {
        components: {
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
            }
        },
        methods: {
            buy() {
                this.items = this.$store.state.cart
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