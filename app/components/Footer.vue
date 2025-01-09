<template>
  <footer class="bg-white py-12 border-t">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="flex flex-col md:flex-row justify-between gap-8 text-center md:text-left"
      >
        <!-- Company Info -->
        <div class="space-y-5 w-full md:w-72">
          <div>
            <img
              src="~/assets/images/its-logo-light.png"
              alt="IT Squarehub Logo"
              class="mb-4 w-[250px] h-auto mx-auto md:mx-0"
            />
          </div>
          <p class="text-gray-600 text-sm w-full md:w-1/2 mx-auto md:mx-0">
            We provide world class services at a fraction of a cost without
            sacrificing quality.
          </p>
          <div class="space-y-2">
            <p class="font-medium">Contact and Follow Us on:</p>
            <p class="text-sm">✉ customservice@itsquarehub.com</p>
            <div class="flex justify-center md:justify-start space-x-4">
              <a
                href="#"
                class="text-black hover:text-gray-700 transition-colors"
              >
                <div
                  class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
                >
                  <span class="sr-only">Facebook</span>
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"
                    />
                  </svg>
                </div>
              </a>
              <a
                href="#"
                class="text-black hover:text-gray-700 transition-colors"
              >
                <div
                  class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
                >
                  <span class="sr-only">LinkedIn</span>
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>

        <!-- Services -->
        <div class="space-y-6 col-span-1 w-full md:w-1/2">
          <div>
            <h3 class="font-medium mb-4">Outsourcing Services</h3>
            <div class="flex flex-col md:flex-row gap-x-20 gap-y-2">
              <ul class="text-sm text-gray-600">
                <li>Virtual Assistant</li>
                <li>Healthcare Virtual Assistants</li>
                <li>Cloud Engineers</li>
                <li>.Net API Developers</li>
                <li>Digital Marketing & Creative</li>
                <li>Customer Service Assistants</li>
                <li>Accountants</li>
                <li>Executive Assistants</li>
              </ul>
              <ul class="text-sm text-gray-600">
                <li>Software Engineers</li>
                <li>Engineering</li>
                <li>Front End Developers</li>
                <li>Network Engineers</li>
                <li>Real Estate Agents</li>
                <li>Bookkeepers</li>
                <li>Back-end Developers</li>
                <li>And Many More...</li>
              </ul>
            </div>
            <div class="mt-4 w-full md:w-1/2">
              <h3 class="font-medium">Other Services:</h3>
              <p class="text-sm text-gray-600">Software Development</p>
            </div>
          </div>
        </div>

        <!-- Locations -->
        <div class="flex flex-col space-y-4 w-full md:w-auto">
          <div>
            <h3 class="font-medium">USA</h3>
            <div
              class="flex items-center justify-center md:justify-start space-x-2"
            >
              <svg
                class="icon-fixed-size"
                viewBox="0 0 24 24"
                fill="black"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                />
              </svg>
              <p class="text-sm text-gray-600">+1 207 241-5887</p>
            </div>
            <div
              class="flex items-center justify-center md:justify-start space-x-2 mt-2"
            >
              <svg
                class="icon-fixed-size"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <p class="text-sm text-gray-600">
                1150 NW 72nd Ave Tower 1 Ste 455 #14500, Miami FL 33126, US.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Certifications -->
      <div class="mt-12 flex flex-wrap justify-center items-center gap-8">
        <img :src="urlFor(footer[0].images[0])" alt="WARD" class="h-[60px] w-auto" v-if="footer[0] && footer[0].images[0]" />
        <img :src="urlFor(footer[0].images[1])" alt="AFID Certification" class="h-[60px] w-auto" v-if="footer[0] && footer[0].images[1]" />
        <img :src="urlFor(footer[0].images[2])" alt="Partnership Badge" class="h-[60px] w-auto" v-if="footer[0] && footer[0].images[2]" />
        <img :src="urlFor(footer[0].images[3])" alt="H Badge" class="h-[60px] w-auto" v-if="footer[0] && footer[0].images[3]" />
        <img :src="urlFor(footer[0].images[4])" alt="CCBP Badge" class="h-[60px] w-auto" v-if="footer[0] && footer[0].images[4]" />
        <img :src="urlFor(footer[0].images[5])" alt="SHRM Badge" class="h-[60px] w-auto" v-if="footer[0] && footer[0].images[5]" />
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import sanityClient from "~/hooks/sanityClient";
import { urlFor } from "~/hooks/sanityImageUrl";
import type { Footer } from "~/types/footer";

const footer = ref<Footer[]>([]);

onMounted(async () => {
  try {
    footer.value = await sanityClient.fetch<Footer[]>('*[_type == "footer"]');
    if (footer.value.length > 0) {  
      console.log("Footer data fetched successfully:", footer.value);
    }
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
  }
});
</script>

<style scoped>
.icon-fixed-size {
  width: 16px;
  height: 16px;
  min-width: 16px;
  min-height: 16px;
  margin-top: 4px;
}
</style>