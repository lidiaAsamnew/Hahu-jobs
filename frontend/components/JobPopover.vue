<template>
 
  <div class="w-40">


    <div class="flex items-center gap-x-3 mb-4 pb-3 border-b border-gray-200">
      <img 
        :src="job.companyLogo" 
        :alt="job.companyName" 
        class="w-12 h-12 rounded-md border p-1 object-contain bg-gray-50"
      >
      <h4 class="font-semibold text-gray-800 leading-tight">{{ job.companyName }}</h4>
    </div>
    

    <ul class="space-y-2.5 text-sm text-gray-700 mb-5">
      <li class="flex items-center gap-x-2.5">
        <Icon name="uil:phone" class="h-5 w-5 text-gray-500" />
        <span>N.A</span>
      </li>
      <li class="flex items-center gap-x-2.5">
        <Icon name="uil:map-marker" class="h-5 w-5 text-gray-500" />
        <span>N.A</span>
      </li>
      <li class="flex items-center gap-x-2.5">
        <Icon name="uil:users-alt" class="h-5 w-5 text-gray-500" />
        <span>N.A</span>
      </li>
    </ul>

    <a href="#" class="inline-flex items-center gap-x-2 text-teal-600 font-bold text-sm hover:underline">
      <span>Explore More</span>
      <Icon name="uil:arrow-right" class="h-5 w-5" />
    </a>
  </div>
</template>

<script setup>
defineProps({
  job: {
    type: Object,
    required: true
  }
})
</script>