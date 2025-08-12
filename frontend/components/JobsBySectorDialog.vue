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
            <DialogPanel class="w-full max-w-6xl rounded-2xl bg-white p-6 shadow-xl">
            
              <DialogTitle class="text-lg font-medium text-gray-900 flex justify-between items-center">
                <span>Jobs by sector</span>
                <button @click="closeModal" class="text-gray-400 hover:text-gray-600">
                  <Icon name="uil:times" class="h-6 w-6" />
                </button>
              </DialogTitle>

              <div class="text-right mt-3">
                <a 
                  href="#" 
                  class="inline-flex items-center gap-2 text-teal-600 border border-teal-600 rounded-md px-4 py-2 text-sm font-semibold hover:bg-teal-50"
                >
                  View All
                  <Icon name="uil:arrow-right" class="h-4 w-4" />
                </a>
              </div>

       
              <div v-if="sectors" class="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <SectorInfoCard 
                  v-for="sector in sectors" 
                  :key="sector.id" 
                  :sector="sector"
                />
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
import { ref } from 'vue'
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
