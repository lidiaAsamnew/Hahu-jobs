<template>
  <div class="bg-gray-100 p-4 rounded-lg space-y-4 dark:bg-slate-900 dark:border-gray-700">
    
    <button 
      @click="isCollapsed = !isCollapsed" 
      class="w-full flex items-center justify-between focus:outline-none"
      aria-expanded="!isCollapsed"
      aria-controls="filters-content"
    >
      <h3 class="font-semibold text-gray-800 flex items-center gap-x-2 dark:text-white">
        <Icon name="uil:filter" class="w-5 h-5 text-gray-500 dark:text-gray-400" />
        Additional Filters
      </h3>
    
      <Icon 
        name="uil:angle-down" 
        class="w-6 h-6 text-gray-500 transition-transform duration-300 dark:text-gray-400" 
        :class="{ 'rotate-180': isCollapsed }"
      />
    </button>

   
    <transition name="fade">
      <div v-if="!isCollapsed" id="filters-content" class="space-y-6">
      
        <div class="border-t pt-5 dark:border-gray-600">
          <div class="flex items-center justify-between text-sm font-medium text-gray-700 dark:text-gray-300">
            <span class="font-bold">{{ experienceRange[0] }}</span>
            <span class="text-gray-400 dark:text-gray-500">0-7 years of experience</span>
            <span class="text-gray-400 dark:text-gray-500">> 10</span>
          </div>
          <div class="mt-4 px-1">
            <ClientOnly>
              <RangeSlider 
                v-model="experienceRange"
                :max="10" 
              />
            </ClientOnly>
          </div>
        </div>

        <div class="border-t pt-5 dark:border-gray-600">
          <h4 class="font-semibold text-gray-700 mb-3 dark:text-gray-300">Type</h4>
          <div class="flex flex-wrap gap-1">
            <button v-for="type in jobTypes" :key="type" @click="toggleType(type)" :class="[
                'px-2 py-1 text-xs rounded-full border transition-colors', 
                selectedTypes.includes(type) 
                  ? 'bg-teal-600 border-teal-600 text-white' 
                  : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-100 dark:bg-slate-600 dark:border-gray-500 dark:text-gray-200 dark:hover:bg-slate-500'
              ]">
              {{ type }}
              <span class="ml-1">+</span>
            </button>
          </div>
        </div>

        <div class="border-t pt-5 dark:border-gray-600">
          <h4 class="font-semibold text-gray-700 mb-3 flex items-center dark:text-gray-300">
            Regions <Icon name="uil:info-circle" class="w-4 h-4 ml-1 text-gray-400" />
          </h4>
          <div class="cursor-pointer group">
            <img src="/ethiopian-map.jpg" alt="Map of Ethiopia with regions" class="block dark:hidden" />
            <img src="/ethiopia-2.jpg" alt="Map of Ethiopia with regions" class="hidden dark:block"/>
          </div>
          <button class="mt-3 py-1 px-2 bg-teal-600 text-white font-semibold rounded-lg text-sm hover:bg-teal-700 transition-colors">All</button>
        </div>

        <div class="border-t pt-4 dark:border-gray-600">
            <button class="ml-24 px-3 bg-teal-600 text-white font-semibold py-1 rounded-md text-sm ">Copy Filter</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import RangeSlider from './RangeSlider.vue'; 


const isCollapsed = ref(false);

const experienceRange = ref([0, 7]);

const jobTypes = ref(['Contract','Full Time','Part Time','Bid','Internship']);
const selectedTypes = ref(['Full Time', 'Bid']); 

function toggleType(type) {
  const index = selectedTypes.value.indexOf(type);
  if (index === -1) {
    selectedTypes.value.push(type);
  } else {
    selectedTypes.value.splice(index, 1);
  }
}
</script>

