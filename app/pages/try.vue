<template>
    <div class="container mx-auto max-w-full md:max-w-[1185px] pt-4 px-4 md:px-0">
    <div class="flex flex-col md:flex-row items-center justify-center">
      <div class="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
        <div
          class="inline-block px-4 py-1 bg-blue-200 text-blue-800 rounded-full text-base sm:text-lg font-semibold mb-4 transition-opacity duration-500"
          :class="{ 'opacity-0': !isVisible.connecting, 'opacity-100': isVisible.connecting }"
          ref="connectingRef"
        >
          <span>Connecting</span>
        </div>
        <div class="space-y-2 md:space-y-4">
          <h1 class="text-3xl md:text-6xl font-bold w-full md:w-[500px] transition-opacity duration-500" :class="{ 'opacity-0': !isVisible.title, 'opacity-100': isVisible.title }" ref="titleRef">
            {{ contact[0]?.section2_title }}
          </h1>
        </div>
        <div class="space-y-2 md:space-y-10 mt-5 max-w-lg">
          <p class="text-lg md:text-2xl text-gray-500 mb-5 transition-opacity duration-500" :class="{ 'opacity-0': !isVisible.subtitle, 'opacity-100': isVisible.subtitle }" ref="subtitleRef">
            {{ contact[0]?.section2_subtitle }}
          </p>
          <div class="flex items-center justify-center">
            <div
              class="relative w-full h-[250px] md:h-[250px] bg-gradient-to-br from-[#00b8d4] to-[#844ddc] rounded-2xl p-2 border border-[#844DDC] md:w-[350px] hidden md:block transition-opacity duration-500"
              :class="{ 'opacity-0': !isVisible.image1, 'opacity-100': isVisible.image1 }"
              ref="image1Ref"
            >
              <img
                v-if="contact[0]?.section2_image1"
                :src="urlFor(contact[0]?.section2_image1)"
                alt="Section 2 Image 3"
                class="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
          <div class="flex justify-end">
            <div
              class="relative w-full h-[250px] md:h-[300px] bg-gradient-to-br from-[#00b8d4] to-[#844ddc] rounded-2xl p-2 border border-[#844DDC] md:w-[400px] hidden md:block transition-opacity duration-500"
              :class="{ 'opacity-0': !isVisible.image2, 'opacity-100': isVisible.image2 }"
              ref="image2Ref"
            >
              <img
                v-if="contact[0]?.section2_image2"
                :src="urlFor(contact[0]?.section2_image2)"
                alt="Section 2 Image 3"
                class="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
          <div
            class="relative w-full h-[250px] md:h-[400px] bg-gradient-to-br from-[#00b8d4] to-[#844ddc] rounded-2xl p-2 border border-[#844DDC] md:w-[450px] hidden md:block transition-opacity duration-500"
            :class="{ 'opacity-0': !isVisible.image3, 'opacity-100': isVisible.image3 }"
            ref="image3Ref"
          >
            <img
              v-if="contact[0]?.section2_image3"
              :src="urlFor(contact[0]?.section2_image3)"
              alt="Section 2 Image 3"
              class="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
       <!-- Steps Section -->
    <div class="w-full md:w-1/2 space-y-10">
      <template v-for="(step, index) in contact[0]?.section2_steps" :key="index">
        <div
          :ref="(el) => { if (el) stepsRefs[index] = el as HTMLElement }"
          :class="['space-y-5 transition-all duration-500 transform', 
            stepsVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          ]"
        >
          <h1 class="text-blue-900 text-4xl md:text-6xl font-bold">
            0{{ step.step_no }}.
          </h1>
          <h1 class="text-xl md:text-3xl font-semibold pb-5 border-b border-blue-900">
            {{ step.step_title }}
          </h1>
          <p class="text-lg md:text-2xl text-gray-500">
            {{ step.step_subtitle }}
          </p>
        </div>
      </template>
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "vue-chartjs";
import sanityClient from "~/hooks/sanityClient";
import type { Contact } from "~/types/contact";
import { urlFor } from "@/hooks/sanityImageUrl";

const contact = ref<Contact[]>([]);
const stepsRefs = ref<(HTMLElement | null)[]>([]);
const stepsVisible = ref<boolean[]>([]);

// Previous refs remain the same
const connectingRef = ref<HTMLElement | null>(null);
const titleRef = ref<HTMLElement | null>(null);
const subtitleRef = ref<HTMLElement | null>(null);
const image1Ref = ref<HTMLElement | null>(null);
const image2Ref = ref<HTMLElement | null>(null);
const image3Ref = ref<HTMLElement | null>(null);

// Visibility states
const isVisible = ref<Record<string, boolean>>({
  connecting: false,
  title: false,
  subtitle: false,
  image1: false,
  image2: false,
  image3: false,
});

// Create observer for regular elements
const createObserver = (element: HTMLElement, key: string, delay: number = 0) => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          isVisible.value[key] = true;
        }, delay);
        observer.unobserve(entry.target);
      }
    },
    {
      threshold: 0.1,
    }
  );
  observer.observe(element);
};

// Create observer for steps
const createStepObserver = (element: HTMLElement, index: number, delay: number = 0) => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          stepsVisible.value[index] = true;
        }, delay);
        observer.unobserve(entry.target);
      }
    },
    {
      threshold: 0.1,
    }
  );
  observer.observe(element);
};

onMounted(async () => {
  try {
    contact.value = await sanityClient.fetch<Contact[]>(
      '*[_type == "contact"]'
    );
    if (contact.value.length > 0) {
      console.log("Contact data fetched successfully:", contact.value);
      
      // Initialize steps visibility array
      const stepsCount = contact.value[0]?.section2_steps?.length || 0;
      stepsVisible.value = new Array(stepsCount).fill(false);
      stepsRefs.value = new Array(stepsCount).fill(null);
    }
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
  }

  // Initialize observers with delays for main sections
  if (connectingRef.value) createObserver(connectingRef.value, 'connecting', 0);
  if (titleRef.value) createObserver(titleRef.value, 'title', 200);
  if (subtitleRef.value) createObserver(subtitleRef.value, 'subtitle', 400);
  if (image1Ref.value) createObserver(image1Ref.value, 'image1', 600);
  if (image2Ref.value) createObserver(image2Ref.value, 'image2', 800);
  if (image3Ref.value) createObserver(image3Ref.value, 'image3', 1000);

  // Initialize observers for steps with a slight delay
  setTimeout(() => {
    stepsRefs.value.forEach((ref, index) => {
      if (ref) {
        createStepObserver(ref, index, 200 * (index + 1));
      }
    });
  }, 100);
});
</script>

<style scoped>
/* ... your existing styles ... */
</style>