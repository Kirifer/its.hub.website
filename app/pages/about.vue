<template>
  <div
    class="relative min-h-screen w-full overflow-hidden bg-[url('@/assets/images/bg-about.png')] bg-cover bg-center w-[1440] h-[1040] bg-no-repeat sm:bg-contain md:bg-cover"
  >
    <!-- Circular Background Pattern -->
    <div class="absolute inset-0 flex items-center justify-center">
      <div
        v-for="i in 5"
        :key="i"
        class="absolute border border-gray-100 rounded-full"
        :style="{
          width: `${100 - i * 20}%`,
          height: `${100 - i * 20}%`,
          opacity: 0.1,
        }"
      />
    </div>

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
            <h2 class="text-2xl md:text-3xl font-semibold">
              Why choose us for Outsourcing?
            </h2>
            <p class="text-gray-600 leading-relaxed">
              IT Squarehub is a leading outsourcing company with a proven track
              record of helping businesses and organizations successfully attain
              their business objectives. We take pride in delivering first-class
              outsourcing services around the globe.
            </p>
            <button
              class="px-6 py-2 bg-[#606DF1] text-white rounded-[15px] hover:bg-[#4F5CD8] transition-colors"
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

      <!-- Stats Section -->
      <div class="bg-white rounded-2xl shadow-lg p-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(stat, index) in stats" :key="index" class="text-center">
            <div class="text-[#606DF1] text-4xl md:text-5xl font-bold mb-2">
              {{ stat.number }}
            </div>
            <div class="text-gray-600">{{ stat.label }}</div>
          </div>
        </div>
      </div>

      <!-- Numbers Section -->
      <div class="text-center space-y-4">
        <div
          class="inline-flex items-center gap-2 bg-purple-100 px-4 py-1 rounded-full"
        >
          <span class="text-purple-600">Numbers</span>
        </div>
        <p class="text-gray-600 max-w-2xl mx-auto">
          It's time to strengthen your team and boost business performance
          through our Professional Outsourcing Services.
        </p>
      </div>
    </div>

    <!-- Features Section -->
    <!-- <div
      class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 md:p-8"
    >
      <div class="max-w-7xl mx-auto space-y-8">
        <div class="flex justify-between items-center">
          <div class="space-y-2">
            <div
              class="w-[138px] h-[44px] left-[125.08px] top-[1751px] bg-[#32354F] rounded-[15px] flex items-center justify-center"
            >
              <Badge
                variant="secondary"
                className="bg-[#3B3B8F]/20 text-[#8F8FFF] hover:bg-[#3B3B8F]/30 border-0"
              >
                Showcases
              </Badge>
            </div>

            <h2 class="text-2xl md:text-4xl font-semibold text-white">
              The uniqueness of IT Squarehub
            </h2>
          </div>
          <button
            class="bg-[#6B6BFF] hover:bg-[#5858FF] text-white border-0 px-6 py-2 rounded-[15px]"
          >
            Connect Now!
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="bg-white/5 hover:bg-white/10 transition-all duration-300 border-0 overflow-hidden"
            :class="feature.className"
          >
            <div class="p-0">
              <div class="relative aspect-[16/9] overflow-hidden">
                <img
                  :src="feature.image"
                  :alt="feature.title"
                  class="w-full h-full object-cover"
                />
                <div
                  class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent"
                >
                  <h3 class="text-xl font-semibold text-white mb-1">
                    {{ feature.title }}
                  </h3>
                  <p class="text-sm text-[#8F8FFF]">
                    {{ feature.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center gap-8 pt-6 border-t border-white/10">
          <span v-for="i in 5" :key="i" class="text-gray-400 text-sm">
            @ITSQUAREHUB
          </span>
        </div>
      </div>
    </div> -->
    
  </div>
</template>

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
