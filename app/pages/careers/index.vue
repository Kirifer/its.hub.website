<template>
  <div
    class="bg-[url('@/assets/images/bg-careers.png')] bg-cover bg-center w-full h-auto bg-no-repeat sm:bg-contain md:bg-cover"
  >
    <!-- Main Content -->
    <div
      class="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12"
    >
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
        {{ careers[0]?.hero_heading }}
      </h1>
      <p class="mt-4 text-base sm:text-lg text-gray-600 text-center max-w-xl">
        {{ careers[0]?.hero_subheading }}
      </p>

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

      <button
        class="mt-7 px-6 sm:px-9 py-2.5 text-sm sm:text-base font-medium text-[#844DDC] bg-[rgba(132,77,220,0.19)] rounded-full hover:bg-[rgba(132,77,220,0.5)] transition-colors"
      >
        {{ careers[0]?.hero_button }}
      </button>
      <!--  -->
      <div class="container px-4">
        <h2
          class="mt-16 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center"
        >
          {{ careers[0]?.section1_heading }}
        </h2>
        <p
          class="mt-4 text-base sm:text-lg text-gray-600 text-center max-w-xl mx-auto"
        >
          {{ careers[0]?.section1_subheading }}
        </p>

        <!-- Job Cards Container -->
        <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          <div
            v-for="(card, index) in careers[0]?.section1_cards"
            :key="index"
            class="relative bg-white border border-[#844DDC] shadow-[0px_4px_12.1px_rgba(0,0,0,0.25)] rounded-[10px] p-6 sm:p-8 flex flex-col justify-between"
          >
            <!-- Available Badge -->
            <div class="bg-[#D2A517] rounded-[15px] px-4 py-1 w-fit mb-4">
              <span
                class="text-white text-sm sm:text-base font-normal leading-[22px] tracking-[-0.03em]"
              >
                Available
              </span>
            </div>

            <!-- Job Title -->
            <h2
              class="font-['lato'] font-normal text-xl sm:text-2xl md:text-3xl text-black mb-4"
            >
              {{ card.hero_heading }}
            </h2>

            <!-- Job Description -->
            <p
              class="font-['lato'] font-normal text-sm sm:text-base text-[#565656] mb-6"
            >
              {{ card.hero_subheading }}
            </p>

            <button>
              <!-- Apply Button -->
              <NuxtLink
                :to="`/careers/${card._id}`"
                class="w-full sm:w-[109px] h-[32px] bg-[#844DDC] rounded-[6px] text-white text-sm sm:text-base leading-[18px] tracking-[-0.03em] flex items-center justify-center"
              >
                Apply
              </NuxtLink>
            </button>
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
        <div class="justify-center text-center">
          <h2
            class="mt-16 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center"
          >
            {{ careers[0]?.section2_heading }}
          </h2>

          <button
            class="mt-10 mb-10 px-6 sm:px-8 py-2.5 text-sm text-center justify-center font-medium text-white bg-[#844DDC] rounded-full hover:bg-[rgba(132,77,220,0.5)] transition-colors z-10 mx-auto"
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
