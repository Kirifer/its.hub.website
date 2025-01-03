<template>
  <div
    class="bg-[url('@/assets/images/bg-about.png')] bg-cover bg-center w-full min-h-screen bg-no-repeat sm:bg-contain md:bg-cover"
  >
    <!-- Content -->
    <div class="relative z-10 max-w-6xl mx-auto px-4 py-20 space-y-16">
      <!-- Header -->

      <div
        class="flex items-center gap-2.5 px-5 pb-2 py-1.5 justify-center text-center text-2xl font-normal text-violet-500 bg-violet-500/20 rounded-[70px] mx-auto"
        style="width: 400px"
      >
        <ChartBarIcon class="h-7 w-7 text-violet-500" />
        <span>Let's discover & grow</span>
      </div>

      <div class="text-center space-y-4">
        <h1 class="text-4xl md:text-5xl font-bold">About Us</h1>
        <p class="text-gray-600 max-w-2xl mx-auto">
          We are a tech-driven IT company delivering innovative solutions in
          software development, cloud services, and IT consulting.
        </p>
      </div>

      <!-- Why Choose Us Card -->
      <div
        class="overflow-hidden rounded-[40px] shadow-[0px_4px_75.1px_5px_rgba(0,_0,_0,_0.25)] bg-white"
      >
        <div class="flex flex-col md:flex-row items-center">
          <div class="p-8 md:w-1/2 space-y-6">
            <h2 class="md:text-5xl font-semibold text-4xl ml-4">
              Why choose us for <br />
              Outsourcing?
            </h2>
            <p class="text-gray-600 leading-relaxed text-[25px] ml-4 pb-6">
              IT Squarehub is a leading outsourcing company with a proven track
              record of helping businesses and organizations successfully attain
              their business objectives. We take pride in delivering first-class
              outsourcing services around the globe.
            </p>
            <button
              class="ml-4 px-6 py-2 bg-[#606DF1] text-white rounded-[15px] hover:bg-[#4F5CD8] transition-colors"
            >
              Explore our Uniqueness
            </button>
          </div>
          <div class="md:w-1/2 p-10">
            <img
              src="~/assets/images/choose.png"
              alt="Innovation concept"
              class="w-full h-50 rounded-lg"
            />
          </div>
        </div>
      </div>

      <div
        class="flex flex-col md:flex-row items-center md:items-start justify-between gap-8"
      >
        <!-- Stats Section -->
        <div class="bg-white rounded-2xl shadow-lg p-6 md:w-2/3">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
            <div
              v-for="(stat, index) in stats"
              :key="index"
              class="text-center"
            >
              <div class="text-[#606DF1] text-4xl md:text-5xl font-bold">
                {{ stat.number }}
              </div>
              <div class="text-gray-600">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <!-- Numbers Section -->
        <div class="space-y-4 md:w-1/3">
          <div
            class="inline-flex items-center gap-2 bg-purple-100 px-4 py-1 rounded-full text-center md:text-left mx-auto md:mx-0"
          >
            <span class="text-purple-600">Numbers</span>
          </div>
          <p class="text-gray-600 max-w-lg mx-auto md:mx-0 md:text-left">
            It's time to strengthen your team and boost business performance
            through our Professional Outsourcing Services.
          </p>
        </div>
      </div>
    </div>

    <div class="bg-gradient-to-b from-gray-900 to-gray-800">
      <!-- Uniqueness Section -->
      <section class="max-w-7xl mx-auto px-4 py-16">
        <div class="flex justify-between items-center mb-12">
          <div>
            <span
              class="bg-indigo-900/50 text-indigo-300 px-4 py-2 rounded-full text-sm"
            >
              Showcases
            </span>
            <h2 class="text-4xl font-bold text-white mt-4">
              The uniqueness of IT Squarehub
            </h2>
          </div>
          <button
            class="bg-indigo-600 text-white px-6 py-2 rounded-[14px] hover:bg-indigo-700 transition-colors"
          >
            Connect Now!
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Innovative Outsourcing Card -->
          <div
            class="bg-gray-800/50 rounded-2xl overflow-hidden hover:bg-gray-800/70 transition-colors col-span-1 md:col-span-1"
          >
            <img
              src="~/assets/images/innovative.png"
              alt="Innovative Outsourcing"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-white mb-2">
                Innovative Outsourcing
              </h3>
              <p class="text-gray-400">Dynamic Evolution</p>
            </div>
          </div>

          <!-- Scalable and Flexible Card -->
          <div
            class="bg-gray-800/50 rounded-2xl overflow-hidden hover:bg-gray-800/70 transition-colors col-span-2 md:col-span-2"
          >
            <img
              src="~/assets/images/scalable.png"
              alt="Scalable and Flexible"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-white mb-2">
                Scalable and Flexible
              </h3>
              <p class="text-gray-400">
                We have developed an efficient workflow system that has the
                capacity to accommodate growth, increased workload and adapt to
                evolving demands.
              </p>
            </div>
          </div>

          <!-- Cost Efficient Card (Reversed in 2nd Row) -->
          <div
            class="bg-gray-800/50 rounded-2xl overflow-hidden hover:bg-gray-800/70 transition-colors col-span-2 md:col-span-2"
          >
          <img
              src="~/assets/images/cost-efficient.png"
              alt="Scalable and Flexible"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-white mb-2">
                Cost Efficient
              </h3>
              <p class="text-gray-400">
                We can help you gain access to a global workforce with highly
                skilled experts without incurring high labor and operational
                costs or increasing capital.
              </p>
            </div>
          </div>

          <!-- Dedicated Team Card (Reversed in 2nd Row) -->
          <div
            class="bg-gray-800/50 rounded-2xl overflow-hidden hover:bg-gray-800/70 transition-colors col-span-1 md:col-span-1"
          >
            <img src="~/assets/images/team.png" alt="Dedicated Team" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-white mb-2">
                Dedicated Team
              </h3>
              <p class="text-gray-400">Experts. Positive Relationships</p>
            </div>
          </div>
        </div>

        <!-- Social Media Links -->
        <div class="flex justify-center gap-6 mt-12">
          <span v-for="i in 5" :key="i" class="text-gray-400"
            >@ITSQUAREHUB</span
          >
        </div>
      </section>

      <!-- Team Section -->
      <section class="bg-gradient-to-b from-gray-100 to-white py-16">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <span
              class="bg-indigo-100 text-indigo-600 px-4 py-1 rounded-full text-sm"
            >
              Our team
            </span>
            <h2 class="text-4xl font-bold mt-4">
              Meet the IT Squarehub<br />Family
            </h2>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <!-- Item 1 -->
            <div class="relative group">
              <div class="bg-white rounded-xl p-4 shadow-lg">
                <img
                  src=""
                  alt="Team member"
                  class="w-full aspect-square object-cover rounded-lg mb-4"
                />
                <div class="flex items-center justify-between">
                  <div>
                    <h3 class="font-medium">Name 1</h3>
                    <p class="text-sm text-gray-500">Position 1</p>
                  </div>
                  <button
                    class="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 hover:bg-indigo-200 transition-colors"
                  >
                    <span class="text-xl">+</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Item 2 -->
            <div class="relative group">
              <div class="bg-white rounded-xl p-4 shadow-lg">
                <img
                  src=""
                  alt="Team member"
                  class="w-full aspect-square object-cover rounded-lg mb-4"
                />
                <div class="flex items-center justify-between">
                  <div>
                    <h3 class="font-medium">Name 2</h3>
                    <p class="text-sm text-gray-500">Position 2</p>
                  </div>
                  <button
                    class="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 hover:bg-indigo-200 transition-colors"
                  >
                    <span class="text-xl">+</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Item 3 -->
            <div class="relative group">
              <div class="bg-white rounded-xl p-4 shadow-lg">
                <img
                  src=""
                  alt="Team member"
                  class="w-full aspect-square object-cover rounded-lg mb-4"
                />
                <div class="flex items-center justify-between">
                  <div>
                    <h3 class="font-medium">Name 3</h3>
                    <p class="text-sm text-gray-500">Position 3</p>
                  </div>
                  <button
                    class="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 hover:bg-indigo-200 transition-colors"
                  >
                    <span class="text-xl">+</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Item 4 -->
            <div class="relative group">
              <div class="bg-white rounded-xl p-4 shadow-lg">
                <img
                  src=""
                  alt="Team member"
                  class="w-full aspect-square object-cover rounded-lg mb-4"
                />
                <div class="flex items-center justify-between">
                  <div>
                    <h3 class="font-medium">Name 4</h3>
                    <p class="text-sm text-gray-500">Position 4</p>
                  </div>
                  <button
                    class="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 hover:bg-indigo-200 transition-colors"
                  >
                    <span class="text-xl">+</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ChartBarIcon } from "@heroicons/vue/24/outline";
</script>

<script>
export default {
  name: "SolutionsSection",
  data() {
    return {
      activeIndex: null,
      stats: [
        { number: "100 +", label: "Projects completed" },
        { number: "70%", label: "Reduce Cost" },
        { number: "24/7", label: "Online support" },
      ],
      //   features: [
      //     {
      //       title: "Innovative Outsourcing",
      //       description: "Dynamic, Evolving",
      //       image: "/assets/images/innovative.png",
      //       className: "md:col-span-1",
      //     },
      //     {
      //       title: "Scalable and Flexible",
      //       description:
      //         "We have developed an efficient workflow system that has the capacity to accommodate growth, increased workload and adapt to evolving demands.",
      //       image: "",
      //       className: "md:col-span-1",
      //     },
      //     {
      //       title: "Cost Efficient",
      //       description:
      //         "We can help you gain access to a global workforce with highly skilled experts without incurring high labor and operational costs or increasing capital.",
      //       image: "",
      //       className: "md:col-span-1",
      //     },
      //     {
      //       title: "Dedicated Team",
      //       description: "Experts, Positive Relationships",
      //       image: "",
      //       className: "md:col-span-1",
      //     },
      //   ],
    };
  },
};
</script>

<style scoped>
/* Optional: Add any additional styles you may want */
</style>
