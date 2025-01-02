<template>
  <div
    class="bg-[url('@/assets/images/bg-careers.png')] bg-cover bg-center w-[1440] h-[1040] bg-no-repeat sm:bg-contain md:bg-cover"
  >
    <!-- Main Content -->
    <div
      class="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20"
    >
      <h1 class="text-6xl font-bold text-gray-900">Join us</h1>
      <p class="mt-4 text-lg text-gray-600 text-center max-w-xl">
        Discover a new era of outsourcing that focuses on excellence. Join the
        ITS Family.
      </p>

      <div
        class="mt-8 p-3 rounded-2xl bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 max-w-4xl w-full"
      >
        <div class="rounded-xl overflow-hidden">
          <img
            src="~/assets/images/its-hiring.jpg"
            alt="Two people in a business meeting"
            class="w-full h-[450px] object-cover"
          />
        </div>
      </div>

      <button
        class="mt-7 px-9 py-2.5 text-m font-medium text-[#844DDC] bg-[rgba(132,77,220,0.19)] rounded-full hover:bg-[rgba(132,77,220,0.5)] transition-colors"
      >
        Join Us
      </button>

      <h2 class="mt-16 text-5xl font-bold text-gray-900 text-center">
        Explore our Job Openings
      </h2>
      <p class="mt-4 text-lg text-gray-600 text-center max-w-xl">
        Our talent experts will contact you once your profile has been submitted
        to us. Hurry and click the poster to apply!
      </p>

      <!-- Job Cards Container -->
      <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="(job, index) in visibleJobs"
          :key="index"
          class="relative w-[537px] h-[273px] bg-white border border-[#844DDC] shadow-[0px_4px_12.1px_rgba(0,0,0,0.25)] rounded-[10px] p-8"
        >
          <div class="absolute left-[37px] top-[33px]">
            <div class="bg-[#D2A517] rounded-[15px] px-4 py-1">
              <span
                class="text-white text-[18px] font-normal leading-[22px] tracking-[-0.03em]"
              >
                Available
              </span>
            </div>
          </div>
          <h2
            class="absolute left-[37px] top-[91px] font-['lato'] font-normal text-[30px] leading-[36px] text-black"
          >
            {{ job.title }}
          </h2>
          <p
            class="absolute left-[37px] top-[141px] w-[451px] font-['lato'] font-normal text-[15px] leading-[18px] text-[#565656]"
          >
            {{ job.description }}
          </p>
          <NuxtLink
            :to="job.link"
            class="absolute right-[37px] bottom-[25px] w-[109px] h-[32px] bg-[#844DDC] rounded-[6px] text-white text-[15px] leading-[18px] tracking-[-0.03em] flex items-center justify-center"
          >
            Apply
          </NuxtLink>
        </div>
      </div>

      <!-- Chevron Navigation Buttons -->
      <div class="mt-8 flex justify-center w-full max-w-[1100px]">
        <button
          v-if="currentPage > 1"
          @click="navigate(-1)"
          class="px-2 py-2 bg-transparent border-purple-500 border-2 rounded-full hover:bg-gray-300 transition mx-2"
        >
          <svg
            class="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <button
          v-if="currentPage < totalPages"
          @click="navigate(1)"
          class="px-2 py-2 bg-transparent border-purple-500 border-2 rounded-full hover:bg-gray-300 transition mx-2"
        >
          <svg
            class="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>

      <h2 class="mt-16 text-5xl font-bold text-gray-900 text-center">
        Find your dream job at IT Squarehub
      </h2>

      <button
        class="mt-10 mb-10 px-8 py-2.5 text-sm font-medium text-white bg-[#844DDC] rounded-full hover:bg-[rgba(132,77,220,0.5)] transition-colors z-10"
      >
        Apply Now!
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "JoinUsComponent",
  data() {
    return {
      jobs: [
        {
          title: "Finance Manager",
          description: "Oversees financial planning, budgeting, and reporting.",
          link: "/career/1",
        },
        {
          title: "SQL Developer or Admin",
          link: "/career/2",
        },
        {
          title: "Accounting Assistant",
          description: "Designs and develops software applications.",
        },
        {
          title: "Business Development Manager",
          description: "Manages recruitment and employee relations.",
        },
        {
          title: "Company Nurse",
          description: "Leads product development and manages lifecycle.",
        },
        {
          title: "Data Engineer",
          description: "Designs user experiences and interfaces.",
        },
        {
          title: "Data Analyst",
          description: "Analyzes and interprets complex data.",
        },
        {
          title: "Cloud Security Engineer",
          description: "Provides customer service and resolves issues.",
        },
        {
          title: "Sales Executive",
          description: "Generates leads and drives sales.",
        },
        {
          title: "Project Manager",
          description: "Manages projects from start to finish.",
        },
        {
          title: "Operations Manager",
          description: "Oversees day-to-day operations.",
        },
        {
          title: "Web Developer",
          description: "Designs and develops websites.",
        },
        {
          title: "Network Engineer",
          description: "Installs and manages networks.",
        },
        {
          title: "Business Analyst",
          description: "Analyzes business needs and solutions.",
        },
        {
          title: "Content Creator",
          description: "Develops engaging content for platforms.",
        },
        {
          title: "Social Media Manager",
          description: "Manages social media strategies and campaigns.",
        },
        {
          title: "Quality Assurance",
          description: "Tests and ensures quality in products.",
        },
        {
          title: "Admin Assistant",
          description: "Assists in daily office operations.",
        },
        {
          title: "Network Engineer",
          description: "Optimizes websites for search engines.",
        },
        {
          title: "Product Owner",
          description: "Analyzes financial trends and forecasts.",
        },
        {
          title: "SQA Automation",
          description: "Manages financial records and transactions.",
        },
        {
          title: "Digital Marketer",
          description: "Develops online marketing campaigns.",
        },
        {
          title: "Technical Writer",
          description: "Uses data analysis to solve business problems.",
        },
        {
          title: "Talent Aquisition Associate",
          description: "Leads HR teams and manages employee relations.",
        },
      ],
      currentPage: 1,
      itemsPerPage: 4,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.jobs.length / this.itemsPerPage);
    },
    visibleJobs() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.jobs.slice(start, end);
    },
  },
  methods: {
    navigate(direction) {
      this.currentPage += direction;
    },
  },
};
</script>

<style scoped></style>
