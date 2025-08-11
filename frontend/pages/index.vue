<template>
  <div class="bg-[#F0F5F7]">
    <section class="text-center pt-12 pb-20 px-4">
      <div class="container mx-auto">
        <h1 class="text-4xl md:text-3xl font-bold text-gray-800">All Ethiopian Jobs in One Place.</h1>
        <p class="text-sm font-bold text-gray-900 mt-2 mb-8">Find career opportunities in Ethiopia</p>
         <div class="flex justify-center">
            <div class="relative text-black font-bold">
              <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="text-gray-400" />
              </span>
              <input
                type="text"
                placeholder="Job title, city or keyword..."
                class="py-2 pl-10 pr-4 border border-gray-300 rounded-tl-md focus:outline-none focus:ring-1 focus:ring-teal-700 focus:border-transparent
             transition-[width] duration-300 ease-in-out w-[300px] focus:w-[400px]"
                style="min-width: 300px;"
              />
            </div>
            <button
              class="ml-1 px-6 py-2 bg-teal-500 text-white font-bold rounded-r-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
            >
              Find Job
            </button>
         </div>

       <div class="mt-8 grid grid-cols-3 gap-0 max-w-sm mx-auto">
          <div>
            <p class="text-2xl font-bold text-teal-600">1019</p>
            <p class="text-gray-600">Jobs</p>
          </div>
          <div>
            <p class="text-2xl font-bold text-teal-600">318</p>
            <p class="text-gray-600">Companies</p>
          </div>
          <div>
            <p class="text-2xl font-bold text-teal-600">14</p>
            <p class="text-gray-600">Sectors</p>
          </div>
       </div>
     </div>
   </section>

    <section>
      <div>
        <img src="/job.svg" alt="Hero Image" class="w-full h-auto object-cover" />
      </div>
    </section>

    
    <section class="py-20 px-2 md:px-3">

      <div class="container mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800">Featured Jobs</h2> 
          <p class="text-gray-600 mt-2">Explore our handpicked selection of top job openings. Find your dream career match today.</p>  
        </div>

        <p v-if="pending" class="text-center">Loading jobs...</p>
        <p v-else-if="error" class="text-center text-red-500">Could not load jobs. Please try again later.</p>
       
      <div class="jobs-carousel-wrapper">
        <div class="relative">
          <ClientOnly>
          
            <Carousel
              v-if="jobs"
              :items-to-show="1"
              :wrap-around="true"
              :autoplay="4000"
              :breakpoints="{
                640: { itemsToShow: 1},
                1024: { itemsToShow: 2 },
                1280: { itemsToShow: 3 },
              }"
              class="pb-12" 
            >
              <Slide v-for="job in jobs" :key="job.id">
                <div class="px-2 sm:px-4 h-full">
                  <JobCard :job="job" class="h-full" />
                </div>
              </Slide>

              <template #addons>
                <Pagination />
              </template>
            </Carousel>
           
            <template #fallback>
              <div class="text-center">
                <p>Loading carousel...</p>
              </div>
            </template>
          </ClientOnly>
        </div>
       </div>
      </div>
    </section>
    <section class="py-8 bg-[#F0F5F7] px-16">
        <div class="mx-auto w-full">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-800">Career sectors</h2>
            <p class="text-gray-600 mt-2 max-w-3xl mx-auto">
              Based on the local labor market trend in Ethiopia we categorize our vacancies into fourteen sectors
            </p>
          </div>

          <p v-if="sectorsPending" class="text-center">Loading sectors...</p>
          <p v-else-if="sectorsError" class="text-center text-red-500">Could not load sectors.</p>

          <div v-else-if="sectors" class="flex flex-wrap justify-center -mx-3">
            <div
              v-for="sector in sectors"
              :key="sector.id"
              class="px-1.5 mb-5"
              style="flex: 0 0 16.6667%; max-width: 16.6667%;"
            >
              <SectorCard :sector="sector" />
            </div>
          </div>
        </div>
      </section>

      <section class="py-8 px-4">
        <div class="container mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-800">Services</h2>
            <p class="text-gray-600 mt-4 max-w-3xl mx-auto">
              HaHuJobs offers digital career profiling, job application and subscription based relevant vacancy announcement notifications to job seekers that sign up on its primary service deployment.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center mx-20">
            <ServiceCard 
              v-for="service in services" 
              :key="service.id"
              :service="service"
            />
          </div>
        </div>
      </section>
      <section class="py-10 bg-teal-50">
      <div class="container mx-auto">
        <div class="text-center mb-12 px-4">
          <h2 class="text-3xl font-bold text-gray-800">HaHuJobs top posting companies</h2>
          <p class="text-gray-600 mt-4 max-w-3xl mx-auto">
            Below are some of the companies with a high number of vacancy announcements since the start of our aggregation services in 2019
          </p>
        </div>
        <p v-if="companiesPending" class="text-center">Loading companies...</p>
        <p v-else-if="companiesError" class="text-center text-red-500">Could not load companies.</p>
        <NuxtMarquee
          v-else-if="topCompanies"
          :speed="50"
          :auto-fill="true"
          :pause-on-hover="true"
        >
      
          <CompanyLogo
            v-for="company in topCompanies"
            :key="company.id"
            :company="company"
          />
        </NuxtMarquee>

      </div>
    </section>
    <section class="bg-gray-100">
      <div class="py-12">
        <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
          <div class="flex-1">
            <h1 class="text-2xl font-bold text-gray-800 mb-4">
              What makes us standout from the rest
            </h1>

            <p class="text-gray-600 mb-5">
              HaHuJobs Primary services are deployments targeting the needs of the 
              Ethiopian jobseeker, with both online and assisted models the platform
              is a tool intended to assist the process of looking for a job at all levels 
              of employment. It features vacancy aggregation and posting from various 
              sources as well as enterprises, builds career profiles, apply for jobs, 
              and subscribe to customized alerts for each user via a channel of their choice. 
              HaHuJobs primary also offers standardized classification of all vacancies 
              both sourced from HaHuJobs enterprise services and other manual and digital 
              vacancy platforms.
            </p>

            <p class="text-gray-600 mb-5">
              Our vacancy classification follows a combination of ILOs ISCO 8 and the 
              O*Net occupation classification with modifications to the Ethiopian labor 
              market trend. Each vacancy will be given a four-digit occupation taxonomy 
              identification code to determine its overall standard requirements in terms 
              of skill, knowledge, ability, and expected activities.
            </p>

            <p class="text-gray-800 font-sm mb-3">Get Social with us!</p>
            <button class="inline-flex items-center gap-2 bg-teal-500 text-white text-sm font-semibold py-2 px-4 rounded-md hover:bg-teal-600 transition-colors">
              Explore more
              <Icon name="uil:arrow-right" class="h-5 w-5 text-white" />
            </button>
            <div class="flex items-center gap-4 mt-4 text-teal-600">
              <Icon name="uil:telegram" class="h-6 w-6" />
              <Icon name="uil:facebook" class="h-6 w-6" />
              <Icon name="uil:twitter" class="h-6 w-6" />
              <Icon name="uil:linkedin" class="h-6 w-6" />
            </div>
          </div>
          <div class="flex-1 flex justify-center">
            <img src="/huhu.svg" alt="Job Illustration" class="max-w-sm w-full h-auto object-contain transition-transform duration-300 hover:scale-110" />
          </div>
       </div>
     </div>
      <div class="py-12">
        <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        
          <div class="flex-1 flex justify-center">
            <img src="/keyboard.svg" alt="Keyboard Illustration" class="max-w-sm w-full h-auto object-contain transition-transform duration-300 hover:scale-110" />
          </div>
          <div class="flex-1">
            <h1 class="text-2xl font-bold text-gray-800 mb-6">Why choose us</h1>

            <div class="mb-6">
              <h2 class="text-lg font-bold text-teal-600">Convenience</h2>
              <p class="font-semibold text-teal-600">You no longer look for jobs, jobs look for you</p>
              <p class="text-gray-600">
                We offer aggregated, standardized and quality assure vacancy and career-related
                information from various digital as well as manual sources to set them into one searchable database.
              </p>
            </div>

            <div class="mb-6">
              <h2 class="text-lg font-bold text-teal-600">Accessibility</h2>
              <p class="font-semibold text-teal-600">Reachable across multiple channels and platforms</p>
              <p class="text-gray-600">
                Use your mobile, tablet, or desktop to access our website, mobile app, Telegram, or Facebook bots
                and also get personalized job alerts via your designated medium.
              </p>
            </div>

            <div>
              <h2 class="text-lg font-bold text-teal-600">Ease of use</h2>
              <p class="font-semibold text-teal-600">Both online and offline service options.</p>
              <p class="text-gray-600">
                HaHuJobs offers both in-person as well as virtual models for all its career-related
                service components through its employment offices across the nation and capital Addis Ababa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-teal-50 py-8 pr-5 pl-14 ">
      <div class="flex py-3 max-w-7xl mx-auto gap-24">
        <div class="flex-1 bg-gray-100 flex justify-center items-center w-[300px] h-[500px] ">
          <img src="/image.svg" alt="Hahu" class="w-[85%] mb-4" />
        </div>
        <div class="flex-1">
          <h1 class="text-4xl font-bold pb-4">Post vacancy</h1>
          <p class="text-sm text-gray-500">HaHuJobs offers dedicated enterprise cloud services for a full human resource management platform with an affordable price package. 
            Posting vacancy is completely free, and only requires to follow the below listed steps.</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-7 mt-8">
            <div class="">
              <h3 class="text-4xl font-bold text-gray-800 mb-1">01<span class="text-sm text-gray-800 font-medium ml-2 align-middle">Receive</span></h3>
              <p class="text-sm text-gray-500">You contact us through one of our outlets with the details of your vacancy. You can click the button below to review ways to share your vacancy and review the required information we need to publish your vacancy on all our outlets.</p>
            </div>
            <div>
              <h3 class="text-4xl font-bold text-gray-800 mb-1">02<span class="text-sm text-gray-800 font-medium ml-2 align-middle">Validate</span></h3>
              <p class="text-sm text-gray-500">Our service officers will receive the details from your organization via the channel you communicated it in. They will review the details provided to validate all required information is available and build validate the legitimacy of the vacancy.</p>
            </div>
            <div>
              <h3 class="text-4xl font-bold text-gray-800 mb-1">03<span class="text-sm text-gray-800 font-medium ml-2 align-middle">Publish</span></h3>
              <p class="text-sm text-gray-500">All vacancy details will then go through our standardized categorization process for taxonomy identification and reorganization of information if required so it fits the publishing structure of our outlets, then will be approved for publishing.</p>
            </div>
            <div class="flex flex-col items-center">
              <p class="text-sm">Sign up to HaHu Jobs Enterprise</p>
              <img src="/arrow.svg" alt="HaHu Jobs Logo" class="w-10 mx-auto mb-4" />
              <button class="inline-flex items-center gap-2 bg-teal-500 text-white text-sm font-semibold py-2 px-4 rounded-md hover:bg-teal-600 transition-colors">
                Post Vacancy
                <Icon name="uil:arrow-right" class="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="py-14 bg-gray-100">
      <h1 class="text-3xl font-bold text-center text-gray-800">Our Latest Statistics</h1>

      <div class="flex justify-center items-center gap-[10rem] py-6">
        <div class="text-center">
          <p class="text-3xl font-extrabold text-teal-600">1.1k</p>
          <p class="text-sm font-semibold text-gray-800">Enterprises</p>
        </div>

        <div class="text-center">
          <p class="text-3xl font-extrabold text-teal-600">30.1k</p>
          <p class="text-sm font-semibold text-gray-800">Users</p>
        </div>

        <div class="text-center">
          <p class="text-3xl font-extrabold text-teal-600">45</p>
          <p class="text-sm font-semibold text-gray-800">Opportunities</p>
        </div>
      </div>
    </div>
    <section class="pt-20 pb-2 bg-white px-4">
      <div class="container mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800">News & Events</h2> 
        </div>

        <p v-if="newsPending" class="text-center">Loading news...</p>
        <p v-else-if="newsError" class="text-center text-red-500">Could not load news.</p>
        
        <div v-else-if="news" class="relative px-24">
          <ClientOnly>
            <Carousel
              :items-to-show="1"
              :wrap-around="true"
              :breakpoints="{
                768: { itemsToShow: 2 },
                1024: { itemsToShow: 2 },
              }"
              class="pb-12"
            > 
              <Slide v-for="article in news" :key="article.id" v-slot="{ isActive }">
                <div class="px-2 sm:px-4 h-full">
                  <NewsCard :news="article" :is-active="isActive" class="h-full" />
                </div>
              </Slide>

              <template #addons>
                <Pagination />
              </template>
            </Carousel>
           
            <template #fallback>
              <div class="text-center"><p>Loading carousel...</p></div>
            </template>
          </ClientOnly>
        </div>
      </div>
    </section>
    <div class="flex justify-center items-center pt-2 pb-12 bg-white">
      <button
        class="inline-flex items-center gap-2 bg-teal-600 text-white text-sm font-semibold py-3 px-5 rounded-md hover:bg-teal-500 transition-colors"
      >
        More blogs
        <Icon name="uil:external-link-alt" class="h-5 w-5 text-white" />
      </button>
    </div>
    <div class="border-t "></div>


  </div>
</template>

<script setup>

const { 
  data: jobs, 
  pending: jobsPending, 
  error: jobsError 
} = await useAsyncData('jobs', () => $fetch('/api/jobs'))
const { 
  data: sectors, 
  pending: sectorsPending, 
  error: sectorsError 
} = await useAsyncData('sectors', () => $fetch('/api/sectors'))
const { 
  data: services, 
  pending: servicesPending, 
  error: servicesError 
} = await useAsyncData('services', () => $fetch('/api/services'))
const { 
  data: topCompanies, 
  pending: companiesPending, 
  error: companiesError } = await useAsyncData('topCompanies', () => $fetch('/api/companies')
)
const { data: news, 
pending: newsPending, 
error: newsError } = await useAsyncData('news', () => $fetch('/api/news'))

</script>

<style> 

.jobs-carousel-wrapper .carousel__pagination {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.jobs-carousel-wrapper .carousel__pagination-button {
  @apply bg-gray-300 p-[1px] rounded-full mx-1;
}
.jobs-carousel-wrapper .carousel__pagination-button--active {
  @apply bg-teal-600 p-[1px];
}

.carousel__prev,
.carousel__next {
  @apply bg-white rounded-full w-10 h-10 text-gray-700 shadow-md hover:bg-gray-100 mx-2;
}
</style>