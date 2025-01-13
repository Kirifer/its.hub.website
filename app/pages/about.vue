<script setup lang="ts">
import sanityClient from "@/hooks/sanityClient";
import {
  ChartBarIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  InformationCircleIcon, 
} from "@heroicons/vue/24/outline";
import { urlFor } from "~/hooks/sanityImageUrl";
import type { About } from "~/types/about";

const about = ref<About[]>([]);
const section1Image = ref("");

console.log(about);

onMounted(async () => {
  try {
    about.value = await sanityClient.fetch<About[]>('*[_type == "about"]');
    if (about.value.length > 0) {
      section1Image.value = urlFor(
        about.value[0]?.section_1[0].image.asset._ref
      );
      console.log(about.value);
    }
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
  }
});

const currentSlide = ref(0);

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--;
  }
};

const nextSlide = () => {
  if (
    currentSlide.value <
    Math.ceil(about.value[0]?.section_4_cards.length / 8) - 1
  ) {
    currentSlide.value++;
  }
};

const isPrevDisabled = computed(() => currentSlide.value === 0);
const isNextDisabled = computed(
  () =>
    currentSlide.value >=
    Math.ceil(about.value[0]?.section_4_cards.length / 8) - 1
);

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

// Split reviews into two rows
const firstRow = ref(reviews.slice(0, reviews.length / 2));
const secondRow = ref(reviews.slice(reviews.length / 2));
</script>

<template>
  <div class="overflow-x-hidden">
    <div
      class="inset-0 w-full bg-white bg-[linear-gradient(to_right,#80808012_3px,transparent_1px),linear-gradient(to_bottom,#80808012_3px,transparent_1px)] bg-[size:100px_100px] relative animate-fade-grid-in-2"
    >
      <div class="relative">
        <div class="h-[1200px] md:h-[1000px] relative">
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
            class="flex flex-col items-center justify-center space-y-4 md:space-y-8 animate-fade-in"
          >
            <div class="mt-10 -mb-2">
              <span
                class="inline-flex items-center px-3 py-1 gap-2  rounded-full text-lg font-medium bg-blue-200 text-blue-800"
              >
              <InformationCircleIcon class="h-6 w-6 text-blue-500" />
                {{ about[0]?.hero_badge }}
              </span>
            </div>
            <div
              class="font-bold text-center text-3xl md:text-6xl w-[350px] md:w-[650px]"
            >
              {{ about[0]?.hero_title }}
            </div>
            <div
              class="text-center text-lg md:text-xl text-gray-900 w-full md:w-[500px]"
            >
              {{ about[0]?.hero_subtitle }}
            </div>

            <!-- Card  -->
            <div
              class="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden h-auto md:max-h-4xl md:max-w-4xl"
            >
              <div class="md:flex">
                <div class="p-8">
                  <div
                    class="uppercase tracking-wide text-xl md:text-4xl font-bold"
                  >
                    {{ about[0]?.section_1[0].heading }}
                  </div>
                  <p class="mt-4 text-lg md:text-2xl text-gray-500">
                    {{ about[0]?.section_1[0].subheading }}
                  </p>
                </div>
                <div class="md:flex-shrink-0">
                  <img
                    class="h-48 w-full object-cover md:block hidden md:h-[400px] md:w-full"
                    :src="section1Image"
                    alt="Card Image"
                  />
                </div>
              </div>
            </div>

            <div class="flex flex-col md:flex-row gap-7 max-w-4xl">
              <div class="w-full md:w-3/4">
                <div
                  class="mx-auto bg-white rounded-xl shadow-md overflow-hidden h-auto"
                >
                  <div class="flex flex-col md:flex-row gap-10 p-8">
                    <div>
                      <div
                        class="uppercase tracking-wide text-3xl md:text-5xl text-blue-400 font-bold text-center"
                      >
                        {{ about[0]?.section_2_stats[0].heading }}
                      </div>
                      <div
                        class="mt-4 text-lg md:text-xl font-semibold uppercase text-gray-500 text-center"
                      >
                        {{ about[0]?.section_2_stats[0].subheading }}
                      </div>
                    </div>
                    <div>
                      <div
                        class="uppercase tracking-wide text-3xl md:text-5xl text-blue-400 font-bold text-center"
                      >
                        {{ about[0]?.section_2_stats[1].heading }}
                      </div>
                      <div
                        class="mt-4 text-lg md:text-xl font-semibold uppercase text-gray-500 text-center"
                      >
                        {{ about[0]?.section_2_stats[1].subheading }}
                      </div>
                    </div>
                    <div>
                      <div
                        class="uppercase tracking-wide text-3xl md:text-5xl text-blue-400 font-bold text-center"
                      >
                        {{ about[0]?.section_2_stats[2].heading }}
                      </div>
                      <div
                        class="mt-4 text-lg md:text-xl font-semibold uppercase text-gray-500 text-center"
                      >
                        {{ about[0]?.section_2_stats[2].subheading }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="justify-center text-left w-full md:w-1/2">
                <div
                  class="text-center md:block hidden items-center px-5 py-3 rounded-full text-2xl md:text-4xl font-medium bg-blue-200 text-blue-800"
                >
                  Numbers
                </div>
                <div
                  class="text-lg md:text-xl text-gray-500 mt-4 md:text-left text-center"
                >
                  It’s time to strengthen your team and boost business
                  performance through our Professional Outsourcing Services.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bento Box -->
    <div class="bg-black text-white">
      <div class="bg-gradient-to-r from-fuchsia-500/30 to-cyan-500/50">
        <div class="container mx-auto py-10 px-4">
          <div
            class="inline-flex items-center px-3 py-1 text-lg rounded-full font-medium bg-blue-200 text-blue-800"
          >
            Showcases
          </div>
          <div
            class="flex flex-col md:flex-row w-full items-center justify-between mt-4"
          >
            <div
              class="text-2xl md:text-4xl font-bold uppercase md:text-left text-center"
            >
              The uniqueness of IT Squarehub
            </div>
            <div
              class="border px-4 py-2 rounded-full bg-blue-200 text-blue-800 font-semibold mt-4 md:mt-0"
            >
              <button>Connect Now!</button>
            </div>
          </div>

          <!-- Bento Boxes -->
          <div class="flex justify-center">
            <div
              class="container flex h-full w-full md:w-3/4 items-center justify-center mt-10"
            >
              <div
                class="grid h-full w-full grid-cols-1 md:grid-cols-3 grid-rows-4 md:grid-rows-2 gap-4 p-2 rounded-lg"
              >
                <div
                  v-for="(card, index) in about[0]?.section_3_cards"
                  :key="index"
                  :class="
                    index === 1 || index === 2
                      ? 'col-span-1 md:col-span-2 row-span-1'
                      : 'col-span-1 row-span-1'
                  "
                  class="rounded-lg shadow-md shadow-gray-500/40 flex items-center justify-center h-72 md:h-64"
                  :style="{
                    backgroundImage: `url(${urlFor(card.image.asset._ref)})`,
                  }"
                >
                  <div
                    class="bg-white p-2 rounded-br-xl rounded-bl-xl shadow-md mt-auto w-full h-[150px] md:h-[90px] flex flex-col justify-start"
                  >
                    <h3
                      class="text-lg font-bold mb-1 text-black text-center mx-2"
                    >
                      {{ card.heading }}
                    </h3>
                    <p class="text-gray-600 text-sm text-center mx-2">
                      {{ card.subheading }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex md:flex-row justify-center gap-20 mt-6 text-gray-300 font-semibold uppercase"
          >
            <div v-for="index in 5" :key="index">@ITSquarehub</div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto py-4">
      <div class="flex justify-center">
        <div
          class="inline-flex items-center px-3 py-1 rounded-full text-lg font-medium bg-blue-200 text-blue-800 mt-5"
        >
          Our Team
        </div>
      </div>
      <div class="flex flex-col justify-center text-center">
        <div class="text-3xl font-bold uppercase mt-4">
          {{ about[0]?.section_4_heading }}
        </div>
        <div>
          <div class="relative mt-6 overflow-x-hidden">
            <button
              @click="prevSlide"
              :disabled="isPrevDisabled"
              :class="{
                'bg-gray-300': isPrevDisabled,
                'bg-blue-200': !isPrevDisabled,
              }"
              class="absolute left-0 top-1/2 transform -translate-y-1/2 text-blue-800 p-2 rounded-full"
            >
              <ChevronDoubleLeftIcon class="h-6 w-auto" />
            </button>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div
                v-for="(member, index) in about[0]?.section_4_cards.slice(
                  currentSlide * 8,
                  currentSlide * 8 + 8
                )"
                :key="index"
                :class="[
                  'rounded-lg shadow-md p-4 flex flex-col items-center w-[300px]',
                  index % 4 === 0
                    ? 'bg-blue-100/50'
                    : index % 4 === 1
                    ? 'bg-purple-100/50'
                    : index % 4 === 2
                    ? 'bg-yellow-100/50'
                    : 'bg-cyan-100/50',
                ]"
                class="w-full sm:w-[300px]"
              >
                <img
                  :src="urlFor(member.image.asset._ref)"
                  alt="Team Member Image"
                  class="w-full h-48 object-cover rounded-lg mb-2"
                />
                <div class="text-lg font-bold text-center">
                  {{ member.heading }}
                </div>
                <div class="text-gray-500 text-center">
                  {{ member.subheading }}
                </div>
              </div>
            </div>
            <button
              @click="nextSlide"
              :disabled="isNextDisabled"
              :class="{
                'bg-gray-300': isNextDisabled,
                'bg-blue-200': !isNextDisabled,
              }"
              class="absolute right-0 top-1/2 transform -translate-y-1/2 text-blue-800 p-2 rounded-full"
            >
              <ChevronDoubleRightIcon class="h-6 w-auto" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Testimonials -->
    <div class="container mx-auto py-4">
      <div class="flex flex-col items-center justify-center space-y-5">
        <div
          class="inline-flex items-center px-3 py-1 rounded-full text-lg font-medium bg-blue-200 text-blue-800 mt-5"
        >
          Testimonials
        </div>
        <div class="text-3xl font-bold uppercase mt-4">
          hear it from our clients!
        </div>

        <div
          class="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background"
        >
          <!-- First Marquee -->
          <Marquee pause-on-hover class="[--duration:20s]">
            <ReviewCard
              v-for="testimonial in about[0]?.section_5_testimonials"
              :key="testimonial.author"
              img="https://placehold.co/400"
              :name="testimonial.author"
              :body="testimonial.message"
            />
          </Marquee>

          <!-- Second Marquee (reverse) -->
          <Marquee reverse pause-on-hover class="[--duration:20s]">
            <ReviewCard
              v-for="testimonial in about[0]?.section_5_testimonials"
              :key="testimonial.author"
              img="https://placehold.co/400"
              :name="testimonial.author"
              :body="testimonial.message"
            />
          </Marquee>

          <!-- Left Gradient -->
          <div
            class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"
          ></div>

          <!-- Right Gradient -->
          <div
            class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"
          ></div>
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
