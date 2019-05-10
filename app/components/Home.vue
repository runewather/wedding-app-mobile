<template>
    <Page class="home">
        <AppActionBar title="Wedding Store"/>
        <TabView androidTabsPosition="bottom" iosIconRenderingMode="alwaysOriginal" 
        :selectedIndex="selectedIndex" @selectedIndexChange="indexChange">
            <TabViewItem title="Store" iconSource="~/assets/Store.png">
                <Store />
            </TabViewItem>
            <TabViewItem title="Cart" iconSource="~/assets/Cart.png">
                <Label text="Content for Tab 2" />
            </TabViewItem>
        </TabView>
    </Page>
</template>

<script>
    import AppActionBar from './AppActionBar'
    import Store from './Store'

    export default {
        components: {
            AppActionBar,
            Store
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

<style scoped>
    .home {
        background-color: #F8F8F8;
    }
</style>
