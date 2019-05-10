<template>  
    <FlexboxLayout class="item" flexDirection="column" >
        <Image height="196" src="~/assets/Logo.png" horizontalAlignment="left" stretch="aspectFit" />
        <Label class="item-title" text="Wedding Invites" />
        <Label textWrap="true" class="item-description" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent massa ante, lobortis ac pretium id. " />
        <Button class="item-buy-button" text="Add to Cart"/>
    </FlexboxLayout>    
</template>

<script>
    
</script>

<style>
    .item {
        font-size: 16px;
        margin-top: 5;
        margin-bottom: 5;
        padding: 5;
        background-color: #FFFFFF;        
    } 
    .item-title { 
        font-size: 22px;
        margin-top: 10px;      
        border-top-width: 8px;
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
</style>