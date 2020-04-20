<template>
    <div>
        <div>

            <b-row class="text-center justify-content-md-center">

                <b-col cols="6">

                     <b-jumbotron sm='4'>
 
                    <template v-slot:lead>
                        {{ pertanyaan[index]['question']}}
                    </template>

                    <hr class="my-4">

                    <!-- <p v-for='(answer, index) in answers' :key='index'>
                        {{ answer }}
                    </p> -->
                    <b-list-group>
                        <b-list-group-item v-for='(answer, index) in answers' :key='index'>{{ answer }}</b-list-group-item>
                        <!-- <b-list-group-item>Default list group item</b-list-group-item>
                        <b-list-group-item variant="primary">Primary list group item</b-list-group-item>
                        <b-list-group-item variant="secondary">Secondary list group item</b-list-group-item>
                        <b-list-group-item variant="success">Success list group item</b-list-group-item>
                        <b-list-group-item variant="danger">Danger list group item</b-list-group-item>
                        <b-list-group-item variant="warning">Warning list group item</b-list-group-item>
                        <b-list-group-item variant="info">Info list group item</b-list-group-item>
                        <b-list-group-item variant="light">Light list group item</b-list-group-item>
                        <b-list-group-item variant="dark">Dark list group item</b-list-group-item> -->
                    </b-list-group>

                    <br>
                    <b-button variant="primary" href="#">Submit</b-button>
                    <b-button variant="success" href="#" v-on:click="increment">Next</b-button>
                </b-jumbotron>
                </b-col>

            </b-row>
               


        </div>
    </div>
</template>

<script>
export default {
    props: {
        pertanyaan: Array
    },
    data: function() {
        return {
            index: 0
        }
    },
    methods: {
        increment: function(){
            this.index++
        }
    },
    computed: {
        answers: function() {
            let newArray = this.pertanyaan[this.index]['incorrect_answers']
            newArray.push(this.pertanyaan[this.index]['correct_answer'])
            return newArray
        }
    },
}

</script>