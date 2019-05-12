<template>  
    <FlexboxLayout justifyContent="space-around" class="item" flexDirection="row" >
        <!-- ITEM IMAGE -->
        <Image height="64" :src="img" stretch="aspectFit" />
        <!-- ITEM TITLE -->
        <FlexboxLayout class="item-cart-name" flexDirection="column">
            <Label :text="title" />             
        </FlexboxLayout>
        <Button class="cart-remove-button" text="Remove" @tap="removeFromCart"/>       
    </FlexboxLayout>    
</template>

<script>
    export default {
        props: ['id', 'remove', 'img', 'title', 'desc', 'price', 'amount'],        
        methods: {
            removeFromCart() {
                this.remove(this.id)      
            }
        },
        mounted() {
            console.log(this.url + this.img)
        },
    }    
</script>

<style>
    .item-cart-name {
        justify-content: center;
        padding-left: 30px;
    }
</style>