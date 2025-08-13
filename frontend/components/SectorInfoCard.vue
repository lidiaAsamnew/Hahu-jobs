<template>

  <NuxtLink :to="`/jobs?sid=${sector.id}`" class="group block bg-gray-100 rounded-md p-2 transition-all hover:bg-teal-50 hover:shadow-md">
    <div class="flex items-start gap-x-4">
 
      <div class="mt-6 bg-teal-100 p-2 rounded-md">
        <img :src="sector.image" :alt="sector.name" class="h-5 w-5 object-contain" />
      </div>
   
      <div class="flex-1">
        <div class="flex items-center gap-x-3">
          <h4 class="font-semibold text-gray-700 text-sm">{{ sector.name }}</h4>
          <span class="text-sm font-semibold text-teal-600">{{ sector.jobCount }}</span>
        </div>
        <p class="text-sm text-gray-500 mt-1 line-clamp-2">
          {{ sector.description || 'Natural science concerned with the description, prediction, and understanding of..' }}
        </p>
      </div>
     
      <div class="py-8 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:text-teal-600 transition-all duration-300">
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