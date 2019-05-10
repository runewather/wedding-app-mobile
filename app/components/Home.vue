<template>
    <Page>
        <AppActionBar title="Wedding Store"/>
        <FlexboxLayout flexDirection="column" class="page">
            <ListView for="item in items" :key="index">
                <v-template>
                    <Label :text="item.name" />                    
                </v-template> 
			</ListView>        
        </FlexboxLayout>
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
