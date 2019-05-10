<template>
    <Page>
        <ActionBar title="Welcome to Wedding Store"/>
        <FlexboxLayout flexDirection="column">            
            <Label class="message" :text="count" col="0" row="0"/> 
            <Button text="Button" @tap="increment" />  
        </FlexboxLayout>        
    </Page>
</template>

<script >

  export default {
    components: {
    },
    data() {
      return {
        msg: 'Hello World!',
        item: {
          name: "Manila Ultimate Tombstone Burger",
          cover: "~/assets/images/food/burger640.jpg",
          images: [
              {src: "~/assets/images/food/burger/burger1.jpg"},
              {src: "~/assets/images/food/burger/burger2.jpg"},
              {src: "~/assets/images/food/burger/burger3.jpg"},
              {src: "~/assets/images/food/burger/burger4.jpg"},
              {src: "~/assets/images/food/burger/burger5.jpg"},
              {src: "~/assets/images/food/burger/burger6.jpg"}
            ],
          category: "Burger",
          categoryTag: "#2D9CDB",
          price: "300.00",
          likes: 987,
          isLike: false,
          isFavorite: true,
          comments: 13,
          rating: "4.5",
          description: "a"
        }
      }
    },
    computed: {
      count(){
        return this.$store.state.count
      }
    }, 
    methods: {
      increment() {
        this.$store.commit('increment')
      },
      decrement() {
        this.$store.commit('decrement')
      }
    }
  }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
