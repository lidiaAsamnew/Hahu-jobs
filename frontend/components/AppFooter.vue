<template>
  <footer class="bg-white pt-24 dark:bg-slate-800 dark:text-white">
    <div class="container mx-auto px-4 lg:px-4">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-12">
        
        <div class="md:col-span-2 pt-14">
          <h3 class="text-base font-semibold text-gray-900  underline">Get Started</h3>
          <ul class="space-y-0 mt-5">
            <li><NuxtLink to="/signup" class="text-sm text-gray-700 hover:text-teal-600">Sign up</NuxtLink></li>
            <li><NuxtLink to="/login" class="text-sm text-gray-700 hover:text-teal-600">Login</NuxtLink></li>
          </ul>
        </div>

        <div class="md:col-span-2 pt-14">
          <h3 class="text-base font-semibold text-gray-900 underline">Quick links</h3>
          <ul class="space-y-0 mt-5">
            <li><NuxtLink to="/hahu-io" class="text-sm text-gray-700 hover:text-teal-600">HahuJobs IO</NuxtLink></li>
            <li><NuxtLink to="/minab-tech" class="text-sm text-gray-700 hover:text-teal-600">Minab Tech</NuxtLink></li>
          </ul>
        </div>

        <div class="md:col-span-5">
          <img 
            src="/minab-logo.svg" 
            alt="MINAB IT Solutions Logo" 
            class="w-40 mb-5"
          >
          <p class="text-gray-600 leading-relaxed text-sm">
            HaHuJobs is a cloud based product owned and managed by a technology consulting firm called Minab IT solutions PLC. Minab was founded in 2014 and has an extensive experience in software development for the past nine years.
          </p>
        </div>

        <div class="md:col-span-3 pt-10 pl-12">
          <h3 class="font-semibold text-base mb-4 text-gray-700">Powered by</h3>
          <h1 class="text-3xl font-extrabold"><span class="text-[#1F2937]">Hahu</span><span class="text-[#14B8A6]">Jobs</span></h1>
          <p class="text-md mt-1 text-gray-700">አስቸኳይ ክፍት የሥራ መደብ</p>
        </div>
      </div>

      <div class="mt-6 pt-3 border-t border-gray-200 pb-2 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p class="text-gray-500 text-sm">Privacy policy © 2020 - 2025 HaHuJobs. All rights reserved.</p>
       <div class="flex items-center space-x-3 mt-4 md:mt-0">
        <a href="#" class="social-icon" aria-label="Telegram"><Icon name="fa6-brands:telegram" class="text-white h-4 w-4" /></a>
        <a href="#" class="social-icon" aria-label="Facebook"><Icon name="fa6-brands:facebook-f" class="text-white h-4 w-4" /></a>
        <a href="#" class="social-icon" aria-label="Twitter"><Icon name="fa6-brands:x-twitter" class="text-white h-4 w-4" /></a>
        <a href="#" class="social-icon" aria-label="LinkedIn"><Icon name="fa6-brands:linkedin-in" class="text-white h-4 w-4" /></a>
       </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.social-icon {
  @apply w-5 h-5 bg-teal-600 rounded-full flex items-center justify-center text-white hover:bg-teal-700 transition-colors;
}
</style>
<script setup>

</script>

