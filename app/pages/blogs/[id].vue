<template>
  <div
    class="inset-0 h-lg w-full bg-white bg-[linear-gradient(to_right,#80808012_3px,transparent_1px),linear-gradient(to_bottom,#80808012_3px,transparent_1px)] bg-[size:100px_100px]"
  >
    <!-- Hero Section -->
    <div
      :style="{
        backgroundImage: blogImage ? `url(${blogImage})` : '',
      }"
      class="bg-cover bg-center w-full h-[580px] animate-fade-grid-in-3 to-[#2a2a2a] flex flex-col items-center text-center px-4 pt-20 relative"
    >
      <div
        class="absolute inset-0 bg-black opacity-80 z-5 animate-fade-grid-in-2"
      ></div>
      <div
        v-if="blogData"
        class="animate-fade-in-3 flex flex-col items-center justify-center z-10"
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
      </div>

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
      class="w-full max-w-[1145px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 mt-0 sm:mt-16 text-black"
    >
      <article class="space-y-8 sm:space-y-12">
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
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
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

<style scoped>
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