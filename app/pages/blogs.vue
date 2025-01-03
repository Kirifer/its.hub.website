<template>
  <div
    class="bg-[url('@/assets/images/bg-blogs.png')] bg-cover bg-center w-full min-h-screen bg-no-repeat sm:bg-contain md:bg-cover"
  >
    <!-- Main Content -->
    <div
      class="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20"
    >
      <!-- Blog Header Card -->
      <div
        class="relative w-full max-w-[714px] max-h-[321px] mx-auto mt-[50px] bg-white border border-[#606DF1] shadow-[0px_4px_12.1px_rgba(0,0,0,0.25)] rounded-[20px] p-6 sm:p-8 flex flex-col items-center justify-center"
      >
        <h1 class="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900">
          Our Blog
        </h1>
        <p
          class="mt-4 text-sm sm:text-base md:text-lg text-gray-600 text-center max-w-xl"
        >
          Discover the newest trends, strategies, and valuable insights in
          outsourcing to enhance your business strategy.
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
            <img :src="blog.image" class="w-full h-full object-cover" />
          </div>

          <!-- Title, Description, and Read More Button -->
          <div class="p-4 sm:p-6">
            <h2
              class="font-['lato'] font-normal text-lg sm:text-xl md:text-2xl leading-[28px] text-black"
            >
              {{ blog.title }}
            </h2>
            <p
              class="mt-2 w-full font-['lato'] font-normal text-sm sm:text-base md:text-[17px] leading-[18px] text-[#565656]"
            >
              {{ blog.description }}
            </p>

            <!-- Read More Button -->
            <NuxtLink
              :to="blog.link"
              class="mt-4 w-full sm:w-[109px] h-[32px] bg-[#606DF1] rounded-[6px] text-white text-sm sm:text-[15px] leading-[18px] tracking-[-0.03em] flex items-center justify-center"
            >
              Read More
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

<script setup>
import { ref, computed } from "vue";
import blogimage1 from "@/assets/images/blog1.png";

const blogs = ref([
  {
    title: "Philippine Outsourcing Industry: Trends and Future Prospects",
    description:
      "Discover the growth potential of the Philippine outsourcing industry in this insightful overview. Learn about the latest trends and opportunities for businesses.",
    image: blogimage1,
    link: "/blog/1",
  },
  {
    title: "Sustainability in Tech",
    description:
      "Explore the latest green innovations transforming the tech industry.",
    image: blogimage1,
  },
  {
    title: "Remote Work Trends in 2024",
    description:
      "Learn about the evolving dynamics of remote work and its impact on productivity.",
    image: blogimage1,
  },
  {
    title: "The Rise of Blockchain Beyond Crypto",
    description:
      "Uncover how blockchain technology is being applied across industries.",
    image: blogimage1,
  },
  {
    title: "5 Tips for Staying Productive",
    description:
      "Simple and effective ways to maintain productivity throughout your day.",
    image: blogimage1,
  },
  {
    title: "Cybersecurity Essentials for 2024",
    description:
      "Stay protected with these key tips to enhance your digital security.",
    image: blogimage1,
  },
  {
    title: "Advancements in Renewable Energy",
    description:
      "Dive into the latest breakthroughs in renewable energy technologies.",
    image: blogimage1,
  },
  {
    title: "Digital Marketing in the Age of AI",
    description:
      "Understand how AI tools are revolutionizing the world of digital marketing.",
    image: blogimage1,
  },
  {
    title: "UX Design Best Practices",
    description:
      "Learn how to create user-friendly designs that drive engagement.",
    image: blogimage1,
  },
  {
    title: "Top Programming Languages to Learn",
    description: "Find out which programming languages are in demand for 2024.",
    image: blogimage1,
  },
  {
    title: "Building Resilience in Leadership",
    description:
      "Learn how to navigate challenges with resilience and confidence.",
    image: blogimage1,
  },
  {
    title: "Health Tech Innovations",
    description:
      "Explore cutting-edge technologies revolutionizing the healthcare industry.",
    image: blogimage1,
  },
  {
    title: "Cloud Computing for Beginners",
    description:
      "An introduction to cloud computing and its transformative power.",
    image: blogimage1,
  },
]);

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

function navigate(direction) {
  currentPage.value += direction;
}
</script>

<style scoped></style>
