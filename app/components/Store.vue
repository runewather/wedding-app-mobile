<template>    
    <ScrollView orientation="vertical">        
        <FlexboxLayout flexDirection="column">
            <SItem img="~/assets/Logo.png" title="Wedding Invites" desc="dsadsadasdsa" price="1.00" amount="10"/>
        </FlexboxLayout>       
    </ScrollView>    
</template>

<script>
    import SItem from './StoreItem'

    export default {
        components: {
            SItem
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