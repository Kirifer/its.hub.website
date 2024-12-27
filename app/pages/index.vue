<script setup>
import { ChartBarIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <div
    class="min-h-screen relative bg-[url('~/assets/images/grid-bg.png')] bg-cover bg-center bg-no-repeat"
  >
    <!-- Hero Section -->
    <div
      class="container mx-auto flex flex-col items-center justify-center px-4 pt-16 pb-16"
    >
      <!-- Custom subheading -->
      <div
        class="flex items-center gap-2.5 px-6 py-2 text-center text-base font-medium text-violet-500 bg-violet-500/20 rounded-[70px]"
      >
        <ChartBarIcon class="h-6 w-6 text-violet-500" />
        Let's discover & grow
      </div>

      <!-- Heading -->
      <h1
        class="mt-3 text-4xl md:text-6xl font-medium leading-tight text-center text-black font-instrument-sans"
      >
        Innovate outsourcing
        <br />
        with a focus on quality.
      </h1>

      <!-- Paragraph -->
      <p
        class="mt-5 mb-6 text-lg md:text-[1.345rem] leading-relaxed text-center text-gray-500 max-w-[900px] mx-auto"
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
    <div class="w-full max-w-[90vw] md:max-w-[1045px] mx-auto px-4 mt-2">
      <div
        class="relative w-full h-[475px] bg-gradient-to-br from-[#00b8d4] to-[#844ddc] rounded-[20px] rotate-180"
      >
        <div
          class="absolute inset-[2.5%] w-[965px] h-[450px] bg-[url('~/assets/images/pic-header.png')] bg-cover bg-center rounded-[15px] rotate-180"
        ></div>
      </div>
    </div>

</div>
<div>
    <!-- Features Section -->
    <div class="container mx-auto px-4 pt-16">
      <!-- Main Title -->

      <!-- Features Grid -->
      <div class="space-y-20">
        <!-- Empower Your Business -->
        <div class="flex flex-col items-center text-center">
          <h3
            class="text-4xl md:text-6xl font-medium leading-tight text-center text-black font-instrument-sans mb-4"
          >
            Empower Your Business Potential
          </h3>

          <div class="flex justify-center">
            <div
              class="w-16 h-16 border border-[#844ddc] rounded-lg flex items-center justify-center bg-white mb-6 mr-10"
            >
              <img
                src="~/assets/images/its-logo.png"
                alt="gear"
                class="w-10 h-10"
              />
            </div>
            <p class="text-lg md:text-xl text-black/60 max-w-3xl">
              We work closely with you to identify your unique IT needs,
              ensuring a deep understanding of your goals and challenges.
            </p>
          </div>
        </div>

        <!-- Tailored Solutions -->
        <div class="flex flex-col items-center text-center">
          <div class="flex justify-center space-x-4">
            <h3
              class="text-4xl md:text-6xl font-medium leading-tight text-center text-black font-instrument-sans mb-4"
            >
              Tailored IT Solutions.
            </h3>

            <div
              class="w-16 h-16 border border-[#844ddc] rounded-lg flex items-center justify-center bg-white mb-6"
            >
              <img
                src="~/assets/images/its-logo.png"
                alt="gear"
                class="w-10 h-10"
              />
            </div>
          </div>

          <p class="text-lg md:text-xl text-black/60 max-w-3xl">
            We craft innovative and customized IT strategies, leveraging our
            expertise and streamlined processes to address your specific
            requirements.
          </p>
        </div>

        <!-- Building Teams -->
        <div class="flex flex-col items-center text-center">
          <div class="flex justify-center space-x-4">
            <div
              class="w-16 h-16 border border-[#844ddc] rounded-lg flex items-center justify-center bg-white mb-6"
            >
              <img
                src="~/assets/images/its-logo.png"
                alt="team"
                class="w-10 h-10"
              />
            </div>
            <h3
              class="text-4xl md:text-6xl font-medium leading-tight text-center text-black font-instrument-sansmb-4"
            >
              Building Teams That Excel.
            </h3>
          </div>
          <p class="text-lg md:text-xl text-black/60 max-w-3xl">
            We specialize in sourcing and assembling top-tier IT professionals,
            perfectly aligned with your project objectives and organizational
            values.
          </p>
        </div>

        <!-- Seamless Onboarding -->
        <div class="flex flex-col items-center text-center">
          <div class="flex justify-center space-x-4">
            <h3
              class="text-4xl md:text-6xl font-medium leading-tight text-center text-black font-instrument-sans mb-4"
            >
              Seamless Onboarding,
              <br />
              Smooth Execution
            </h3>
            <div
              class="w-16 h-16 border border-[#844ddc] rounded-lg flex items-center justify-center bg-white mb-6"
            >
              <img
                src="~/assets/images/its-logo.png"
                alt="chart"
                class="w-10 h-10"
              />
            </div>
          </div>

          <p class="text-lg md:text-xl text-black/60 max-w-3xl">
            We manage every step of the process, from onboarding skilled
            professionals to implementing solutions that drive success for your
            business.
          </p>
        </div>

        <!-- Future Ready -->
        <div class="flex flex-col items-center text-center">
          <div class="flex justify-center space-x-4">
            <div
              class="w-16 h-16 border border-[#844ddc] rounded-lg flex items-center justify-center bg-white mb-6"
            >
              <img
                src="~/assets/images/its-logo.png"
                alt="scale"
                class="w-10 h-10"
              />
            </div>
            <h3
              class="text-4xl md:text-6xl font-medium leading-tight text-center text-black font-instrument-sans mb-4"
            >
              Future-Ready!
            </h3>
          </div>
          <p class="text-lg md:text-xl text-black/60 max-w-3xl">
            We are dedicated to delivering scalable and impactful IT solutions
            that empower your business to thrive in a rapidly evolving digital
            landscape.
          </p>
        </div>

        <!-- About Company Button -->
        <div class="flex justify-center mt-16">
          <button
            class="px-6 py-3 text-white bg-[#844ddc] rounded-lg hover:-translate-y-0.5 transition-transform duration-300 hover:bg-[#844ddc]/80"
          >
            About Company
          </button>
        </div>

        <!-- Additional Features Section -->
        <div class="container mx-auto px-4 py-24">
          <!-- Features Header -->
          <div class="mb-12">
            <div
              class="inline-block px-4 py-1 rounded-full bg-violet-100 text-violet-600 text-sm mb-6"
            >
              Features
            </div>
            <h2 class="text-4xl font-medium mb-4">
              Simplifying IT for<br />Business Success
            </h2>
            <p class="text-gray-600 max-w-xl">
              At IT Squarehub, we streamline complex business challenges with
              innovative IT solutions, empowering companies to thrive in a
              digital world.
            </p>
            <button
              class="mt-4 px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
            >
              Continue Reading
            </button>
          </div>

          <!-- Feature Cards -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <!-- Custom IT Strategies -->
            <div class="bg-white p-6 rounded-xl shadow-sm">
              <h3 class="font-medium text-xl mb-3">Custom IT Strategies</h3>
              <p class="text-gray-600 mb-4">
                At IT Squarehub, we streamline complex business challenges with
                innovative IT solutions.
              </p>
              <img
                src="~/assets/images/its-logo.png"
                alt="IT Strategy"
                class="w-full h-40 object-contain"
              />
            </div>

            <!-- Expert IT Staffing -->
            <div class="bg-white p-6 rounded-xl shadow-sm">
              <h3 class="font-medium text-xl mb-3">Expert IT Staffing</h3>
              <p class="text-gray-600 mb-4">
                We source and provide top-tier IT professionals to meet your
                project needs.
              </p>
              <img
                src="~/assets/images/its-logo.png"
                alt="IT Staffing"
                class="w-full h-40 object-contain"
              />
            </div>

            <!-- Seamless Integration -->
            <div class="bg-white p-6 rounded-xl shadow-sm">
              <h3 class="font-medium text-xl mb-3">Seamless Integration</h3>
              <p class="text-gray-600 mb-4">
                Our solutions integrate effortlessly into your existing systems,
                ensuring a smooth transition with minimal disruption.
              </p>
              <img
                src="~/assets/images/its-logo.png"
                alt="Integration"
                class="w-full h-40 object-contain"
              />
            </div>
          </div>

          <!-- Statistics Section -->
          <div class="mb-20">
            <div
              class="inline-block px-4 py-1 rounded-full bg-violet-100 text-violet-600 text-sm mb-12"
            >
              By the numbers
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div class="text-center">
                <div class="text-4xl font-bold mb-2">500+</div>
                <div class="text-gray-600">Projects Completed</div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold mb-2">95%</div>
                <div class="text-gray-600">Client Satisfaction</div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold mb-2">24/7</div>
                <div class="text-gray-600">Online Support</div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold mb-2">10+</div>
                <div class="text-gray-600">Of experience</div>
              </div>
            </div>
          </div>

          <!-- CTA Section -->
          <div
            class="relative bg-gradient-to-b from-white to-gray-100 rounded-3xl p-12 text-center"
          >
            <div class="max-w-2xl mx-auto">
              <h2 class="text-3xl md:text-4xl font-medium mb-4">
                Ready to transform your business?
              </h2>
              <p class="text-gray-600 mb-8">
                Let's shape the future success with innovative IT solutions!
              </p>
              <button
                class="px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
              >
                Let's get started
              </button>
            </div>
            <!-- Background circular pattern -->
            <div class="absolute inset-0 -z-10">
              <svg class="w-full h-full" viewBox="0 0 200 200">
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#f3f4f6"
                  stroke-width="20"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="50"
                  fill="none"
                  stroke="#f3f4f6"
                  stroke-width="20"
                />
              </svg>
            </div>
          </div>
        </div>

        <!-- Solutions & Partnership Section -->
        <div class="container mx-auto px-4 py-24">
          <!-- Banner Image with Stats -->
          <div class="relative rounded-3xl overflow-hidden mb-24">
            <div class="bg-violet-600/10 p-8 rounded-3xl">
              <img
                src="~/assets/images/its-logo.png"
                alt="Team Meeting"
                class="w-full h-[400px] object-cover rounded-2xl"
              />
              <!-- Stat Overlays -->
              <div
                class="absolute top-4 left-8 bg-white/90 backdrop-blur-sm rounded-xl p-3"
              >
                <div class="text-sm text-gray-600">Monthly Growth</div>
                <div class="flex items-end gap-2">
                  <span class="text-2xl font-bold">P00.5</span>
                  <div class="h-16 flex items-end gap-1">
                    <div class="w-2 h-8 bg-violet-600 rounded-t"></div>
                    <div class="w-2 h-10 bg-violet-600 rounded-t"></div>
                    <div class="w-2 h-12 bg-violet-600 rounded-t"></div>
                    <div class="w-2 h-14 bg-violet-600 rounded-t"></div>
                    <div class="w-2 h-16 bg-violet-600 rounded-t"></div>
                  </div>
                </div>
              </div>
              <div
                class="absolute top-4 right-8 bg-white/90 backdrop-blur-sm rounded-xl p-3"
              >
                <div class="text-sm text-gray-600">Revenue</div>
                <div class="flex items-center gap-2">
                  <span class="text-2xl font-bold">P1000</span>
                  <div class="w-16 h-16">
                    <!-- Simplified pie chart - replace with actual chart component if needed -->
                    <div
                      class="w-full h-full rounded-full border-8 border-violet-600"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Solutions Grid -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <!-- Innovative Solutions -->
            <div class="text-center">
              <h3 class="text-2xl font-medium mb-3">Innovative Solutions</h3>
              <p class="text-gray-600">
                Leverage cutting-edge technology to boost efficiency and gain a
                competitive edge in today's market.
              </p>
            </div>

            <!-- Customized Approach -->
            <div class="text-center">
              <h3 class="text-2xl font-medium mb-3">Customized Approach</h3>
              <p class="text-gray-600">
                We deliver tailored IT solutions that align with your unique
                business needs and goals for optimal results.
              </p>
            </div>

            <!-- Enduring Partnerships -->
            <div class="text-center">
              <h3 class="text-2xl font-medium mb-3">Enduring Partnerships</h3>
              <p class="text-gray-600">
                Experience long-term success with our ongoing support,
                expertise, and commitment as your business grows and evolves.
              </p>
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
                <h2 class="text-3xl md:text-4xl font-medium mb-6">
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
                        d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div class="relative mt-8">
                  <img
                    src="~/assets/images/its-logo.png"
                    alt="Team Member"
                    class="w-full h-48 object-cover rounded-xl"
                  />
                  <!-- Gear Decoration -->
                  <div
                    class="absolute -left-4 -top-4 bg-blue-400 p-4 rounded-xl"
                  >
                    <svg
                      class="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.03-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div class="relative">
                  <img
                    src="~/assets/images/its-logo.png"
                    alt="Team Member"
                    class="w-full h-48 object-cover rounded-xl"
                  />
                  <!-- Puzzle Piece Decoration -->
                  <div
                    class="absolute -right-4 -top-4 bg-green-400 p-4 rounded-xl"
                  >
                    <svg
                      class="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div class="relative mt-8">
                  <img
                    src="~/assets/images/its-logo.png"
                    alt="Team Member"
                    class="w-full h-48 object-cover rounded-xl"
                  />
                  <!-- Message Bubble Decoration -->
                  <div
                    class="absolute -left-4 -bottom-4 bg-purple-400 p-4 rounded-xl"
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
