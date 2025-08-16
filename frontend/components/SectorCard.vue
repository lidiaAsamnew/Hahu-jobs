<template>

  <NuxtLink 
    :to="`/sectors/${sector.id}`" 
    class="group block bg-white rounded-xl shadow-sm p-4 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-transparent hover:border-gray-200"
  >
    
    <img 
      :src="sector.image" 
      :alt="sector.name" 
      class="h-14 w-14 mx-auto mb-4 object-contain"
    />
    
    <h3 class="font-semibold text-base text-teal-600">
      {{ sector.name }}
    </h3>

    <p class="text-gray-500 text-sm mt-1">
      {{ sector.jobCount }} Open positions
    </p>
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