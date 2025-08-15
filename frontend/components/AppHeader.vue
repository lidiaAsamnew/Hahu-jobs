<template>
  <header class="bg-[#F0F5F7] shadow-sm sticky top-0 z-50 dark:bg-slate-900 dark:text-white">
    <nav class="container mx-auto px-4 lg:px-8 py-3 flex justify-between items-center">

   
      <div class="flex items-center">
        <NuxtLink to="/" class="flex flex-col" @click="isOpen = false">
          <h1 class="text-3xl font-extrabold">
            <span class="text-[#1F2937] dark:text-white">Hahu</span><span class="text-[#14B8A6]">Jobs</span>
          </h1>
          <span class="text-xs text-gray-500 -mt-1 dark:text-white">Primary</span>
        </NuxtLink>
      </div>

      <div class="hidden md:flex items-center space-x-4 text-sm font-medium">
        <NuxtLink to="/" class="nav-link">Home</NuxtLink>
        <NuxtLink to="/about" class="nav-link">About</NuxtLink>
        <NuxtLink to="/jobs" class="nav-link">Jobs</NuxtLink>
        <NuxtLink to="/post-vacancy" class="nav-link">Post Vacancy</NuxtLink>
        <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
        <button
          class="text-gray-500 hover:text-teal-600 focus:outline-none dark:text-white dark:hover:text-teal-500"
          aria-label="Toggle dark mode"
          @click="setColorTheme(useColorMode().preference === 'dark' ? 'light' : 'dark')"
        >
          <Icon :name="useColorMode().preference === 'dark' ? 'heroicons:sun' : 'heroicons:moon'" class="h-5 w-5"/>
        </button>
        <NuxtLink to="/login" class="bg-[#14B8A6] text-white text-xs font-semibold px-4 py-2 rounded-md hover:bg-teal-700">Login</NuxtLink>
        <span class="text-gray-500 text-sm dark:text-white">or</span>
        <NuxtLink to="/signup" class="bg-[#14B8A6] text-white text-xs font-semibold px-4 py-2 rounded-md hover:bg-teal-700">Sign up</NuxtLink>
      </div>
      
     
      <div class="md:hidden flex">
       
        <button
          class="text-gray-500 hover:text-teal-600 focus:outline-none dark:text-white dark:hover:text-teal-500 mr-4"
          aria-label="Toggle dark mode"
          @click="setColorTheme(useColorMode().preference === 'dark' ? 'light' : 'dark')"
        >
          <Icon :name="useColorMode().preference === 'dark' ? 'heroicons:sun' : 'heroicons:moon'" class="h-6 w-6"/>
        </button>
      
        <button @click="isOpen = true" class="text-gray-600 focus:outline-none dark:text-white" aria-label="Open menu">
           <Icon name="heroicons:bars-3" class="h-7 w-7" />
        </button>
      </div>
    </nav>


    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="isOpen = false" class="relative z-50">
        
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black/30 backdrop-blur-sm" />
        </TransitionChild>

      
        <div class="fixed inset-0 overflow-y-auto">
          <div class="min-h-full">
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <DialogPanel class="h-30 w-full transform bg-[#F0F5F7]/99 p-6 text-left align-middle shadow-xl transition-all dark:bg-slate-800">
           
                <div class="flex items-center justify-between">
                  <NuxtLink to="/" class="flex flex-col" @click="isOpen = false">
                      <h1 class="text-3xl font-extrabold">
                        <span class="text-[#1F2937] dark:text-white">Hahu</span><span class="text-[#14B8A6]">Jobs</span>
                      </h1>
                      <span class="text-xs text-gray-500 -mt-1 dark:text-white">Primary</span>
                  </NuxtLink>
                  <button @click="isOpen = false" class="focus:outline-none">
                    <Icon name="heroicons:x-mark" class="h-8 w-8 text-gray-600 dark:text-gray-300"/>
                  </button>
                </div>

               
                <div class="mt-16 space-y-8 flex flex-col">
                  <NuxtLink to="/" class="mobile-nav-link" @click="isOpen = false">Home</NuxtLink>
                  <NuxtLink to="/about" class="mobile-nav-link" @click="isOpen = false">About</NuxtLink>
                  <NuxtLink to="/jobs" class="mobile-nav-link" @click="isOpen = false">Jobs</NuxtLink>
                  <NuxtLink to="/post-vacancy" class="mobile-nav-link" @click="isOpen = false">Post Vacancy</NuxtLink>
                  <NuxtLink to="/contact" class="mobile-nav-link" @click="isOpen = false">Contact</NuxtLink>
                  <NuxtLink to="/contact" class="mobile-nav-link" @click="isOpen = false">Login</NuxtLink>
                  <NuxtLink to="/contact" class="mobile-nav-link" @click="isOpen = false">Sign up</NuxtLink>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>

  </header>
</template>

<style scoped>

.nav-link {
  @apply text-gray-500 hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400;
}
.nav-link.router-link-exact-active {
  @apply text-teal-600 font-semibold dark:text-teal-400;
}

.mobile-nav-link {
 @apply text-2xl font-semibold text-gray-700 dark:text-gray-200;
}
.mobile-nav-link.router-link-exact-active {
  @apply text-teal-600 dark:text-teal-400;
}
</style>

<script setup lang="ts">
import { ref } from 'vue';
import {
  Dialog,
  DialogPanel,
  TransitionRoot,
  TransitionChild,
} from '@headlessui/vue';


const isOpen = ref(false);


type Theme = 'light' | 'dark';
const setColorTheme = (newTheme: Theme) => {
  useColorMode().preference = newTheme;
};
</script>