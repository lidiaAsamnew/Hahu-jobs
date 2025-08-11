<template>

  <div class="bg-white rounded-lg shadow-xl p-4 w-64 border border-gray-200">

    <div class="flex items-center gap-x-3 mb-3 pb-3 border-b">
      <img :src="job.entity.logo || '/images/placeholder-logo.png'" :alt="job.entity.name" class="w-10 h-10 rounded-md border p-1 object-contain">
      <h4 class="font-bold text-gray-800">{{ job.entity.name }}</h4>
    </div>
    

    <ul class="space-y-1 text-sm text-gray-600 mb-4">
      <li class="flex items-center gap-x-2">
        <Icon name="uil:briefcase-alt" class="h-4 w-4 text-gray-400" />
        <span>{{ job.sub_sector.sector.name }}</span>
      </li>
      <li class="flex items-center gap-x-2">
        <Icon name="uil:map-marker" class="h-4 w-4 text-gray-400" />
        <span>{{ job.job_cities[0].city.name }}</span>
      </li>
       <li class="flex items-center gap-x-2">
        <Icon name="uil:users-alt" class="h-4 w-4 text-gray-400" />
        <span>{{ job.number_of_applicants }} Positions</span>
      </li>
    </ul>

    <a href="#" class="inline-flex items-center gap-x-2 text-teal-600 font-semibold text-sm hover:underline">
      Explore More
      <Icon name="uil:arrow-right" class="h-4 w-4" />
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