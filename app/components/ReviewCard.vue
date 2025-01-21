<template>
  <figure
    class="relative w-64 cursor-pointer overflow-hidden rounded-xl border border-gray-950/[.1] bg-gray-950/[.01] p-4 hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
  >
    <div class="flex flex-row items-center gap-2">
      <NuxtImg :src="img" class="rounded-sm w-[35px] h-[25px]" width="40" height="40" alt="" />
      <div class="flex flex-col">
        
        <span class="text-sm font-medium dark:text-white">
          {{ name }}
        </span>
        <div class="stars  h-full w-full -mt-2.5">
          <span v-for="n in stars" :key="n" class="star">★</span>
        </div>
      </div>
    </div>
    <blockquote class="mt-2 text-sm">{{ body }}</blockquote>
  </figure>
</template>

<script lang="ts" setup>
interface Props {
  img: string;
  name: string;
  body: string;
  stars: number;
}

defineProps<Props>();
</script>

<style>
.star {
  color: gold;
}
</style>