<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-6">
    <!-- Contact Section -->
    <div class="w-full max-w-3xl text-center">
      <!-- Header Section -->
      <div class="mb-8">
        <span class="inline-block px-4 py-1.5 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">
          Contact Us
        </span>
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Connect with Us</h1>
        <p class="text-gray-600 text-lg max-w-xl mx-auto">
          IT Squarehub combines the best practices and strategies to help you achieve your company objectives.
        </p>
      </div>

      <!-- Form Card -->
      <div class="bg-white rounded-2xl shadow-xl p-8">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Name Input -->
            <div>
              <input
                v-model="formData.name"
                type="text"
                placeholder="Your name*"
                class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                required
              />
            </div>

            <!-- Email Input -->
            <div>
              <input
                v-model="formData.email"
                type="email"
                placeholder="Your email*"
                class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                required
              />
            </div>

            <!-- Phone Input -->
            <div>
              <input
                v-model="formData.phone"
                type="tel"
                placeholder="Phone number*"
                class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                required
              />
            </div>
          </div>

          <!-- Message Textarea -->
          <div>
            <textarea
              v-model="formData.message"
              placeholder="Message*"
              rows="6"
              class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all resize-none"
              required
            ></textarea>
          </div>

          <!-- Submit Button -->
          <div>
            <button
              type="submit"
              class="bg-purple-500 hover:bg-purple-600 text-white font-medium px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-[1.02]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const handleSubmit = () => {
  // Handle form submission here
  console.log('Form submitted:', formData.value)
  
  // Reset form after submission
  formData.value = {
    name: '',
    email: '',
    phone: '',
    message: ''
  }
}
</script>