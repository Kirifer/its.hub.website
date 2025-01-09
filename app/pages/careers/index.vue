<template>
  <div
    class="inset-0 overflow-x-hidden w-full bg-white bg-[linear-gradient(to_right,#80808012_3px,transparent_1px),linear-gradient(to_bottom,#80808012_3px,transparent_1px)] bg-[size:100px_100px]"
  >
    <!-- Main Content -->
    <div
      class="z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12"
    >
      <div class="relative">
        <div class="overflow-hidden h-full z-0">
          <div
            class="absolute inset-0 h-[500px] flex items-center justify-center"
          >
            <!-- Ellipse 1 -->
            <div class="absolute -top-[225px]">
              <div
                class="w-[950px] h-[950px] rounded-full border-2 border-[rgba(163,162,162,0.005)] shadow-[0px_4px_116.8px_5px_rgba(0,0,0,0.1)] animate-ellipse-scale-1"
              ></div>
            </div>

            <!-- Ellipse 3 -->
            <div class="absolute left-1/2 -translate-x-1/2 -translate-y-[0px]">
              <div
                class="w-[750px] h-[750px] rounded-full border-2 border-[rgba(163,162,162,0.01)] shadow-[0px_4px_116.8px_5px_rgba(0,0,0,0.13)] animate-ellipse-scale-2"
              ></div>
            </div>

            <!-- Ellipse 5 -->
            <div class="absolute left-1/2 -translate-x-1/2 -translate-y-[0px]">
              <div
                class="w-[550px] h-[550px] rounded-full border-2 border-[rgba(163,162,162,0.005)] shadow-[0px_4px_116.8px_5px_rgba(0,0,0,0.13)] animate-ellipse-scale-3"
              ></div>
            </div>
          </div>
        </div>
        <div
          class="relative z-10 max-w-2xl mx-auto px-4 space-y-2 md:space-y-4 text-center"
        >
          <h1 class="text-3xl sm:text-6xl md:text-6xl font-bold text-gray-900">
            {{ careers[0]?.hero_heading }}
          </h1>
          <p
            class="text-lg md:text-xl text-gray-900 w-full md:w-[500px] mx-auto"
          >
            {{ careers[0]?.hero_subheading }}
          </p>
        </div>
        <div class="relative z-10 flex justify-center mt-7">
          <ShimmerButton
            class="px-6 sm:px-9 py-2.5 text-sm sm:text-base font-medium text-[#844DDC] bg-[rgba(132,77,220,0.19)] rounded-full hover:bg-[rgba(132,77,220,0.5)] transition-colors shadow-2xl"
            shimmer-size="2px"
          >
            <span
              class="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg dark:from-white dark:to-slate-900/10"
            >
              {{ careers[0]?.hero_button }}
            </span>
          </ShimmerButton>
        </div>
        <div
          class="relative z-10 mt-8 p-3 rounded-2xl bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 max-w-4xl w-full mx-auto"
        >
          <div class="rounded-xl overflow-hidden">
            <img
              src="~/assets/images/its-hiring.jpg"
              alt="Two people in a business meeting"
              class="w-full h-[200px] sm:h-[300px] md:h-[450px] object-cover"
            />
          </div>
        </div>
        <!-- Cyan gradient Right-->
        <div
          class="absolute  w-[682px] h-[686px] rounded-full right-[-250px] top-48 z-0"
          :style="{
            background:
              'radial-gradient(circle, rgba(142,212,246,0.6) 0%, rgba(142,212,246,0) 70%)',
            transform: 'rotate(-116.85deg)',
            filter: 'blur(50px)',
          }"
        />
        <!-- Violet gradient Right-->
        <div
          class="absolute w-[682px] h-[686px] rounded-full right-[-250px] top-8 z-0"
          :style="{
            background:
              'radial-gradient(circle, rgba(145,77,176,0.6) 0%, rgba(145,77,176,0) 50%)',
            transform: 'rotate(-116.85deg)',
            filter: 'blur(50px)',
          }"
        />
        <!-- Cyan gradient left-->
        <div
          class="absolute w-[682px] h-[686px] rounded-full left-[-300px] top-48 z-0"
          :style="{
            background:
              'radial-gradient(circle, rgba(142,212,246,0.6) 0%, rgba(142,212,246,0) 70%)',
            transform: 'rotate(-116.85deg)',
            filter: 'blur(50px)',
          }"
        />
        <!-- Violet gradient left-->
        <div
          class="absolute w-[682px] h-[686px] rounded-full left-[-250px] top-8 z-0"
          :style="{
            background:
              'radial-gradient(circle, rgba(145,77,176,0.6) 0%, rgba(145,77,176,0) 50%)',
            transform: 'rotate(-116.85deg)',
            filter: 'blur(50px)',
          }"
        />
      </div>

      <!-- Explore Our Job Openings -->
      <div class="container px-2 pt-12 z-10">
        <div class="sm:p-6 md:p-8 z-10">
          <div class="mx-auto space-y-4 sm:space-y-6 md:space-y-6">
            <h2
              class="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6"
            >
              {{ careers[0]?.section1_heading }}
            </h2>
            <div
              class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 md:space-x-6"
            >
              <p class="text-lg md:text-xl text-gray-700 max-w-2xl">
                {{ careers[0]?.section1_subheading }}
              </p>
              <div
                class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full md:w-auto"
              >
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Search jobs..."
                  class="px-4 py-2 border border-purple-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 w-full sm:w-auto"
                />
                <select
                  v-model="selectedFilter"
                  class="px-4 py-2 border border-purple-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 w-full sm:w-auto"
                >
                  <option value="">All Jobs</option>
                  <option value="fulltime">Full Time</option>
                  <option value="parttime">Part Time</option>
                  <option value="remote">Remote</option>
                </select>
              </div>
            </div>

            <!-- Job Cards Container -->
            <div
              class="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              <div
                v-for="(card, index) in paginatedFilteredAndSearchedCards"
                :key="index"
                class="relative bg-white border border-purple-300 shadow-lg rounded-lg p-6 flex flex-col justify-between h-full transition-all duration-300 hover:shadow-purple-500"
              >
                <!-- Available Badge -->
                <div class="space-y-4">
                  <span
                    class="inline-flex items-center px-5 py-1 rounded-full text-sm font-medium bg-[#044897] text-white"
                  >
                    Available
                  </span>

                  <!-- Job Title -->
                  <h3 class="font-semibold text-xl sm:text-2xl text-gray-900">
                    {{ card.hero_heading }}
                  </h3>

                  <!-- Job Description -->
                  <p
                    class="text-gray-600 text-sm sm:text-base font-normal leading-relaxed"
                  >
                    {{ card.hero_subheading }}
                  </p>
                </div>

                <!-- Apply Button -->
                <div class="mt-6">
                  <NuxtLink
                    :to="`/careers/${card._id}`"
                    class="inline-block bg-[#844DDC] border border-[#844DDC] text-white font-medium px-6 py-2 rounded-md hover:bg-violet-300 transition-colors"
                  >
                    Apply
                  </NuxtLink>
                </div>
              </div>
            </div>

            <!-- Pagination -->
            <div class="mt-8 sm:mt-12 flex justify-center">
              <button
                v-if="currentPage > 1"
                @click="navigate(-1)"
                class="mx-2 p-2 rounded-full border-2 border-purple-500 text-purple-500 hover:bg-purple-100 transition-colors"
                aria-label="Previous page"
              >
                <ChevronLeftIcon class="w-6 h-6" />
              </button>
              <button
                v-if="currentPage < totalFilteredPages"
                @click="navigate(1)"
                class="mx-2 p-2 rounded-full border-2 border-purple-500 text-purple-500 hover:bg-purple-100 transition-colors"
                aria-label="Next page"
              >
                <ChevronRightIcon class="w-6 h-6" />
              </button>
            </div>
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
const searchQuery = ref("");
const selectedFilter = ref("");

const filteredAndSearchedCards = computed(() => {
  if (!careers.value[0]?.section1_cards) return [];

  return careers.value[0].section1_cards.filter((card) => {
    const matchesSearch =
      card.hero_heading
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase()) ||
      card.hero_subheading
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase());
    const matchesFilter =
      selectedFilter.value === "" || card.jobType === selectedFilter.value;
    return matchesSearch && matchesFilter;
  });
});

const totalFilteredPages = computed(() =>
  Math.ceil(filteredAndSearchedCards.value.length / itemsPerPage)
);

const paginatedFilteredAndSearchedCards = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return filteredAndSearchedCards.value.slice(startIndex, endIndex);
});

const navigate = (direction: number) => {
  if (direction === -1 && currentPage.value > 1) {
    currentPage.value--;
  } else if (direction === 1 && currentPage.value < totalFilteredPages.value) {
    currentPage.value++;
  }
};

onMounted(async () => {
  try {
    careers.value = await sanityClient.fetch<Careers[]>(
      '*[_type == "careers"]{..., "section1_cards": section1_cards[]->}'
    );
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
  }
});
</script>

<style scoped></style>
