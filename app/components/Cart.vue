<template>    
    <ScrollView orientation="vertical">        
        <FlexboxLayout flexDirection="column">
            <CItem img="~/assets/Logo.png" title="Wedding Invites" desc="dsadsadasdsa" price="1.00" amount="10"/>
            <CItem img="~/assets/Logo.png" title="Wedding Invites" desc="dsadsadasdsa" price="1.00" amount="10"/>
            <CItem img="~/assets/Logo.png" title="Wedding Invites" desc="dsadsadasdsa" price="1.00" amount="10"/>
            <FlexboxLayout justifyContent="space-around" flexDirection="row">
                <FlexboxLayout>
                    <Label class="item-title" text="Wallet: U$" />
                    <Label class="item-title" text="3.00" />
                </FlexboxLayout>
                <FlexboxLayout>
                    <Label class="item-title" text="Total: U$" />
                    <Label class="item-title" text="3.00" />
                </FlexboxLayout>
            </FlexboxLayout>
            <!-- BUY ITEM -->
            <Button class="item-buy-button" text="Buy"/>
        </FlexboxLayout>       
    </ScrollView>    
</template>

<script>
    import axios from 'axios'
    import CItem from './CartItem'

    export default {
        components: {
            CItem
        },
        data() {
            return {
                items: [{
                    name: 'Convite',
                    img: '~/assets/WeddingRing.png'
                }]
            }
        },
        methods: {
            
        }
    }
</script>

<style>
    .action-label {
        color: #D51A1A;
        font-size: 22px;
    } 
</style>