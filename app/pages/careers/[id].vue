<template>
  <div class="min-h-screen">
    <!-- Main container with background -->
    <div
      class="inset-0 w-full bg-white bg-[linear-gradient(to_right,#80808012_3px,transparent_1px),linear-gradient(to_bottom,#80808012_3px,transparent_1px)] bg-[size:100px_100px] md:bg-[size:50px_50px] relative animate-fade-grid-in-2"
    >
      <!-- Back to Careers Button -->
      <div class="max-w-7xl mx-auto px-10 pt-10">
        <button
          class="flex items-center text-[#844DDC] hover:text-purple-700 transition-colors md:hidden"
          @click="goBackToCareers"
        >
          <!-- Chevron icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Careers
        </button>
      </div>
      <div class="max-w-7xl mx-auto px-10 py-16">
        <!-- Hero Section -->
        <div
          class="relative flex flex-col md:flex-row justify-between items-center md:items-start space-y-16 md:space-y-0"
        >
          <!-- Left Section: Title, Tag, Description -->
          <div
            class="space-y-8 text-center md:text-left mx-auto md:mx-0 flex-1"
          >
            <!-- Tag Button -->
            <div class="inline-block">
              <ShimmerButton
                class="mt-7 px-6 sm:px-9 py-2.5 text-sm sm:text-base font-medium text-white bg-[#844DDC] bg-opacity-10 rounded-full hover:bg-opacity-50 transition-colors shadow-2xl"
                shimmer-size="2px"
              >
                <span class="text-white text-[16px] sm:text-[20px] font-normal">
                  {{ jobs?.hero_badge }}
                </span>
              </ShimmerButton>
            </div>

            <!-- Title -->
            <h1
              class="text-[40px] sm:text-[50px] md:text-[65px] font-medium text-black uppercase"
            >
              {{ jobs?.hero_heading }}
            </h1>

            <!-- Description -->
            <p
              class="text-[20px] sm:text-[25px] text-gray-600 max-w-[728px] leading-[30px] mx-auto md:mx-0"
            >
              {{ jobs?.hero_subheading }}
            </p>
          </div>

          <!-- Right Section: Gradient Image Container -->
          <div
            class="relative w-full max-w-[355px] mx-auto min-h-[334px] py-3 mt-4 md:mt-0"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-[#00B8D4] to-[#844DDC] rounded-[20px] overflow-hidden shadow-lg"
            >
              <img
                v-if="jobs?.hero_image"
                :src="urlFor(jobs?.hero_image)"
                alt="Finance illustration"
                class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:left-auto md:right-4 md:top-4 md:translate-y-0 md:translate-x-0 rounded-[15px] w-[calc(100%-32px)] md:w-[320px] h-[301px] object-cover"
              />
            </div>
          </div>
        </div>
        <!-- Job Description Section -->
        <div class="mt-3 sm:mt-4 p-0">
          <h2
            class="text-[35px] sm:text-[50px] font-medium text-black mb-2 text-center md:text-left"
          >
            {{ jobs?.section1_heading }}
          </h2>
          <div
            class="text-[18px] sm:text-[25px] text-gray-600 space-y-4 max-w-[728px] mx-auto md:mx-0"
          >
            <ul class="space-y-4 list-disc list-inside">
              <li
                v-for="(description, index) in jobs?.job_descriptions"
                :key="index"
              >
                {{ description }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Recent Positions Section -->
        <div class="mt-12">
          <div
            class="flex flex-col md:flex-row justify-between items-center mb-8"
          >
            <h2
              class="text-[35px] sm:text-[50px] font-medium text-center md:text-left"
            >
              Recent Positions
            </h2>
            <button
              class="px-6 py-3 bg-[#844DDC] text-white rounded-md text-sm hover:bg-purple-700 transition-colors mt-4 md:mt-0"
            >
              More positions
            </button>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Data Analyst Card -->
            <div
              class="border border-[#844DDC] rounded-[10px] p-8 bg-white shadow-md relative"
            >
              <div
                class="bg-[#D2A517] text-white px-4 py-1 rounded-[15px] inline-block text-[16px] sm:text-[18px]"
              >
                Available
              </div>
              <h3 class="text-[25px] sm:text-[30px] mt-4 mb-2">Data Analyst</h3>
              <p
                class="text-gray-600 text-[14px] sm:text-[15px] leading-[18px]"
              >
                Collects, processes, and analyzes data to generate actionable
                insights, supporting business decision-making and performance
                improvements.
              </p>
              <br />
              <button
                class="absolute bottom-4 right-5 bg-[#844DDC] text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors mt-4"
              >
                Apply
              </button>
            </div>

            <!-- SQL Developer Card -->
            <div
              class="border border-[#844DDC] rounded-[10px] p-8 bg-white shadow-md relative"
            >
              <div
                class="bg-[#D2A517] text-white px-4 py-1 rounded-[15px] inline-block text-[16px] sm:text-[18px]"
              >
                Available
              </div>
              <h3 class="text-[25px] sm:text-[30px] mt-4 mb-2">
                SQL Developer or Admin
              </h3>
              <p
                class="text-gray-600 text-[14px] sm:text-[15px] leading-[18px]"
              >
                Designs, maintains, and optimizes databases using SQL. Ensures
                data integrity, performance tuning, and database security.
              </p>
              <br />
              <button
                class="absolute bottom-4 right-5 bg-[#844DDC] text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors mt-4"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import sanityClient from "~/hooks/sanityClient";
import type { Jobs } from "~/types/jobs";
import { urlFor } from "@/hooks/sanityImageUrl";

const jobs = ref<Jobs>();
console.log(jobs);
const router = useRouter();

onMounted(async () => {
  const router = useRouter();
  const { id } = router.currentRoute.value.params;
  jobs.value = await sanityClient.fetch<Jobs>(
    `*[_type == "jobs" && _id == "${id}"][0]`
  );
});

const goBackToCareers = () => {
  router.push("/careers");
};
</script>
