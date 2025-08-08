<template>
  <a 
    :href="service.link"
    class="block bg-white rounded-xl shadow-md p-8 text-center transition-all duration-300 border-2"
    :class="isActive ? 'border-teal-500' : 'border-transparent'"
  >
    <img 
      :src="service.image" 
      :alt="service.name" 
      class="h-40 w-full object-contain mx-auto mb-6"
    />
    
    <h3 class="font-semibold text-xl text-teal-600 mb-3">
      {{ service.name }}
    </h3>
    <p class="text-gray-600 leading-relaxed line-clamp-4">
      {{ service.Description }}
    </p>
  </a>
</template>

<script setup>
defineProps({

  service: {
    type: Object,
    required: true
  },
 
  isActive: {
    type: Boolean,
    default: false 
  }
})
</script>