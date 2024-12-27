<script setup>
import {
  ChartBarIcon,
  BarsArrowUpIcon,
  FlagIcon,
  ChartPieIcon,
} from "@heroicons/vue/24/outline";
import itsLogo from "@/assets/images/its-logo.png";
</script>
<script>
export default {
  name: 'SolutionsSection',
  data() {
    return {
      activeIndex: null
    };
  },
  name: "FeaturesSection",
  data() {
    return {
      features: [
        {
          icon: itsLogo,
          title: "Empower Your Business Potential",
          description:
            "We work closely with you to identify your unique IT needs, ensuring a deep understanding of your goals and challenges.",
        },
        {
          icon: itsLogo,
          title: "Tailored IT Solutions.",
          description:
            "We craft innovative and customized IT strategies, leveraging our expertise and streamlined processes to address your specific requirements.",
        },
        {
          icon: itsLogo,
          title: "Building Teams That Excel.",
          description:
            "We specialize in sourcing and assembling top-tier IT professionals, perfectly aligned with your project objectives and organizational values.",
        },
        {
          icon: itsLogo,
          title: "Seamless Onboarding,<br/>Smooth Execution",
          description:
            "We manage every step of the process, from onboarding skilled professionals to implementing solutions that drive success for your business.",
        },
        {
          icon: itsLogo,
          title: "Future-Ready!",
          description:
            "We are dedicated to delivering scalable and impactful IT solutions that empower your business to thrive in a rapidly evolving digital landscape.",
        },
      ],
    };
  },
};


</script>

<template>
  <div
    class="min-h-screen relative bg-[url('~/assets/images/grid-bg.png')] bg-cover bg-center bg-no-repeat"
  >
    <!-- Hero Section -->
    <div
      class="container mx-auto flex flex-col items-center justify-center px-4 pt-12 pb-12"
    >
      <!-- Custom subheading -->
      <div
        class="flex items-center gap-2.5 px-5 pb-2 py-1.5 justify-center text-center text-2xl font-normal text-violet-500 bg-violet-500/20 rounded-[70px]"
      >
        <ChartBarIcon class="h-7 w-7 text-violet-500" />
        <span>Let's discover & grow</span>
      </div>

      <!-- Heading -->
      <h1
        class="mt-3 text-3xl md:text-6xl font-semibold leading-tight text-center text-black font-instrument-sans"
      >
        Innovate outsourcing
        <br />
        with a focus on quality.
      </h1>

      <!-- Paragraph -->
      <p
        class="mt-5 mb-6 font-normal text-base md:text-xl leading-relaxed text-center text-gray-600 max-w-[900px] mx-auto"
      >
        Embrace quality-driven strategies to transform your
        <br class="hidden md:block" />
        operation and achieve unparalleled success.
      </p>

      <!-- Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 sm:space-x-4 mt-2">
        <button
          class="px-6 py-3 text-base font-semibold text-white bg-[#6c63ff] rounded-lg hover:-translate-y-0.5 transition-transform duration-300 hover:bg-[#6c63ff]/80"
        >
          Let's get started
        </button>
        <button
          class="px-6 py-3 text-base font-semibold text-[#6c63ff] border border-[#6c63ff] rounded-lg hover:-translate-y-0.5 transition-transform duration-300 hover:bg-[#6c63ff]/10"
        >
          Learn more
        </button>
      </div>
    </div>

    <!-- Image section -->
    <div class="w-full max-w-[90vw] md:max-w-[970px] mx-auto px-4">
      <div
        class="relative w-full h-[415px] bg-gradient-to-br from-[#00b8d4] to-[#844ddc] rounded-[20px] rotate-180 p-2"
      >
        <div
          class="absolute inset-0 bg-[url('~/assets/images/pic-header.png')] bg-cover bg-center rounded-[15px] rotate-180"
          style="margin: 15px"
        ></div>
      </div>
    </div>
  </div>

  <!-- 2nd -->
  <div>
    <!-- Features Section -->
    <div class="container mx-auto px-16 pt-12">
      <!-- Main Title -->

      <!-- Features Grid -->
      <div class="space-y-14">
        <!-- Feature Items -->
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="flex flex-col items-center text-center relative"
        >
          <!-- Left-aligned icons (odd indices) -->
          <div
            v-if="index % 2 === 0"
            class="absolute left-4 w-[95px] h-[80px] border border-[#844ddc] rounded-lg flex items-center justify-center bg-white"
          >
            <img :src="feature.icon" alt="icon" class="w-16 h-12" />
          </div>

          <!-- Right-aligned icons (even indices) -->
          <div
            v-else
            class="absolute right-4 w-[105px] h-[90px] border border-[#844ddc] rounded-lg flex items-center justify-center bg-white"
          >
            <img :src="feature.icon" alt="icon" class="w-17 h-14" />
          </div>

          <!-- Centered content -->
          <div class="max-w-3xl mx-auto px-4">
            <h3
              class="text-4xl md:text-6xl font-semibold leading-tight text-center text-black font-instrument-sans mb-4"
              v-html="feature.title"
            ></h3>
            <p class="text-base md:text-lg text-black/60 text-center">
              {{ feature.description }}
            </p>
          </div>
        </div>

        <!-- About Company Button -->
        <div class="flex justify-center mt-12">
          <button
            class="px-6 py-3 text-base font-semibold text-white bg-[#844ddc] rounded-lg hover:-translate-y-0.5 transition-transform duration-300 hover:bg-[#844ddc]/80"
          >
            About Company
          </button>
        </div>
      </div>

      <!-- 3rd -->
      <div class="container mx-auto">
        <!-- Additional Features Section -->
        <div class="container mx-auto px-4 py-24">
          <!-- Features Header -->
          <div class="mb-12">
            <div
              class="inline-block px-6 py-2 text-2xl font-normal rounded-full bg-violet-100 text-violet-600 mb-8"
            >
              Features
            </div>
            <h2 class="text-6xl font-semibold mb-3">
              Simplifying IT for<br />Business Success
            </h2>
            <div class="flex justify-between items-center">
              <p
                class="mt-5 mb-6 font-normal text-base md:text-xl leading-relaxed text-gray-600 max-w-[900px]"
              >
                At IT Squarehub, we streamline complex business challenges
                with<br />
                innovative IT solutions, empowering companies to thrive<br />
                in a digital world.
              </p>
              <button
                class="mt-4 px-6 py-3 text-base font-semibold bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
              >
                Connect With Us
              </button>
            </div>
          </div>

          <!-- Feature Cards -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <!-- Custom IT Strategies -->
            <div
              class="relative bg-violet-100 border border-violet-300 p-12 rounded-3xl shadow-sm"
            >
              <h3 class="font-semibold text-4xl mb-3">
                Custom IT<br />Strategies
              </h3>
              <p
                class="mt-7 text-gray-600 mb-64 text-base font-normal md:text-lg leading-relaxed max-w-[290px]"
              >
                At IT Squarehub, we streamline complex business challenges with
                innovative IT solutions, empowering companies to thrive in a
                digital world.
              </p>
              <img
                src="~/assets/images/its-logo.png"
                alt="IT Strategy"
                class="absolute bottom-[-10px] right-[-10px] w-[200px] h-40 object-contain"
              />
            </div>

            <!-- Expert IT Staffing -->
            <div
              class="relative bg-violet-100 border border-violet-300 p-12 rounded-3xl shadow-sm"
            >
              <h3 class="font-semibold text-4xl mb-3">
                Expert IT<br />Staffing
              </h3>
              <p
                class="mt-7 text-gray-600 mb-4 text-base font-normal md:text-lg leading-relaxed max-w-[290px]"
              >
                We source and provide top-tier IT professionals to meet your
                project needs.
              </p>
              <img
                src="~/assets/images/its-logo.png"
                alt="IT Staffing"
                class="absolute bottom-[-10px] right-[-10px] w-[200px] h-40 object-contain"
              />
            </div>

            <!-- Seamless Integration -->
            <div
              class="relative bg-violet-100 border border-violet-300 p-12 rounded-3xl shadow-sm"
            >
              <h3 class="font-semibold text-4xl mb-3">Seamless Integration</h3>
              <p
                class="mt-7 text-gray-600 mb-4 text-base font-normal md:text-lg leading-relaxed max-w-[290px]"
              >
                Our solutions integrate effortlessly into your existing systems,
                ensuring a smooth transition with minimal disruption.
              </p>
              <img
                src="~/assets/images/its-logo.png"
                alt="Integration"
                class="absolute bottom-[-10px] right-[-10px] w-[200px] h-40 object-contain"
              />
            </div>
          </div>
          <!-- 4th -->
          <div
            class="relative bg-gradient-to-b from-white to-gray-100 rounded-3xl p-16 text-center overflow-hidden"
          >
            <!-- Animated circles background -->
            <div class="circles-container">
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
            </div>

            <!-- Statistics Section -->
            <div class="relative z-10 mb-20">
              <div class="flex justify-center mb-12">
                <div
                  class="inline-block px-6 py-2 text-2xl font-normal rounded-full bg-violet-100 text-violet-600 mb-8"
                >
                  By the numbers
                </div>
              </div>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div class="text-center">
                  <div class="text-6xl font-semibold mb-3">500+</div>
                  <div
                    class="font-normal text-base md:text-xl leading-relaxed text-gray-600 max-w-[900px]"
                  >
                    Projects Completed
                  </div>
                </div>
                <div class="text-center">
                  <div class="text-6xl font-semibold mb-3">95%</div>
                  <div
                    class="font-normal text-base md:text-xl leading-relaxed text-gray-600 max-w-[900px]"
                  >
                    Client Satisfaction
                  </div>
                </div>
                <div class="text-center">
                  <div class="text-6xl font-semibold mb-3">24/7</div>
                  <div
                    class="font-normal text-base md:text-xl leading-relaxed text-gray-600 max-w-[900px]"
                  >
                    Online Support
                  </div>
                </div>
                <div class="text-center">
                  <div class="text-6xl font-semibold mb-3">10+</div>
                  <div
                    class="font-normal text-base md:text-xl leading-relaxed text-gray-600 max-w-[900px]"
                  >
                    Of experience
                  </div>
                </div>
              </div>
            </div>

            <!-- Floating content -->
            <div class="relative z-20 mx-auto max-w-4xl animate-float mt-64">
              <h2
                class="text-4xl md:text-6xl font-semibold mb-3 whitespace-nowrap"
              >
                Ready to transform your business?
              </h2>
              <p
                class="font-normal text-base md:text-xl leading-relaxed text-gray-600 mb-8"
              >
                Let's shape the future success with innovative IT solutions!
              </p>
              <button
                class="px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-all duration-300 hover:scale-105"
              >
                Let's get started
              </button>
            </div>
          </div>
        </div>

        <!-- 5th -->
        <!-- Solutions & Partnership Section -->
        <div class="container mx-auto px-4 py-18">
          <!-- Banner Image with Stats -->
          <div class="relative rounded-3xl overflow-hidden mb-32">
            <div class="p-8 rounded-3xl">
              <div class="w-full max-w-[90vw] md:max-w-[1070px] mx-auto px-4">
                <div
                  class="relative w-full h-[515px] bg-gradient-to-br from-[#00b8d4] to-[#844ddc] rounded-[20px] rotate-180 p-2"
                >
                  <div
                    class="absolute inset-0 bg-[url('~/assets/images/pic-header2.png')] bg-cover bg-center rounded-[15px] rotate-180"
                    style="margin: 15px"
                  ></div>
                </div>
              </div>
              <!-- Stat Overlays -->
              <!-- Earnings -->
              <div
                class="absolute top-16 left-8 w-[259px] h-[100px] bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-[#844DDC]"
              >
                <!-- Earnings Text -->
                <BarsArrowUpIcon class="text-[#844DDC] w-12 h-12 mr-4" />
                <div
                  class="absolute top-[13px] left-[125px] w-[92px] h-[29px] text-[24px] leading-[29px] font-normal text-center text-[#844DDC]/67 font-instrument-sans"
                >
                  Earnings
                </div>
                <!-- Earnings Value -->
                <div
                  class="absolute top-[42px] left-[125px] w-[185px] h-[78px] text-[36px] leading-[44px] font-bold text-black font-instrument-sans"
                >
                  ₱100.5
                </div>
              </div>

              <!-- Daily Traffic/Visitors -->
              <div
                class="absolute bottom-16 left-24 w-[259px] h-[100px] bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-[#844DDC] flex items-center"
              >
                <!-- Icon -->
                <ChartBarIcon class="text-[#844DDC] w-12 h-12 mr-4" />
                <!-- Daily Traffic/Visitors Text and Value -->
                <div class="flex flex-col items-end">
                  <div
                    class="text-[24px] leading-[29px] font-normal text-[#844DDC]/67 font-instrument-sans"
                  >
                    Daily Traffic
                  </div>
                  <div
                    class="text-[36px] leading-[44px] font-bold text-black font-instrument-sans"
                  >
                    1,200
                  </div>
                </div>
              </div>

              <!-- Your Balance -->
              <div
                class="absolute top-16 right-8 w-[259px] h-[100px] bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-[#844DDC] flex items-center justify-between"
              >
                <!-- Your Balance Text and Value -->
                <div>
                  <div
                    class="text-[24px] leading-[29px] font-normal text-[#844DDC]/67 font-instrument-sans"
                  >
                    Balance
                  </div>
                  <div
                    class="text-[36px] leading-[44px] font-bold text-black font-instrument-sans"
                  >
                    ₱100.5
                  </div>
                </div>
                <!-- Icon -->
                <FlagIcon class="text-[#844DDC] w-12 h-12" />
              </div>

              <!-- Pie Chart -->
              <div
                class="absolute bottom-16 right-24 w-[259px] h-[100px] bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-[#844DDC] flex items-center justify-between"
              >
                <!-- Pie Chart Text and Value -->
                <div>
                  <div
                    class="text-[24px] leading-[29px] font-normal text-[#844DDC]/67 font-instrument-sans"
                  >
                    Pie chart
                  </div>
                  <div
                    class="text-[36px] leading-[44px] font-bold text-black font-instrument-sans"
                  >
                    75%
                  </div>
                </div>
                <!-- Icon -->
                <ChartPieIcon class="text-[#844DDC] w-12 h-12" />
              </div>
            </div>
          </div>

          <div class="container mx-auto px-4">
  <!-- Solutions Grid -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 relative">
    <!-- Line Container -->
    <div class="absolute -top-8 w-full h-[2px] bg-gray-200 ">
      <!-- Animated Purple Bar -->
      <div 
        class="h-full w-1/3 bg-[#844DDC] transition-all duration-300 ease-in-out"
        :style="{ 
          transform: `translateX(${activeIndex * 100}%)`,
          opacity: activeIndex !== null ? '1' : '0'
        }"
      ></div>
    </div>
    
    <!-- Innovative Solutions -->
    <div 
      class="text-center cursor-pointer mt-10"
      @mouseenter="activeIndex = 0"
      @mouseleave="activeIndex = null"
    >
      <h3 class="text-5xl font-semibold mb-6">Innovative Solutions</h3>
      <p class="font-normal text-base md:text-lg leading-relaxed text-gray-600 max-w-[900px]">
        Leverage cutting-edge technology to boost efficiency and gain a competitive edge in today's market.
      </p>
    </div>

    <!-- Customized Approach -->
    <div 
      class="text-center cursor-pointer mt-10"
      @mouseenter="activeIndex = 1"
      @mouseleave="activeIndex = null"
    >
      <h3 class="text-5xl font-semibold mb-6">Customized Approach</h3>
      <p class="font-normal text-base md:text-lg leading-relaxed text-gray-600 max-w-[900px]">
        We deliver tailored IT solutions that align with your unique business needs and goals for optimal results.
      </p>
    </div>

    <!-- Enduring Partnerships -->
    <div 
      class="text-center cursor-pointer mt-10"
      @mouseenter="activeIndex = 2"
      @mouseleave="activeIndex = null"
    >
      <h3 class="text-5xl font-semibold mb-6">Enduring Partnerships</h3>
      <p class="font-normal text-base md:text-lg leading-relaxed text-gray-600 max-w-[900px]">
        Experience long-term success with our ongoing support, expertise, and commitment as your business grows and evolves.
      </p>
    </div>
  </div>
</div>

          <!-- Partnership Section -->
          <div class="relative">
            <!-- Badge -->
            <div
              class="inline-block px-4 py-1 rounded-full bg-violet-100 text-violet-600 text-sm mb-8"
            >
              Partnership
            </div>

            <!-- Partnership Content -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <!-- Text Content -->
              <div>
                <h2 class="text-3xl md:text-4xl font-semibold mb-6">
                  Our partners are pioneers in their fields, aligned with our
                  vision for innovation and success.
                </h2>
                <p class="text-gray-600 mb-8">
                  Through collaboration, we deliver transformative solutions
                  that enable businesses to excel and adapt in an ever-changing
                  digital landscape.
                </p>
                <button
                  class="px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
                >
                  Become a Partner
                </button>
              </div>

              <!-- Team Images Grid -->
              <div class="relative grid grid-cols-2 gap-4">
                <div class="relative">
                  <img
                    src="~/assets/images/its-logo.png"
                    alt="Team Member"
                    class="w-full h-48 object-cover rounded-xl"
                  />
                  <!-- Chat Bubble Decoration -->
                  <div
                    class="absolute -right-4 -bottom-4 bg-yellow-400 p-4 rounded-xl"
                  >
                    <svg
                      class="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.circles-container {
  position: absolute;
  top: 95%;
  left: 50%;
  width: 800px;
  height: 800px;
  transform: translate(-50%, -50%);
}

.circle {
  position: absolute;
  border-radius: 50%;
  inset: 0;
  animation: pulse 4s ease-in-out infinite;
}

.circle:nth-child(1) {
  box-shadow: 0 0 40px 20px rgba(255, 255, 255, 1),
    inset 0 0 40px 20px rgba(255, 255, 255, 1);
  animation-delay: -3s;
}

.circle:nth-child(2) {
  box-shadow: 0 0 60px 30px rgba(255, 255, 255, 0.9),
    inset 0 0 60px 30px rgba(151, 46, 196, 0.3);
  animation-delay: -2s;
}

.circle:nth-child(3) {
  box-shadow: 0 0 80px 40px rgba(255, 255, 255, 0.8),
    inset 0 0 80px 40px rgba(252, 125, 241, 0.06);
  animation-delay: -1s;
}

.circle:nth-child(4) {
  box-shadow: 0 0 100px 50px rgba(255, 255, 255, 0.7),
    inset 0 0 100px 50px rgba(255, 255, 255, 0.04);
}

@keyframes pulse {
  0% {
    transform: scale(0.8);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.5;
  }
  100% {
    transform: scale(0.8);
    opacity: 0.8;
  }
}

/* Add noise texture */
.circles-container::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  opacity: 0.1;
  mix-blend-mode: overlay;
  pointer-events: none;
}


</style>
