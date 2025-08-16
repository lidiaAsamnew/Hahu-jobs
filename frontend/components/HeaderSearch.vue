<template>
 
 
     
      <div class="flex flex-nowrap items-center gap-3 overflow-x-auto">
        
        <div
          class="relative flex-grow max-w-[500px] h-9 rounded-l-lg border border-gray-200 bg-white shadow-sm dark:bg-slate-400 dark:border-gray-400"
        >
          <input
            v-model="search"
            type="text"
            placeholder="Search"
            class="h-full w-full rounded-2xl border-none bg-transparent pl-4 pr-16
                   text-sm text-gray-700 placeholder:text-gray-700 focus:outline-none focus:ring-0 "
          />
     
          <button
            type="button"
            @click="search=''"
            :disabled="!search"
            class="absolute right-10 top-1/2 -translate-y-1/2 text-gray-700 hover:text-gray-600 disabled:opacity-40"
            aria-label="Clear search"
          >
            <Icon name="uil:times" class="w-5 h-5" />
          </button>
      
          <button
            type="button"
            @click="emitSearch()"
            class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            aria-label="Search"
          >
            <Icon name="uil:search" class="w-5 h-5" />
          </button>
        </div>

     
        <div
          class="relative w-[180px] h-9 border border-gray-200 bg-white shadow-sm dark:bg-slate-400 dark:border-gray-400"
        >
          <select
            v-model="position"
            class="h-full w-full rounded-2xl border-none bg-transparent pl-4 pr-9
                   text-sm text-gray-600 appearance-none focus:outline-none focus:ring-0"
            aria-label="Select Position"
          >
            <option value="" selected>3D developer</option>
            <option value="frontend">Acadamic Administration</option>
            <option value="backend">Accessor</option>
            <option value="data-analyst">accessor officer</option>
          </select>
          <div
            class="pointer-events-none absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
          >
            <Icon name="uil:angle-down" class="w-5 h-5" />
          </div>
        </div>
 
 
        <div
          class="relative w-[180px] h-9 border border-gray-200 bg-white shadow-sm dark:bg-slate-400 dark:border-gray-400"
        >
          <select
            v-model="category"
            class="h-full w-full rounded-2xl border-none bg-transparent pl-4 pr-9
                   text-sm text-gray-600 appearance-none focus:outline-none focus:ring-0"
            aria-label="Select Category"
          >
            <option value="" :selected="!category">Select Category</option>
            <option value="natural-science">Bussiness</option>
            <option value="computer-science">Art Science</option>
            <option value="social-science">Education</option>
          </select>

          <button
            v-if="category"
            type="button"
            @click="category=''"
            class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
            aria-label="Clear category"
          >
            <Icon name="uil:times" class="w-5 h-5" />
          </button>
          <div
            v-else
            class="pointer-events-none absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
          >
            <Icon name="uil:angle-down" class="w-5 h-5" />
          </div>
        </div>

       
        <div
          class="relative w-[180px] h-9  border border-gray-200 bg-white shadow-sm dark:bg-slate-400 dark:border-gray-400"
        >
          <select
            v-model="city"
            class="h-full w-full rounded-2xl border-none bg-transparent pl-4 pr-9
                   text-sm text-gray-600 appearance-none focus:outline-none focus:ring-0"
            aria-label="Select City"
          >
            <option value="" selected>Select City</option>
            <option value="addis">Addis Ababa</option>
            <option value="hawassa">Hawassa</option>
            <option value="bahirdar">Bahir Dar</option>
          </select>
          <div
            class="pointer-events-none absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
          >
            <Icon name="uil:angle-down" class="w-5 h-5" />
          </div>
        </div>
      </div>


</template>

<script setup lang="ts">
import { ref } from 'vue'

const search = ref('')
const position = ref('')
const category = ref('natural-science')
const city = ref('')

const emitSearch = () => {}
</script>
