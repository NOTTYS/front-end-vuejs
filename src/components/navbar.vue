<template>
  <div>
    <div></div>
    <nav
      class="
        bg-white
        border-gray-200
        px-2
        sm:px-4
        py-2.5
        rounded
        dark:bg-gray-900
      "
    >
      <div
        class="container flex flex-wrap items-center justify-between mx-auto"
      >
        <a href="/" class="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="h-6 mr-3 sm:h-9"
            alt="Flowbite Logo"
          />
          <a
            href="/"
            class="
              self-center
              text-xl
              font-semibold
              whitespace-nowrap
              dark:text-white
            "
            >Flowbite</a
          >
        </a>

        <div
          class="
            items-center
            justify-between
            hidden
            w-full
            md:flex md:w-auto md:order-1
          "
          id="mobile-menu-2"
        >
          <ul
            class="
              flex flex-col
              p-4
              mt-4
              border border-gray-100
              rounded-lg
              bg-gray-50
              md:flex-row
              md:space-x-8
              md:mt-0
              md:text-sm
              md:font-medium
              md:border-0
              md:bg-white
              dark:bg-gray-800
              md:dark:bg-gray-900
              dark:border-gray-700
            "
          >
            <li>
              <a
                href="/"
                class="
                  block
                  py-2
                  pl-3
                  pr-4
                  text-gray-700
                  rounded
                  hover:bg-gray-100
                  md:hover:bg-transparent md:p-0
                  dark:text-gray-400
                  md:dark:hover:text-white
                  dark:hover:bg-gray-700 dark:hover:text-white
                  md:dark:hover:bg-transparent
                  dark:border-gray-700
                "
                aria-current="page"
                
              >Home</a>
            </li>
            <li>
              <router-link
                to="/about"
                class="
                  block
                  py-2
                  pl-3
                  pr-4
                  text-gray-700
                  rounded
                  hover:bg-gray-100
                  md:hover:bg-transparent md:p-0
                  dark:text-gray-400
                  md:dark:hover:text-white
                  dark:hover:bg-gray-700 dark:hover:text-white
                  md:dark:hover:bg-transparent
                  dark:border-gray-700
                "
                >About</router-link
              >
            </li>
            <li>
              <router-link
                to="/chat"
                class="
                  block
                  py-2
                  pl-3
                  pr-4
                  text-gray-700
                  rounded
                  hover:bg-gray-100
                  md:hover:bg-transparent md:p-0
                  dark:text-gray-400
                  md:dark:hover:text-white
                  dark:hover:bg-gray-700 dark:hover:text-white
                  md:dark:hover:bg-transparent
                  dark:border-gray-700
                "
                >Chat</router-link
              >
            </li>
            <li>
              <router-link
                to="/product"
                href="#"
                class="
                  block
                  py-2
                  pl-3
                  pr-4
                  text-gray-700
                  rounded
                  hover:bg-gray-100
                  md:hover:bg-transparent md:p-0
                  dark:text-gray-400
                  md:dark:hover:text-white
                  dark:hover:bg-gray-700 dark:hover:text-white
                  md:dark:hover:bg-transparent
                  dark:border-gray-700
                "
                >Product</router-link
              >
            </li>
            <li>
              <router-link
                to="/report"
                href="#"
                class="
                  block
                  py-2
                  pl-3
                  pr-4
                  text-gray-700
                  rounded
                  hover:bg-gray-100
                  md:hover:bg-transparent md:p-0
                  dark:text-gray-400
                  md:dark:hover:text-white
                  dark:hover:bg-gray-700 dark:hover:text-white
                  md:dark:hover:bg-transparent
                  dark:border-gray-700
                "
                >Report Bug</router-link
              >
            </li>
            <li>
              <router-link
                to="/contact"
                class="
                  block
                  py-2
                  pl-3
                  pr-4
                  text-gray-700
                  rounded
                  hover:bg-gray-100
                  md:hover:bg-transparent md:p-0
                  dark:text-gray-400
                  md:dark:hover:text-white
                  dark:hover:bg-gray-700 dark:hover:text-white
                  md:dark:hover:bg-transparent
                  dark:border-gray-700
                "
                >Contact</router-link
              >
            </li>

              <li v-if="!token">
              <router-link
                to="/login"
                class="
                  block
                  py-2
                  pl-3
                  pr-4
                  text-gray-700
                  rounded
                  hover:bg-gray-100
                  md:hover:bg-transparent md:p-0
                  dark:text-gray-400
                  md:dark:hover:text-white
                  dark:hover:bg-gray-700 dark:hover:text-white
                  md:dark:hover:bg-transparent
                  dark:border-gray-700
                "
                >LOGIN</router-link
              >
            </li>

            <li v-if="!token">
              <router-link
                to="/register"
                class="
                  block
                  py-2
                  pl-3
                  pr-4
                  text-gray-700
                  rounded
                  hover:bg-gray-100
                  md:hover:bg-transparent md:p-0
                  dark:text-gray-400
                  md:dark:hover:text-white
                  dark:hover:bg-gray-700 dark:hover:text-white
                  md:dark:hover:bg-transparent
                  dark:border-gray-700
                "
                >Register</router-link
              >
            </li>

            

              <!-- <li v-else>
              <button
              @click="logout"
          
                class="
                  block
                  py-2
                  pl-3
                  pr-4
                  text-gray-700
                  rounded
                  hover:bg-gray-100
                  md:hover:bg-transparent md:p-0
                  dark:text-gray-400
                  md:dark:hover:text-white
                  dark:hover:bg-gray-700 dark:hover:text-white
                  md:dark:hover:bg-transparent
                  dark:border-gray-700
                "
                >Logout</button
              >
            </li> -->

          </ul>
          <div v-if="token">
  <div class="flex items-center md:order-2">
          <button
            type="button"
            class="
              flex
              mr-3
              text-sm
              bg-gray-800
              rounded-full
              md:mr-0
              focus:ring-4 focus:ring-gray-300
              dark:focus:ring-gray-600
            "
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span class="sr-only">Open user menu</span>
            <img
              class="w-8 h-8 rounded-full"
              src="/docs/images/people/profile-picture-3.jpg"
              alt="user photo"
            />
          </button>
          <!-- Dropdown menu -->
          <div
            class="
              z-50
              hidden
              my-4
              text-base
              list-none
              bg-white
              divide-y divide-gray-100
              rounded
              shadow
              dark:bg-gray-700 dark:divide-gray-600
            "
            id="user-dropdown"
          >
            <div class="px-4 py-3">
              <span class="block text-sm text-gray-900 dark:text-white"
                >Bonnie Green</span
              >
              <span
                class="
                  block
                  text-sm
                  font-medium
                  text-gray-500
                  truncate
                  dark:text-gray-400
                "
                >name@flowbite.com</span
              >
            </div>
            <ul class="py-1" aria-labelledby="user-menu-button">
              <li>
                <a
                  href="#"
                  class="
                    block
                    px-4
                    py-2
                    text-sm text-gray-700
                    hover:bg-gray-100
                    dark:hover:bg-gray-600
                    dark:text-gray-200
                    dark:hover:text-white
                  "
                  >Dashboard</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="
                    block
                    px-4
                    py-2
                    text-sm text-gray-700
                    hover:bg-gray-100
                    dark:hover:bg-gray-600
                    dark:text-gray-200
                    dark:hover:text-white
                  "
                  >Settings</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="
                    block
                    px-4
                    py-2
                    text-sm text-gray-700
                    hover:bg-gray-100
                    dark:hover:bg-gray-600
                    dark:text-gray-200
                    dark:hover:text-white
                  "
                  >Earnings</a
                >
              </li>
              <li>
                <a
                @click="logout"
                  href="#"
                  class="
                    block
                    px-4
                    py-2
                    text-sm text-gray-700
                    hover:bg-gray-100
                    dark:hover:bg-gray-600
                    dark:text-gray-200
                    dark:hover:text-white
                  "
                  >Sign out</a
                >
              </li>
            </ul>
          </div>
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            class="
              inline-flex
              items-center
              p-2
              ml-1
              text-sm text-gray-500
              rounded-lg
              md:hidden
              hover:bg-gray-100
              focus:outline-none focus:ring-2 focus:ring-gray-200
              dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600
            "
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
</div>
        </div>
      </div>
    </nav>
   
  </div>
</template>

<script>
import axios from 'axios';
export default {
  components: {},
  name: "HomeView",
  data:() => {
    return {
      
    }
  },
  computed: {
    token() {
      return window.sessionStorage.getItem('token')
    },
    profile() {
      return store.state.profile
    }
  },
  mounted() {
    this.getProfileFromStore();
  },
  methods: {
    logout() {
      axios.post('http://localhost:3750/api/auth/signout')
      .then(res => {
        window.sessionStorage.removeItem('token')
      window.location = "/"
      })
     
    },
    getProfileFromStore(){
        store.dispatch("getProfile")
    },

  },
};
</script>

<style>
</style>