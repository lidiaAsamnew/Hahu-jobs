<template>
  
  <div class="flex-shrink-0 w-full bg-white dark:bg-gray-800 rounded-xl border-[1.5px] border-transparent hover:border-teal-600 transition-colors duration-300 p-4 shadow-sm">
    <div class="flex flex-col h-full">
      <div class="relative flex items-center justify-between w-full mb-4">
        <div class="flex items-center gap-x-1 text-teal-600 dark:text-teal-400">
          <Icon name="uil:calendar-alt" class="w-4 h-4" />
          <p class="text-sm font-light">{{ job.daysLeft }} days left</p>
        </div>
        <div class="flex">
            <!-- <button class="text-teal-600 flex items-center justify-center dark:text-gray-50 mr-24">
                <Icon name="uil:bookmark" class="h-6 w-6" />
            </button> -->
            
            <div class="absolute top-[-18px] right-[-18px] flex items-center justify-center h-6 px-3 bg-teal-600 rounded-tr-xl rounded-bl-md">
                <img src="/cards-top.svg" alt="featured icon" class="h-5 w-5" />
                <p class="hidden ml-2 text-sm font-light text-white sm:block">Featured</p>
            </div>
        </div>
      </div>

      <div class="flex flex-col md:flex-row md:items-start gap-x-4 flex-grow">
        
        <VDropdown
          theme="job-popover"
          placement="right-start"
          :distance="12"
          :triggers="['hover']"
          :delay="100"
        >
          <div class="flex flex-col items-center flex-shrink-0 w-full my-4 cursor-pointer md:w-28 md:mb-0">
            <img :src="job.companyLogo" :alt="job.companyName" class="object-contain w-24 h-24 rounded-md" />
            <p class="mt-3 text-sm font-normal leading-6 md:text-lg text-secondary line-clamp-3">
              {{ job.companyName }}
            </p>
          </div>

          <template #popper>
            <JobPopover :job="job" />
          </template>
        </VDropdown>
     
 
        <div class="flex flex-col flex-grow">
          <h3 class="mb-2 text-lg font-black text-gray-600 dark:text-white line-clamp-1" :title="job.title">
            {{ job.title }}
          </h3>
          <div class="space-y-2 text-xs font-light dark:text-gray-400">
            <div class="flex items-center gap-x-2">
              <Icon name="uil:briefcase-alt" class="h-5 w-5 text-teal-600 dark:text-gray-300" />
              <p>{{ job.category }}</p>
            </div>
             <div class="flex items-center gap-x-2">
              <Icon name="uil:corner-down-right" class="h-5 w-5 text-teal-600 dark:text-gray-300" />
              <p>{{ job.category }}</p>
            </div>
            <div class="flex items-center gap-x-2">
              <Icon name="uil:map-marker" class="h-5 w-5 text-teal-600 dark:text-gray-300" />
              <p>{{ job.location }}</p>
            </div>
            <div class="flex items-center gap-x-2">
              <Icon name="uil:bag" class="h-5 w-5 text-teal-600 dark:text-gray-300"/>
              <p>{{ job.experience }} years</p>
            </div>
            <div class="flex items-center gap-x-2">
              <Icon name="uil:users-alt" class="h-5 w-5 text-teal-600 dark:text-gray-300" />
              <p>{{ job.positions }} Positions</p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center py-5">
        <div class="inline-flex items-center gap-x-2 bg-teal-600 text-white text-xs font-semibold px-4 py-1 rounded-full dark:text-gray-50">
          <Icon name="uil:clock" class="h-3 w-3" />
          <span>{{ job.type }}</span>
        </div>
      </div>

      <div>
        <hr class="border-gray-200 dark:border-gray-700" />
        <p class="mt-3 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
          {{ job.description }}
        </p>
      </div>

      <div class="flex items-center justify-center mt-auto pt-6 space-x-4">
        <button class="px-3 py-1.5 text-xs font-medium text-teal-600 border border-teal-500 rounded-md hover:bg-teal-50 dark:text-teal-400 dark:hover:bg-gray-700">
          Read More
        </button>
        <button class="px-3 py-1.5 text-xs font-medium text-white bg-teal-600 border border-teal-500 rounded-md hover:bg-teal-600">
          Apply Now
        </button>
      </div>
      
       <div class="flex justify-between items-center mt-1 text-gray-500 dark:text-gray-400 text-sm">
            <div class="flex items-center gap-x-1">
                <Icon name="uil:eye" class="h-3 w-3" />
                <span>{{ job.views }}</span>
            </div>
            <button class="hover:text-teal-600 dark:hover:text-teal-400">
                <Icon name="uil:share-alt" class="h-3 w-3" />
            </button>
        </div>
    </div>
  </div>
</template>

<script setup>
import JobPopover from './JobPopover.vue'

defineProps({
  job: {
    type: Object,
    required: true
  }
})
</script>