<template>  
    <FlexboxLayout class="item" flexDirection="column" >
        <!-- ITEM IMAGE -->
        <Image height="196" :src="img" stretch="aspectFit" />
        <!-- ITEM TITLE -->
        <Label class="item-title" :text="title" />
        <!-- ITEM DESC -->
        <Label textWrap="true" class="item-description" :text="desc" />
        <!-- ITEM AMOUNT -->
        <FlexboxLayout class="item-info" justifyContent="space-around" flexDirection="row" >
            <!-- ITEM PRICE -->
            <FlexboxLayout class="item-price" flexDirection="row" >
                <Label text="Price: U$" />
                <Label :text="price" />
            </FlexboxLayout>                       
        </FlexboxLayout>          
        <!--- ADD TO CART -->      
        <Button class="item-buy-button" text="Add to Cart" @tap="toCart"/>
    </FlexboxLayout>    
</template>

<script>
    export default {
        props: ['img', 'title', 'desc', 'price', 'sendToCart'],
        methods: {
            toCart() {             
                this.sendToCart(this.title, this.img, this.desc, this.price, this.amount)
            }
        },
        computed: {
            getTotal() {
                return this.$store.state.total
            },
            getWallet() {
                return this.$store.state.wallet
            }
        },
    }
</script>

<style>
    .item {
        width: 100%;
        font-size: 16px;
        margin-top: 5;
        margin-bottom: 5;
        padding: 5;
        background-color: #FFFFFF;        
    } 
    .item-title { 
        font-size: 22px;
        margin-top: 10px;      
        border-top-width: 4px;
        border-top-color: #F8F8F8;
        text-align: center;
    }
    .item-description { 
        font-size: 12px;
        text-align: center;
    }
    .item-buy-button {
        background-color: #EF5350;
        color: white;
    }
    .item-price {
        font-weight: bold;
        text-align: right;
        color: #EF5350;
    }
    .item-info{
        margin-top: 10;
    }
</style>