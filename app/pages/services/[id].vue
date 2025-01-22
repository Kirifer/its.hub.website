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
      class="bg-cover bg-center w-full h-[580px] animate-fade-grid-in-3 to-[#2a2a2a] flex flex-col items-center text-center px-4 pt-10 relative"
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
      v-for="(section, sectionIndex) in servicesData?.body" 
      :key="sectionIndex"
      class="flex flex-col gap-8"
    >
      <!-- Upper container with section title and image -->
      <div 
        v-if="section.list.some(item => item.image_1)" 
        class="flex flex-col md:flex-row items-center gap-12"
      >
        <div class="md:w-1/2 space-y-4">
          <h3 class="text-2xl sm:text-3xl font-bold text-center text-gray-900">
            {{ section.title }}
          </h3>
        </div>
        <div class="md:w-1/2 space-y-4">
          
          <div 
            v-if="section.list.length > 0"
            class="relative bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 p-1 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            style="width: 100%; height: 200px;"
          >
            <div class="w-[475px] h-full md:w-full bg-purple-100 flex items-center text-center rounded-xl justify-center relative">
              <template v-if="section.list[currentImageIndexes[sectionIndex]] && section.list[currentImageIndexes[sectionIndex]].image_1">
                <img 
                  :src="urlFor(section.list[currentImageIndexes[sectionIndex]].image_1.asset._ref)" 
                  alt="Item Image" 
                  class="object-cover w-full h-full md:w-full md:h-full rounded-xl"
                />
                <div class="absolute inset-0 bg-black rounded-xl bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <span class="text-white text-lg font-bold">{{ section.list[currentImageIndexes[sectionIndex]].title }}</span>
                  <button @click="nextImage(sectionIndex, section.list)" class="absolute rounded-xl w-full h-full bg-black text-white text-2xl z-10 opacity-0 flex items-center justify-center">
                  <ArrowRightIcon class="w-6 h-6" />
                </button>

                </div>

              </template>
            </div>
          </div>

        </div>
      </div>

      <!-- Lower container with item descriptions -->
      <div class="flex flex-col md:flex-row gap-12">
        <div class="md:w-1/2 space-y-4">
          <ul class="space-y-4 text-gray-900 text-lg sm:text-xl">
            <li v-for="(item, itemIndex) in section.list.slice(0, Math.ceil(section.list.length / 2))" :key="itemIndex">
              <strong>{{ item.title }}</strong>
              <p v-for="(desc, descIndex) in item.description" :key="descIndex">{{ desc }}</p>
            </li>
          </ul>
        </div>
        <div class="md:w-1/2 space-y-4">
          <ul class="space-y-4 text-gray-900 text-lg sm:text-xl">
            <li v-for="(item, itemIndex) in section.list.slice(Math.ceil(section.list.length / 2))" :key="itemIndex">
              <strong>{{ item.title }}</strong>
              <p v-for="(desc, descIndex) in item.description" :key="descIndex">{{ desc }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
          
          <div class="mt-10 space-y-4">
            <h2
              class="text-3xl sm:text-4xl font-bold text-gray-900"
              v-if="servicesData?.collaboration_title"
            >
              {{ servicesData.collaboration_title }}
            </h2>
            <p
              class="text-lg sm:text-xl"
              v-if="servicesData?.collaboration_description"
            >
              {{ servicesData.collaboration_description }}
            </p>
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
                class="text-3xl sm:text-4xl font-bold text-gray-900"
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
import { ArrowRightIcon } from "@heroicons/vue/24/outline";

const contact = ref<Contact[]>([]);
const servicesData = ref<ServicesData | null>(null);
const servicesImage = ref("");
const currentImageIndexes = ref<number[]>([]);

const nextImage = (sectionIndex: number, list: { image_1: any }[]) => {
  do {
    currentImageIndexes.value[sectionIndex] = (currentImageIndexes.value[sectionIndex] + 1) % list.length;
  } while (!list[currentImageIndexes.value[sectionIndex]].image_1);
};

const route = useRoute();
const id = route.params.id as string;

onMounted(async () => {
  try {
    const contactData = await sanityClient.fetch<Contact[]>(`*[_type == "contact"]`);
    contact.value = contactData;

    const servicesQuery = `*[_type == "servicesData" && id == $id][0]`;
    const services = await sanityClient.fetch<ServicesData>(servicesQuery, { id });

    if (services) {
      servicesData.value = services;
      currentImageIndexes.value = services.body.map(() => 0); // Initialize image indexes for each section
      if (services.icon) {
        servicesImage.value = urlFor(services.icon);
      }
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

const currentImageIndex = ref(0);

// Removed duplicate nextImage function

const props = defineProps({
  servicesData: {
    type: Object,
    required: true,
  },
});

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
