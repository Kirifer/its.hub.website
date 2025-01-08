<script setup lang="ts">
import { ref, onMounted } from "vue";
import sanityClient from "@/hooks/sanityClient";
import { urlFor } from "@/hooks/sanityImageUrl";
import type { Home } from "@/types/home";
import {
  ChartBarIcon,
  BarsArrowUpIcon,
  FlagIcon,
  ChartPieIcon,
} from "@heroicons/vue/24/outline";

const home = ref<Home[]>([]);
const heroImage = ref("");
const section_1 = ref<
  Array<{
    heading: string;
    subheading: string;
    _key: string;
    icon: { asset: { _ref: string } };
  }>
>([]);
const section3Image = ref("");
const section6 = ref<
  Array<{ author: string; position: string; message: string; _key: string }>
>([]);
const section7Image = ref("");
const activeIndex = ref(0);
const currentIndex = ref(0);
const autoplayInterval = ref<ReturnType<typeof setInterval> | null>(null);

const setSlide = (index: number) => {
  currentIndex.value = index;
  resetAutoplay();
};

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % section6.value.length;
};

const resetAutoplay = () => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value);
  }
  autoplayInterval.value = setInterval(nextSlide, 5000);
};

onMounted(async () => {
  try {
    home.value = await sanityClient.fetch<Home[]>('*[_type == "home"]');
    if (home.value.length > 0) {
      heroImage.value = urlFor(home.value[0].hero_image.asset._ref);
      section_1.value = home.value[0].section_1;
      section3Image.value = urlFor(home.value[0].section_3_image.asset._ref);
      section6.value = home.value[0].section_6_testimonials;
      section7Image.value = urlFor(home.value[0].section_7_image.asset._ref);
    }
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
  }
});
</script>

<template>
  <div>
    <div
      class="inset-0 w-full bg-white bg-[linear-gradient(to_right,#80808012_3px,transparent_1px),linear-gradient(to_bottom,#80808012_3px,transparent_1px)] bg-[size:100px_100px] relative animate-fade-grid-in-2"
    >
      <div class="relative">
        <div class="overflow-hidden h-[700px] relative">
          <div
            class="absolute inset-0 h-[500px] flex items-center justify-center z-0"
          >
            <!-- Ellipse 1 -->
            <div class="absolute -top-[425px]">
              <div
                class="w-[950px] h-[950px] rounded-full border-2 border-[rgba(163,162,162,0.005)] shadow-[0px_4px_116.8px_5px_rgba(0,0,0,0.1)] animate-pulse"
              ></div>
            </div>

            <!-- Ellipse 3 -->
            <div
              class="absolute left-1/2 -translate-x-1/2 -translate-y-[200px]"
            >
              <div
                class="w-[750px] h-[750px] rounded-full border-2 border-[rgba(163,162,162,0.01)] shadow-[0px_4px_116.8px_5px_rgba(0,0,0,0.13)] animate-pulse"
              ></div>
            </div>

            <!-- Ellipse 5 -->
            <div
              class="absolute left-1/2 -translate-x-1/2 -translate-y-[200px]"
            >
              <div
                class="w-[550px] h-[550px] rounded-full border-2 border-[rgba(163,162,162,0.005)] shadow-[0px_4px_116.8px_5px_rgba(0,0,0,0.13)] animate-pulse"
              ></div>
            </div>
          </div>
        </div>

        <div class="container mx-auto px-4 absolute inset-0">
          <div
            v-if="home.length > 0"
            class="flex flex-col items-center justify-center space-y-5 md:space-y-10 animate-fade-in"
          >
            <div class="mt-10 -mb-2">
              <span
                class="inline-flex items-center px-3 py-1 rounded-full text-lg font-medium bg-purple-200 text-purple-800"
              >
                <ChartBarIcon class="h-5 w-5 mr-1" />{{ home[0]?.hero_badge }}
              </span>
            </div>
            <div
              class="font-bold text-center text-3xl md:text-6xl w-[350px] md:w-[650px]"
            >
              {{ home[0]?.hero_title }}
            </div>
            <div
              class="text-center text-lg md:text-xl text-gray-900 w-full md:w-[500px]"
            >
              <TextGenerateEffect :words="home[0]?.hero_subtitle" class="" />
            </div>
            <div
              class="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-2"
            >
              <button
                class="bg-purple-200 text-purple-800 font-medium px-6 py-2 rounded-md hover:bg-purple-300 transition-colors"
              >
                Get Started
              </button>
              <button
                class="bg-white border-gray border font-medium px-6 py-2 rounded-md hover:bg-gray-300 transition-colors"
              >
                Learn More
              </button>
            </div>

            <div
              class="w-full max-w-[90vw] md:max-w-[900px] mx-auto px-4 pb-16 relative"
            >
              <!-- Cyan gradient left-->
              <div
                class="absolute w-[382px] h-[386px] rounded-full left-[-200px] top-0 z-0"
                :style="{
                  background:
                    'radial-gradient(circle, rgba(145,77,176,0.6) 0%, rgba(145,77,176,0) 70%)',
                  transform: 'rotate(-116.85deg)',
                  filter: 'blur(50px)',
                }"
              />
              <!-- Blue gradient left-->
              <div
                class="absolute w-[382px] h-[386px] rounded-full left-[-200px] -top-32 z-0"
                :style="{
                  background:
                    'radial-gradient(circle, rgba(142,212,246,0.6) 0%, rgba(142,212,246,0) 70%)',
                  transform: 'rotate(-116.85deg)',
                  filter: 'blur(50px)',
                }"
              />
              <!-- Blue gradient Right-->
              <div
                class="absolute w-[382px] h-[386px] rounded-full right-[-200px] top-0 z-0"
                :style="{
                  background:
                    'radial-gradient(circle, rgba(142,212,246,0.6) 0%, rgba(142,212,246,0) 70%)',
                  transform: 'rotate(-116.85deg)',
                  filter: 'blur(50px)',
                }"
              />
              <!-- Cyan gradient Right-->
              <div
                class="absolute w-[382px] h-[386px] rounded-full right-[-200px] -top-32 z-0"
                :style="{
                  background:
                    'radial-gradient(circle, rgba(145,77,176,0.6) 0%, rgba(145,77,176,0) 50%)',
                  transform: 'rotate(-116.85deg)',
                  filter: 'blur(50px)',
                }"
              />
              <GlowBorder
                class="relative w-full h-[300px] sm:h-[450px] bg-transparent rounded-2xl rotate-180 p-2 z-10 transition-transform duration-300"
                :color="['#844DDC', '#00B8D4', '#D2A517', '#044897']"
              >
                <div
                  class="absolute inset-0 bg-cover bg-center rounded-2xl rotate-180"
                  :style="{
                    backgroundImage: `url(${heroImage})`,
                    margin: '10px',
                  }"
                ></div>
              </GlowBorder>
              <img
                src="~/assets/images/group 74.png"
                alt="Design Element"
                class="hidden md:block absolute right-[-184px] top-[315px] transform -translate-y-1/2 z-10"
                style="height: 270px; width: auto"
              />
              <img
                src="~/assets/images/group 73.png"
                alt="Design Element"
                class="hidden md:block absolute left-[-180px] top-[315px] transform -translate-y-1/2 z-10"
                style="height: 270px; width: auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4 mt-10 md:mt-72">
      <div class="space-y-8 md:space-y-10 mt-10">
        <div
          v-for="(feature, index) in section_1"
          :key="index"
          class="flex flex-col items-center text-center relative"
        >
          <div
            :class="[
              'w-[80px] h-[80px] border border-[#844ddc] rounded-lg flex items-center justify-center bg-white mb-4 sm:mb-0',
              index % 2 === 0
                ? 'sm:absolute sm:left-[5%] md:left-[15%]'
                : 'sm:absolute sm:right-[5%] lg:right-[15%]',
            ]"
          >
            <img
              v-if="feature.icon && feature.icon.asset"
              :src="urlFor(feature.icon.asset._ref)"
              alt="icon"
              class="w-12 h-12"
            />
          </div>

          <div class="max-w-2xl mx-auto px-4 space-y-2 md:space-y-4">
            <h3
              class="text-3xl md:text-4xl font-bold leading-tight text-center text-black font-instrument-sans"
            >
              {{ feature.heading }}
            </h3>
            <p class="text-base md:text-lg text-black/60 text-center">
              {{ feature.subheading }}
            </p>
          </div>
        </div>
      </div>

      <div class="relative z-0">
        <div class="relative rounded-2xl p-8 sm:p-16 md:p-32 overflow-hidden">
          <div
            class="absolute border-l-2 border-r-2 border-b-2 border-purple-300 rounded-b-2xl z-10"
            style="bottom: 0; left: 0; right: 0; height: calc(100% - 4rem)"
          ></div>
          <div class="mb-2 relative z-20">
            <div
              class="inline-block px-4 py-2 md:px-6 md:py-4 text-lg md:text-3xl font-medium rounded-full bg-purple-200 text-purple-800 mb-8"
            >
              Features
            </div>
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3">
              {{ home[0]?.section_2_heading }}
            </h2>
            <div class="flex flex-col md:flex-row justify-between items-center">
              <p
                class="mt-5 mb-6 font-normal text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 max-w-[900px]"
              >
                {{ home[0]?.section_2_subheading }}
              </p>
            </div>
          </div>

          <div
            class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 md:mb-20 relative z-20"
          >
            <div
              v-for="card in home[0]?.section_2_cards"
              :key="card._key"
              class="relative bg-purple-200 border border-purple-300 p-8 sm:p-12 rounded-2xl shadow-sm"
            >
              <h3 class="font-semibold text-2xl sm:text-3xl mb-3">
                <span v-html="card.heading"></span>
              </h3>
              <p
                class="mt-4 text-gray-600 pb-16 sm:mb-32 text-sm sm:text-base font-normal md:text-lg leading-relaxed max-w-[290px]"
              >
                {{ card.subheading }}
              </p>
              <img
                v-if="card.icon && card.icon.asset"
                :src="urlFor(card.icon.asset._ref)"
                alt="Card Icon"
                class="absolute bottom-[-25px] right-[-10px] w-auto h-[100px] sm:h-[150px] object-contain"
              />
            </div>
          </div>
          <div class="circles-container relative z-10">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
          </div>
          <div class="relative z-20 space-y-10 md:space-y-16">
            <div class="flex justify-center">
              <div
                class="inline-block px-4 py-2 md:px-6 md:py-4 text-lg md:text-3xl font-medium rounded-full bg-purple-200 text-purple-800"
              >
                {{ home[0]?.section_2_badge_2 }}
              </div>
            </div>

            <div class="grid grid-cols-2 gap-2 md:gap-0 md:grid-cols-4">
              <div
                v-for="stat in home[0]?.section_2_stats"
                :key="stat.heading"
                class="text-center border-r-2 border-l-2 rounded-full border-b-2 border-purple-200 sm:p-5"
              >
                <div class="text-3xl sm:text-5xl font-semibold">
                  {{ stat.heading }}
                </div>
                <div
                  class="font-normal text-sm sm:text-base md:text-lg leading-relaxed text-gray-600"
                >
                  {{ stat.subheading }}
                </div>
              </div>
            </div>
          </div>
          <div
            class="relative z-20 mx-auto max-w-4xl animate-float mt-10 md:mt-28 text-center"
          >
            <h2
              class="text-2xl sm:text-3xl md:text-5xl font-semibold mb-3 whitespace-normal sm:whitespace-nowrap"
            >
              {{ home[0]?.section_2_footer_heading }}
            </h2>
            <p
              class="font-normal text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 mb-8"
            >
              {{ home[0]?.section_2_footer_subheading }}
            </p>
            <button
              class="px-4 py-2 text-sm md:text-base font-semibold bg-purple-200 text-purple-800 rounded-md hover:bg-purple-300 transition-all duration-300 hover:scale-105"
            >
              {{ home[0]?.section_2_footer_button }}
            </button>
          </div>
        </div>
      </div>

      <div class="relative rounded-3xl overflow-hidden mb-16 pt-28 sm:mb-32">
        <div class="p-4 sm:p-8 rounded-3xl">
          <div class="w-full max-w-[90vw] md:max-w-[1250px] mx-auto px-4">
            <div
              class="relative w-full h-[300px] sm:h-[550px] bg-gradient-to-br from-[#00b8d4] to-[#844ddc] rounded-[20px] rotate-180 p-2"
            >
              <div
                class="absolute inset-0 bg-cover bg-center rounded-[15px] rotate-180"
                :style="{
                  backgroundImage: `url(${section3Image})`,
                  margin: '10px',
                }"
              ></div>
            </div>
          </div>
          <!-- Stat Overlays - Hide on mobile -->
          <div class="hidden sm:block">
            <!-- Earnings -->
            <div
              class="absolute top-48 left-8 w-[220px] h-[90px] bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-purple-500 flex items-center"
            >
              <BarsArrowUpIcon class="text-purple-500 w-8 h-8 mr-4" />
              <div>
                <div
                  class="text-[18px] leading-[22px] font-normal text-purple-500/67 font-instrument-sans"
                >
                  {{ home[0]?.section_3_cards[0].heading }}
                </div>
                <div
                  class="text-[28px] leading-[32px] font-bold text-black font-instrument-sans"
                >
                  {{ home[0]?.section_3_cards[0].subheading }}
                </div>
              </div>
            </div>

            <!-- Daily Traffic/Visitors -->
            <div
              class="absolute bottom-16 left-24 w-[220px] h-[90px] bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-purple-500 flex items-center"
            >
              <ChartBarIcon class="text-purple-500 w-8 h-8 mr-4" />
              <div>
                <div
                  class="text-[18px] leading-[22px] font-normal text-purple-500/67 font-instrument-sans"
                >
                  {{ home[0]?.section_3_cards[1].heading }}
                </div>
                <div
                  class="text-[28px] leading-[32px] font-bold text-black font-instrument-sans"
                >
                  {{ home[0]?.section_3_cards[1].subheading }}
                </div>
              </div>
            </div>

            <!-- Your Balance -->
            <div
              class="absolute top-48 right-8 w-[220px] h-[90px] bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-purple-500 flex items-center justify-between"
            >
              <div>
                <div
                  class="text-[18px] leading-[22px] font-normal text-purple-500/67 font-instrument-sans"
                >
                  {{ home[0]?.section_3_cards[2].heading }}
                </div>
                <div
                  class="text-[28px] leading-[32px] font-bold text-black font-instrument-sans"
                >
                  {{ home[0]?.section_3_cards[2].subheading }}
                </div>
              </div>
              <FlagIcon class="text-purple-500 w-8 h-8" />
            </div>

            <!-- Pie Chart -->
            <div
              class="absolute bottom-16 right-24 w-[220px] h-[90px] bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-purple-500 flex items-center justify-between"
            >
              <div>
                <div
                  class="text-[18px] leading-[22px] font-normal text-purple-500/67 font-instrument-sans"
                >
                  {{ home[0]?.section_3_cards[3].heading }}
                </div>
                <div
                  class="text-[28px] leading-[32px] font-bold text-black font-instrument-sans"
                >
                  {{ home[0]?.section_3_cards[3].subheading }}
                </div>
              </div>
              <ChartPieIcon class="text-purple-500 w-8 h-8" />
            </div>
          </div>
        </div>
      </div>

      <!-- Solutions Grid -->
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 sm:mb-24 relative -mt-16 md:mt-0"
      >
        <!-- Line Container -->
        <div class="absolute -top-8 w-full h-[4px] bg-gray-200 hidden md:block">
          <!-- Animated Purple Bar -->
          <div
            class="h-full w-1/3 bg-[#844DDC] transition-all duration-300 ease-in-out"
            :style="{
              transform: `translateX(${activeIndex * 100}%)`,
              opacity: activeIndex !== null ? '1' : '0',
            }"
          ></div>
        </div>

        <!-- Innovative Solutions -->
        <div
          class="text-center cursor-pointer mt-10"
          @mouseenter="activeIndex = 0"
          @mouseleave="activeIndex = 0"
        >
          <h3 class="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
            {{ home[0]?.section_4[0].heading }}
          </h3>
          <p
            class="font-normal text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 max-w-[700px] mx-auto"
          >
            {{ home[0]?.section_4[0].subheading }}
          </p>
        </div>

        <!-- Customized Approach -->
        <div
          class="text-center cursor-pointer mt-10"
          @mouseenter="activeIndex = 1"
          @mouseleave="activeIndex = 0"
        >
          <h3 class="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
            {{ home[0]?.section_4[1].heading }}
          </h3>
          <p
            class="font-normal text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 max-w-[700px] mx-auto"
          >
            {{ home[0]?.section_4[1].subheading }}
          </p>
        </div>

        <!-- Enduring Partnerships -->
        <div
          class="text-center cursor-pointer mt-10"
          @mouseenter="activeIndex = 2"
          @mouseleave="activeIndex = 0"
        >
          <h3 class="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
            {{ home[0]?.section_4[2].heading }}
          </h3>
          <p
            class="font-normal text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 max-w-[700px] mx-auto"
          >
            {{ home[0]?.section_4[2].subheading }}
          </p>
        </div>
      </div>

      <div class="relative sm:pb-32">
        <!-- Partnership Content -->
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center"
        >
          <!-- Team Images Grid -->
          <div class="relative grid grid-cols-2 gap-4">
            <div class="relative transform translate-y-2">
              <img
                v-if="
                  home[0] &&
                  home[0].section_5_images[0] &&
                  home[0].section_5_images[0].asset
                "
                :src="urlFor(home[0]?.section_5_images[0].asset._ref)"
                alt="Team Member"
                class="w-full h-auto object-cover rounded-xl"
              />
            </div>
            <div class="relative transform translate-y-6 sm:translate-y-12">
              <img
                v-if="
                  home[0] &&
                  home[0].section_5_images[1] &&
                  home[0].section_5_images[1].asset
                "
                :src="urlFor(home[0].section_5_images[1].asset._ref)"
                alt="Team Member"
                class="w-full h-auto object-cover rounded-xl"
              />
            </div>
            <div
              class="relative transform translate-x-2 sm:translate-x-1 translate-y-3 sm:translate-y-3"
            >
              <img
                v-if="
                  home[0] &&
                  home[0].section_5_images[2] &&
                  home[0].section_5_images[2].asset
                "
                :src="urlFor(home[0].section_5_images[2].asset._ref)"
                alt="Team Member"
                class="w-[330px] sm:h-[200px] lg:h-[300px] object-cover rounded-xl"
              />
            </div>
            <div
              class="relative transform translate-x-1 sm:translate-x-3 translate-y-8 sm:translate-y-12"
            >
              <img
                v-if="
                  home[0] &&
                  home[0].section_5_images[3] &&
                  home[0].section_5_images[3].asset
                "
                :src="urlFor(home[0].section_5_images[3].asset._ref)"
                alt="Team Member"
                class="w-[335px] sm:h-[200px] lg:h-[300px] object-cover rounded-xl"
              />
            </div>
          </div>

          <!-- Text Content -->
          <div>
            <div
              class="inline-block px-4 py-2 text-lg sm:text-xl font-medium rounded-full bg-purple-200 text-purple-800 mb-4"
            >
              {{ home[0]?.section_5_badge }}
            </div>
            <h2 class="text-3xl sm:text-4xl font-semibold mb-6">
              {{ home[0]?.section_5_heading }}
            </h2>
            <p
              class="font-normal text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 max-w-[900px] mb-8"
            >
              {{ home[0]?.section_5_subheading }}
            </p>
            <div class="flex justify-end">
              <button
                class="mt-4 px-4 py-2 text-sm md:text-base font-semibold bg-purple-200 text-purple-800 rounded-md hover:bg-purple-300 transition-colors"
              >
                {{ home[0]?.section_5_button }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-center pt-8 justify-center w-full">
        <div
          class="w-full max-w-8xl bg-white rounded-3xl p-6 sm:p-12 border border-purple-400 relative"
        >
          <!-- Cyan gradient left-->
          <div
            class="absolute w-[382px] h-[386px] rounded-full left-[-100px] top-16 z-0"
            :style="{
              background:
                'radial-gradient(circle, rgba(145,77,176,0.3) 0%, rgba(145,77,176,0) 70%)',
              transform: 'rotate(-116.85deg)',
              filter: 'blur(50px)',
            }"
          />
          <!-- Blue gradient left-->
          <div
            class="absolute w-[382px] h-[386px] rounded-full left-[-100px] top-48 z-0"
            :style="{
              background:
                'radial-gradient(circle, rgba(142,212,246,0.3) 0%, rgba(142,212,246,0) 70%)',
              transform: 'rotate(-116.85deg)',
              filter: 'blur(50px)',
            }"
          />

          <!-- Blue gradient Right-->
          <div
            class="absolute w-[382px] h-[386px] rounded-full right-[-100px] -top-14 z-0"
            :style="{
              background:
                'radial-gradient(circle, rgba(142,212,246,0.3) 0%, rgba(142,212,246,0) 70%)',
              transform: 'rotate(-116.85deg)',
              filter: 'blur(50px)',
            }"
          />
          <!-- Cyan gradient Right-->
          <div
            class="absolute w-[382px] h-[386px] rounded-full right-[-100px] top-24 z-0"
            :style="{
              background:
                'radial-gradient(circle, rgba(145,77,176,0.3) 0%, rgba(145,77,176,0) 70%)',
              transform: 'rotate(-116.85deg)',
              filter: 'blur(50px)',
            }"
          />

          <!-- Testimonial Tag -->
          <div class="flex justify-center relative z-10">
            <span
              class="inline-block px-4 py-2 rounded-full text-lg sm:text-xl font-medium bg-purple-100 text-purple-600 mb-4"
            >
              Testimonials
            </span>
          </div>

          <!-- Testimonial Content -->
          <div class="relative overflow-hidden h-[220px] mx-auto z-10">
            <TransitionGroup name="slide" class="relative">
              <div
                v-for="(testimonial, index) in section6"
                :key="testimonial._key"
                v-show="currentIndex === index"
                class="absolute w-full transition-all duration-500 ease-in-out"
              >
                <h2
                  class="text-3xl sm:text-4xl md:text-5xl font-semibold text-left"
                >
                  "{{ testimonial.message }}"
                </h2>
                <p
                  class="font-normal mt-10 text-sm sm:text-base md:text-2xl leading-relaxed text-gray-600 mx-auto text-end w-full"
                >
                  - {{ testimonial.author }}, {{ testimonial.position }}
                </p>
              </div>
            </TransitionGroup>
          </div>

          <!-- Dot Indicators -->
          <div class="flex justify-center space-x-2 mt-2 relative z-10">
            <button
              v-for="(testimonial, index) in section6"
              :key="testimonial._key"
              @click="setSlide(index)"
              class="group"
              :aria-label="`Go to testimonial ${index + 1}`"
              :aria-current="currentIndex === index"
            >
              <div
                :class="[
                  'w-3 h-3 rounded-full transition-all duration-300 transform',
                  currentIndex === index
                    ? 'bg-purple-800 scale-125'
                    : 'bg-purple-200 group-hover:bg-purple-800',
                ]"
              />
            </button>
          </div>
        </div>
      </div>

      <div class="min-h-[500px] px-4 sm:px-6 lg:px-6 py-12">
        <div class="max-w-8xl mx-auto p-5">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <!-- Left Content -->
            <div class="space-y-6">
              <h1
                class="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 leading-tight"
              >
                {{ home[0]?.section_7_heading }}
              </h1>

              <div class="space-y-4">
                <div class="flex items-center space-x-2">
                  <svg
                    class="w-5 h-5 text-purple-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span class="text-base sm:text-lg text-gray-600">{{
                    home[0]?.section_7_subheadings[0]
                  }}</span>
                </div>

                <div class="flex items-center space-x-2">
                  <svg
                    class="w-5 h-5 text-yellow-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span class="text-base sm:text-lg text-gray-600">{{
                    home[0]?.section_7_subheadings[1]
                  }}</span>
                </div>

                <div class="flex items-center space-x-2">
                  <svg
                    class="w-5 h-5 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span class="text-base sm:text-lg text-gray-600">{{
                    home[0]?.section_7_subheadings[2]
                  }}</span>
                </div>
              </div>

              <div
                class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4"
              >
                <button
                  class="bg-white border-gray border font-medium px-6 py-2 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Get Started
                </button>
                <button
                  class="bg-purple-200 text-purple-800 font-medium px-6 py-2 rounded-md hover:bg-purple-300 transition-colors"
                >
                  Learn More
                </button>
              </div>
            </div>

            <!-- Right Image -->
            <div class="relative h-full w-full mt-8 sm:mt-0">
              <img
                v-if="section7Image"
                :src="section7Image"
                alt="Analytics Dashboard"
                class="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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

.circles-container {
  position: absolute;
  top: 95%;
  left: 50%;
  width: 800px;
  height: 800px;
  transform: translate(-50%, -50%);
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

.circles-container::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  opacity: 0.1;
  mix-blend-mode: overlay;
  pointer-events: none;
}

@keyframes hero-pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.7;
  }
}

.animate-pulse {
  animation: hero-pulse 5s infinite;
}
</style>
