<template>    
    <ScrollView orientation="vertical">        
        <FlexboxLayout flexDirection="column">
            <Item />
            <Item />
            <Item />
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