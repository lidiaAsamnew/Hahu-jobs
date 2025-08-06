<template>
  <div class="group relative bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-left border border-gray-100 hover:border-green-700 flex flex-col">

   
    <div class="flex justify-between items-center">
      <span class="mt-1 text-sm text-gray-500 flex items-center gap-x-1.5">
        <Icon name="uil:calendar-alt" class="h-4 w-4" />
        {{ job.daysLeft }} Days Left
      </span>
      <div class="flex items-center gap-x-1">
        <span class="text-teal-600  flex items-center justify-center">
          <Icon name="uil:bookmark" class="h-6 w-6" />
        </span>
        <span class="inline-flex items-center gap-1 bg-teal-600 text-white text-xs font-semibold px-3 py-1 rounded-tr-md rounded-bl-md"><img src="/cards-top.svg" alt="Logo" class="w-4 h-4" />Featured</span>
      </div>
    </div>


    <div class="flex gap-x-6 px-6 pt-6">
   
      <div class="flex flex-col items-center">
        <img :src="job.companyLogo" :alt="job.companyName" class="w-16 h-16 rounded-md border p-1 object-contain" />
        <p class="text-sm text-gray-500 mt-2 text-center">{{ job.companyName }}</p>
      </div>

      <div class="flex-1">
        <h3 class="text-md font-bold text-gray-800 leading-tight mb-2">{{ job.title }}</h3>
        <ul class="space-y-1 text-sm text-gray-600">
          <li class="flex items-center gap-x-1">
            <Icon name="uil:briefcase-alt" class="h-5 w-5 text-gray-400" />
            <span>{{ job.category }}</span>
          </li>
          <li class="flex items-center gap-x-1">
            <Icon name="uil:map-marker" class="h-5 w-5 text-gray-400" />
            <span>{{ job.location }}</span>
          </li>
          <li class="flex items-center gap-x-1">
            <Icon name="uil:bag" class="h-5 w-5 text-gray-400" />
            <span>{{ job.experience }} years</span>
          </li>
          <li class="flex items-center gap-x-1">
            <Icon name="uil:users-alt" class="h-5 w-5 text-gray-400" />
            <span>{{ job.positions }} Positions</span>
          </li>
        </ul>
      </div>
    </div>


    <div class="px-6 pt-4 py-2">
      <div class="inline-flex items-center gap-x-2 bg-teal-600 text-white text-sm font-semibold px-4 py-1.5 rounded-full">
        <Icon name="uil:clock" class="h-3 w-3" />
        <span>{{ job.type }}</span>
      </div>
    </div>


    <p class="border-t px-6 pt-4 text-sm text-gray-600 leading-relaxed line-clamp-2">
      {{ job.description }}
    </p>

   
    <div class="px-6 pb-5 mt-auto flex justify-between items-center">
      <div class="flex items-center gap-x-2">
        <button class="bg-gray-100 text-gray-700 font-semibold py-1.5 px-3 rounded-md hover:bg-gray-200">
          Read More
        </button>
        <button class="bg-teal-500 text-white font-semibold py-1.5 px-3 rounded-md hover:bg-teal-600">
          Apply Now
        </button>
      </div>
    </div>

   
    <div class="flex justify-between items-center px-6 pb-4 text-gray-500 text-sm">
      <div class="flex items-center gap-x-1">
        <Icon name="uil:eye" class="h-4 w-4" />
        {{ job.views }}
      </div>
      <button class="hover:text-teal-600">
        <Icon name="uil:share-alt" class="h-5 w-5" />
      </button>
    </div>
    
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
