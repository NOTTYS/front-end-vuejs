<template>
  <div>users:
      <!-- {{countStore < 0 ? "" : countStore  }} -->
    <button @click="decrement">-</button>  <span><button @click="increment">+</button></span>
    <input type="text" v-model="count" @change="onHandleChange">
   </div>
  
</template>

<script>
import store from '@/store';
export default {
  data:()=>({
    count:0
  }),
  computed:{
    countStore(){
      return store.state.count
    },
    

  },
  beforeMount(){},
  mounted(){
    this.firstIncrement();
    
  },
  methods:{
    firstIncrement(){
      this.count ++;
    },
    increment(){
      store.commit('setIncrement');
    },
    decrement(){
      store.commit('setDecrement')
    },
    onHandleChange(){
      
      store.dispatch("getCounter",this.count);
    }
  }

};
</script>

<style>
</style>