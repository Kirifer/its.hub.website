<template>
  <div>
    <div
      class="inset-0 w-full bg-white bg-[linear-gradient(to_right,#80808012_3px,transparent_1px),linear-gradient(to_bottom,#80808012_3px,transparent_1px)] bg-[size:100px_100px]"
    >
      <!-- Contact Section -->

      <div class="container mx-auto px-4 h-[750px] animate-fade-grid-in-3">
        <!-- Header Section -->
        <div
        v-if="contact.length > 0" 
          class="flex flex-col items-center justify-center space-y-5 md:space-y-5 animate-fade-in"
        >
          <div class="mt-10">
            <span
              class="inline-flex items-center px-3 py-0.5 rounded-full text-lg font-medium bg-blue-200 text-blue-800"
              >{{ contact[0]?.hero_badge }}</span
            >
          </div>
          <h1
            class="font-bold text-center text-3xl md:text-5xl w-[350px] md:w-[550px]"
          >
            {{ contact[0]?.hero_title }}
          </h1>
          <p
            class="text-center text-lg md:text-xl text-gray-900 w-full md:w-[500px]"
          >
            {{ contact[0]?.hero_subtitle }}
          </p>

          <!-- Form Card -->
          <div
            class="bg-white rounded-2xl shadow-xl p-8 mb-12 w-full md:w-[1200px]"
          >
            <form @submit.prevent="handleSubmit">
              <div class="flex flex-col space-y-4">
                <div class="flex flex-col md:flex-row justify-between gap-4">
                  <div class="w-full">
                    <label for="name" class="text-sm font-medium text-gray-700"
                      >Name</label
                    >
                    <input
                      v-model="formData.name"
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div class="w-full">
                    <label for="email" class="text-sm font-medium text-gray-700"
                      >Email</label
                    >
                    <input
                      v-model="formData.email"
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div class="w-full">
                    <label for="phone" class="text-sm font-medium text-gray-700"
                      >Phone Number</label
                    >
                    <input
                      v-model="formData.phone"
                      type="number"
                      id="phone"
                      name="phone"
                      placeholder="Your Phone Number"
                      class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div class="w-full">
                  <label for="message" class="text-sm font-medium text-gray-700"
                    >Message</label
                  >
                  <textarea
                    v-model="formData.message"
                    type="text"
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    class="mt-1 block w-full px-3 h-56 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div class="text-end">
                  <button
                    type="submit"
                    class="bg-blue-500 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-600 transition-colors w-fit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4 pt-12 mt-16 md:mt-0">
      <div class="p-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Apply Card -->
          <div
            class="rounded-2xl p-8 bg-gradient-to-br from-gray-800 via-gray-900 to-purple-900 text-white shadow-xl h-[300px] flex flex-col justify-between"
          >
            <h2 class="text-3xl font-bold mb-6 leading-tight">
              {{ contact[0]?.card1_title }}
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

    <div
      class="container mx-auto max-w-[350px] md:max-w-[1185px] pt-4 px-4 md:px-0"
    >
      <div class="flex flex-col md:flex-row items-center justify-center">
        <div class="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <div
            class="inline-block px-4 py-1.5 bg-blue-200 text-blue-800 rounded-full text-base sm:text-lg font-semibold mb-4"
          >
            <span>Connecting</span>
          </div>
          <div class="space-y-2 md:space-y-4">
            <h1 class="text-3xl md:text-6xl font-bold w-full md:w-[500px]">
              {{ contact[0]?.section2_title }}
            </h1>
          </div>
          <div class="space-y-2 md:space-y-10 mt-5 max-w-lg">
            <p class="text-lg md:text-2xl text-gray-500 mb-5">
              {{ contact[0]?.section2_subtitle }}
            </p>
            <div class="flex items-center justify-center">
              <div
                class="relative w-full h-[250px] md:h-[250px] bg-gradient-to-br from-[#00b8d4] to-[#844ddc] rounded-2xl p-2 border border-[#844DDC] md:w-[350px] hidden md:block"
              >
                <img
                  v-if="contact[0]?.section2_image3"
                  :src="urlFor(contact[0]?.section2_image3)"
                  alt="Section 2 Image 3"
                  class="w-full h-full object-cover"
                />
              </div>
             
            </div>
            <!-- <img
              src="~/assets/images/group 74.png"
              alt="Design Element"
              class="hidden md:block absolute right-[844px] top-[1670px]"
              style="height: 150px; width: auto"
            /> -->
            <div class="flex justify-end">
              <div
                class="relative w-full h-[250px] md:h-[300px] bg-gradient-to-br from-[#00b8d4] to-[#844ddc] rounded-2xl rotate-180 p-2 border border-[#844DDC] md:w-[400px] hidden md:block"
              ></div>
            </div>
            <!-- <img
              src="~/assets/images/group 73.png"
              alt="Design Element"
              class="hidden md:block absolute right-[1193px] top-[2010px]"
              style="height: 150px; width: auto"
            /> -->
            <div
              class="relative w-full h-[250px] md:h-[400px] bg-gradient-to-br from-[#00b8d4] to-[#844ddc] rounded-2xl rotate-180 p-2 border border-[#844DDC] md:w-[450px] hidden md:block"
            ></div>
          </div>
        </div>
        <div class="w-full md:w-1/2 space-y-10">
          <div
            v-for="(step, index) in contact[0]?.section2_steps"
            :key="index"
            class="space-y-5"
          >
            <h1 class="text-blue-900 text-4xl md:text-6xl font-bold">
              0{{ step.step_no }}.
            </h1>
            <h1
              class="text-xl md:text-3xl font-semibold pb-5 border-b border-blue-900"
            >
              {{ step.step_title }}
            </h1>
            <p class="text-lg md:text-2xl text-gray-500">
              {{ step.step_subtitle }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto py-4 mt-16">
      <div class="container mx-auto">
        <!-- Header -->
        <div class="text-center mb-12">
          <div
            class="inline-block px-4 py-1.5 bg-blue-200 text-blue-800 rounded-full text-base sm:text-lg font-semibold"
          >
            <span>Our Locations</span>
          </div>
        </div>

        <!-- Locations Grid -->
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[400px] md:max-w-[1200px] mx-auto mb-10"
        >
          <div
            v-for="office in offices"
            :key="office.country"
            class="group bg-white rounded-xl overflow-hidden shadow-lg border-2 border-white-500 transition-transform duration-300 hover:-translate-y-2"
          >
            <!-- Image Container -->
            <div class="h-48 overflow-hidden">
              <img
                :src="office.image"
                :alt="office.country"
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
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
import sanityClient from "~/hooks/sanityClient";
import type { Contact } from "~/types/contact";
import { urlFor } from "@/hooks/sanityImageUrl";

const contact = ref<Contact[]>([]);

onMounted(async () => {
  try {
    contact.value = await sanityClient.fetch<Contact[]>(
      '*[_type == "contact"]'
    );
    if (contact.value.length > 0) {
      console.log("Contact data fetched successfully:", contact.value);
    }
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
  }
});

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

import philippineOffice from "~/assets/images/philippines.png";
import usaOffice from "~/assets/images/united states.png";
import ukOffice from "~/assets/images/united kingdom.png";

const offices: Office[] = [
  {
    country: "Philippines",
    address:
      "Unit 5, Clark Center 09, Jose Abad Santos, Clark Freeport Zone, Central Luzon, Philippines",
    image: philippineOffice,
  },
  {
    country: "United States of America",
    address: "1150 Nw 72nd Ave Tower 1 Ste 455 #14509, Miami FL 33126, US.",
    image: usaOffice,
  },
  {
    country: "United Kingdom",
    address: "63-66 Hatton Garden, London, EC1N 8LE, United Kingdom.",
    image: ukOffice,
  },
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
.animate-fade-grid-in-3 {
  animation: grid-fade-in2 0.8s ease-out;
}

@keyframes grid-fade-in2 {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-grid-in-2 {
  animation: grid-fade-in 2s ease-out;
}

@keyframes grid-fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.6;
  }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out forwards;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
