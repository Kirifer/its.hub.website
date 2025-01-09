<template>
    <div :class="['text-6xl font-bold', props.class]">
      <span class="relative inline-block">
        <template v-for="sparkle in sparkles" :key="sparkle.id">
          <!-- Animated star SVG with fade, scale, and rotation effects -->
          <svg
            v-motion="{
              initial: { opacity: 0, scale: 0, rotate: 75 },
              enter: {
                opacity: [0, 1, 0],
                scale: [0, sparkle.scale, 0],
                rotate: [75, 120, 150],
                transition: {
                  duration: 800,
                  repeat: Infinity,
                  delay: sparkle.delay * 1000,
                },
              },
            }"
            class="pointer-events-none absolute z-20"
            :style="{
              left: sparkle.x,
              top: sparkle.y,
              opacity: 0,
            }"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L13.09 8.26L19 9.27L14.5 13.14L15.82 19.02L12 16.24L8.18 19.02L9.5 13.14L5 9.27L10.91 8.26L12 2Z"
              fill="currentColor"
            />
          </svg>
        </template>
        {{ props.text }}
      </span>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { v4 as uuidv4 } from 'uuid';
  
  interface Sparkle {
    id: string;
    x: string;
    y: string;
    scale: number;
    delay: number;
  }
  
  interface Props {
    text: string;
    class?: string;
    colors: { first: string; second: string };
    sparklesCount: number;
  }
  
  const props = defineProps<Props>();
  
  const sparkles = computed(() => {
    const sparklesArray = [];
    for (let i = 0; i < props.sparklesCount; i++) {
      sparklesArray.push({
        id: uuidv4(),
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 100}%`,
        scale: Math.random() * 0.5 + 0.5,
        delay: Math.random() * 2,
      });
    }
    return sparklesArray;
  });
  </script>
  
  <style scoped>
  /* Add any additional styles here */
  </style>