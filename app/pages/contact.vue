<template>
  <div class="background-gradient">
    <div
      class="graph-paper-container bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center px-4 pt-8 pb-12"
    >
      <!-- Contact Section -->

      <div class="w-full max-w-3xl text-center">
        <!-- Header Section -->
        <div
          class="inline-block px-4 py-1.5 bg-[#D1D4F6] text-[#616EF1] rounded-full text-base sm:text-lg font-normal mb-4"
        >
          <span>Contact Us</span>
        </div>
        <h1
          class="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-center text-gray-900 mb-4"
        >
          Connect with Us
        </h1>
        <p
          class="mt-4 mb-6 font-normal text-sm sm:text-base md:text-lg leading-relaxed text-center text-gray-600 max-w-xl mx-auto"
        >
          IT Squarehub combines the best practices and strategies to help you
          achieve your company objectives.
        </p>

        <!-- Form Card -->
        <div class="bg-white rounded-2xl shadow-xl p-8 mb-12">
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
                class="bg-[#6c63ff] hover:bg-[#6c63ff]/80 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-[1.02]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div class="container mx-auto px-4 pt-12">
    <div class="p-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Apply Card -->
        <div
          class="rounded-2xl p-8 bg-gradient-to-br from-gray-800 via-gray-900 to-purple-900 text-white shadow-xl h-[300px] flex flex-col justify-between"
        >
          <h2 class="text-3xl font-bold mb-6 leading-tight">
            Driving your success with exceptional IT positions.
          </h2>
          <button
            class="bg-white text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors w-fit"
          >
            Apply Now!
          </button>
        </div>

        <!-- Meeting Card -->
        <div class="rounded-2xl overflow-hidden shadow-xl h-[300px]">
          <img
            src="~/assets/images/pic-header2.png"
            alt="Business meeting"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Stats Cards -->
        <div class="space-y-4 h-[300px] flex flex-col">
          <!-- Balance Card -->
          <div class="bg-white rounded-2xl p-4 shadow-xl flex-1">
            <div class="flex items-center justify-between h-full">
              <div class="space-y-1">
                <p class="text-sm text-gray-500">Your balance</p>
                <p class="text-2xl font-bold">₱1,000</p>
              </div>
              <div class="w-8 h-8">
                <PieChart :data="balanceData" />
              </div>
            </div>
          </div>

          <!-- Pie Chart Card -->
          <div class="bg-white rounded-2xl p-4 shadow-xl flex-[2]">
            <div class="h-full flex flex-col justify-between">
              <div class="flex items-center justify-between">
                <p class="font-medium">Your Pie Chart</p>
                <button class="text-sm text-gray-500">Monthly ▼</button>
              </div>
              <div class="flex-1 min-h-0">
                <PieChart :data="pieChartData" :options="chartOptions" />
              </div>
              <div class="flex justify-around text-sm pt-2">
                <div class="flex items-center gap-2">
                  <div class="w-3 h-3 rounded-full bg-purple-500"></div>
                  <span>63%</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <span>25%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container mx-auto px-4 pt-4">
    <div class="px-4 py-8">
    <div class="container mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
          <div class="inline-block px-4 py-1.5 bg-[#D1D4F6] text-[#616EF1] rounded-full text-base sm:text-lg font-normal mb-4">
            <span>Our Locations</span>
          </div>
        </div>

      <!-- Locations Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div v-for="office in offices" :key="office.country" 
             class="group bg-white rounded-xl overflow-hidden shadow-lg border-2 border-white-500 transition-transform duration-300 hover:-translate-y-2">
          <!-- Image Container -->
          <div class="h-48 overflow-hidden">
            <img 
              :src="office.image" 
              :alt="office.country"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            >
          </div>

          <!-- Content -->
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">
              {{ office.country }}
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              {{ office.address }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>

  <!-- <Footer /> -->
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "vue-chartjs";

ChartJS.register(ArcElement, Tooltip, Legend);

const formData = ref({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const handleSubmit = () => {
  // Handle form submission here
  console.log("Form submitted:", formData.value);

  // Reset form after submission
  formData.value = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
};

const balanceData = {
  datasets: [
    {
      data: [75, 25],
      backgroundColor: ["#6366f1", "#fbbf24"],
      borderWidth: 0,
    },
  ],
};

// Main pie chart data
const pieChartData = {
  datasets: [
    {
      data: [63, 25, 12],
      backgroundColor: ["#a855f7", "#eab308", "#e5e7eb"],
      borderWidth: 0,
    },
  ],
};

// Chart options
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
};

// Create a component for the pie charts
const PieChart = defineComponent({
  extends: Pie,
  props: {
    data: {
      type: Object,
      required: true,
    },
    options: {
      type: Object,
      default: () => ({
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
      }),
    },
  },
});

interface Office {
  country: string;
  address: string;
  image: string;
}

import philippineOffice from '~/assets/images/philippines.png';
import usaOffice from '~/assets/images/united states.png';
import ukOffice from '~/assets/images/united kingdom.png';

const offices: Office[] = [
  {
    country: 'Philippines',
    address: 'Unit 5, Clark Center 09, Jose Abad Santos, Clark Freeport Zone, Central Luzon, Philippines',
    image: philippineOffice
  },
  {
    country: 'United States of America',
    address: '1150 Nw 72nd Ave Tower 1 Ste 455 #14509, Miami FL 33126, US.',
    image: usaOffice
  },
  {
    country: 'United Kingdom',
    address: '63-66 Hatton Garden, London, EC1N 8LE, United Kingdom.',
    image: ukOffice
  }
];
</script>

<style scoped>
.graph-paper-container {
  background-image: linear-gradient(
      to right,
      rgba(220, 220, 220, 0.6) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, rgba(220, 220, 220, 0.6) 1px, transparent 1px);
  background-size: 80px 80px;
  width: 100%;
  height: 100%;
  background-color: transparent;
}

.background-gradient {
  /* background: 
    linear-gradient(to bottom, rgba(220, 220, 220, 0.6) 1px, transparent 1px),
    linear-gradient(to bottom right, #ebf8ff, #f3e8ff, #ffe4e6); */
  background-color: white;
}
</style>
