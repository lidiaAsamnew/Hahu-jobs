<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-50">
      
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/30" />
      </TransitionChild>

 
      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel class="w-full max-w-6xl rounded-md bg-white px-4 py-4 shadow-xl">
              <div class="flex justify-between items-center">
            
              <div class="flex items-center gap-4 py-4">
                <button 
                  @click="closeModal" 
                  class="text-gray-400 hover:text-gray-800 hover:bg-teal-100 transition-colors"
                >
                  <Icon name="uil:times" class="h-6 w-6 mt-2" />
                </button>

                <span class="text-lg font-medium text-gray-900">Jobs by sector</span>
            
              </div>

              <a 
                href="#" 
                class="inline-flex items-center gap-2 text-teal-600 border border-teal-600 rounded-md px-4 py-2 text-sm font-semibold hover:bg-teal-50"
              >
                View All
                <Icon name="uil:arrow-right" class="h-4 w-4" />
              </a>
            </div>

            
              <div v-if="sectors" class="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-6">
                
              
                <SectorInfoCard 
                  v-for="sector in sectors" 
                  :key="sector.id" 
                  :sector="sector"
                />

               
                <div class="hidden lg:flex flex-col items-center justify-end col-start-4 row-start-3 row-span-2">
                  <img src="/huhu.svg" alt="HaHuJobs Mascot" class="w-40 h-auto object-contain" />
                  <p class="text-xs text-gray-500 mt-1">Powered by HahuJobs</p>
                </div>
                
              </div>
              <p v-else class="mt-5 text-center text-gray-500">Loading sectors...</p>

            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle
} from '@headlessui/vue'

const props = defineProps({
  isOpen: Boolean
})
const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}


const { data: sectors } = await useAsyncData('sectors', () => $fetch('/api/sectors'))

</script>