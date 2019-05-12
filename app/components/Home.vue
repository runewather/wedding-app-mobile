<template>
    <Page class="home">
        <AppActionBar title="Wedding Store"/>        
        <TabView androidTabsPosition="bottom" iosIconRenderingMode="alwaysOriginal" 
        :selectedIndex="selectedIndex" @selectedIndexChange="indexChange">
            <TabViewItem title="Store" iconSource="~/assets/Store.png">
                <Store />
            </TabViewItem>
            <TabViewItem title="Cart" iconSource="~/assets/Cart.png">
                <Cart />
            </TabViewItem>            
        </TabView> 
    </Page>
</template>

<script>   
    import localStorage from 'nativescript-localstorage'
    import AppActionBar from './AppActionBar'
    import Store from './Store'
    import Cart from './Cart'
    
    export default {
        components: {
            AppActionBar,
            Store,
            Cart
        },        
        data() {
            return {
                item: {} 
            }
        },
        mounted() {
            console.log(localStorage.getItem('token'))
        },
    }
</script>

<style scoped>
    .home {
        background-color: #F8F8F8;
    }
</style>
