<template>
  <div>
    <div>
      <div class="container mx-auto py-4">
        <div class="flex flex-col">
          <div v-for="service in services" :key="service.id" class=" hover:bg-gray-100 max-h-[300px]">
            <div class="space-y-2 py-5 px-10">
              <div class="text-3xl font-bold hover:underline">
                {{ service.title }}
              </div>
              <div class="text-lg text-gray-600">
                {{ service.description }}
              </div>
              <div class="flex flex-wrap space-x-2">
                <span
                  v-for="tag in service.tags"
                  :key="tag"
                  class="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-blue-200 text-blue-800"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const services = [
  {
    id: 1,
    title: "Build a Modern E-commerce Website",
    description:
      "A Virtual Assistant (VA) can remodel your commercial enterprise by means of taking on diverse administrative tasks that consume time and resources. They are excellent at handling emails, making appointments, and responding to consumer questions, which frees up your team's and your own valuable time to focus on more important work. Given that you can increase their services in accordance with your company objectives without having to commit to recruiting a full-time workforce, virtual assistants (VAs) can add flexibility to your operations. Their proficiency in optimizing tactics and enhancing efficacy can significantly boost output and ultimately aid in the expansion and success of your enterprise.",
    budget: 2500,
    tags: ["Next.js", "Shopify", "E-commerce"],
    clientName: "John Smith",
    clientAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
  },
  {
    id: 2,
    title: "Design Mobile App UI/UX",
    description:
      "A Virtual Assistant (VA) can remodel your commercial enterprise by means of taking on diverse administrative tasks that consume time and resources. They are excellent at handling emails, making appointments, and responding to consumer questions, which frees up your team's and your own valuable time to focus on more important work. Given that you can increase their services in accordance with your company objectives without having to commit to recruiting a full-time workforce, virtual assistants (VAs) can add flexibility to your operations. Their proficiency in optimizing tactics and enhancing efficacy can significantly boost output and ultimately aid in the expansion and success of your enterprise.",
    budget: 1800,
    tags: ["UI/UX", "Mobile", "Figma"],
    clientName: "Sarah Johnson",
    clientAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    id: 3,
    title: "Content Writing for Tech Blog",
    description:
      "A Virtual Assistant (VA) can remodel your commercial enterprise by means of taking on diverse administrative tasks that consume time and resources. They are excellent at handling emails, making appointments, and responding to consumer questions, which frees up your team's and your own valuable time to focus on more important work. Given that you can increase their services in accordance with your company objectives without having to commit to recruiting a full-time workforce, virtual assistants (VAs) can add flexibility to your operations. Their proficiency in optimizing tactics and enhancing efficacy can significantly boost output and ultimately aid in the expansion and success of your enterprise.",
    budget: 500,
    tags: ["Content Writing", "Technical", "Blog"],
    clientName: "Mike Wilson",
    clientAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
  },
  {
    id: 4,
    title: "Social Media Marketing Campaign",
    description:
      "A Virtual Assistant (VA) can remodel your commercial enterprise by means of taking on diverse administrative tasks that consume time and resources. They are excellent at handling emails, making appointments, and responding to consumer questions, which frees up your team's and your own valuable time to focus on more important work. Given that you can increase their services in accordance with your company objectives without having to commit to recruiting a full-time workforce, virtual assistants (VAs) can add flexibility to your operations. Their proficiency in optimizing tactics and enhancing efficacy can significantly boost output and ultimately aid in the expansion and success of your enterprise.",
    budget: 1200,
    tags: ["Marketing", "Social Media", "Strategy"],
    clientName: "Emma Davis",
    clientAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
  },
];
</script>
