<template>
  <div>
    <!-- 
      This is the main content of your index.vue page. 
      The Dialog will appear ON TOP of this page.
    -->
    <PagesIndex />

    <!-- The Jobs by Sector Dialog Component -->
    <JobsBySectorDialog :is-open="isJobsDialogOpen" @close="closeJobsDialog" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PagesIndex from '~/pages/index.vue' // Import the homepage to show it in the background

// Create a reactive variable to control the dialog's visibility
const isJobsDialogOpen = ref(true) // Start with the dialog open

// Function to close the dialog
const closeJobsDialog = () => {
  isJobsDialogOpen.value = false

  useRouter().push('/')
}
</script>