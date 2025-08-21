<template>
  <NuxtLink 
    :to="`/services/${service.id}`" 
    class="group block h-full"
  >
    <div
      class="
        flex flex-col h-full text-left 
        bg-white rounded-xl  
        border-[1.5px]
        dark:bg-slate-800
        w-[270px] min-h-[400px]
      "
      :class="isActive ? 'border-teal-500' : 'border-transparent group-hover:border-teal-500 dark:hover:shadow-teal-500/20'"
    >

      <div class="p-2">
        <img 
          :src="service.image" 
          :alt="service.name" 
          class="object-contain w-full h-48 sm:h-56 rounded-t-lg"
        />
      </div>
      <div class="p-6 pt-2 flex flex-col flex-grow text-center">
        <h3 class="text-md font-bold text-teal-600 dark:text-teal-400">
          {{ service.name }}
        </h3>
        <p class="font-body mt-2 text-sm font-thin dark:text-gray-300 line-clamp-5 flex-grow">
          {{ service.Description }}
        </p>
      </div>
    </div>
  </NuxtLink>
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