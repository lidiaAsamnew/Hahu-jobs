<template>
  <div class="flex flex-col min-h-screen bg-gray-50">
    <AppHeader />
    <main class="flex-grow pt-9">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>


<script setup>

import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'

</script>