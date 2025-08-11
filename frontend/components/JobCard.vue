<template>
  <div class="group relative bg-white rounded-lg shadow-md hover:shadow-sm transition-shadow duration-300 text-left border border-gray-100 hover:border-2 hover:border-teal-600 flex flex-col">

    <div class="flex justify-between items-center">
      <span class="mt-1 text-sm text-gray-500 flex items-center gap-x-1.5 dark:text-gray-200">
        <Icon name="uil:calendar-alt" class="h-4 w-4" />
        {{ job.daysLeft }} Days Left
      </span>
      <div class="flex items-center gap-x-1">
        <span class="text-teal-600  flex items-center justify-center dark:text-gray-200">
          <Icon name="uil:bookmark" class="h-6 w-6" />
        </span>
        <span class="inline-flex items-center gap-1 bg-teal-600 text-white text-xs font-semibold px-3 py-1 rounded-tr-md rounded-bl-md"><img src="/cards-top.svg" alt="Logo" class="w-4 h-4" />Featured</span>
      </div>
    </div>

    <div class="flex gap-x-5">
   
      <div class="flex flex-col items-center pt-14  px-2">
        <img :src="job.companyLogo" :alt="job.companyName" class="w-16 h-16 rounded-md border p-1 object-contain" />
        <p class="text-sm text-gray-500 mt-2 text-center dark:text-gray-200">{{ job.companyName }}</p>
      </div>

      <div class="flex-1 pt-2">
        <h3 class="text-md font-bold text-gray-800 leading-tight mb-2 dark:text-white">{{ job.title }}</h3>
        <ul class="space-y-1 text-sm text-gray-600 dark:text-white">
          <li class="flex items-center gap-x-1">
            <Icon name="uil:briefcase-alt" class="h-5 w-5 text-teal-600 dark:text-gray-200" />
            <span>{{ job.category }}</span>
          </li>
           <li class="py-1 flex items-center gap-x-1 dark:text-white">
            <Icon name="uil:corner-down-right" class="h-5 w-5 text-teal-600 dark:text-gray-200" />
            <span>{{ job.category}}</span>
          </li>
          <li class="flex items-center gap-x-1 dark:text-white">
            <Icon name="uil:map-marker" class="h-5 w-5 text-teal-600 dark:text-gray-200" />
            <span>{{ job.location }}</span>
          </li>
          <li class="flex items-center gap-x-1 dark:text-gray-200">
            <Icon name="uil:bag" class="h-5 w-5 text-teal-600 dark:text-gray-200" />
            <span>{{ job.experience }} years</span>
          </li>
          <li class="flex items-center gap-x-1 dark:text-gray-200">
            <Icon name="uil:users-alt" class="h-5 w-5 text-teal-600 dark:text-gray-200" />
            <span>{{ job.positions }} Positions</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="flex justify-center py-5">
      <div class="inline-flex items-center gap-x-2 bg-teal-600 text-white text-sm font-semibold px-2 py-1 rounded-full dark:text-gray-200">
        <Icon name="uil:clock" class="h-3 w-3" />
        <span>{{ job.type }}</span>
      </div>
    </div>

    <div class="px-6">
      <p class="border-t pt-4 text-sm text-gray-600 leading-relaxed line-clamp-3 dark:text-gray-200">
        {{ job.description }}
      </p>
    </div>
   
    <div class="px-6 pb-5 pt-5 mt-auto flex justify-center items-center">
      <div class="flex items-center gap-x-3">
        <button class="bg-gray-100 text-gray-700 text-sm font-semibold py-1 px-2 rounded-md hover:bg-gray-200 ">
          Read More
        </button>
        <button class="bg-teal-500 text-white text-sm font-semibold py-1 px-2 rounded-md hover:bg-teal-600">
          Apply Now
        </button>
      </div>
    </div>

   
    <div class="flex justify-between items-center px-6 pb-4 text-gray-500 text-sm dark:text-gray-200">
      <div class="flex items-center gap-x-1">
        <Icon name="uil:eye" class="h-4 w-4" />
        {{ job.views }}
      </div>
      <button class="hover:text-teal-600 dark:text-gray-200">
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
