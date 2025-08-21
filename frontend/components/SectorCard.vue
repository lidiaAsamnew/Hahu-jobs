<template>
  <NuxtLink 
    :to="`/sectors/${sector.id}`" 
    class="group block h-full"
  >
    <div
      class="
        w-full h-44
        bg-white rounded-xl shadow-lg 
        cursor-pointer 
        transition-all duration-300 ease-in-out
        group-hover:shadow-lg group-hover:-translate-y-1
        dark:bg-slate-800 dark:hover:shadow-teal-500/20
      "
    >
      <div class="flex flex-col items-center justify-center h-full text-center gap-y-2 px-0">

        <div class="flex-shrink-0">
          <img 
            :src="sector.image" 
            :alt="sector.name" 
            class="object-contain w-14 h-14 md:w-16 md:h-16"
          />
        </div>

        <div>
          <h3 class="text-sm font-bold text-teal-600 dark:text-teal-400">
            {{ sector.name }}
          </h3>
        </div>

        <div>
          <p class="text-xs text-gray-600 dark:text-gray-300">
            {{ sector.jobCount }} Open positions
          </p>
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