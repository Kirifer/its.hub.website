<template>
  <div
    class="bg-[url('@/assets/images/bg-blog-details.png')] bg-cover bg-center w-full min-h-screen bg-no-repeat sm:bg-contain md:bg-cover"
  >
    <!-- Hero Section -->
    <div
      :style="{
        backgroundImage: servicesData?.image
          ? `url(${urlFor(servicesData.image)})`
          : '',
      }"
      class="bg-cover bg-center w-full h-[580px] animate-fade-grid-in-3 to-[#2a2a2a] flex flex-col items-center text-center px-4 pt-20 relative"
    >
      <div
        v-if="contact.length > 0"
        class="animate-fade-in-3 flex flex-col items-center justify-center"
      >
        <!-- Title -->
        <h1
          class="w-full max-w-[840px] font-medium text-[28px] sm:text-[40px] lg:text-[60px] leading-[36px] sm:leading-[48px] lg:leading-[55px] text-white mb-6 sm:mb-10 text-center z-10"
        >
          {{ servicesData?.heading }}
        </h1>

        <!-- Description -->
        <p
          class="w-full max-w-[603px] font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[20px] sm:leading-[22px] lg:leading-[24px] text-white mb-8 border-2 border-black text-center z-10"
        >
          {{ servicesData?.subheading }}
        </p>
        <div
          class="absolute inset-0 bg-black opacity-80 z-5 animate-fade-grid-in-2"
        ></div>
        <!-- Featured Image -->
        <div
          v-if="servicesData?.image"
          class="relative w-full max-w-[648px] mx-auto mt-4 mb-8 sm:mt-4 sm:mb-12"
        >
          <div
            class="relative z-10 p-3 rounded-2xl bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400"
          >
            <div class="relative w-full pt-[62.3%] rounded-xl overflow-hidden">
              <img
                :src="urlFor(servicesData.image)"
                alt="Philippine Outsourcing"
                class="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Content Section -->
    <div
      class="w-full max-w-[1145px] mx-auto px-4 sm:px-6 lg:px-8 py-12 border-2 border-black sm:py-20 mt-0 text-black mt-0 sm:mt-16"
    >
      <article class="space-y-8 sm:space-y-12">
        <section>
          <h2 class="font-semibold text-2xl sm:text-3xl mb-0 sm:mt-14 mt-0">
            {{ servicesData?.introTitle }}
          </h2>
          <p class="text-base sm:text-xl">
            {{ servicesData?.introDescription }}
          </p>
        </section>

        <section
          v-for="(section, index) in servicesData?.bodyTitle?.sections"
          :key="index"
        >
          <h2 class="font-semibold text-2xl sm:text-3xl mb-2">
            {{ section.miniTitle }}
          </h2>
          <p class="text-base sm:text-xl mb-4">
            {{ section.description }}
          </p>
        </section>
        <!-- Contact Section -->
    <div
      class="w-full max-w-full mx-auto px-0 sm:px-0 lg:px-0 py-12 sm:py-0  mt-0"
    >
      <!-- Header Section -->
      <div
        class="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-12"
      >
        <div class="flex flex-col space-y-5 flex-1">
          <h1
            v-if="contact.length > 0"
            class="font-medium text-[28px] sm:text-[40px] lg:text-[50px] leading-[36px] sm:leading-[48px] lg:leading-[55px] text-center md:text-left"
          >
            {{ contact[0]?.hero_title }}
          </h1>
          <p
            v-if="contact.length > 0"
            class="text-base sm:text-xl text-center"
          >
            {{ contact[0]?.hero_subtitle }}
          </p>
        </div>

        <!-- Button -->
        <router-link to="/contact" class="flex-shrink-0 ">
          <button
            class="bg-purple-300 border-gray border font-medium px-6 py-2 rounded-md hover:bg-white hover:text-purple-800 transition-colors"
          >
            Contact Us
          </button>
        </router-link>
      </div>
    </div>

      </article>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router"; // Changed from useRouter
import sanityClient from "@/hooks/sanityClient";
import { urlFor } from "@/hooks/sanityImageUrl";
import type { Contact } from "@/types/contact";
import type { ServicesData } from "@/types/servicesData";

const contact = ref<Contact[]>([]);
const servicesData = ref<ServicesData | null>(null);
const servicesImage = ref("");
console.log(servicesImage);

onMounted(async () => {
  const route = useRoute();
  const id = route.params.id as string;

  try {

    const contactData = await sanityClient.fetch<Contact[]>(
      `*[_type == "contact"]`
    );
    contact.value = contactData;

    const servicesQuery = `*[_type == "servicesData" && id == $id][0]`;
    const services = await sanityClient.fetch<ServicesData>(servicesQuery, {
      id,
    });

    if (services) {
      servicesData.value = services;
      // Make sure image exists before trying to generate URL
      if (services.icon) {
        servicesImage.value = urlFor(services.icon).url();
      }
      console.log("Services data loaded:", services);
    } else {
      console.warn("No services data found for id:", id);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

const formData = ref({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const handleSubmit = () => {
  // Handle form submission here
  console.log("Form submitted:", formData.value);

  // Reset form after submission
  formData.value = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
};
</script>

<style scoped>
.graph-paper-container {
  background-image: linear-gradient(
      to right,
      rgba(220, 220, 220, 0.6) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, rgba(220, 220, 220, 0.6) 1px, transparent 1px);
  background-size: 80px 80px;
  width: 100%;
  height: 100%;
  background-color: white;
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
