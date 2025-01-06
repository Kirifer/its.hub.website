<template>
  <div
    class="bg-[url('@/assets/images/bg-blogs.png')] bg-cover bg-center w-full min-h-screen bg-no-repeat sm:bg-contain md:bg-cover"
  >
    <!-- Main Content -->
    <div
      class="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-2"
    >
      <!-- Blog Header Card -->
      <div
        class="relative w-full max-w-[714px] max-h-[321px] mx-auto mt-[50px] bg-white border border-[#606DF1] shadow-[0px_4px_12.1px_rgba(0,0,0,0.25)] rounded-[20px] p-6 sm:p-8 flex flex-col items-center justify-center"
      >
        <h1 class="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900">
          {{ blogs[0]?.hero_title }}
        </h1>
        <p
          class="mt-4 text-sm sm:text-base md:text-lg text-gray-600 text-center max-w-xl"
        >
          Discover the newest trends, strategies, and valuable insights in
          outsourcing to enhance your business strategy.
          {{ blogs[0]?.hero_subtitle }}
        </p>
      </div>
      <!-- Blog Cards Container -->
      <div
        class="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 w-full max-w-4xl px-4"
      >
        <div
          v-for="(blog, index) in visibleBlogs"
          :key="index"
          class="relative box-border w-full h-auto bg-white border border-[#844DDC] shadow-[0px_4px_12.1px_rgba(0,0,0,0.25)] rounded-[10px] overflow-hidden"
        >
          <!-- Blog Image -->
          <div class="w-full h-48 sm:h-60 md:h-72">
            <img :src="blogs[0]?.icon" class="w-full h-full object-cover" />
          </div>
          <!-- Title, Description, and Read More Button -->
          <div class="p-4 sm:p-6">
            <h2
              class="font-['lato'] font-normal text-lg sm:text-xl md:text-2xl leading-[28px] text-black"
            >
              {{ blog?.section_1[0]?.heading }}
            </h2>
            <p
              class="mt-2 w-full font-['lato'] font-normal text-sm sm:text-base md:text-[17px] leading-[18px] text-[#565656]"
            >
              {{ blog?.section_1[0]?.subheading }}
            </p>
            <!-- Read More Button -->
            <NuxtLink
              :to="blog.link"
              class="mt-4 w-full sm:w-[109px] h-[32px] bg-[#606DF1] rounded-[6px] text-white text-sm sm:text-[15px] leading-[18px] tracking-[-0.03em] flex items-center justify-center"
            >
              {{ blog?.section_1[0]?.button }}
            </NuxtLink>
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import sanityClient from "@/hooks/sanityClient";
import { urlFor } from "@/hooks/sanityImageUrl";
import { Link } from "#build/components";

// const builder = imageUrlBuilder(sanityClient);

// function urlFor(source) {
//   return builder.image(source);
// }

interface BlogPost {
  heading: string;
  subheading: string;
  icon?: string;
  link?: string;
  hero_title?: string;
  hero_subtitle?: string;
}

const blogs = ref<BlogPost[]>([]);
const currentPage = ref(1);
const itemsPerPage = ref(4);
const totalPages = computed(() => {
  return Math.ceil(blogs.value.length / itemsPerPage.value);
});
const visibleBlogs = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return blogs.value.slice(start, end);
});

function navigate(direction: number) {
  currentPage.value += direction;
}

function resetAutoplay() {
  console.log("Autoplay reset");
}

onMounted(async () => {
  try {
    const data = await sanityClient.fetch('*[_type == "blog"]');
    blogs.value = data.map((item: any, index: number) => {
      console.log(item.section_1[0].heading, "heto yosdsdn");
      return {
        title: item.title,
        description: item.description,
        icon: urlFor(item.section_1[0].icon),
        link: links.value[index]?.link || "#",
        hero_title: item.hero_title,
        hero_subtitle: item.hero_subtitle,
        section_1: item.section_1.map((section: any) => ({
          heading: section.heading,
          subheading: section.subheading,
          icon: section.icon,
          button: section.button,
        })),
      };
    });
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
  }
  resetAutoplay();
});

const links = ref([{ link: "/blog/1" }, { link: "/blog/2" }]);
</script>
<style scoped></style>
