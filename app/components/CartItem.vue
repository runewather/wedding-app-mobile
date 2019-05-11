<template>  
    <FlexboxLayout class="item" flexDirection="row" >
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
        <Button class="item-buy-button" text="+"/>
        <Button class="item-buy-button" text="-"/>
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