<template>
  <footer class="bg-white py-12 border-t">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="flex flex-col md:flex-row justify-between gap-10 text-center md:text-left"
      >
        <!-- Company Info -->
        <div class="space-y-6 w-full md:w-96">
          <div>
            <router-link to="/">
              <img
                :src="imageUrl"
                alt="IT Squarehub Logo"
                class="mb-4 w-[250px] h-auto mx-auto md:mx-0"
              />
            </router-link>
          </div>
          <p class="text-gray-600 text-sm w-full md:w-full mx-auto md:mx-0 break-words">
            {{ footer[0]?.subheading }}
          </p>
          <div class="space-y-2">
            <p class="font-medium">Contact and Follow Us on:</p>
            <p class="text-sm">✉ {{ footer[0]?.contactInfo.email }}</p>
            <div class="flex justify-center md:justify-start space-x-4">
              <a
                :href="footer[0]?.contactInfo.facebook"
                target="_blank"
                class="text-black hover:text-gray-700 transition-colors"
              >
                <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                  <span class="sr-only">Facebook</span>
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
                  </svg>
                </div>
              </a>
              <a
                :href="footer[0]?.contactInfo.linkedin"
                target="_blank"
                class="text-black hover:text-gray-700 transition-colors"
              >
                <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                  <span class="sr-only">LinkedIn</span>
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
              </a>
              <a
                :href="footer[0]?.contactInfo.twitter"
                target="_blank"
                class="text-black hover:text-gray-700 transition-colors"
              >
                <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                  <span class="sr-only">Twitter</span>
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.897-.959-2.178-1.559-3.594-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.087-.205-7.719-2.165-10.148-5.144-.422.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.496 14-13.986 0-.21 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
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
            <div class="flex flex-col md:flex-row gap-x-12 gap-y-2">
              <ul v-if="services[0]?.section1_cards" class="text-sm text-gray-600">
                <li v-for="service in firstHalfServices" :key="service.id">
                  <a :href="`/services/${service.id}`" class="hover:text-black">
                    {{ service.heading }}
                  </a>
                </li>
              </ul>
              <ul v-if="services[0]?.section1_cards" class="text-sm text-gray-600">
                <li v-for="service in secondHalfServices" :key="service.id">
                  <a :href="`/services/${service.id}`" class="hover:text-black">
                    {{ service.heading }}
                  </a>
                </li>
              </ul>
            </div>
            <div class="mt-4 w-full md:w-1/2">
              <h3 class="font-medium">Other Services:</h3>
              <p class="text-sm text-gray-600">
                <!-- <a :href="footer[0]?.otherServicesLink" class="hover:text-black"> -->
                  Software Development
                <!-- </a> -->
              </p>
            </div>
          </div>
        </div>

        <!-- Locations -->
        <div class="flex flex-col space-y-4 w-full md:w-auto">
          <div v-for="(phone, index) in phones" :key="index">
            <h3 class="font-medium">{{ countries[index] }}</h3>
            <div class="flex items-center justify-center md:justify-start space-x-2">
              <svg class="icon-fixed-size" viewBox="0 0 24 24" fill="black" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <p class="text-sm text-gray-600">{{ phone }}</p>
            </div>
            <div class="flex items-center justify-center md:justify-start space-x-2 mt-2">
              <svg class="icon-fixed-size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <p class="text-sm text-gray-600">{{ addresses[index] }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Certifications -->
      <div class="-mt-4 flex flex-wrap justify-center items-center gap-8">
        <AnimatedLogoCloud :logos="logos" title="Certified Professionals" />
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import sanityClient from "~/hooks/sanityClient";
import { urlFor } from "~/hooks/sanityImageUrl";
import type { Footer } from "~/types/footer";
import type { Services } from "~/types/service";
import AnimatedLogoCloud from "@/components/AnimateLogo/AnimatedLogoCloud.vue";

const footer = ref<Footer[]>([]);
const services = ref<Services[]>([]);

// Computed properties for phone numbers and addresses
const phones = computed(() => {
  if (!footer.value[0]?.contactInfo) return [];
  return [
    footer.value[0].contactInfo.phone1,
    footer.value[0].contactInfo.phone2,
    footer.value[0].contactInfo.phone3,
  ].filter(Boolean);
});

const addresses = computed(() => {
  if (!footer.value[0]?.contactInfo) return [];
  return [
    footer.value[0].contactInfo.address1,
    footer.value[0].contactInfo.address2,
    footer.value[0].contactInfo.address3,
  ].filter(Boolean);
});

// Fetch countries from Sanity
const countries = computed(() => {
  if (!footer.value[0]?.contactInfo) return [];
  return [
    footer.value[0].contactInfo.country1,
    footer.value[0].contactInfo.country2,
    footer.value[0].contactInfo.country3,
  ].filter(Boolean);
});

// Split services into two columns
const firstHalfServices = computed(() => {
  const allServices = services.value[0]?.section1_cards || [];
  return allServices.slice(0, Math.ceil(allServices.length / 2));
});

const secondHalfServices = computed(() => {
  const allServices = services.value[0]?.section1_cards || [];
  return allServices.slice(Math.ceil(allServices.length / 2));
});

const imageUrl = computed(() =>
  footer.value.length > 0 && footer.value[0].logo
    ? urlFor(footer.value[0].logo)
    : ""
);

const logos = ref([
  { name: "WARD", path: "" },
  { name: "Prime", path: "" },
  { name: "Trustpilot", path: "" },
  { name: "Webflow", path: "" },
  { name: "Airbnb", path: "" },
]);

onMounted(async () => {
  try {
    // Fetch footer data
    footer.value = await sanityClient.fetch<Footer[]>('*[_type == "footer"]');
    
    // Fetch services data
    const servicesQuery = `*[_type == "services"] {
      ...,
      section1_cards[]->
    }`;
    services.value = await sanityClient.fetch<Services[]>(servicesQuery);

    // Update logo paths
    if (footer.value.length > 0 && footer.value[0].images) {
      footer.value[0].images.forEach((image, index) => {
        if (logos.value[index]) {
          logos.value[index].path = urlFor(image.asset._ref);
        }
      });
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