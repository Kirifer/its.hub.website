<template>
  <div
    class="inset-0 w-full bg-white bg-[linear-gradient(to_right,#80808012_3px,transparent_1px),linear-gradient(to_bottom,#80808012_3px,transparent_1px)] bg-[size:100px_100px] animate-fade-grid-in-2"
  >
    <!-- Main Content -->
    <div
      class="relative z-10 flex flex-col items-center animate-fade-in justify-center min-h-screen px-4 py-12"
    >
      <div class="mt-2">
        <span
          class="inline-flex items-center px-3 py-0.5 rounded-full text-lg font-medium bg-blue-200 text-blue-800"
          >Services</span
        >
      </div>

      <div class="p-6 sm:p-8 flex flex-col items-center justify-center">
        <h1 class="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900">
          Services
        </h1>
        <p
          class="mt-4 text-sm sm:text-base md:text-lg text-gray-600 text-center max-w-xl"
        >
          Explore innovative solutions tailored to your needs, from cutting-edge
          technology integration to expert consulting services, designed to
          empower your business, streamline operations, and drive growth in
          today's competitive landscape.
        </p>
      </div>
      <!-- Gradients (unchanged) -->
      <div
        class="absolute w-[40vw] h-[40vw] rounded-full left-[-15vw] top-[5vh] z-0"
        :style="{
          background:
            'radial-gradient(circle, rgba(145,77,176,0.3) 0%, rgba(145,77,176,0) 70%)',
          transform: 'rotate(-116.85deg)',
          filter: 'blur(50px)',
        }"
      />
      <div
        class="absolute w-[40vw] h-[40vw] rounded-full left-[-15vw] top-[25vh] z-0"
        :style="{
          background:
            'radial-gradient(circle, rgba(142,212,246,0.3) 0%, rgba(142,212,246,0) 70%)',
          transform: 'rotate(-116.85deg)',
          filter: 'blur(50px)',
        }"
      />

      <div
        class="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-6xl px-4"
      >
        <div
          v-for="(blog, index) in visibleBlogs"
          :key="index"
          class="relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-auto"
        >
          <div class="w-full h-25 sm:h-30 md:h-48">
            <img
              :src="urlFor(blog.icon)"
              :alt="blog.heading"
              class="w-full h-full object-cover"
            />
          </div>
          <!-- Title and Read More Link -->
          <div class="p-4">
            <h2
              class="text-md sm:text-xl font-semibold text-gray-900 leading-snug"
            >
              {{ blog.heading }}
            </h2>
            <!-- Read More Link with Chevron (After Heading) -->
            <NuxtLink
              :to="`/blog/${blog.id}`"
              class="mt-2 inline-flex items-center text-[#606DF1] hover:text-[#4F5CD8] transition-colors"
            >
              <span
                class="text-sm text-end sm:text-base absolute bottom-4 right-4"
                >Read More</span
              >
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
    <ChevronLeftIcon class="w-6 h-6 stroke-[#606DF1] hover:stroke-white transition-colors" />
  </button>
  <button
    v-if="currentPage < totalPages"
    @click="navigate(1)"
    class="px-4 py-2 bg-transparent border border-[#606DF1] rounded-full hover:bg-[#606DF1] hover:text-white transition-colors"
  >
    <ChevronRightIcon class="w-6 h-6 stroke-[#606DF1] hover:stroke-white transition-colors" />
  </button>
</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import sanityClient from "@/hooks/sanityClient";
import { urlFor } from "@/hooks/sanityImageUrl";
import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-vue-next";

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
const itemsPerPage = ref(8);
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
      *[_type == "services"][0] {
        ...,
        section1_cards[]-> {
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
  animation: fade-in 0.6s ease-out forwards;
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
</style>
