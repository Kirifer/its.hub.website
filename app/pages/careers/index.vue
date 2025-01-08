<template>
  <div
    class="bg-[url('@/assets/images/bg-careers.png')] bg-cover bg-center w-full h-auto bg-no-repeat sm:bg-contain md:bg-cover"
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
      <div class="container px-4 pt-16">
        <div class="max-w-3xl mx-auto px-4 space-y-2 md:space-y-4 text-center">
          <h2
            class="mt-4 text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900"
          >
            {{ careers[0]?.section1_heading }}
          </h2>
          <p class="mt-4 text-lg md:text-xl text-gray-900">
            {{ careers[0]?.section1_subheading }}
          </p>
        </div>

        <!-- Job Cards Container -->
        <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          <div
            v-for="(card, index) in careers[0]?.section1_cards"
            :key="index"
            class="relative bg-white border border-[#844DDC] shadow-[0px_4px_12.1px_rgba(0,0,0,0.25)] rounded-[10px] p-6 sm:p-8 flex flex-col justify-between"
          >
            <!-- Available Badge -->
            <div class="">
              <span
                class="inline-flex items-center px-3 mb-6 rounded-full text-lg font-medium bg-[#D2A517] text-white"
              >
                Available
              </span>

              <!-- Job Title -->
              <h2 class="font-semibold text-2xl sm:text-3xl">
                {{ card.hero_heading }}
              </h2>

              <!-- Job Description -->
              <p
                class="text-gray-600 text-sm sm:text-base font-normal mb-6 md:text-lg leading-relaxed mt-2"
              >
                {{ card.hero_subheading }}
              </p>

              <button>
                <!-- Apply Button -->
                <NuxtLink
                  :to="`/careers/${card._id}`"
                  class="bg-[#844DDC] text-white font-medium px-7 py-2 rounded-md hover:bg-purple-300 transition-colors"
                >
                  Apply
                </NuxtLink>
              </button>
            </div>
          </div>
        </div>

        <!-- Chevron Navigation Buttons -->
        <div class="mt-8 flex justify-center w-full max-w-[1100px]">
          <button
            v-if="currentPage > 1"
            @click="navigate(-1)"
            class="px-2 py-2 bg-transparent border-purple-500 border-2 rounded-full hover:bg-gray-300 transition mx-2"
          >
            <svg
              class="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
          <button
            v-if="currentPage < totalPages"
            @click="navigate(1)"
            class="px-2 py-2 bg-transparent border-purple-500 border-2 rounded-full hover:bg-gray-300 transition mx-2"
          >
            <svg
              class="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
        <div class="justify-center text-center space-y-8 mt-16 mb-16">
          <h2
            class="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900"
          >
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
import { ref, computed } from "vue";
import sanityClient from "@/hooks/sanityClient";
import { urlFor } from "@/hooks/sanityImageUrl";
import type { Careers } from "~/types/careers";

const careers = ref<Careers[]>([]);
console.log(careers);

onMounted(async () => {
  try {
    careers.value = await sanityClient.fetch<Careers[]>(
      '*[_type == "careers"]{..., "section1_cards" : section1_cards[]->}'
    );
    if (careers.value.length > 0) {
    }
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
  }
});

const currentPage = ref(1);
const itemsPerPage = ref(4);

const totalPages = computed((): number => {
  return Math.ceil(careers.value.length / itemsPerPage.value);
});

const visibleJobs = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return careers.value.slice(start, end);
});

function navigate(direction: number) {
  currentPage.value += direction;
}
</script>

<style scoped></style>
