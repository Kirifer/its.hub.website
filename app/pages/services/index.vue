<template>
  <div
    class="inset-0 w-full bg-white bg-[linear-gradient(to_right,#80808012_3px,transparent_1px),linear-gradient(to_bottom,#80808012_3px,transparent_1px)] bg-[size:100px_100px] animate-fade-grid-in-2"
  >
    <!-- Main Content -->
    <div
      class="relative z-10 flex flex-col items-center animate-fade-in justify-center min-h-screen px-4 py-12"
    >
      <div class="mt-2">
        <span
          class="inline-flex items-center px-3 py-0.5 rounded-full text-lg font-medium bg-blue-200 text-blue-800"
          >{{ services[0]?.hero_title }}</span
        >
      </div>

      <div class="p-6 sm:p-8 flex flex-col items-center justify-center">
        <h1 class="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900">
          {{ services[0]?.hero_title }}
        </h1>
        <p
          class="mt-4 text-sm sm:text-base md:text-lg text-gray-600 text-center max-w-xl"
        >
          {{ services[0]?.hero_subtitle }}
        </p>
      </div>
      <!-- Gradients (unchanged) -->
      <div
        class="absolute w-[40vw] h-[40vw] rounded-full left-[-15vw] top-[5vh] z-0"
        :style="{
          background:
            'radial-gradient(circle, rgba(145,77,176,0.3) 0%, rgba(145,77,176,0) 70%)',
          transform: 'rotate(-116.85deg)',
          filter: 'blur(50px)',
        }"
      />
      <div
        class="absolute w-[40vw] h-[40vw] rounded-full left-[-15vw] top-[25vh] z-0"
        :style="{
          background:
            'radial-gradient(circle, rgba(142,212,246,0.3) 0%, rgba(142,212,246,0) 70%)',
          transform: 'rotate(-116.85deg)',
          filter: 'blur(50px)',
        }"
      />

      <div
        class="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-6xl px-4"
      >
        <div
          v-for="(service, index) in paginatedServices"
          :key="index"
          class="relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-auto"
        >
          <div class="w-full h-25 sm:h-30 md:h-48">
            <img
              :src="urlFor(service.image)"
              :alt="service.heading"
              class="w-full h-full object-cover"
            />
          </div>
          <!-- Title and Read More Link -->
          <div class="p-4">
            <h2
              class="text-md sm:text-xl font-semibold text-gray-900 leading-snug"
            >
              {{ service.heading }}
            </h2>
            <!-- Read More Link with Chevron (After Heading) -->
            <NuxtLink
              :to="`/services/${service.id}`"
              class="mt-2 inline-flex items-center text-[#606DF1] hover:text-[#4F5CD8] transition-colors"
            >
              <span
                class="text-sm text-end sm:text-base absolute bottom-4 right-4"
                >Read More</span
              >
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Pagination Buttons -->
      <div class="flex justify-center mt-8">
        <button
          v-if="currentPage > 1"
          @click="navigate(-1)"
          class="px-4 p-2 rounded-full border-2 border-purple-500 text-purple-500 hover:bg-purple-100 transition-colors"
          aria-label="Previous page"
        >
          <ChevronLeftIcon class="w-6 h-6" />
        </button>
        <button
          v-if="currentPage < totalPages"
          @click="navigate(1)"
          class="px-4 p-2 rounded-full border-2 border-purple-500 text-purple-500 hover:bg-purple-100 transition-colors"
          aria-label="Next page"
        >
          <ChevronRightIcon class="w-6 h-6" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import sanityClient from "@/hooks/sanityClient";
import { urlFor } from "@/hooks/sanityImageUrl";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-vue-next";
import type { Services } from "~/types/service";

const services = ref<Services[]>([]);
const currentPage = ref(1);
const itemsPerPage = 8;

onMounted(async () => {
  const query = `*[_type == "services"]  {
 ..., 
 section1_cards[]->

  }`;
  services.value = await sanityClient.fetch<Services[]>(query);
});

const paginatedServices = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return services.value[0]?.section1_cards.slice(start, end) || [];
});

const totalPages = computed(() => {
  return Math.ceil((services.value[0]?.section1_cards.length || 0) / itemsPerPage);
});

const navigate = (direction: number) => {
  currentPage.value += direction;
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
  animation: fade-in 0.6s ease-out forwards;
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