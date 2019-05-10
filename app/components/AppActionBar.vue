<template>
    <ActionBar>
        <StackLayout orientation="horizontal"
            ios:horizontalAlignment="center"
            android:horizontalAlignment="center">                
            <Label :text="title"  class="action-label"></Label>
        </StackLayout>
    </ActionBar>
</template>

<script>
    export default {
        props: ['title'],
        data() {
            return {
                title: ''
            }
        }
    }
</script>

<style>
    .action-label {
        color: #D51A1A;
        font-size: 22px;
    } 
</style>