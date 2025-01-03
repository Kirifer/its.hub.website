<template>
    <div class="relative">
      <!-- Hero Section -->
      <div class="absolute w-[1440px] h-[621px] left-0 top-0 bg-[#272727]">
        <!-- Previous hero content remains the same -->
      </div>
  
      <!-- Content Section -->
      <div class="absolute w-[1145px] left-[calc(50%-1145px/2-0.5px)] top-[879px] font-['Inter'] text-[25px] leading-[30px] tracking-[-0.03em] text-[#565656]">
        <!-- Previous article content remains the same -->
      </div>
  
      <!-- Our Blogs Section -->
      <div class="absolute w-[253.55px] h-[61px] left-[147px] top-[2294px]">
        <div class="absolute w-full h-full bg-[#844DDC]/[0.19] rounded-[40px]">
          <span class="absolute w-[199.1px] h-[37px] left-[27.45px] top-[12px] font-['Instrument_Sans'] font-normal text-[30px] leading-[37px] flex items-center text-center tracking-[-0.03em] text-[#844DDC]">
            Our Blogs
          </span>
        </div>
      </div>
  
      <!-- Blog Cards -->
      <!-- Left Card -->
      <div class="absolute w-[426px] h-[519px] left-[247px] top-[2390px]">
        <div class="relative w-full h-full bg-white border border-[#606DF1] rounded-[15px]">
          <img 
            src="~/assets/images/blog.png"
            alt="Blog Image"
            class="w-[426px] h-[288px] object-cover border border-[#606DF1] rounded-[15px]"
          />
          
          <h3 class="absolute w-[345px] h-[48px] left-[calc(50%-345px/2)] top-[307px] font-['Inter'] font-medium text-[20px] leading-[24px] text-black">
            Philippine Outsourcing Industry: Trends and Future Prospects
          </h3>
          
          <p class="absolute w-[360px] h-[72px] left-[calc(50%-360px/2)] top-[368px] font-['Inter'] font-normal text-[15px] leading-[18px] text-[#565656]">
            Discover the growth potential of the Philippine outsourcing industry in this insightful overview. Learn about the latest trends and opportunities for businesses.
          </p>
          
          <button class="absolute w-[109px] h-[32px] left-[27px] top-[459px] bg-[#606DF1] rounded-[6px]">
            <span class="absolute w-[73px] h-[18px] left-[18px] top-[7px] font-['Inter'] font-normal text-[15px] leading-[18px] text-center tracking-[-0.03em] text-white">
              Read More
            </span>
          </button>
        </div>
      </div>
  
      <!-- Right Card -->
      <div class="absolute w-[426px] h-[519px] left-[767px] top-[2390px]">
        <div class="relative w-full h-full bg-white border border-[#606DF1] rounded-[15px]">
          <img 
            src=""
            alt="Blog Image"
            class="w-[426px] h-[288px] object-cover border border-[#606DF1] rounded-[15px]"
          />
          
          <h3 class="absolute w-[345px] h-[48px] left-[calc(50%-345px/2)] top-[307px] font-['Inter'] font-medium text-[20px] leading-[24px] text-black">
            Philippine Outsourcing Industry: Trends and Future Prospects
          </h3>
          
          <p class="absolute w-[360px] h-[72px] left-[calc(50%-360px/2)] top-[368px] font-['Inter'] font-normal text-[15px] leading-[18px] text-[#565656]">
            Discover the growth potential of the Philippine outsourcing industry in this insightful overview. Learn about the latest trends and opportunities for businesses.
          </p>
          
          <button class="absolute w-[109px] h-[32px] left-[27px] top-[459px] bg-[#606DF1] rounded-[6px]">
            <span class="absolute w-[73px] h-[18px] left-[18px] top-[7px] font-['Inter'] font-normal text-[15px] leading-[18px] text-center tracking-[-0.03em] text-white">
              Read More
            </span>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PhilippineOutsourcing'
  }
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500&family=Inter:wght@400;500;600&display=swap');
  </style>