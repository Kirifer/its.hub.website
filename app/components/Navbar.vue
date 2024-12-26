<template>
  <nav class="bg-white font-instrument">
    <div
      class="container mx-auto flex justify-between items-center py-5 px-6 border-b-4 border-[#F0E5F3]"
    >
      <!-- Logo -->
      <div class="text-xl font-bold text-gray-800">
        <nuxt-link href="/"
          ><img
            class="w-[170px] h-auto"
            src="~/assets/images/its-logo-light.png"
        /></nuxt-link>
      </div>
      <!-- Navigation Links -->
      <ul class="flex space-x-9 text-gray-600 text-sm">
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
    </div>
  </nav>
</template>

<script lang="tsx" setup>
// No additional logic is needed for this basic navbar.
</script>

<style scoped>
/* Add custom styling here if needed */
</style>
