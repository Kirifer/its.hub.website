<template>
  <div
    class="animate-fade-grid-in-2 inset-0 overflow-x-hidden overflow-y-hidden w-full bg-white bg-[linear-gradient(to_right,#80808012_3px,transparent_1px),linear-gradient(to_bottom,#80808012_3px,transparent_1px)] bg-[size:100px_100px]"
  >
    <!-- Hero Section -->
    <div
      :style="{
        backgroundImage: servicesData?.image
          ? `url(${urlFor(servicesData.image)})`
          : '',
      }"
      class="bg-cover bg-center w-full h-[580px] animate-fade-grid-in-3 to-[#2a2a2a] flex flex-col items-center text-center px-4 pt-16 relative"
    >
      <div
        v-if="servicesData"
        class="flex flex-col items-center justify-center"
      >
        <!-- Title -->
        <h1
        class="w-full animate-fade-in max-w-[940px] pb-4 font-medium text-[28px] sm:mb-6 sm:text-4xl md:text-6xl leading-[36px] sm:leading-[48px] lg:leading-[55px] text-white text-center z-10 truncate"
        >
          {{ servicesData?.title }} 
        </h1>

        <!-- Description -->
        <p
          class="w-full text-sm  animate-fade-in  sm:text-base md:text-xl text-gray-600 text-white max-w-2xl mb-6 text-center z-10"
        >
          {{ servicesData?.subtitle }}
        </p>
        <div
          class="absolute inset-0 bg-black opacity-80 z-5 animate-fade-grid-in-2"
        ></div>
        <!-- Featured Image -->
        <div
          v-if="servicesData?.image"
          class="relative w-full  animate-fade-in  max-w-[648px] mx-auto mt-4 mb-8 sm:mt-4 sm:mb-12"
        >
          <div
            class="relative z-10 p-3 rounded-2xl bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400"
          >
            <div class="relative w-full pt-[62.3%] rounded-xl overflow-hidden">
              <img
                :src="urlFor(servicesData.image)"
                alt="Philippine Outsourcing"
                class="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        
      </div>

      
    </div>

    <!-- Content Section -->
    <div
      class="w-full max-w-[1145px]  animate-fade-in   mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 md:mt-16 text-black sm:mt-16"
    >
      <article class="space-y-6 md:space-y-8">
        <div class="max-w-full mx-auto">
          <!-- Intro Section -->
          <div class="space-y-6 mt-8">
            <h2
              class="text-3xl sm:text-4xl font-bold text-gray-900"
              v-if="servicesData?.introduction_title"
            >
              {{ servicesData.introduction_title }}
            </h2>
            <p
              class="text-lg sm:text-xl"
              v-if="servicesData?.introduction_description"
            >
              {{ servicesData.introduction_description }}
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <!-- Featured Image -->
            <!-- <div 
          v-if="servicesData?.image" 
          class="relative rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
        >
          <img 
            :src="urlFor(servicesData.image)" 
            alt="Featured Service" 
            class="w-full h-full object-cover"
          />
        </div> -->
          </div>

          <!-- Service Sections -->
          <div class="mt-10 space-y-10">
            <div
              v-for="(section, index) in servicesData?.body"
              :key="index"
              class="flex flex-col md:flex-row items-center gap-12"
            >
              <div class="md:w-1/2 space-y-4">
                <h3 class="text-2xl sm:text-3xl font-bold text-gray-900">
                  {{ section.title }}
                </h3>
                <p class="text-lg sm:text-xl">
                  {{ section.description }}
                </p>
                <ul
                  class="list-disc list-inside space-y-4 text-gray-900 text-lg sm:text-xl"
                >
                  <li
                    v-for="(item, itemIndex) in section.list"
                    :key="itemIndex"
                  >
                    <strong>{{ item.title }}</strong>
                    <ul class="space-y-4">
                      <li
                        v-for="(desc, descIndex) in item.description"
                        :key="descIndex"
                      >
                        <p>{{ desc }}</p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="md:w-1/2">
                <div
                  class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
                >
                  <!-- You can add an icon or image here related to the section -->
                  <div
                    class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4"
                  >
                    <svg
                      class="w-8 h-8 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Section -->
        <div
          class="w-full max-w-full mx-auto px-0 sm:px-0 lg:px-0 py-12 sm:py-0 mt-0"
        >
          <!-- Header Section -->
          <div
            class="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-12"
          >
            <div class="flex flex-col space-y-5 flex-1">
              <h1
                v-if="contact.length > 0"
                class="font-medium text-[28px] sm:text-[40px] lg:text-[50px] leading-[36px] sm:leading-[48px] lg:leading-[55px] text-center md:text-left"
              >
                {{ contact[0]?.hero_title }}
              </h1>
              <p v-if="contact.length > 0" class="text-base sm:text-xl">
                {{ contact[0]?.hero_subtitle }}
              </p>
            </div>

            <!-- Button -->
            <router-link to="/contact" class="flex-shrink-0">
              <button
                class="bg-purple-300 border-gray border font-medium px-6 py-2 rounded-md hover:bg-white hover:text-purple-800 transition-colors"
              >
                Contact Us
              </button>
            </router-link>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router"; // Changed from useRouter
import sanityClient from "@/hooks/sanityClient";
import { urlFor } from "@/hooks/sanityImageUrl";
import type { Contact } from "@/types/contact";
import type { ServicesData } from "@/types/servicesData";

const contact = ref<Contact[]>([]);
const servicesData = ref<ServicesData | null>(null);
const servicesImage = ref("");
console.log(servicesImage);

onMounted(async () => {
  const route = useRoute();
  const id = route.params.id as string;

  try {
    const contactData = await sanityClient.fetch<Contact[]>(
      `*[_type == "contact"]`
    );
    contact.value = contactData;

    const servicesQuery = `*[_type == "servicesData" && id == $id][0]`;
    const services = await sanityClient.fetch<ServicesData>(servicesQuery, {
      id,
    });

    if (services) {
      servicesData.value = services;
      // Make sure image exists before trying to generate URL
      if (services.icon) {
        servicesImage.value = urlFor(services.icon);
      }
      console.log("Services data loaded:", services);
    } else {
      console.warn("No services data found for id:", id);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

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
    opacity: 1;
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
