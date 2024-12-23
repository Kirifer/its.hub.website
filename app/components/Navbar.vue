<script>

</script>

<template>
    <nav class="bg-blue-900 mx-auto rounded-full p-4 w-1/2  shadow-lg">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
            <div class="flex items-center space-x-60">
                <NuxtLink to="/" class="flex items-center space-x-2 text-white font-bold">
                    <img 
                        src="~/assets/images/its-logo.png" 
                        alt="IT Squarehub" 
                        class="w-10 h-10 object-contain"
                    />
                    <span>IT Squarehub</span>
                </NuxtLink>
                <div class="hidden md:flex space-x-4 uppercase">
                    <NuxtLink to="/"
                        class="text-white px-3 py-2 rounded-full text-sm font-medium transition-colors"
                        activeClass="under">
                        Home
                    </NuxtLink>
                    <NuxtLink to="/careers"
                        class="text-white px-3 py-2 rounded-full text-sm font-medium transition-colors"
                        activeClass="bg-gray-900 text-white">
                        Careers
                    </NuxtLink>
                    <NuxtLink to="/blogs"
                        class="text-white px-3 py-2 rounded-full text-sm font-medium transition-colors"
                        activeClass="bg-gray-900 text-white">
                        Blogs
                    </NuxtLink>
                    <NuxtLink to="/contact"
                        class="text-white px-3 py-2 rounded-full text-sm font-medium transition-colors"
                        activeClass="bg-gray-900 text-white">
                        Contact Us
                    </NuxtLink>
                </div>
            </div>
        </div>
    </nav>
</template>