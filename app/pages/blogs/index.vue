<template>
  <div>
    <div
      class="inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_3px,transparent_1px),linear-gradient(to_bottom,#80808012_3px,transparent_1px)] bg-[size:100px_100px]"
    >
      <!-- Hero Section -->
      <div class="relative">
        <div class="overflow-hidden h-[550px] relative">
          <div
            class="absolute inset-0 h-[500px] flex items-center justify-center z-0"
          >
            <!-- Ellipse Decorations -->
            <div class="absolute -top-[425px]">
              <div
                class="w-[950px] h-[950px] rounded-full border-2 border-[rgba(163,162,162,0.005)] shadow-[0px_4px_116.8px_5px_rgba(0,0,0,0.1)] animate-pulse-once"
              ></div>
            </div>
            <div
              class="absolute left-1/2 -translate-x-1/2 -translate-y-[200px]"
            >
              <div
                class="w-[750px] h-[750px] rounded-full border-2 border-[rgba(163,162,162,0.01)] shadow-[0px_4px_116.8px_5px_rgba(0,0,0,0.13)] animate-pulse-once"
              ></div>
            </div>
          </div>
        </div>

        <div class="container mx-auto px-4 absolute inset-0">
          <div
            class="flex flex-col items-center justify-center space-y-5 md:space-y-10"
          >
            <div class="mt-10">
              <span
                class="inline-flex items-center px-3 py-0.5 rounded-full text-lg font-medium bg-blue-200 text-blue-800"
              >
                {{ blogs[0]?.hero_title }}
              </span>
            </div>
            <div
              class="font-bold text-center text-3xl md:text-6xl w-[350px] md:w-[700px]"
            >
              Explore the Latest Blogs
            </div>
            <div
              class="text-center text-lg md:text-xl text-gray-900 w-full md:w-[700px]"
            >
              {{ blogs[0]?.hero_subtitle }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Blog Cards Section -->
    <div class="container mx-auto py-4">
      <!-- Sticky Search Bar Section -->
      <div
        class="md:flex flex-row justify-center gap-2 md:space-y-0 space-y-3 mx-3 mt-5 py-5 px-6 rounded-none md:rounded-full bg-white md:bg-blue-300 text-blue-800 sticky z-10 transition-all duration-300 ease-in-out"
        :class="{ 'md:shadow-lg md:top-[20px]': isScrolled, 'top-0': !isScrolled }"
      
      >
        <div class="w-full md:w-3/4">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search blogs..."
            class="w-full p-2 rounded-full border text-blue-800 placeholder-blue-800 placeholder:font-semibold focus:border-blue-800"
          />
        </div>
        <div class="w-full md:w-1/4">
          
          <select
            v-model="selectedTag"
            class="w-full p-2 rounded-full border border-gray-300"
          >
            <option value="">All Tags</option>
            <option v-for="tag in uniqueTags" :key="tag" :value="tag">
              {{ tag }}
            </option>
          </select>
        </div>
      </div>

      <transition-group name="fade" class="flex flex-col mb-10" tag="div">
        <div
          v-for="(blog, index) in filteredBlogs"
          :key="blog.id"
          class="opacity-0 translate-y-7 transition duration-500 ease-in-out"
          :class="{ 'opacity-100 translate-y-0': isVisible[index] }"
          ref="blogRefs"
        >
          <NuxtLink :to="`/blogs/${blog._id}`">
            <div
              class="flex flex-col md:flex-row gap-6 items-center justify-center h-auto md:h-[200px] hover:bg-gray-100 p-4 md:p-0"
            >
              <div>
                <img
                  :src="blogImage[index]"
                  alt="Client Avatar"
                  class="rounded-md hidden md:block md:w-[200px] h-[150px] object-cover"
                />
              </div>
              <div class="w-full md:w-[80%] space-y-2">
                <div class="text-2xl md:text-3xl font-bold hover:underline">
                  {{ blog.heading }}
                </div>
                <div
                  class="text-lg text-gray-600"
                  :class="{ 'line-clamp-3': blog.subheading.length > 100 }"
                >
                  {{ blog.introDescription }}
                </div>
                <div class="flex flex-wrap space-x-2">
                  <span
                    v-for="tag in blog.tags"
                    :key="tag"
                    class="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-blue-200 text-blue-800"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Blogs } from "~/types/blogs";
import sanityClient from "~/hooks/sanityClient";
import { ref, onMounted, nextTick, computed } from "vue";
import { urlFor } from "@/hooks/sanityImageUrl";

const blogs = ref<Blogs[]>([]);
const blogImage = ref([""]);
const blogRefs = ref<HTMLElement[]>([]);
const isVisible = ref<boolean[]>([]);
const searchQuery = ref<string>("");
const selectedTag = ref<string>("");
const isScrolled = ref<boolean>(false);

onMounted(async () => {
  try {
    blogs.value = await sanityClient.fetch<Blogs[]>(
      '*[_type == "blogs"]{..., "section1_cards" : section1_cards[]->}'
    );
    if (blogs.value.length > 0) {
      blogImage.value = blogs.value[0].section1_cards.map((card) =>
        urlFor(card.icon)
      );
      isVisible.value = new Array(blogs.value[0].section1_cards.length).fill(
        false
      );

      nextTick(() => {
        setupObserver();
      });
    }
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
  }

  window.addEventListener("scroll", handleScroll);
});

function handleScroll() {
  isScrolled.value = window.scrollY > 0;
}

function setupObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = blogRefs.value.indexOf(entry.target as HTMLElement);
          if (index !== -1) {
            isVisible.value[index] = true;
          }
        }
      });
    },
    { threshold: 0.2 }
  );

  blogRefs.value.forEach((el) => {
    if (el) observer.observe(el);
  });
}

const filteredBlogs = computed(() => {
  return blogs.value[0]?.section1_cards.filter((blog) => {
    const matchesSearch = blog.heading
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase());
    const matchesTag =
      !selectedTag.value || blog.tags.includes(selectedTag.value);
    return matchesSearch && matchesTag;
  });
});

const uniqueTags = computed(() => {
  const tags =
    blogs.value[0]?.section1_cards.flatMap((blog) => blog.tags) || [];
  return [...new Set(tags)];
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}


</style>
