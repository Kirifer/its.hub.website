<template>
  <div class="graph-paper-container">
    <!-- Main Content -->
    <div
      class="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-2"
    >
      <!-- Blog Header Card -->
      <div
        class="relative w-full max-w-[714px] max-h-[321px] mx-auto mt-[50px] bg-white border border-[#606DF1] shadow-[0px_4px_12.1px_rgba(0,0,0,0.25)] rounded-[20px] p-6 sm:p-8 flex flex-col items-center justify-center"
      >
        <h1 class="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900">
          {{ blogs?.hero_title || "Our Blog" }}
        </h1>
        <p
          class="mt-4 text-sm sm:text-base md:text-lg text-gray-600 text-center max-w-xl"
        >
          {{
            blogs?.hero_subtitle ||
            "Discover the newest trends, strategies, and valuable insights in outsourcing to enhance your business strategy."
          }}
        </p>
      </div>

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
        class="absolute w-[382px] h-[386px] rounded-full left-[-100px] top-56 z-0"
        :style="{
          background:
            'radial-gradient(circle, rgba(142,212,246,0.3) 0%, rgba(142,212,246,0) 70%)',
          transform: 'rotate(-116.85deg)',
          filter: 'blur(50px)',
        }"
      />
<!-- Yellow gradient smaller and positioned to the right -->
<div
  class="absolute w-[400px] h-[400px] rounded-full right-[-20px] top-12 z-0"
  :style="{
    background:
      'radial-gradient(circle, rgba(254,223,59,0.3) 0%, rgba(254,223,59,0) 70%)',
    transform: 'rotate(-116.85deg)',
    filter: 'blur(50px)',
  }"
/>

      <!-- Blue gradient Right-->
      <div
        class="absolute w-[382px] h-[386px] rounded-full right-[-100px] top-[30px] z-0"
        :style="{
          background:
            'radial-gradient(circle, rgba(142,212,246,0.3) 0%, rgba(142,212,246,0) 70%)',
          transform: 'rotate(-116.85deg)',
          filter: 'blur(50px)',
        }"
      />
      <!-- Cyan gradient Right -->
      <div
        class="absolute w-[382px] h-[386px] rounded-full right-[-100px] top-40 z-0"
        :style="{
          background:
            'radial-gradient(circle, rgba(145,77,176,0.3) 0%, rgba(145,77,176,0) 70%)',
          transform: 'rotate(-116.85deg)',
          filter: 'blur(50px)',
        }"
      />

      <!-- Blog Cards Container -->
      <div
        class="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl px-4"
      >
        <!-- Blog Card -->
        <div
          v-for="(blog, index) in blogs?.section1_cards"
          :key="index"
          class="relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
        >
          <!-- Blog Image -->
          <div class="w-full h-48 sm:h-60 md:h-72">
            <img
              :src="urlFor(blog.icon)"
              :alt="blog.heading"
              class="w-full h-full object-cover"
            />
          </div>
          <!-- Title, Description, and Read More Button -->
          <div class="p-6">
            <h2 class="text-xl sm:text-2xl font-semibold text-gray-900">
              {{ blog.heading }}
            </h2>
            <p class="mt-2 text-sm sm:text-base text-gray-600">
              {{ blog.subheading }}
            </p>
            <!-- Read More Button -->
            <NuxtLink
              :to="`/blog/${blog.id}`"
              class="mt-4 inline-block px-4 py-2 bg-[#606DF1] text-white rounded-md hover:bg-[#4F5CD8] transition-colors text-sm sm:text-base"
            >
              {{ blog.button || "Read More" }}
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Pagination Buttons -->
      <div class="mt-8 flex justify-center gap-4">
        <button
          v-if="currentPage > 1"
          @click="navigate(-1)"
          class="px-4 py-2 bg-transparent border border-[#606DF1] rounded-full hover:bg-[#606DF1] hover:text-white transition-colors"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          v-if="currentPage < totalPages"
          @click="navigate(1)"
          class="px-4 py-2 bg-transparent border border-[#606DF1] rounded-full hover:bg-[#606DF1] hover:text-white transition-colors"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
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

interface BlogData {
  id: string;
  heading: string;
  subheading: string;
  icon: {
    asset: {
      _ref: string;
    };
  };
  button: string;
}

interface BlogPost {
  hero_title: string;
  hero_subtitle: string;
  section1_cards: BlogData[];
}

const blogs = ref<BlogPost | null>(null);
const currentPage = ref(1);
const itemsPerPage = ref(6);
const totalPages = computed(() => {
  return Math.ceil(
    (blogs.value?.section1_cards?.length || 0) / itemsPerPage.value
  );
});
const visibleBlogs = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return blogs.value?.section1_cards?.slice(start, end) || [];
});

function navigate(direction: number) {
  currentPage.value += direction;
}

onMounted(async () => {
  try {
    const data = await sanityClient.fetch(`
      *[_type == "blogs"][0] {
        hero_title,
        hero_subtitle,
        section1_cards[]-> {
          _id,
          heading,
          subheading,
          icon,
          button
        }
      }
    `);
    console.log(data); // Debugging: Inspect the fetched data
    if (data) {
      blogs.value = {
        hero_title: data.hero_title,
        hero_subtitle: data.hero_subtitle,
        section1_cards: data.section1_cards.map((card: any) => ({
          id: card._id,
          heading: card.heading,
          subheading: card.subheading,
          icon: card.icon,
          button: card.button,
        })),
      };
    }
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
  }
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
</style>
