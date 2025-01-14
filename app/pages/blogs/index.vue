<template>
  <div>
    <div class="inset-0 h-full w-full bg-white rounded-2xl">
      <div class="inset-0 h-full w-full bg-white">
        <div v-if="blogs.length > 0" class="relative">
          <div
            class="overflow-hidden h-[450px] relative bg-center bg-cover bg-[url('~/assets/images/its-hiring.jpg')] animate-fade-grid-in-3"
          >
            <div
              class="absolute inset-0 bg-black opacity-60 z-5 animate-fade-grid-in-2"
            ></div>
            <div class="animate-fade-in">
              <div class="h-[550px] relative bg-cover rounded-2xl">
                <div
                  class="absolute inset-0 h-[500px] flex items-center justify-center z-20"
                >
                  <div class="absolute top-[225px]">
                    <div
                      class="w-[950px] h-[950px] rounded-full border-2 border-[rgba(163,162,162,0.005)] shadow-[0px_4px_116.8px_5px_rgba(0,0,0,0.1)] animate-pulse-once"
                    ></div>
                  </div>
                  <div
                    class="absolute left-1/2 -translate-x-1/2 translate-y-[450px]"
                  >
                    <div
                      class="w-[750px] h-[750px] rounded-full border-2 border-[rgba(163,162,162,0.01)] shadow-[0px_4px_116.8px_5px_rgba(0,0,0,0.13)] animate-pulse-once"
                    ></div>
                  </div>
                  <div
                    class="absolute left-1/2 -translate-x-1/2 translate-y-[450px]"
                  >
                    <div
                      class="w-[550px] h-[550px] rounded-full border-2 border-[rgba(163,162,162,0.005)] shadow-[0px_4px_116.8px_5px_rgba(0,0,0,0.13)] animate-pulse-once"
                    ></div>
                  </div>
                </div>
              </div>

              <div class="container mx-auto px-4 absolute inset-0">
                <div
                  class="absolute w-[382px] h-[386px] rounded-full left-[-200px] -top-24 z-0"
                  :style="{
                    background:
                      'radial-gradient(circle, rgba(145,77,176,0.6) 0%, rgba(145,77,176,0) 70%)',
                    transform: 'rotate(-116.85deg)',
                    filter: 'blur(50px)',
                  }"
                />

                <div
                  class="absolute w-[382px] h-[386px] rounded-full left-[-200px] top-[350px] z-0"
                  :style="{
                    background:
                      'radial-gradient(circle, rgba(142,212,246,0.6) 0%, rgba(142,212,246,0) 70%)',
                    transform: 'rotate(-116.85deg)',
                    filter: 'blur(50px)',
                  }"
                />

                <div
                  class="absolute w-[382px] h-[386px] rounded-full right-[-200px] -top-24 z-0"
                  :style="{
                    background:
                      'radial-gradient(circle, rgba(142,212,246,0.6) 0%, rgba(142,212,246,0) 70%)',
                    transform: 'rotate(-116.85deg)',
                    filter: 'blur(50px)',
                  }"
                />

                <div
                  class="absolute w-[382px] h-[386px] rounded-full right-[-200px] top-[350px] z-0"
                  :style="{
                    background:
                      'radial-gradient(circle, rgba(145,77,176,0.6) 0%, rgba(145,77,176,0) 50%)',
                    transform: 'rotate(-116.85deg)',
                    filter: 'blur(50px)',
                  }"
                />
                <div
                  class="relative flex flex-col items-center justify-center space-y-5 md:space-y-7 z-20"
                >
                  <div class="mt-10">
                    <span
                      class="inline-flex items-center px-3 gap-2 py-1 rounded-full text-lg font-medium bg-purple-200 text-purple-800"
                    >
                      <FileTextIcon class="w-6 h-6 text-purple-800" />
                      Fuel Your Curiosity
                    </span>
                  </div>
                  <div
                    class="font-bold text-center text-3xl md:text-6xl w-[350px] md:w-[700px] text-white"
                  >
                    {{ blogs[0]?.hero_title }}
                  </div>
                  <div
                    class="text-center text-lg md:text-xl text-gray-100 w-full md:w-[700px]"
                  >
                    <TextGenerateEffect
                      :words="blogs[0]?.hero_subtitle"
                      class=""
                    />
                  </div>

                  <div
                    class="flex flex-col sm:flex-row space-y-4 pt-8 sm:space-y-0 sm:space-x-4 w-full md:w-auto"
                  >
                    <input
                      v-model="searchQuery"
                      type="text"
                      placeholder="Search blogs..."
                      class="px-4 py-2 md:w-[500px] border-2 border-purple-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 w-full mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto py-4">
      <transition-group
        name="fade"
        class="flex flex-col mb-10 md:-mt-4 -mt-10"
        tag="div"
      >
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
                    class="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-violet-200 text-violet-800"
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
import { FileTextIcon } from "lucide-vue-next";

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
  if (selectedTag.value) {
    searchQuery.value = "";
    return blogs.value
      .flatMap((blog) => blog.section1_cards)
      .filter((blog) => {
        return blog.tags.includes(selectedTag.value);
      });
  } else if (searchQuery.value) {
    selectedTag.value = "";
    return blogs.value
      .flatMap((blog) => blog.section1_cards)
      .filter((blog) => {
        return blog.heading
          .toLowerCase()
          .includes(searchQuery.value.toLowerCase());
      });
  } else {
    return blogs.value.flatMap((blog) => blog.section1_cards);
  }
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
.animate-fade-grid-in-3 {
  animation: grid-fade-in2 0.8s ease-out;
}

@keyframes grid-fade-in2 {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-grid-in-2 {
  animation: grid-fade-in 2s ease-out;
}

@keyframes grid-fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.6;
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
</style>
