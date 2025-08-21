<template>
  <div 
    class="flex flex-col w-96 h-[500px] bg-white rounded-md overflow-hidden border-[1.75px] hover:border-teal-600 "
  >
    <img 
      :src="news.image" 
      :alt="news.title" 
      class="w-full h-64 object-cover"
    >

    <div class="p-6 flex flex-col flex-grow">
      <div class="flex flex-col text-sm text-gray-500 mb-3">
        <span class="mb-3 mr-auto bg-teal-400 text-black text-xs font-semibold px-3 py-1 rounded-full">{{ news.tag }}</span>
        <span>{{ news.date }}</span>
      </div>

      <h3 class="text-sm font-bold text-gray-800 leading-tight line-clamp-2 mb-3">
        {{ news.title }}
      </h3>

      <p class="text-gray-600 text-sm leading-relaxed line-clamp-5 flex-grow">
        {{ news.description }}
      </p>

      <div class="flex justify-center pt-4">
        <a href="#" class="inline-flex items-center gap-x-2 bg-teal-600 text-xs text-white font-semibold px-3 py-2 rounded-md hover:bg-teal-700">
          Read Post
          <Icon name="uil:arrow-right" class="h-4 w-6" />
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