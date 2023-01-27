<template>
  <div>
    
<form @submit.prevent="addProduct()" enctype="multipart/form-data">
  <div class="mb-6">
    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
    <input v-model="name" type="text" id="Name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required>
  </div>
  <div class="mb-6">
    <label for="type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
    <input v-model="type" type="text" id="type" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
  </div>
  <div class="mb-6">
    <label for="type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
    <input v-model="price" type="number" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
  </div>
  <div class="mb-6">
    <label for="image" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image</label>
    <input accept="image/*" @change="handleFile($event.target.files)" type="file" id="image" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
  </div>
  <div class="flex items-start mb-6">
  </div>
  <button @click="addProduct" type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

  </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            name: '',
            type: '',
            price,
            image: {},
        }
       
    },
    mounted: {
        
    },
methods: {
    handleFile(files) {
        if(!files.length) return;

        this.image = {
            name: files[0].name,
            data: files[0]
        }

    },
    addProduct() {
        console.log(this.name, this.type, this.price, this.image)
        axios.post('http://localhost:3750/api/product/post', {
        name: this.name,
        type: this.type,
        price: this.price,
        image: this.image
      })
        .then(res=> {
          console.log('success')
          
        }).catch(error => console.log(error))
    }
}
}
</script>

<style>

</style>