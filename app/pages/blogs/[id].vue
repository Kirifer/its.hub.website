<template>
  <div
    class="inset-0 h-lg w-full bg-white bg-[linear-gradient(to_right,#80808012_3px,transparent_1px),linear-gradient(to_bottom,#80808012_3px,transparent_1px)] bg-[size:100px_100px]"
  >
    <div
      :style="{
        backgroundImage: blogImage ? `url(${blogImage})` : '',
      }"
      class="bg-cover bg-center w-full h-[580px] animate-fade-grid-in-3 to-[#2a2a2a] flex flex-col items-center text-center px-4 pt-10 relative"
    >
      <div
        class="absolute inset-0 bg-black opacity-80 z-5 animate-fade-grid-in-2"
      ></div>
      <div
        v-if="blogData"
        class="animate-fade-in-3 flex flex-col items-center justify-center z-10"
      >
        <h1
          class="w-full animate-fade-in max-w-[940px] pb-4 font-medium text-[28px] sm:mb-4 sm:text-4xl md:text-6xl leading-[36px] sm:leading-[48px] lg:leading-[55px] text-white text-center z-10"
        >
          {{ blogData?.title }}
        </h1>

        <p
          class="w-full text-sm animate-fade-in sm:text-base md:text-xl text-gray-600 text-white max-w-2xl mb-6 text-center z-10"
        >
          {{ blogData?.subtitle }}
        </p>
      </div>

      <div
        class="relative w-full max-w-[648px] mx-auto mt-4 mb-8 sm:mt-4 sm:mb-12"
      >
        <div
          v-if="blogImage.length > 0"
          class="relative w-full pt-[62.3%] rounded-[15px] animate-fade-in border-[6px] sm:border-[10px] border-[#606DF1] overflow-hidden mb-12"
        >
          <img
            v-if="blogImage.length > 0"
            :src="blogImage"
            alt="Philippine Outsourcing"
            class="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>

    <div
      class="w-full animate-fade-in max-w-[1145px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 mt-0 sm:mt-16 text-black"
    >
      <article class="space-y-8 sm:space-y-12">
        <section>
          <h2 class="font-semibold text-2xl sm:text-3xl mb-2 sm:mt-14 mt-0">
            {{ blogData?.introduction_title }}
          </h2>
          <p class="text-base sm:text-xl">
            {{ blogData?.introduction_description }}
          </p>
        </section>

        <section v-for="(section, index) in blogData?.body" :key="index">
          <h2 class="font-semibold text-2xl sm:text-3xl mb-2">
            {{ section.title }}
          </h2>
          <p class="text-lg sm:text-xl">
            {{ section.description }}
          </p>

          <div
            v-if="section.list && section.list.some((item) => item.image_1)"
            class="flex flex-col md:flex-row items-center gap-12 mt-8"
          >
            <div class="md:w-1/2 space-y-4">
              <h3
                class="text-2xl sm:text-3xl font-semibold text-center text-gray-900"
              >
                {{ section.title }}
              </h3>
            </div>
            <div class="md:w-1/2 space-y-4">
              <div v-for="(item, itemIndex) in section.list" :key="itemIndex">
                <div
                  v-if="item.image_1"
                  class="relative bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 p-1 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
                  style="width: 100%; height: 200px"
                >
                  <div
                    class="w-[475px] h-full md:w-full bg-purple-100 flex items-center text-center rounded-xl justify-center relative"
                  >
                    <img
                      :src="urlFor(item.image_1.asset._ref)"
                      alt="Item Image"
                      class="object-cover w-full h-full md:w-full md:h-full rounded-xl"
                    />
                    <div
                      class="absolute inset-0 bg-black rounded-xl bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                    >
                      <span class="text-white text-lg font-semibold">{{
                        item.title
                      }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            v-if="section.list"
            class="flex flex-col md:flex-row gap-12 mt-8"
          >
            <div class="md:w-1/2 space-y-4">
              <ul class="space-y-4 text-gray-900 text-lg sm:text-xl">
                <li
                  v-for="(item, itemIndex) in section.list.slice(
                    0,
                    Math.ceil(section.list.length / 2)
                  )"
                  :key="itemIndex"
                >
                  <span class="font-bold">{{ item.title }}</span>
                  <p
                    v-for="(desc, descIndex) in item.description"
                    :key="descIndex"
                  >
                    {{ desc }}
                  </p>
                </li>
              </ul>
            </div>
            <div class="md:w-1/2 space-y-4">
              <ul class="space-y-4 text-gray-900 text-lg sm:text-xl">
                <li
                  v-for="(item, itemIndex) in section.list.slice(
                    Math.ceil(section.list.length / 2)
                  )"
                  :key="itemIndex"
                >
                  <strong>{{ item.title }}</strong>
                  <p
                    v-for="(desc, descIndex) in item.description"
                    :key="descIndex"
                  >
                    {{ desc }}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 class="font-semibold text-2xl sm:text-3xl mb-2 sm:mt-14 mt-0">
            {{ blogData?.conclusion_title }}
          </h2>
          <p class="text-base sm:text-xl">
            {{ blogData?.conclusion_description }}
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

const blogData = ref<BlogData | null>(null);
const blogImage = ref("");

const route = useRoute();
const id = route.params.id as string;

onMounted(async () => {
  try {
    const blogQuery = `*[_type == "blogData" && _id == $id][0]`;
    const blog = await sanityClient.fetch<BlogData>(blogQuery, { id });

    if (blog) {
      blogData.value = blog;
      blogImage.value = urlFor(blog.icon);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
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
