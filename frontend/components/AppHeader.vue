<template>
  <header class="bg-[#F0F5F7] shadow-sm sticky top-0 z-50">
    <nav class="container mx-auto px-4 lg:px-8 py-3 flex justify-between items-center">

      <div class="flex items-center">
        <NuxtLink to="/" class="flex flex-col">
          <h1 class="text-3xl font-extrabold">
            <span class="text-[#1F2937]">Hahu</span><span class="text-[#14B8A6]">Jobs</span>
          </h1>
          <span class="text-xs text-gray-500 -mt-1">Primary</span>
        </NuxtLink>
      </div>

      <div class="hidden md:flex items-center">
        <div class="flex items-center space-x-4 text-xs font-medium">
          <NuxtLink to="/" class="nav-link">Home</NuxtLink>
          <NuxtLink to="/about" class="nav-link">About</NuxtLink>
          <NuxtLink to="/jobs" class="nav-link">Jobs</NuxtLink>
          <NuxtLink to="/post-vacancy" class="nav-link text-teal-600 font-semibold">Post Vacancy</NuxtLink>
          <NuxtLink to="/contact" class="nav-link flex items-center gap-x-2">Contact</NuxtLink>
          <button class="text-gray-500 hover:text-teal-600 focus:outline-none" aria-label="Toggle dark mode">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
          </button>
          <NuxtLink to="/login" class="bg-[#14B8A6] text-white text-xs font-semibold px-3 py-1 rounded-md hover:bg-teal-700">Login</NuxtLink>
          <span class="text-gray-500 text-sm">or</span>
          <NuxtLink to="/signup" class="bg-[#14B8A6] text-white text-xs font-semibold px-3 py-1 rounded-md hover:bg-teal-700">Sign up</NuxtLink>
        </div>
      </div>
      
    
      <div class="md:hidden">
         <button class="text-gray-600 focus:outline-none" aria-label="Open menu">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
        </button>
      </div>

    </nav>
  </header>
</template>

<style scoped>

.nav-link {
  color: #374151;
}
.nav-link:hover {
  color: #0d9488; 
}

.nav-link.router-link-exact-active {
  color: #14B8A6; 
  font-weight: 600;   
}
</style>

<script setup>
</script>