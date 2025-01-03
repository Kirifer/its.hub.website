<template>
    <div class="min-h-screen">
      <!-- Main container with background -->
      <div
        class="bg-[url('@/assets/images/bg-careers_details.png')] bg-cover bg-center min-h-screen w-full bg-no-repeat sm:bg-contain md:bg-cover p-10"
      >
        <div class="max-w-7xl mx-auto">
          <!-- Hero Section -->
          <div
            class="relative flex flex-col md:flex-row justify-between items-center md:items-start"
          >
            <div class="space-y-6 mt-16 ml-8 text-center md:text-left">
              <!-- Tag Button -->
              <div class="inline-block">
                <div class="bg-purple-100 rounded-[30px] px-12 py-3">
                  <span
                    class="text-[#7321F6] text-[16px] sm:text-[20px] font-normal"
                    >finance</span
                  >
                </div>
              </div>
  
              <!-- Title -->
              <h1
                class="text-[40px] sm:text-[50px] md:text-[65px] font-medium text-black"
              >
                FINANCE MANAGER
              </h1>
  
              <!-- Description -->
              <p
                class="text-[20px] sm:text-[25px] text-gray-600 max-w-[728px] leading-[30px] mx-auto md:mx-0"
              >
                Oversees financial planning, budgeting, and reporting. Manages
                investments, analyzes financial data, and ensures compliance with
                financial regulations.
              </p>
            </div>
            <!-- Finance Image -->
            <div
              class="relative w-[377px] h-[354px] mt-16 mr-8 md:mr-8 mx-8 flex justify-center md:justify-end"
            >
              <div
                class="absolute inset-0 bg-gradient-to-br from-[#00B8D4] to-[#844DDC] rounded-[20px] transform rotate-180"
              ></div>
              <img
                src="~/assets/images/finance.png"
                alt="Finance illustration"
                class="absolute top-4 right-4 rounded-[15px] w-[340px] h-[321px] object-cover"
              />
            </div>
          </div>
  
          <!-- Job Description Section -->
          <div class="mt-3 sm:mt-4 p-0">
            <h2
              class="text-[35px] sm:text-[50px] font-medium text-black mb-2 text-center md:text-left"
            >
              Job Description
            </h2>
            <div
              class="text-[18px] sm:text-[25px] text-gray-600 space-y-4 max-w-[728px] mx-auto md:mx-0"
            >
              <ul class="space-y-4 list-disc list-inside">
                <li>
                  Bachelor's degree, or higher in Computer Science. Engineering,
                  or a related field.
                </li>
                <li>5 years of Experience in SSRS, SSIS, SQL</li>
                <li>
                  Experience developing for or supporting Microsoft's SQL Server
                  Business Intelligence (BI) stack
                </li>
                <li>
                  Advanced Experience with SQL Server Database Administration;
                  performance tuning.
                </li>
                <li>
                  Experience with Networks, Web Page Administration, APIs, and
                  EDI.
                </li>
                <li>Nice to Have: Access, VBA, PowerBI, Tableau</li>
              </ul>
            </div>
          </div>
  
          <!-- Recent Positions Section -->
          <div class="mt-12">
            <div
              class="flex flex-col md:flex-row justify-between items-center mb-8"
            >
              <h2
                class="text-[35px] sm:text-[50px] font-medium text-center md:text-left"
              >
                Recent Positions
              </h2>
              <button
                @click="navigateToCareers"
                class="px-6 py-3 bg-[#844DDC] text-white rounded-md text-sm hover:bg-purple-700 transition-colors mt-4 md:mt-0"
              >
                More positions
              </button>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <!-- Data Analyst Card -->
              <div
                class="border border-[#844DDC] rounded-[10px] p-8 bg-white shadow-md relative"
              >
                <div
                  class="bg-[#D2A517] text-white px-4 py-1 rounded-[15px] inline-block text-[16px] sm:text-[18px]"
                >
                  Available
                </div>
                <h3 class="text-[25px] sm:text-[30px] mt-4 mb-2">Data Analyst</h3>
                <p
                  class="text-gray-600 text-[14px] sm:text-[15px] leading-[18px]"
                >
                  Collects, processes, and analyzes data to generate actionable
                  insights, supporting business decision-making and performance
                  improvements.
                </p>
                <br />
                <button
                  class="absolute bottom-4 right-5 bg-[#844DDC] text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors mt-4"
                >
                  Apply
                </button>
              </div>
  
              <!-- SQL Developer Card -->
              <div
                class="border border-[#844DDC] rounded-[10px] p-8 bg-white shadow-md relative"
              >
                <div
                  class="bg-[#D2A517] text-white px-4 py-1 rounded-[15px] inline-block text-[16px] sm:text-[18px]"
                >
                  Available
                </div>
                <h3 class="text-[25px] sm:text-[30px] mt-4 mb-2">
                  SQL Developer or Admin
                </h3>
                <p
                  class="text-gray-600 text-[14px] sm:text-[15px] leading-[18px]"
                >
                  Designs, maintains, and optimizes databases using SQL. Ensures
                  data integrity, performance tuning, and database security.
                </p>
                <br />
                <button
                  class="absolute bottom-4 right-5 bg-[#844DDC] text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors mt-4"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      navigateToCareers() {
        this.$router.push("/careers"); // Navigates to the careers page
      },
    },
  };
  </script>
  