<template>
  <div>

    <PagesIndex />
    <JobsBySectorDialog :is-open="isJobsDialogOpen" @close="closeJobsDialog" />
    
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PagesIndex from '~/pages/index.vue' 
const isJobsDialogOpen = ref(true)


const closeJobsDialog = () => {
  isJobsDialogOpen.value = false

  useRouter().push('/')
}
</script>