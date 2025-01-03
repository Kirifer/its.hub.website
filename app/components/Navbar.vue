<template>
  <nav class="bg-white font-instrument">
    <div class="container mx-auto flex justify-between items-center py-5 px-6 border-b-4 border-[#F0E5F3]">
      <!-- Logo -->
      <div class="text-xl font-bold text-gray-800">
        <nuxt-link href="/">
          <img class="w-[170px] h-auto" src="~/assets/images/its-logo-light.png" />
        </nuxt-link>
      </div>
      <!-- Navigation Links -->
      <ul :class="{'hidden': !isMenuOpen, 'flex': isMenuOpen}" class="flex-col md:flex md:flex-row md:space-x-9 text-gray-600 text-sm md:ml-auto">
        <li>
          <nuxt-link href="/" class="hover:text-gray-900 transition-colors">
            Home
          </nuxt-link>
        </li>
        <li>
          <nuxt-link href="/careers" class="hover:text-gray-900 transition-colors">
            Careers
          </nuxt-link>
        </li>
        <li>
          <nuxt-link href="/blogs" class="hover:text-gray-900 transition-colors">
            Blogs
          </nuxt-link>
        </li>
        <li>
          <nuxt-link href="/contact" class="hover:text-gray-900 transition-colors">
            Contact Us
          </nuxt-link>
        </li>
        <li>
          <nuxt-link href="/about" class="hover:text-gray-900 transition-colors">
            About Us
          </nuxt-link>
        </li>
      </ul>
      <!-- Hamburger Icon -->
      <div class="md:hidden ml-auto">
        <button @click="toggleMenu" class="focus:outline-none">
          <svg class="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
// filepath: /c:/Users/ITS-Jerald/Desktop/ITS Hub Website Files/its.hub.website/app/components/Navbar.vue
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
/* Add custom styling here if needed */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: flex-start;
  }
  ul {
    width: 100%;
    text-align: center;
  }
  ul li {
    margin: 10px 0;
  }
}
</style>