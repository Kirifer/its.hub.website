<template>
  <div
    class="inset-0 h-lg w-full bg-white bg-[linear-gradient(to_right,#80808012_3px,transparent_1px),linear-gradient(to_bottom,#80808012_3px,transparent_1px)] bg-[size:100px_100px]"
  >
    <div class="container mx-auto mt-0 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div class="flex flex-col lg:flex-row justify-stretch gap-0">
        <div class="w-full mt-5 mb-5 lg:w-[70%]">
          <div class="text-2xl lg:text-4xl font-bold">
            {{ jobs?.job_title }}
          </div>
          <div class="mt-1 space-x-1">
            <div
              v-for="(badge, index) in jobs?.job_badges"
              :key="index"
              class="inline-block bg-blue-300 text-white text-[10px] px-1 font-bold uppercase py-0.5 rounded-md"
            >
              {{ badge }}
            </div>
          </div>
          <div class="space-y-5 mt-0">
            <div class="font-bold text-lg mt-5 lg:text-xl">Description</div>
            <div class="text-black text-sm lg:text-md">
              {{ jobs?.job_description }}
            </div>

            <div class="font-bold text-lg lg:text-xl">Qualification</div>
            <div class="text-black text-sm lg:text-md">
              <ul class="list-disc pl-5">
                <li
                  v-for="(qualifications, index) in jobs?.job_qualifications"
                  :key="index"
                >
                  {{ qualifications }}
                </li>
              </ul>
            </div>

            <div class="font-bold text-lg lg:text-xl">Responsibility</div>
            <div class="text-black text-sm lg:text-md">
              <ul class="list-disc pl-5">
                <li
                  v-for="(
                    responsibilities, index
                  ) in jobs?.job_responsibilities"
                  :key="index"
                >
                  {{ responsibilities }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-[30%] mt-0 mb-5 lg:mt-0">
          <div class="text-xl mt-5 lg:text-2xl font-bold">Similar Jobs</div>

          <div class="flex flex-col mt-2 gap-2">
            <NuxtLink
              v-for="(job, index) in similarJobs"
              :key="index"
              :to="`/careers/${job._id}`"
              class="border rounded-lg p-4 shadow-sm bg-white transition-shadow duration-300 hover:shadow-md hover:shadow-blue-900"
            >
              <div class="font-bold text-lg">{{ job.job_title }}</div>
              <div class="space-x-1">
                <div
                  v-for="(badge, badgeIndex) in job.job_badges"
                  :key="badgeIndex"
                  class="inline-block bg-blue-300 text-white text-[10px] px-1 font-bold uppercase py-0.5 rounded-md"
                >
                  {{ badge }}
                </div>
              </div>
              <div class="mt-2 text-black text-sm line-clamp-2">
                {{ job.job_description }}
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import sanityClient from "~/hooks/sanityClient";
import type { Jobs } from "~/types/jobs";
import { urlFor } from "@/hooks/sanityImageUrl";

const jobs = ref<Jobs>();
console.log(jobs);
const router = useRouter();
const similarJobs = ref<Jobs[]>([]);
function shuffleArray(array: Jobs[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

onMounted(async () => {
  const router = useRouter();
  const { id } = router.currentRoute.value.params;
  jobs.value = await sanityClient.fetch<Jobs>(
    `*[_type == "jobs" && _id == "${id}"][0]`
  );
  const allJobs = await sanityClient.fetch<Jobs[]>(
    `*[_type == "jobs" && _id != "${id}"]`
  );
  similarJobs.value = shuffleArray(allJobs).slice(0, 5);
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
