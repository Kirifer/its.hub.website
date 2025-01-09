<template>
  <nav class="bg-white font-instrument relative">
    <div
      class="container mx-auto flex justify-between items-center py-5 px-6 border-b-4 border-purple-300"
    >
      <!-- Logo -->
      <div class="text-xl font-bold text-gray-800">
        <nuxt-link href="/">
          <img
            class="w-[170px] h-auto"
            src="~/assets/images/its-logo-light.png"
          />
        </nuxt-link>
      </div>
      <!-- Navigation Links -->
      <ul
        class="hidden md:flex md:flex-row md:space-x-9 text-gray-600 text-sm md:ml-auto"
      >
        <li>
          <nuxt-link href="/" class="hover:text-gray-900 transition-colors">
            Home
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            href="/careers"
            class="hover:text-gray-900 transition-colors"
          >
            Careers
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            href="/services"
            class="hover:text-gray-900 transition-colors"
          >
            Services
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            href="/blogs"
            class="hover:text-gray-900 transition-colors"
          >
            Blogs
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            href="/contact"
            class="hover:text-gray-900 transition-colors"
          >
            Contact Us
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            href="/about"
            class="hover:text-gray-900 transition-colors"
          >
            About Us
          </nuxt-link>
        </li>
      </ul>
      <!-- Hamburger Icon -->
      <div class="md:hidden ml-auto">
        <button @click="toggleMenu" class="focus:outline-none">
          <svg
            class="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    <!-- Floating Side Nav -->
    <div
      v-if="isMenuOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-50"
      @click.self="toggleMenu"
    >
      <div class="absolute top-0 right-0 w-64 h-full bg-white shadow-lg p-6">
        <button
          @click="toggleMenu"
          class="focus:outline-none mb-4 absolute top-4 right-4"
        >
          <svg
            class="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <ul
          class="flex flex-col space-y-4 text-gray-600 text-sm text-right mt-8"
        >
          <li>
            <nuxt-link
              href="/"
              class="hover:text-gray-900 transition-colors"
              @click="toggleMenu"
            >
              Home
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              href="/careers"
              class="hover:text-gray-900 transition-colors"
              @click="toggleMenu"
            >
              Careers
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              href="/services"
              class="hover:text-gray-900 transition-colors"
              @click="toggleMenu"
            >
              Services
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              href="/blogs"
              class="hover:text-gray-900 transition-colors"
              @click="toggleMenu"
            >
              Blogs
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              href="/contact"
              class="hover:text-gray-900 transition-colors"
              @click="toggleMenu"
            >
              Contact Us
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              href="/about"
              class="hover:text-gray-900 transition-colors"
              @click="toggleMenu"
            >
              About Us
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped></style>
