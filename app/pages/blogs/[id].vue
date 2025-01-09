<template>
  <div
    class="bg-[url('@/assets/images/bg-blog-details.png')] bg-cover bg-center w-full min-h-screen bg-no-repeat sm:bg-contain md:bg-cover"
  >
    <!-- Hero Section -->
    <div
      class="w-full h-[580px] bg-gradient-to-br from-[#272727] to-[#1a1a1a] flex flex-col items-center text-center px-4 pt-20 relative"
    >
      <!-- Title -->
      <h1
        class="w-full max-w-[840px] font-medium text-[28px] sm:text-[40px] lg:text-[50px] leading-[36px] sm:leading-[48px] lg:leading-[55px] text-white mb-6 sm:mb-10"
      >
        {{ blogData?.heading }}
      </h1>

      <!-- Description -->
      <p
        class="w-full max-w-[603px] font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[20px] sm:leading-[22px] lg:leading-[24px] text-white mb-8"
      >
        {{ blogData?.subheading }}
      </p>

      <!-- Featured Image -->
      <div
        class="relative w-full max-w-[648px] mx-auto mt-4 mb-8 sm:mt-4 sm:mb-12"
      >
        <div
          class="relative w-full pt-[62.3%] rounded-[15px] border-[6px] sm:border-[10px] border-[#606DF1] overflow-hidden mb-12"
        >
          <img
            :src="blogImage"
            alt="Philippine Outsourcing"
            class="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>

    <!-- Content Section -->
    <div
      class="w-full max-w-[1145px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 mt-0 sm:mt-16 text-[#565656]"
    >
      <article class="space-y-8 sm:space-y-12 mt-16">
        <section>
          <h2 class="font-semibold text-2xl sm:text-3xl mb-2 sm:mt-14 mt-0">
            {{ blogData?.introTitle }}
          </h2>
          <p class="text-base sm:text-xl">
            {{ blogData?.introDescription }}
          </p>
        </section>

        <section
          v-for="(section, index) in blogData?.bodyTitle?.sections"
          :key="index"
        >
          <h2 class="font-semibold text-2xl sm:text-3xl mb-2">
            {{ section.miniTitle }}
          </h2>
          <p class="text-base sm:text-xl">
            {{ section.description }}
          </p>
        </section>

        <section>
          <h2 class="font-semibold text-2xl sm:text-3xl mb-2 sm:mt-14 mt-0">
            {{ blogData?.conclusionTitle }}
          </h2>
          <p class="text-base sm:text-xl">
            {{ blogData?.conclusionDescription }}
          </p>
        </section>
      </article>
    </div>

    <!-- Our Blogs Button -->
    <!-- <div class="w-full max-w-[1145px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="w-full sm:w-[235px] h-[55px] mb-4">
        <button class="w-full h-full bg-[#844DDC]/[0.19] rounded-[40px]">
          <span
            class="font-normal text-[18px] sm:text-[20px] lg:text-[25px] leading-[26px] sm:leading-[30px] text-[#844DDC]"
          >
            Our Blogs
          </span>
        </button>
      </div>
    </div> -->

    <!-- <div
      class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 w-full max-w-4xl px-4 mx-auto mb-20"
    >
      <div
        v-for="(blog, index) in visibleBlogs"
        :key="index"
        class="relative box-border w-full h-auto bg-white border border-[#844DDC] shadow-[0px_4px_12.1px_rgba(0,0,0,0.25)] rounded-[10px] overflow-hidden"
      >
      
        <div class="w-full h-48 sm:h-60 md:h-72">
          <img :src="blog.image" class="w-full h-full object-cover" />
        </div>

       
        <div class="p-4 sm:p-6">
          <h2
            class="font-normal text-lg sm:text-xl md:text-2xl leading-[28px] text-black"
          >
            {{ blog.title }}
          </h2>
          <p
            class="mt-2 w-full font-normal text-sm sm:text-base md:text-[17px] leading-[18px] text-[#565656]"
          >
            {{ blog.description }}
          </p>

   
          <NuxtLink
            :to="blog.link"
            class="mt-4 w-full sm:w-[109px] h-[32px] bg-[#606DF1] rounded-[6px] text-white text-sm sm:text-[15px] leading-[18px] tracking-[-0.03em] flex items-center justify-center"
          >
            Read More
          </NuxtLink>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import blogimage1 from "@/assets/images/blog1.png";
import { useRouter } from "vue-router";
import sanityClient from "~/hooks/sanityClient";
import type { BlogData } from "~/types/blogData";
import { urlFor } from "~/hooks/sanityImageUrl";

const blogData = ref<BlogData>();
const blogImage = ref("");
console.log(blogData);
console.log(blogImage);

onMounted(async () => {
  const router = useRouter();
  const { id } = router.currentRoute.value.params;
  try {
    blogData.value = await sanityClient.fetch<BlogData>(
      `*[_type == "blogData" && _id == "${id}"][0]`
    );
    if (blogData.value) {
      blogImage.value = urlFor(blogData.value.icon);
    }
  } catch (error) {
    console.error("Failed to fetch blog data:", error);
  }
});
</script>
