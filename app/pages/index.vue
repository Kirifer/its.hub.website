<template>
  <!-- Section 1 -->
  <div class="graph-paper-container">
    <!-- <canvas ref="canvas" class="canvas-overlay"></canvas> -->

    <!-- Hero Section -->
    <div
      class="container mx-auto flex flex-col items-center justify-center px-4 pt-8 pb-12"
    >
      <!-- Custom subheading -->
      <div
        class="flex items-center gap-2.5 px-4 py-1 justify-center text-center text-base sm:text-lg font-normal text-violet-500 bg-violet-500/20 rounded-full"
      >
        <ChartBarIcon class="h-4 w-4 sm:h-5 sm:w-5 text-violet-500" />
        <span>{{ home[0]?.hero_badge }}</span>
      </div>

      <!-- Heading -->
      <h1
        class="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-center text-black font-instrument-sans max-w-[20ch] mx-auto"
      >
        {{ home[0]?.hero_title }}
      </h1>

      <!-- Paragraph -->
      <p
        class="mt-4 mb-6 font-normal text-sm sm:text-base md:text-lg leading-relaxed text-center text-gray-600 max-w-[45ch] mx-auto"
      >
        {{ home[0]?.hero_subtitle }}
      </p>

      <!-- Buttons -->
      <div
        class="flex flex-col sm:flex-row gap-4 sm:space-x-4 mt-2 w-full sm:w-auto justify-center items-center"
      >
        <button
          class="w-full sm:w-auto z-10 max-w-[150px] px-4 py-2 text-sm md:text-base font-semibold text-white bg-[#6c63ff] rounded-md hover:-translate-y-0.5 transition-transform duration-300 hover:bg-[#6c63ff]/80"
        >
          {{ home[0]?.hero_button }}
        </button>
        <button
          class="w-full sm:w-auto z-10 max-w-[150px] px-4 py-2 text-sm md:text-base font-semibold text-[#6c63ff] border border-[#6c63ff] rounded-md hover:-translate-y-0.5 transition-transform duration-300 hover:bg-[#6c63ff]/10"
        >
          {{ home[0]?.hero_button_2 }}
        </button>
      </div>
    </div>

    <!-- Image section -->
    <div class="w-full max-w-[90vw] md:max-w-[900px] mx-auto px-4 relative">
      <div
        class="relative w-full h-[300px] sm:h-[450px] bg-gradient-to-br from-[#00b8d4] to-[#844ddc] rounded-2xl rotate-180 p-2 border border-[#844DDC]"
      >
        <div
          class="absolute inset-0 bg-cover bg-center rounded-2xl rotate-180"
          :style="{ backgroundImage: `url(${heroImageUrl})`, margin: '15px' }"
        ></div>
      </div>
      <!-- Additional Images - Hide on mobile -->
      <img
        src="~/assets/images/group 74.png"
        alt="Design Element"
        class="hidden md:block absolute right-[-184px] top-[315px] transform -translate-y-1/2"
        style="height: 270px; width: auto"
      />
      <img
        src="~/assets/images/group 73.png"
        alt="Design Element"
        class="hidden md:block absolute left-[-180px] top-[315px] transform -translate-y-1/2"
        style="height: 270px; width: auto"
      />
    </div>
  </div>

  <!-- Section 2 -->
  <div class="container mx-auto px-4 pt-28">
    <div class="space-y-10">
      
      <div
        v-for="(feature, index) in section1"
        :key="index"
        class="flex flex-col items-center text-center relative"
      >
        <!-- Icons - Adjust positioning for mobile -->
        <div
          :class="[
            'w-[80px] h-[80px] border border-[#844ddc] rounded-lg flex items-center justify-center bg-white mb-4 sm:mb-0',
            index % 2 === 0
              ? 'sm:absolute sm:left-[5%] lg:left-[15%]'
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

        <!-- Centered content -->
        <div class="max-w-2xl mx-auto px-4">
          <h3
            class="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight text-center text-black font-instrument-sans mb-4"
            v-html="feature.heading"
          ></h3>
          <p class="text-sm sm:text-base md:text-lg text-black/60 text-center">
            {{ feature.subheading }}
          </p>
        </div>
      </div>

      <!-- About Company Button -->
      <div class="flex justify-center mt-8">
        <button
          class="px-4 py-2 text-sm md:text-base font-semibold text-white bg-[#844ddc] rounded-md hover:-translate-y-0.5 transition-transform duration-300 hover:bg-[#844ddc]/80"
        >
          {{ home[0]?.section_1_button }}
        </button>
      </div>
    </div>
  </div>

  <!-- Section 3 / Features Section -->
  <div class="container mx-auto px-4 py-12 sm:py-16 relative z-0">
    <div class="relative rounded-2xl p-8 sm:p-16 md:p-32 overflow-hidden">
      <!-- Border Container -->
      <div
        class="absolute border-l-2 border-r-2 border-b-2 border-violet-300 rounded-b-2xl z-50"
        style="bottom: 0; left: 0; right: 0; height: calc(100% - 4rem)"
      ></div>

      <!-- Features Header -->
      <div class="mb-12 relative z-10">
        <div
          class="inline-block px-4 py-2 text-lg sm:text-xl font-medium rounded-full bg-violet-100 text-violet-600 mb-8"
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
          <button
            class="mt-4 px-4 py-2 text-base font-semibold bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
          >
            {{ home[0]?.section_2_button }}
          </button>
        </div>
      </div>

      <!-- Feature Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 relative z-10">
        <div
          v-for="card in home[0]?.section_2_cards"
          :key="card._key"
          class="relative bg-violet-100 border border-violet-300 p-8 sm:p-12 rounded-2xl shadow-sm"
        >
          <h3 class="font-semibold text-2xl sm:text-3xl mb-3">
            <span v-html="card.heading"></span>
          </h3>
          <p
            class="mt-4 text-gray-600 mb-16 sm:mb-32 text-sm sm:text-base font-normal md:text-lg leading-relaxed max-w-[290px]"
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
      <div class="circles-container">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
      <!-- Statistics Section -->
      <div class="relative z-10 mb-16">
        <div class="flex justify-center mb-8">
          <div
            class="inline-block px-4 py-2 text-lg sm:text-xl font-medium rounded-full bg-violet-100 text-violet-600 mb-8"
          >
            {{ home[0]?.section_2_badge_2 }}
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-0">
          <div
            v-for="stat in home[0]?.section_2_stats"
            :key="stat.heading"
            class="text-center border-r-2 border-b-2 border-violet-300 -m-px p-4 sm:p-5"
          >
            <div class="text-3xl sm:text-5xl font-semibold mb-2 sm:mb-3">
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

      <!-- Floating content -->
      <div
        class="relative z-50 mx-auto max-w-4xl animate-float mt-24 sm:mt-48 text-center"
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
          class="px-4 py-2 text-sm md:text-base font-semibold bg-violet-600 text-white rounded-md hover:bg-violet-700 transition-all duration-300 hover:scale-105"
        >
          {{ home[0]?.section_2_footer_button }}
        </button>
      </div>
    </div>
  </div>

  <!-- Section 3 / Huge Image with Statistics -->
  <div class="container mx-auto px-4 py-12 sm:py-18">
    <!-- Banner Image with Stats -->
    <div class="relative rounded-3xl overflow-hidden mb-16 sm:mb-32">
      <div class="p-4 sm:p-8 rounded-3xl">
        <div class="w-full max-w-[90vw] md:max-w-[1250px] mx-auto px-4">
          <div
            class="relative w-full h-[300px] sm:h-[550px] bg-gradient-to-br from-[#00b8d4] to-[#844ddc] rounded-[20px] rotate-180 p-2"
          >
            <div
              class="absolute inset-0 bg-cover bg-center rounded-[15px] rotate-180"
              :style="{
                backgroundImage: `url(${section3ImageUrl})`,
                margin: '15px',
              }"
            ></div>
          </div>
        </div>
        <!-- Stat Overlays - Hide on mobile -->
        <div class="hidden sm:block">
          <!-- Earnings -->
          <div
            class="absolute top-16 left-8 w-[220px] h-[90px] bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-[#844DDC] flex items-center"
          >
            <BarsArrowUpIcon class="text-[#844DDC] w-8 h-8 mr-4" />
            <div>
              <div
                class="text-[18px] leading-[22px] font-normal text-[#844DDC]/67 font-instrument-sans"
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
            class="absolute bottom-16 left-24 w-[220px] h-[90px] bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-[#844DDC] flex items-center"
          >
            <ChartBarIcon class="text-[#844DDC] w-8 h-8 mr-4" />
            <div>
              <div
                class="text-[18px] leading-[22px] font-normal text-[#844DDC]/67 font-instrument-sans"
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
            class="absolute top-16 right-8 w-[220px] h-[90px] bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-[#844DDC] flex items-center justify-between"
          >
            <div>
              <div
                class="text-[18px] leading-[22px] font-normal text-[#844DDC]/67 font-instrument-sans"
              >
                {{ home[0]?.section_3_cards[2].heading }}
              </div>
              <div
                class="text-[28px] leading-[32px] font-bold text-black font-instrument-sans"
              >
                {{ home[0]?.section_3_cards[2].subheading }}
              </div>
            </div>
            <FlagIcon class="text-[#844DDC] w-8 h-8" />
          </div>

          <!-- Pie Chart -->
          <div
            class="absolute bottom-16 right-24 w-[220px] h-[90px] bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-[#844DDC] flex items-center justify-between"
          >
            <div>
              <div
                class="text-[18px] leading-[22px] font-normal text-[#844DDC]/67 font-instrument-sans"
              >
                {{ home[0]?.section_3_cards[3].heading }}
              </div>
              <div
                class="text-[28px] leading-[32px] font-bold text-black font-instrument-sans"
              >
                {{ home[0]?.section_3_cards[3].subheading }}
              </div>
            </div>
            <ChartPieIcon class="text-[#844DDC] w-8 h-8" />
          </div>
        </div>
      </div>
    </div>

    <!-- Section 4 / Sliding Info -->
    <div class="container mx-auto px-4">
      <!-- Solutions Grid -->
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 sm:mb-24 relative"
      >
        <!-- Line Container -->
        <div class="absolute -top-8 w-full h-[4px] bg-gray-200">
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
    </div>


    <!-- Section 5 / Partnership Section -->
    <div class="relative sm:pb-32">
      <!-- Partnership Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
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
            class="relative transform translate-x-2  sm:translate-x-1 translate-y-3 sm:translate-y-3"
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
            class="relative transform translate-x-1 sm:translate-x-3  translate-y-8 sm:translate-y-12"
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
            class="inline-block px-4 py-2 text-lg sm:text-xl font-medium rounded-full bg-violet-100 text-violet-600 mb-4"
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
              class="mt-4 px-4 py-2 text-sm md:text-base font-semibold bg-violet-600 text-white rounded-md hover:bg-violet-700 transition-colors"
            >
              {{ home[0]?.section_5_button }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Section 6 / Testimonials -->
    <div class="flex items-center pt-16 justify-center w-full">
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

        <!-- Testimonial Content -->
        <div class="relative overflow-hidden" style="height: 300px">
          <TransitionGroup name="slide" class="relative">
            <div
              v-for="(testimonial, index) in section6"
              :key="testimonial._key"
              v-show="currentIndex === index"
              class="absolute w-full transition-all duration-500 ease-in-out"
            >
              <h2
                class="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3 text-center sm:text-left"
              >
                {{ testimonial.message }}
              </h2>
              <p
                class="font-normal mt-16 sm:mt-32 text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 max-w-[700px] mx-auto text-center"
              >
                {{ testimonial.author }}, {{ testimonial.position }}
              </p>
            </div>
          </TransitionGroup>
        </div>

        <!-- Dot Indicators -->
        <div class="flex justify-center space-x-2 mt-6">
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
                currentIndex === Number(testimonial._key)
                  ? 'bg-violet-600 scale-125'
                  : 'bg-violet-100 group-hover:bg-violet-600',
              ]"
            />
          </button>
        </div>
      </div>
    </div>

    <!-- Section 7 /  Join++-->
    <div
      class="min-h-[500px] bg-gradient-to-br from-white to-purple-50/50 px-4 sm:px-6 lg:px-6 py-12"
    >
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
                class="px-4 py-2 text-sm md:text-base font-semibold bg-white text-gray-800 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                {{ home[0]?.section_7_button_1 }}
              </button>
              <button
                class="px-4 py-2 text-sm md:text-base font-semibold bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
              >
                {{ home[0]?.section_7_button_2 }}
              </button>
            </div>
          </div>

          <!-- Right Image -->
          <div class="relative h-full w-full mt-8 sm:mt-0">
            <img
              v-if="section7ImageUrl"
              :src="section7ImageUrl"
              alt="Analytics Dashboard"
              class="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ChartBarIcon,
  BarsArrowUpIcon,
  FlagIcon,
  ChartPieIcon,
} from "@heroicons/vue/24/outline";
import { ref, onMounted } from "vue";
import sanityClient from "@/hooks/sanityClient";
import { urlFor } from "@/hooks/sanityImageUrl";

interface HomePost {
  _id: string;
  hero_title: string;
  hero_subtitle: string;
  hero_badge: string;
  hero_button: string;
  hero_button_2: string;
  hero_image: any;
  section_1: Array<{
    heading: string;
    subheading: string;
    _key: string;
    icon: { asset: { _ref: string } };
  }>;
  section_1_button: string;
  section_2_badge: string;
  section_2_badge_2: string;
  section_2_button: string;
  section_2_cards: Array<{
    heading: string;
    subheading: string;
    _key: string;
    icon: { asset: { _ref: string } };
  }>;
  section_2_footer_button: string;
  section_2_footer_heading: string;
  section_2_footer_subheading: string;
  section_2_heading: string;
  section_2_stats: Array<{ heading: string; subheading: string }>;
  section_2_subheading: string;
  section_3_image: { asset: { _ref: string } };
  section_3_cards: Array<{ heading: string; subheading: string; _key: string }>;
  section_4: Array<{ heading: string; subheading: string; _key: string }>;
  section_5_badge: string;
  section_5_button: string;
  section_5_heading: string;
  section_5_subheading: string;
  section_6_testimonials: Array<{
    author: string;
    position: string;
    message: string;
    _key: string;
  }>;
  section_5_images: Array<{ asset: { _ref: string } }>;
  section_7_button_1: string;
  section_7_button_2: string;
  section_7_heading: string;
  section_7_subheadings: Array<string>;
  section_7_image: { asset: { _ref: string } };
}

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

const home = ref<HomePost[]>([]);
const heroImageUrl = ref("");
const section1 = ref<
  Array<{
    heading: string;
    subheading: string;
    _key: string;
    icon: { asset: { _ref: string } };
  }>
>([]);
const section3ImageUrl = ref("");
const section6 = ref<
  Array<{ author: string; position: string; message: string; _key: string }>
>([]);
const section7ImageUrl = ref("");

onMounted(async () => {
  try {
    home.value = await sanityClient.fetch<HomePost[]>('*[_type == "home"]');
    console.log(home.value, "home values:");
    console.log(home.value[0].section_1_button);
    console.log(home.value[0].section_5_images[0].asset._ref);
    if (home.value.length > 0) {
      heroImageUrl.value = urlFor(home.value[0].hero_image.asset._ref);
      section1.value = home.value[0].section_1;
      section6.value = home.value[0].section_6_testimonials;
      section3ImageUrl.value = urlFor(home.value[0].section_3_image.asset._ref);
      section7ImageUrl.value = urlFor(home.value[0].section_7_image.asset._ref);
    }
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
  }
  resetAutoplay();
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

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease-in-out;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.slide-enter-to,
.slide-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
