<template>

 <NuxtLink :to="`/sectors/${sector.id}`"
   class="group flex items-center justify-between gap-x-3 py-5 px-4 bg-gray-100  rounded-md hover:bg-teal-50 dark:bg-gray-600hover:shadow-md">

    <div class="flex-shrink-0 flex items-center justify-center bg-teal-100 dark:bg-primary-4 rounded-md h-5 w-5 md:h-9 md:w-9 text-white">
      <img :src="sector.image" :alt="sector.name" class="md:h-6 md:w-6 h-7 w-7 object-contain" />
    </div>

    <div class="flex-1 flex flex-col justify-center overflow-hidden">

        <div class="flex items-center gap-x-3">
            <h3 class="font-body font-bold text-xs  dark:text-white truncate">
               {{ sector.name }}
            </h3>
            <span class="ml-3 flex-shrink-0 px-2 py-0.5 text-xs font-medium text-teal-600 bg-green-50 rounded-full">
               {{ sector.jobCount }}
            </span>
        </div>

        <div class="mt-1 flex items-center justify-between">
            <p class="font-body font-light text-xs line-clamp-2">
                {{ sector.description || 'Natural science concerned with the description, prediction, and understanding of..' }}
            </p>

            <div class="hidden md:block text-gray-400 opacity-0 group-hover:opacity-100 group-hover:text-teal-600">
               <Icon name="uil:arrow-right" class="h-4 w-8" />
            </div>
        </div>
    </div>
</NuxtLink>

</template>

<script setup>
defineProps({
  sector: {
    type: Object,
    required: true
  
  }
})
</script> 




















































































<!-- 
<template>

  <NuxtLink :to="`/sectors/${sector.id}`" class="group block bg-gray-100 rounded-md p-2 transition-all hover:bg-teal-50 hover:shadow-md">
    <div class="flex items-start gap-x-4">
 
      <div class="mt-6 bg-teal-100 p-2 rounded-md">
        <img :src="sector.image" :alt="sector.name" class="h-5 w-5 object-contain" />
      </div>
   
      <div class="flex-1">
        <div class="flex items-center gap-x-3">
          <h4 class="font-bold text-gray-700 text-xs">{{ sector.name }}</h4>
          <span class="text-sm font-semibold text-teal-600">{{ sector.jobCount }}</span>
        </div>
        <p class="text-xs text-gray-500 mt-1 line-clamp-2">
          {{ sector.description || 'Natural science concerned with the description, prediction, and understanding of..' }}
        </p>
      </div>
     
      <div class="py-6 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:text-teal-600 transition-all duration-300">
        <Icon name="uil:arrow-right" class="h-5 w-5" />
      </div>

    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  sector: {
    type: Object,
    required: true
  
  }
})
</script> 

 -->
