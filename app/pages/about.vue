<template>
  <div class="graph-paper-container">
    <!-- Content -->
    <div class="relative z-10 max-w-6xl mx-auto px-4 py-8 space-y-16">
      <!-- Header -->
      <div class="text-center">
        <span
          class="inline-flex items-center gap-2.5 px-4 py-1 sm:text-lg font-normal text-violet-500 bg-violet-500/20 rounded-full"
        >
          <ChartBarIcon class="h-4 w-4 sm:h-5 sm:w-5 text-violet-500" /> Lets
          discover & grow!
        </span>
      </div>

      <div class="text-center space-y-4">
        <h1 class="text-3xl sm:text-4xl md:text-5xl -mt-8 font-bold">
          {{ about?.hero_title }}
        </h1>
        <p class="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          {{ about?.hero_subtitle }}
        </p>
      </div>

      <!-- Why Choose Us Card -->
      <div
        class="overflow-hidden rounded-[40px] shadow-[0px_4px_75.1px_5px_rgba(0,_0,_0,_0.25)] bg-white"
      >
        <div class="flex flex-col md:flex-row items-center">
          <div class="p-6 md:p-8 md:w-1/2 space-y-4 sm:space-y-6">
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-semibold ml-4">
              {{ about?.section_1[0].heading }}
            </h2>
            <p
              class="text-gray-600 leading-relaxed text-lg sm:text-[25px] ml-4 pb-6"
            >
              {{ about?.section_1[0].subheading }}
            </p>
            <button
              class="ml-4 px-4 py-2 sm:px-6 sm:py-2 bg-[#606DF1] text-white rounded-[15px] hover:bg-[#4F5CD8] transition-colors text-sm sm:text-base"
            >
              {{ about?.section_1[0].section_button1 }}
            </button>
          </div>
          <div class="md:w-1/2 p-6 sm:p-10">
            <img
              src="@/assets/images/choose.png"
              alt="Innovation concept"
              class="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>

      <div
        class="flex flex-col md:flex-row items-center md:items-start justify-between gap-8"
      >
        <!-- Stats Section -->
        <div class="bg-white rounded-2xl shadow-lg p-6 w-full md:w-2/3">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-2">
            <div
              v-for="(stat, index) in about?.section_2_stats"
              :key="index"
              class="text-center"
            >
              <div
                class="text-[#606DF1] text-3xl sm:text-4xl md:text-5xl font-bold"
              >
                {{ stat.heading }}
              </div>
              <div class="text-gray-600 text-sm sm:text-base">
                {{ stat.subheading }}
              </div>
            </div>
          </div>
        </div>

        <!-- Numbers Section -->
        <div class="space-y-4 w-full md:w-1/3">
          <div
            class="inline-flex items-center gap-2 bg-purple-100 px-4 py-1 rounded-full text-center mx-auto md:mx-0"
          >
            <span class="text-purple-600 text-sm sm:text-base">Numbers</span>
          </div>
          <p
            class="text-gray-600 max-w-lg mx-auto md:mx-0 text-center md:text-left text-sm sm:text-base"
          >
            {{ about?.section_2_text }}
          </p>
        </div>
      </div>
    </div>

    <div class="bg-gradient-to-b from-gray-900 to-gray-800">
      <!-- Uniqueness Section -->
      <section class="max-w-7xl mx-auto px-4 py-16">
        <div
          class="flex flex-col sm:flex-row justify-between items-center mb-12"
        >
          <div class="text-center sm:text-left">
            <span
              class="bg-indigo-900/50 text-indigo-300 px-4 py-2 rounded-full text-sm"
            >
              Showcases
            </span>
            <h2 class="text-3xl sm:text-4xl font-bold text-white mt-4">
              {{ about?.section_3_heading }}
            </h2>
          </div>
          <button
            class="bg-indigo-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-[14px] hover:bg-indigo-700 transition-colors mt-6 sm:mt-0 text-sm sm:text-base"
          >
            {{ about?.section_3_button }}
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Innovative Outsourcing Card -->
          <div
            v-for="(card, index) in about?.section_3_card1"
            :key="index"
            class="group bg-white text-black rounded-[10px] overflow-hidden hover:bg-gray-800/70 transition-colors"
          >
            <img
              :src="urlFor(card.image.asset._ref)"
              :alt="card.heading"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3
                class="text-xl font-semibold text-black group-hover:text-white mb-2"
              >
                {{ card.heading }}
              </h3>
              <p class="text-gray-400 group-hover:text-white">
                {{ card.subheading }}
              </p>
            </div>
          </div>

          <!-- Scalable and Flexible Card -->
          <div
            v-for="(card, index) in about?.section_3_card2"
            :key="index"
            class="group bg-white text-black rounded-[10px] overflow-hidden hover:bg-gray-800/70 transition-colors md:col-span-2"
          >
            <img
              :src="urlFor(card.image.asset._ref)"
              :alt="card.heading"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3
                class="text-xl font-semibold text-black group-hover:text-white mb-2"
              >
                {{ card.heading }}
              </h3>
              <p class="text-gray-400 group-hover:text-white">
                {{ card.subheading }}
              </p>
            </div>
          </div>

          <!-- filepath: /c:/Users/Alaica/Documents/ITS/its.hub.website/app/pages/about.vue -->
          <!-- Cost Efficient Card -->
          <div
            v-for="(card, index) in about?.section_3_card3"
            :key="index"
            class="group bg-white text-black rounded-[10px] overflow-hidden hover:bg-gray-800/70 transition-colors md:col-span-2"
          >
            <img
              :src="urlFor(card.image.asset._ref)"
              :alt="card.heading"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3
                class="text-xl font-semibold text-black group-hover:text-white mb-2"
              >
                {{ card.heading }}
              </h3>
              <p class="text-gray-400 group-hover:text-white">
                {{ card.subheading }}
              </p>
            </div>
          </div>

          <!-- Dedicated Team Card -->
          <div
            v-for="(card, index) in about?.section_3_card4"
            :key="index"
            class="group bg-white text-black rounded-[10px] overflow-hidden hover:bg-gray-800/70 transition-colors"
          >
            <img
              :src="urlFor(card.image.asset._ref)"
              :alt="card.heading"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3
                class="text-xl font-semibold text-black group-hover:text-white mb-2"
              >
                {{ card.heading }}
              </h3>
              <p class="text-gray-400 group-hover:text-white">
                {{ card.subheading }}
              </p>
            </div>
          </div>
        </div>

        <!-- Social Media Links -->
        <div class="flex justify-center gap-6 mt-12">
          <a
            v-for="(link, index) in socialMediaLinks"
            :key="index"
            :href="link.url"
            class="text-gray-400 hover:text-gray-300 text-sm sm:text-base"
          >
            {{ link.name }}
          </a>
        </div>
      </section>
    </div>

    <div class="container mx-auto px-4 pt-12">
      <!-- Team Section -->
      <section class="py-16">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <span
              class="inline-block px-8 py-2 rounded-full text-lg sm:text-xl font-medium bg-violet-100 text-violet-600 mb-4"
            >
              Our team
            </span>
            <h2 class="text-3xl sm:text-4xl font-bold mt-4">
              {{ about?.section_4_heading }}
            </h2>
          </div>
          <div class="relative">
            <div
              class="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              <!-- Team Members -->
              <div v-for="(card, index) in about?.section_4_cards" :key="index" 
                class="relative group col-span-1"
              >
                <div class="bg-white rounded-xl p-4 shadow-lg">
                  <img
                    :src="urlFor(card.image.asset._ref)"
                    :alt="card.heading"
                    class="w-full aspect-square object-cover rounded-lg mb-4"
                  />
                  <div class="flex items-center justify-between">
                    <div>
                      <h3 class="font-medium text-sm sm:text-base">
                        {{ card.heading }}
                      </h3>
                      <p class="text-sm text-gray-500">{{ card.subheading }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Group 73 Image -->
              <div
                class="relative col-span-1 hidden md:block absolute left-0 top-1/2 transform -translate-y-1"
              >
                <img
                  src="~/assets/images/group 97.svg"
                  alt="Design Element"
                  class="hidden md:block absolute left-[-52px] top-[-33px] transform -translate-y-1/2"
                  style="height: 255x; width: auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Testimonials Section -->
    <div class="container mx-auto px-4 pt-12">
      <div class="">
        <div
          class="w-full max-w-8xl bg-white rounded-3xl p-6 sm:p-12 border border-violet-400"
        >
          <!-- Testimonial Tag -->
          <div class="flex justify-center">
            <span
              class="inline-block px-4 py-2 rounded-full text-lg sm:text-xl font-medium bg-violet-100 text-violet-600 mb-4"
            >
              Testimonials
            </span>
          </div>

                    <!-- filepath: /c:/Users/Alaica/Documents/ITS/its.hub.website/app/pages/about.vue -->
          <div class="relative overflow-hidden" style="height: 300px">
            <TransitionGroup name="slide" class="relative">
              <div
                v-for="(testimonial, index) in about?.section_5_testimonials"
                :key="index"
                v-show="currentIndex === index"
                class="absolute w-full transition-all duration-500 ease-in-out"
              >
                <h2
                  class="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 text-center sm:text-left"
                >
                  {{ testimonial.message }}
                </h2>
                <p
                  class="font-normal mt-8 sm:mt-16 text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 max-w-[700px] mx-auto text-center"
                >
                  {{ testimonial.author }}, {{ testimonial.position }}
                </p>
              </div>
            </TransitionGroup>
          </div>
          <!-- Dot Indicators -->
          <div class="flex justify-center space-x-2 mt-6">
            <button
              v-for="testimonial in testimonials"
              :key="testimonial.id"
              @click="setSlide(testimonial.id)"
              class="group"
              :aria-label="`Go to testimonial ${testimonial.id + 1}`"
              :aria-current="currentIndex === testimonial.id"
            >
              <div
                :class="[
                  'w-3 h-3 rounded-full transition-all duration-300 transform',
                  currentIndex === testimonial.id
                    ? 'bg-violet-600 scale-125'
                    : 'bg-gray-300 group-hover:bg-gray-400',
                ]"
              />
            </button>
          </div>
        </div>
      </div>
      <!-- Floating content -->
      <div
        class="relative z-50 mx-auto max-w-4xl animate-float sm:mt-48 text-center py-12 sm:py-24"
      >
        <h2
          class="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3 whitespace-normal sm:whitespace-nowrap"
        >
          {{ about?.section_6_heading }}
        </h2>
        <p
          class="font-normal text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 mb-16"
        >
          {{ about?.section_6_subheading }}
        </p>
        <button
          @click="$router.push('/contact')"
          class="px-4 py-2 text-sm md:text-base font-semibold bg-violet-600 text-white rounded-md hover:bg-violet-700 transition-all duration-300 hover:scale-105 mb-14"
        >
          {{ about?.section_6_button }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChartBarIcon } from "@heroicons/vue/24/outline";
import { ref, onMounted } from "vue";
import sanityClient from "@/hooks/sanityClient";
import { urlFor } from "@/hooks/sanityImageUrl";

interface AboutPost {
  hero_title: string;
  hero_subtitle: string;
  section_1: {
    heading: string;
    subheading: string;
    section_button1: string;
    image: { asset: { _ref: string } };
  }[];
  section_2_stats: Array<{ heading: string; subheading: string }>;
  section_2_text: string;
  section_3_heading: string;
  section_3_button: string;
  section_3_card1: {
    heading: string;
    subheading: string;
    image: { asset: { _ref: string } };
  }[];
  section_3_card2: {
    heading: string;
    subheading: string;
    image: { asset: { _ref: string } };
  }[];
  section_3_card3: {
    heading: string;
    subheading: string;
    image: { asset: { _ref: string } };
  }[];
  section_3_card4: {
    heading: string;
    subheading: string;
    image: { asset: { _ref: string } };
  }[];
  section_4_heading: string;
  section_4_cards: {
    heading: string;
    subheading: string;
    image: { asset: { _ref: string } };
  }[];
  section_5_testimonials: {
    message: string;
    author: string;
    position: string;
  }[];
  section_6_heading: string;
  section_6_subheading: string;
  section_6_button: string;
}

const about = ref<AboutPost | null>(null);

onMounted(async () => {
  try {
    const data = await sanityClient.fetch<AboutPost[]>('*[_type == "about"]');
    if (data && data.length > 0) {
      about.value = data[0]; // Assign the first item from the fetched array
      console.log(about.value, "about values:");
      console.log(about.value.section_1[0].section_button1, "section_1_button");
      console.log(
        urlFor(about.value.section_3_card1[0].image.asset._ref),
        "section_3_card1 image URL"
      );
    }
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
  }
});

// Testimonials Autoplay Logic
const currentIndex = ref(0);
const autoplayInterval = ref<NodeJS.Timeout | null>(null);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.value.length;
};

const startAutoplay = () => {
  autoplayInterval.value = setInterval(nextSlide, 5000); // Change slide every 5 seconds
};

const stopAutoplay = () => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value);
    autoplayInterval.value = null;
  }
};

onMounted(() => {
  startAutoplay();
});

onUnmounted(() => {
  stopAutoplay();
});

const testimonials = ref([
  {
    id: 0,
    content:
      "IT Squarehub seamlessly improved our processes, boosting productivity and saving time. Their support is outstanding!",
    author: "Ashley T.",
    role: "Software Associate",
  },
  {
    id: 1,
    content:
      "The implementation was smooth and the results were immediate. Highly recommended for any business looking to improve.",
    author: "Michael R.",
    role: "Project Manager",
  },
  {
    id: 2,
    content:
      "Best decision we made this year. The team is responsive and the platform is intuitive and powerful.",
    author: "Sarah L.",
    role: "Operations Director",
  },
]);

const setSlide = (index: number) => {
  currentIndex.value = index;
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

.circles-container {
  position: absolute;
  top: 95%;
  left: 50%;
  width: 800px;
  height: 800px;
  transform: translate(-50%, -50%);
  z-index: -1; /* Move circles behind content */
}

.circle {
  position: absolute;
  border-radius: 50%;
  inset: 0;
  animation: pulse 4s ease-in-out infinite;
}

.circle:nth-child(1) {
  box-shadow: 0 0 40px 20px rgba(255, 255, 255, 1),
    inset 0 0 40px 20px rgba(255, 255, 255, 1);
  animation-delay: -3s;
}

.circle:nth-child(2) {
  box-shadow: 0 0 60px 30px rgba(255, 255, 255, 0.9),
    inset 0 0 60px 30px rgba(151, 46, 196, 0.3);
  animation-delay: -2s;
}

.circle:nth-child(3) {
  box-shadow: 0 0 80px 40px rgba(255, 255, 255, 0.8),
    inset 0 0 80px 40px rgba(252, 125, 241, 0.06);
  animation-delay: -1s;
}

.circle:nth-child(4) {
  box-shadow: 0 0 100px 50px rgba(255, 255, 255, 0.7),
    inset 0 0 100px 50px rgba(255, 255, 255, 0.04);
}

@keyframes pulse {
  0% {
    transform: scale(0.8);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.5;
  }
  100% {
    transform: scale(0.8);
    opacity: 0.8;
  }
}

/* Add noise texture */
.circles-container::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  opacity: 0.1;
  mix-blend-mode: overlay;
  pointer-events: none;
}
</style>
