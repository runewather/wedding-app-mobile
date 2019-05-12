<template>  
    <FlexboxLayout justifyContent="space-around" class="item" flexDirection="row" >
        <!-- ITEM IMAGE -->
        <Image height="64" :src="img" stretch="aspectFit" />
        <!-- ITEM TITLE -->
        <FlexboxLayout class="item-cart-name" flexDirection="column">
            <Label :text="title" />             
            <FlexboxLayout flexDirection="row">
                <Label text="Amount: " />
                <Label text="5" /> 
            </FlexboxLayout> 
        </FlexboxLayout>
        <Button class="cart-remove-button" text="Remove"/>       
    </FlexboxLayout>    
</template>

<script>
    export default {
        props: ['img', 'title', 'desc', 'price', 'amount']
    }
</script>

<style>
    .item-cart-name {
        justify-content: center;
        padding-left: 30px;
    }
</style>