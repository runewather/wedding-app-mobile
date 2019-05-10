<template>    
    <ScrollView orientation="vertical">        
        <FlexboxLayout flexDirection="column">
            <Item img="~/assets/Logo.png" title="Wedding Invites" desc="dsadsadasdsa" price="1.00" amount="10"/>
        </FlexboxLayout>       
    </ScrollView>    
</template>

<script>
    import Item from './Item'

    export default {
        components: {
            Item
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