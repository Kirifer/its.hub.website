<template>
    <footer class="bg-white text-black py-12 border-t border-gray-300">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Logo and Description -->
          <div>
            <img src="~/assets/images/its-logo-light.png" alt="Logo" class="mb-4 w-[250px] h-auto">
            <p class="text-gray-600">
              Your company tagline or description goes here. Providing quality services since 2021.
            </p>
          </div>
          
          <!-- Navigation Links -->
          <div>
            <h3 class="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#" class="text-gray-600 hover:text-black">Home</a></li>
              <li><a href="#" class="text-gray-600 hover:text-black">About Us</a></li>
              <li><a href="#" class="text-gray-600 hover:text-black">Services</a></li>
              <li><a href="#" class="text-gray-600 hover:text-black">Contact</a></li>
            </ul>
          </div>
          
          <!-- Contact Information -->
          <div>
            <h3 class="text-xl font-semibold mb-4">Contact Us</h3>
            <p class="text-gray-600">1234 Street Name, City, State, 12345</p>
            <p class="text-gray-600">Email: info@yourcompany.com</p>
            <p class="text-gray-600">Phone: (123) 456-7890</p>
          </div>
        </div>
        
        <div class="mt-8 pt-4 text-center">
          <p class="text-gray-600">&copy; 2023 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer'
  }
  </script>
  
  <style scoped>
  footer {
    background-color: #ffffff; /* Tailwind's white */
    color: #000000; /* Tailwind's black */
  }
  </style>