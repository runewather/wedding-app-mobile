<template>    
    <ScrollView orientation="vertical">        
        <FlexboxLayout flexDirection="column">
            <SItem img="~/assets/Logo.png" :title="item.name" :desc="item.desc" :price="item.price" :amount="item.amount"/>
        </FlexboxLayout>       
    </ScrollView>    
</template>

<script>
    import axios from 'axios'
    import SItem from './StoreItem'

    export default {
        components: {
            SItem
        },
        data() {
            return {
                item: []
            }
        },
        methods: {
            getProducts: function() {                
                axios.get('http://192.168.0.101:3000/api/v1/getProducts')
                .then((response) => {                    
                    this.item = response.data.data                   
                })
            }
        },
        mounted() {
            this.getProducts()
        }, 
    }
</script>

<style>
    .action-label {
        color: #D51A1A;
        font-size: 22px;
    } 
</style>