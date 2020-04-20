<template>
  <div id="app">
    <MyComponent />
    <SecondComponent
      v-if="questions.length"
      v-bind:pertanyaan='questions'
    
    />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MyComponent from './components/MyComponent.vue'
import SecondComponent from './components/SecondComponent.vue'

export default {
  name: 'App',
  components: {
    MyComponent,
    SecondComponent
  },
  data: function(){
    return {
      message: 'hello world',
      questions: []
    }
  },
  mounted() {

        fetch('https://opentdb.com/api.php?amount=5&category=21&type=multiple')
        .then(res => res.json())
        .then(res => {
          this.questions = res['results']
        })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
