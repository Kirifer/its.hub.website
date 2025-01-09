<template>
  <div
    class="inset-0 w-full bg-white bg-[linear-gradient(to_right,#80808012_3px,transparent_1px),linear-gradient(to_bottom,#80808012_3px,transparent_1px)] bg-[size:100px_100px]"
  >
  
    <!-- Main Content -->
    <div
      class="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12"
    >
      <div class="max-w-2xl mx-auto px-4 space-y-2 md:space-y-4">
        <h1
          class="text-3xl sm:text-6xl text-center md:text-6xl font-bold text-gray-900"
        >
          {{ careers[0]?.hero_heading }}
        </h1>
        <p
          class="text-lg md:text-xl text-gray-900 text-center w-full md:w-[500px]"
        >
          {{ careers[0]?.hero_subheading }}
        </p>
      </div>

      <div
        class="mt-8 p-3 rounded-2xl bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 max-w-4xl w-full"
      >
        <div class="rounded-xl overflow-hidden">
          <img
            src="~/assets/images/its-hiring.jpg"
            alt="Two people in a business meeting"
            class="w-full h-[200px] sm:h-[300px] md:h-[450px] object-cover"
          />
        </div>
      </div>

      <ShimmerButton
        class="mt-7 px-6 sm:px-9 py-2.5 text-sm sm:text-base font-medium text-[#844DDC] bg-[rgba(132,77,220,0.19)] rounded-full hover:bg-[rgba(132,77,220,0.5)] transition-colors shadow-2xl"
        shimmer-size="2px"
      >
        <span
          class="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg dark:from-white dark:to-slate-900/10"
        >
          {{ careers[0]?.hero_button }}
        </span>
      </ShimmerButton>

      <!-- Explore Our Job Openings -->
      <div class="container px-4 pt-12">
        <div class="p-4 ">
    <div class="max-w-7xl mx-auto px-4 space-y-2 md:space-y-4 text-center">
      <h2 class="mt-4 text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900">
        {{ careers[0]?.section1_heading }}
      </h2>
      <p class="mt-4 text-lg md:text-xl text-gray-700">
        {{ careers[0]?.section1_subheading }}
      </p>
    </div>

    <!-- Job Cards Container -->
    <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      <div
        v-for="(card, index) in paginatedCards"
        :key="index"
        class="relative bg-white border border-purple-300 shadow-lg rounded-lg p-6 sm:p-8 flex flex-col justify-between h-full transition-all duration-300 hover:shadow-xl"
      >
        <!-- Available Badge -->
        <div>
          <span
            class="inline-flex items-center px-3 mb-6 rounded-full text-lg font-medium bg-[#D2A517] text-white"
          >
            Available
          </span>

          <!-- Job Title -->
          <h3 class="font-semibold text-2xl sm:text-3xl text-gray-900 mb-3">
            {{ card.hero_heading }}
          </h3>

          <!-- Job Description -->
          <p class="text-gray-600 text-sm sm:text-base font-normal mb-6 leading-relaxed">
            {{ card.hero_subheading }}
          </p>
        </div>

        <!-- Apply Button -->
        <div>
          <NuxtLink
            :to="`/careers/${card._id}`"
            class="bg-[#844DDC] border border-[#844DDC] text-white font-medium px-7 py-2 rounded-md hover:bg-violet-300 transition-colors"
          >
            Apply
            <!-- <ArrowRightIcon class="ml-2 -mr-1 h-5 w-5" /> -->
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div class="mt-12 flex justify-center">
      <button
        v-if="currentPage > 1"
        @click="navigate(-1)"
        class="mx-2 p-2 rounded-full border-2 border-purple-500 text-purple-500 hover:bg-purple-100 transition-colors"
        aria-label="Previous page"
      >
        <ChevronLeftIcon class="w-6 h-6" />
      </button>
      <button
        v-if="currentPage < totalPages"
        @click="navigate(1)"
        class="mx-2 p-2 rounded-full border-2 border-purple-500 text-purple-500 hover:bg-purple-100 transition-colors"
        aria-label="Next page"
      >
        <ChevronRightIcon class="w-6 h-6" />
      </button>
    </div>
  </div>
        <div class="justify-center text-center space-y-8 mt-16 mb-16">
          <h2 class="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            {{ careers[0]?.section2_heading }}
          </h2>

          <button
            class="bg-[#844DDC] border-white border text-white font-medium px-6 py-2 rounded-md hover:bg-violet-300 transition-colors"
          >
            {{ careers[0]?.section2_button }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import sanityClient from "@/hooks/sanityClient";
import { urlFor } from "@/hooks/sanityImageUrl";
import type { Careers } from "~/types/careers";
import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-vue-next";

const careers = ref<Careers[]>([]);
const currentPage = ref(1);
const itemsPerPage = 3;

const totalPages = computed(() => {
  return Math.ceil(careers.value[0]?.section1_cards.length / itemsPerPage);
});

const paginatedCards = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return careers.value[0]?.section1_cards.slice(start, end);
});

const navigate = (direction: number) => {
  if (direction === -1 && currentPage.value > 1) {
    currentPage.value--;
  } else if (direction === 1 && currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

onMounted(async () => {
  try {
    careers.value = await sanityClient.fetch<Careers[]>(
      '*[_type == "careers"]{..., "section1_cards" : section1_cards[]->}'
    );
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
  }
});
</script>

<style scoped></style>
