<template>
  <div class="relative">
    <div class="w-full min-h-screen bg-gradient-to-br from-[#272727] to-[#1a1a1a] flex flex-col items-center justify-center text-center px-4 py-12 relative">
    <!-- Join Us Button -->
    <div class="mb-8">
      <button class="w-[163px] h-[61px] bg-[#844DDC]/[0.19] rounded-[70px] flex items-center justify-center hover:bg-[#844DDC]/[0.25] transition-colors">
        <span class="font-['Instrument_Sans'] font-normal text-[30px] leading-[37px] text-center tracking-[-0.03em] text-[#606DF1]">
          Join Us
        </span>
      </button>
    </div>

    <!-- Title -->
    <h1 class="w-full max-w-[825px] font-['Instrument_Sans'] font-medium text-[30px] sm:text-[45px] leading-[40px] sm:leading-[55px] text-white mb-6">
      Philippine Outsourcing Industry: Trends and Future Prospects
    </h1>

    <!-- Description -->
    <p class="w-full max-w-[603px] font-['Inter'] font-normal text-[12px] sm:text-[15px] leading-[16px] sm:leading-[18px] text-white mb-12">
      Discover the growth potential of the Philippine outsourcing industry in this insightful overview. Learn about the latest trends and opportunities for businesses.
    </p>

    <!-- Floating Featured Image - Positioned to overflow -->
    <div class="w-full max-w-[648px] absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 px-4">
      <div class="relative w-full pt-[62.3%] rounded-[15px] border-[10px] border-[#606DF1] overflow-hidden">
        <img 
          src="~/assets/images/blog.png"
          alt="Philippine Outsourcing"
          class="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
    </div>
  </div>

    <!-- Content Section -->
    <div class="w-full max-w-[1145px] mx-auto px-4 sm:px-6 lg:px-8 py-12 font-['Inter'] text-[#565656]">
      <article class="space-y-12">
        <section>
          <h2 class="font-semibold text-2xl sm:text-3xl mb-6">Introduction</h2>
          <p class="text-base sm:text-lg">
            The Philippine outsourcing industry has evolved into a global leader, renowned for its skilled workforce,
            cost-effective solutions, and strategic geographical advantage. This blog explores the current trends
            shaping the industry and outlines future prospects for sustained growth and innovation.
          </p>
        </section>

        <section>
          <h2 class="font-semibold text-2xl sm:text-3xl mb-6">Current Landscape of the Philippine Outsourcing Industry</h2>
          <p class="text-base sm:text-lg">
            The Philippine outsourcing industry, particularly Business Process Outsourcing (BPO), Information
            Technology (IT) outsourcing, and Finance and Accounting Outsourcing (FAO), continues to thrive as a
            vital component of the country's economy. With over 1.3 million employees and a diverse range of
            services offered, including customer service, technical support, software development, and financial
            analysis, the industry has cemented its position as a preferred outsourcing destination.
          </p>
        </section>

        <section>
          <h2 class="font-semibold text-2xl sm:text-3xl mb-6">Key Trends Shaping the Industry</h2>
          <ol class="list-decimal list-inside space-y-6">
            <li>
              <strong class="text-lg sm:text-xl">Digital Transformation and Remote Work</strong>
              <p class="mt-2 text-base sm:text-lg">
                The COVID-19 pandemic accelerated digital transformation initiatives across industries, prompting the outsourcing sector in the Philippines to embrace remote work models. Companies rapidly adopted cloud technologies, digital collaboration tools, and cybersecurity measures to facilitate seamless operations and ensure data security.
              </p>
            </li>
            <li>
              <strong class="text-lg sm:text-xl">Expansion Beyond Traditional BPO Services</strong>
              <p class="mt-2 text-base sm:text-lg">
                While BPO services remain foundational, the industry is witnessing a significant expansion into specialized areas such as IT services (software development, cybersecurity), healthcare outsourcing (medical billing, telemedicine support), and creative services (graphic design, content creation). This diversification allows Philippine outsourcing firms to cater to a broader spectrum of client needs and enhance value-added services.
              </p>
            </li>
            <li>
              <strong class="text-lg sm:text-xl">Focus on Talent Development and Upskilling</strong>
              <p class="mt-2 text-base sm:text-lg">
                To maintain competitiveness, the industry places a strong emphasis on talent development and upskilling programs. Philippine outsourcing firms are investing in training initiatives to equip their workforce with advanced skills in AI, machine learning, blockchain, and digital marketing. This strategic approach ensures that professionals remain at the forefront of technological advancements and can deliver innovative solutions to clients globally.
              </p>
            </li>
          </ol>
        </section>

        <section>
          <h2 class="font-semibold text-2xl sm:text-3xl mb-6">Future Prospects and Opportunities</h2>
          <ol class="list-decimal list-inside space-y-6">
            <li>
              <strong class="text-lg sm:text-xl">Rising Demand in Emerging Markets</strong>
              <p class="mt-2 text-base sm:text-lg">
                The Philippines continue to attract outsourcing contracts from key markets such as the United States, Europe, and the Asia-Pacific region. The growing demand for cost-effective, high-quality services positions the country as a preferred outsourcing destination, supported by its proficient English-speaking workforce and robust infrastructure.
              </p>
            </li>
            <li>
              <strong class="text-lg sm:text-xl">Government Support and Infrastructure Development</strong>
              <p class="mt-2 text-base sm:text-lg">
                Government policies and incentives play a crucial role in fostering the growth of the outsourcing industry. Initiatives aimed at improving telecommunications infrastructure, promoting digital literacy, and enhancing cybersecurity measures bolster the industry's resilience and attractiveness to international investors.
              </p>
            </li>
            <li>
              <strong class="text-lg sm:text-xl">Technological Advancements and Innovation</strong>
              <p class="mt-2 text-base sm:text-lg">
                Technological innovations, including AI, automation, and data analytics, are expected to reshape the outsourcing landscape in the Philippines. These advancements enable outsourcing firms to optimize processes, improve operational efficiency, and deliver personalized services that meet evolving client expectations.
              </p>
            </li>
          </ol>
        </section>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhilippineOutsourcing'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500&family=Inter:wght@400;600&display=swap');
</style>