<template>
  <a href="#" class="group block bg-gray-50 rounded-lg p-4 transition-all hover:bg-teal-50 hover:shadow-md">
    <div class="flex items-start gap-x-4">
      <!-- Icon -->
      <div class="bg-teal-100 p-2 rounded-md">
        <img :src="sector.image" :alt="sector.name" class="h-6 w-6 object-contain" />
      </div>
      <!-- Text Content -->
      <div class="flex-1">
        <div class="flex items-center justify-between">
          <h4 class="font-bold text-gray-800">{{ sector.name }}</h4>
          <span class="text-sm font-bold text-teal-600">{{ sector.jobCount }}</span>
        </div>
        <p class="text-sm text-gray-500 mt-1 line-clamp-2">
          {{ sector.description || 'No description available.' }}
        </p>
      </div>
      <!-- Arrow Icon -->
      <div class="text-gray-400 group-hover:text-teal-600 transition-colors">
        <Icon name="uil:arrow-right" class="h-5 w-5" />
      </div>
    </div>
  </a>
</template>

<script setup>
defineProps({
  sector: {
    type: Object,
    required: true
  }
})
</script>