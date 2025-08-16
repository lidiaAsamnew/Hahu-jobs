<template>
  <div class="flex-shrink-0 mx-4 h-28 w-28 bg-white rounded-lg shadow-sm flex items-center justify-center p-1">
    <img 
      :src="company.logo" 
      :alt="company.name" 
      class="max-h-full max-w-full object-contain" 
    />
  </div>
</template>

<script setup>
defineProps({
  company: {
    type: Object,
    required: true
  }
})
</script>