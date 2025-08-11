<template>
 
  <div 
    class="flex flex-col h-full bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 border-2"
    :class="isActive ? 'border-teal-500 shadow-lg' : 'border-transparent'"
  >

    <img 
      :src="news.image" 
      :alt="news.title" 
      class="w-full h-48 object-cover"
    >

    <div class="p-6 flex flex-col flex-grow">
  
      <div class="flex justify-between items-center text-sm text-gray-500 mb-3">
        <span class="bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full">{{ news.tag }}</span>
        <span>{{ news.date }}</span>
      </div>

      <h3 class="text-lg font-bold text-gray-800 leading-tight line-clamp-2 mb-3">
        {{ news.title }}
      </h3>


      <p class="text-gray-600 text-sm leading-relaxed line-clamp-4 flex-grow">
        {{ news.description }}
      </p>

    
      <div class="mt-auto pt-4">
        <a href="#" class="inline-flex items-center gap-x-2 bg-teal-600 text-white font-semibold px-5 py-2 rounded-md hover:bg-teal-700">
          Read Post
          <Icon name="uil:arrow-right" class="h-5 w-5" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  news: {
    type: Object,
    required: true
  },

  isActive: {
    type: Boolean,
    default: false
  }
})
</script>