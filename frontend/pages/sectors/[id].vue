<template>
  <div class="bg-gray-100 min-h-screen pb-10 dark:bg-slate-900">

    <div class="container mx-auto grid grid-cols-12">
      
      <aside class="col-span-12 lg:col-span-3">
        <FiltersSidebar />
      </aside>

      <main class="col-span-12 lg:col-span-9">
         <HeaderSearch />
        <div class="h-screen overflow-y-auto hide-scrollbar">

        
          <div class="my-5 p-3 bg-white rounded-lg border border-gray-200 dark:bg-slate-600 dark:border-gray-600">
            
            <div v-if="sector" class="flex items-start gap-x-4">
              <div class="mt-1 bg-teal-100 p-2 rounded-md shrink-0">
                <img :src="sector.image" :alt="sector.name" class="h-6 w-6 object-cover" />
              </div>
              <div>
                <h2 class="text-xl font-bold text-gray-800">{{ sector.name }} jobs</h2>
                <p class="text-gray-600 text-sm mt-1">{{ sector.description }}</p>
              </div>
            </div>
            
      
            <div v-else class="flex items-start gap-x-4 dark:bg-slate-600">
              <div class="p-2 rounded-md shrink-0">
                  <img src="/business.svg" alt="Sector" class="h-8 w-8 object-cover" />
              </div>
              <div>
                  <h2 class="text-xl font-bold text-gray-800 dark:text-white">Bussiness</h2>
                  <p class="text-gray-700 text-xs mt-1 dark:text-gray-300">Natural science concerned with the description, prediction, and understanding of natural phenomena, based on empirical evidence from observation and experimentation. The major natural science studies are Chemistry, astronomy, Earth science, physics, and biology.</p>
              </div>
            </div>
          </div>
    
          <div v-if="pending && !forceDefaults" class="text-center py-16">
              <p>Loading jobs...</p>
          </div>
      
          <div v-else-if="displayJobs.length > 0">
            <p class="text-sm font-semibold text-gray-800 mb-4 dark:text-white">Showing {{ displayJobs.length }} posts</p>
            <div class="ml-14 grid grid-cols-1 md:grid-cols-2 gap-5 dark:bg-slate-900">
              <JobCard v-for="job in displayJobs" :key="job.id" :job="job" class="dark:bg-slate-600"/>
            </div>
          </div>
          <div v-else class="text-center py-20 bg-white rounded-md border">
            <h3 class="text-lg font-semibold text-gray-700">No Jobs Found</h3>
            <p class="text-gray-500 mt-1">There are currently no positions for this sector.</p>
          </div>

        </div> 
  

      </main>
    </div>
  </div>
</template>

<script setup>

import HeaderSearch from '~/components/HeaderSearch.vue';
import FiltersSidebar from '~/components/FiltersSidebar.vue';
import JobCard from '~/components/JobCard.vue';


const forceDefaults = true; 


const route = useRoute();
const sectorId = computed(() => route.params.id);


const { data: allSectors } = await useFetch('/api/sectors');

const sector = computed(() => {
  if (forceDefaults) {
    return null; 
  }
  if (!allSectors.value) return null;
  return allSectors.value.find(s => s.id === sectorId.value);
});

useHead({
  title: computed(() => (sector.value ? `${sector.value.name} Jobs` : 'Default Sector Title'))
});

const { data: fetchedData, pending } = useAsyncData(
  `data-for-${sectorId.value}`,
  async () => {
    const [realJobs, sampleJobs] = await Promise.all([
      $fetch('/api/jobs', { params: { sid: sectorId.value }, ignoreResponseError: true }),
      $fetch('/api/jobs/sample', { ignoreResponseError: true })
    ]);
    return { realJobs, sampleJobs };
  },
  { watch: [sectorId] }
);


const displayJobs = computed(() => {
  if (forceDefaults) {
    return fetchedData.value?.sampleJobs || [];
  }
  

  if (fetchedData.value?.realJobs && fetchedData.value.realJobs.length > 0) {
    return fetchedData.value.realJobs;
  }
  return fetchedData.value?.sampleJobs || [];
});
</script>

<style scoped>

.hide-scrollbar::-webkit-scrollbar {
  display: none; 
}

.hide-scrollbar {
  -ms-overflow-style: none;  
  scrollbar-width: none;  
}
</style>