<template>
    <Page>
        <AppActionBar title="Wedding Store"/>
        <TabView androidTabsPosition="bottom" iosIconRenderingMode="alwaysOriginal" 
        :selectedIndex="selectedIndex" @selectedIndexChange="indexChange">
            <TabViewItem title="Store" iconSource="~/assets/Store.png">
                <Label text="Content for Tab 1" />
            </TabViewItem>
            <TabViewItem title="Cart" iconSource="~/assets/Cart.png">
                <Label text="Content for Tab 2" />
            </TabViewItem>
        </TabView>
    </Page>
</template>

<script>
    import AppActionBar from './AppActionBar'

    export default {
        components: {
            AppActionBar
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
    .Item {
        horizontal-align: center;
        vertical-align: center;
    }
</style>
