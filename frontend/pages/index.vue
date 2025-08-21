<template>
  <div class="bg-[#F0F5F7] dark:bg-slate-800 dark:text-white">
   <section class="text-center pt-12 pb-20 px-4">
    <div class="container mx-auto">
    
      <h1 class="font-sans font-black text-3xl text-gray-600 dark:text-white">
        <span class="block xl:inline">All Ethiopian Jobs in One Place.</span>
      </h1>
      <div class="mt-3 xl:mt-5 mb-8 flex justify-center">
        <p class="font-sans font-bold text-base text-md text-gray-700 dark:text-gray-300">
          Find career opportunities in Ethiopia
        </p>
      </div>
      
      <div class="flex justify-center">
        <div class="flex flex-col sm:flex-row justify-center w-full sm:w-auto gap-y-2">
          <div class="relative">
            <span class="absolute inset-y-0 left-0 flex items-center pl-4">
              <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="h-5 w-5 text-gray-400" />
            </span>
             <input
                  type="text"
                  placeholder="Job title, city or keyword..."
                  class="py-2 pl-10 pr-4 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-teal-700 focus:border-transparent w-[300px] focus:w-[400px] rounded-l-md focus:rounded-none focus:rounded-tl-md transition-all duration-300 ease-in-out "
                  style="min-width: 300px;"
              />
          </div>
          <button
              class="ml-1 px-6 py-2 bg-teal-600 text-white font-bold rounded-r-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
            >
              Find Job
            </button>
        </div>
      </div>

      <div class="mt-7 md:mt-8 flex justify-around mx-auto items-center text-center md:w-[350px]">
        <div>
          <span class="font-sans text-teal-600 text-2xl font-bold">749</span>
          <span class="block text-gray-600 font-bold text-sm dark:text-gray-300">Jobs</span>
        </div>
        <div>
          <span class="font-sans text-teal-600 text-2xl font-bold">318</span>
          <span class="block text-gray-600 font-bold text-sm dark:text-gray-300">Companies</span>
        </div>
        <div>
          <span class="font-sans text-teal-600 text-2xl font-bold">14</span>
          <span class="block text-gray-600 font-bold text-sm dark:text-gray-300">Sectors</span>
        </div>
      </div>
    </div>
  </section>

    <section>
      <div>
        <img src="/job.svg" alt="Hero Image" class="w-full h-auto object-cover" />
      </div>
    </section>
    <section id="jobs" class="container mx-auto py-4">
      <div class="flex flex-col items-center justify-center text-center gap-y-4">
        <h2 class="font-sans font-black text-3xl text-gray-600 dark:text-white">
          Featured Jobs
        </h2>
        <p class="font-sans max-w-2xl text-gray-500 dark:text-gray-300">
          Explore our handpicked selection of top job openings. Find your dream career match today.
        </p>
      </div>

      <div v-if="pending" class="text-center mt-12">Loading jobs...</div>
      <div v-else-if="error" class="text-center text-red-500 mt-12">
        Could not load jobs. Please try again later.
      </div>
      <div v-else class="relative mt-12">
       
        <div class="absolute top-0 left-0 z-10 h-full w-16 bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-900 pointer-events-none md:w-32"></div>
        <div class="absolute top-0 right-0 z-10 h-full w-16 bg-gradient-to-l from-gray-50 to-transparent dark:from-gray-900 pointer-events-none md:w-32"></div>

        <ClientOnly>
          <Carousel
            v-if="jobs"
            :items-to-show="1.2"
            :wrap-around="true"
            :autoplay="4000"
            :breakpoints="{
              640: { itemsToShow: 1.5 },
              768: { itemsToShow: 2.2 },
              1024: { itemsToShow: 3.5},
            }"
            class="pb-6"
          >
            <Slide v-for="job in jobs" :key="job.id">
              <div class="px-2 h-full">
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
    </section>
    <section class="py-8 bg-[#F0F5F7] px-4 md:px-8 lg:px-16 dark:bg-slate-800 dark:text-white">
        <div class="mx-auto w-full">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-800 dark:text-white">Career sectors</h2>
            <p class="text-gray-600 dark:text-gray-300 mt-2 max-w-3xl mx-auto">
              Based on the local labor market trend in Ethiopia we categorize our vacancies into fourteen sectors
            </p>
          </div>

          <p v-if="sectorsPending" class="text-center">Loading sectors...</p>
          <p v-else-if="sectorsError" class="text-center text-red-500">Could not load sectors.</p>

          <div v-else-if="sectors" class="flex flex-wrap justify-center -mx-1.5">
           
            <div
              v-for="sector in sectors"
              :key="sector.id"
              class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 px-1.5 mb-5"
            >
              <SectorCard :sector="sector" class="dark:bg-slate-700" />
            </div>
          </div>
        </div>
      </section>
      <section class="py-8 px-4">
        <div class="container mx-auto">
          <div class="text-center mb-12">
            <h2 class="font-sans font-black text-3xl text-gray-600 dark:text-white">Services</h2>
            <p class="text-gray-600 mt-4 max-w-4xl mx-auto">
              HaHuJobs offers digital career profiling, job application and subscription based relevant vacancy announcement notifications to job seekers that sign up on its primary service deployment.
            </p>
          </div>
          <div class="flex justify-center gap-x-4">
            <ServiceCard 
              v-for="service in services" 
              :key="service.id"
              :service="service"
              class="dark:bg-slate-800"
            />
          </div>
        </div>
      </section>
      <section class="py-10 bg-teal-50 dark:bg-slate-800 dark:text-white">
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
          :speed="100"
          :auto-fill="true"
          :pause-on-hover="true"
        >
      
          <CompanyLogo
            v-for="company in topCompanies"
            :key="company.id"
            :company="company"
            class="dark:bg-slate-50"
          />
          <div class="w-14"></div>
        </NuxtMarquee>

      </div>
    </section>
    <section class="bg-gray-100 dark:bg-slate-800 dark:text-white">
      <div class="py-12">
        <div class="group flex px-8 xl:px-14 2xl:px-40 xl:flex-row flex-col-reverse justify-between items-center">
          <div class="xl:w-1/2 mt-7 font-body font-medium text-sm md:text-base 2xl:text-lg leading-5 md:leading-7 2xl:leading-9">
           <p class="font-body text-gray-600 text-lg md:text-2xl 2xl:text-4xl md:leading-[2.5rem] font-black dark:text-white"> What makes us <br> standout from the rest </p>
           <p class="text-gray-600 mt-5 text-xs max-w-[495px] leading-5"> HaHuJobs Primary services are deployments targeting the needs of the Ethiopian jobseeker, with both online and assisted models the platform is tool intended to assist the process of looking for a job at all levels of employment. It features vacancy aggregation and posting from various sources as well as enterprises, builds career profiles, apply for jobs, and subscribe to customized alerts for each user via a channel of their choice. HaHuJobs primary also offers standardized classification of all vacancies both sourced from HaHuJobs enterprise services and other manual and digital vacancy platforms. <br><br> Our vacancy classification follows a combination of ILOs ISCO 8 and the O*Net occupation classification with modifications to the Ethiopian labor market trend. Each vacancy will be given a four-digit occupation taxonomy identification code to determine it's overall standard requirements in terms of skill, knowledge, ability, and expected activities. </p>

            <p class="text-xs font-body my-5">Get Social with us!</p>
            <button class="inline-flex items-center gap-2 bg-teal-600 text-white text-xs font-semibold py-2 px-2 rounded-md hover:bg-teal-600 transition-colors">
              Explore more
              <Icon name="uil:arrow-right" class="h-5 w-5 text-white" />
            </button>
            <div class="flex items-center gap-8 mt-4 text-teal-600">
                <a href="#" class="social-icon bg-teal-600 rounded-full w-4 h-4 flex items-center justify-center" aria-label="Telegram"><Icon name="fa6-brands:telegram" class="text-white h-3 w-3" /></a>
                <a href="#" class="social-icon bg-teal-600 rounded-full w-4 h-4 flex items-center justify-center" aria-label="Facebook"><Icon name="fa6-brands:facebook-f" class="text-white h-3 w-3" /></a>
                <a href="#" class="social-icon bg-teal-600 rounded-full w-4 h-4 flex items-center justify-center" aria-label="Twitter"><Icon name="fa6-brands:x-twitter" class="text-white h-3 w-3" /></a>
                <a href="#" class="social-icon bg-teal-600 rounded-full w-4 h-4 flex items-center justify-center" aria-label="LinkedIn"><Icon name="fa6-brands:linkedin-in" class="text-white h-3 w-3" /></a>
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
          
          <div class="mt-5 text-left xl:w-1/2">

            <p class="mb-1 xl:w-[340px] font-body font-extrabold text-gray-600 text-secondary text-lg md:text-2xl 2xl:text-4xl md:leading-[4rem] dark:text-secondary-8">
              Why choose us
            </p>

            <div class="mb-4 xl:mb-7">
              <p class="font-body font-bold text-xl xl:text-2xl leading-9 text-teal-600">
                Convenience
              </p>
              <p class="mb-1 xl:mb-2 font-body font-bold text-sm xl:text-md leading-6 text-teal-600">
                You no longer look for jobs, jobs look for you
              </p>
              <p class="font-body font-normal text-xs xl:text-sm leading-3 xl:leading-6 text-secondary dark:text-white">
                We offer aggregated, standardized, and quality-assured vacancy and career-related information 
                from various digital as well as manual sources, setting them into one searchable database.
              </p>
            </div>
          
            <div class="mb-4 xl:mb-7">
              <p class="mb-1 xl:mb-2 font-body font-bold text-xl xl:text-2xl leading-9 text-teal-600">
                Accessibility
              </p>
              <p class="mb-1 xl:mb-2 font-body font-bold text-sm xl:text-md leading-6 text-teal-600">
                Reachable across multiple channels and platforms
              </p>
              <p class="font-body font-normal text-xs xl:text-sm leading-3 xl:leading-6 text-secondary dark:text-white5">
                Use your mobile, tablet, or desktop to access our website, mobile app, Telegram, or Facebook bots. 
                You can also get personalized job alerts via your preferred channel.
              </p>
            </div>
            <div>
              <p class="mb-1 xl:mb-2 font-body font-bold text-xl xl:text-2xl leading-9 text-teal-600">
                Ease of use
              </p>
              <p class="mb-1 xl:mb-2 font-body font-bold text-sm xl:text-md leading-6 text-teal-600">
                Both online and offline service options
              </p>
              <p class="font-body font-normal text-xs xl:text-sm leading-3 xl:leading-6 text-secondary dark:white">
                HaHuJobs offers both in-person as well as virtual models for all its career-related service components, 
                available through its employment offices across Ethiopia and in the capital, Addis Ababa.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
    <section class="bg-[#F3F9F8] pb-10 flex flex-col px-5 py-4 xl:px-4 2xl:px-4 xl:flex-row lg:gap-x-8 xl:gap-x-36 dark:bg-secondary-dark-2">
      <div class="flex py-3 max-w-7xl mr-5 gap-20">
        <div class="ml-40 -ml-10 mt-11 bg-gray-200 flex justify-center items-center w-[420px] h-[490px] dark:bg-slate-800 -translate-x-20 rounded-md">
          <img src="/image.svg" alt="Hahu" class="w-[85%] mb-4" />
        </div>
        <div class="flex-1 mt-9">
          <h1 class="text-4xl font-bold pb-4">Post vacancy</h1>
          <p class="text-base font-normal leading-5 text-center md:w-1/2 xl:w-full xl:text-left text-xs text-gray-500">HaHuJobs offers dedicated enterprise cloud services for a full human resource management platform with an affordable price package. 
            Posting vacancy is completely free, and only requires to follow the below listed steps.</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-7 mt-8">
            <div class="">
              <h3 class="text-4xl font-bold text-gray-800 mb-1">01<span class="text-sm text-gray-800 font-medium ml-2 align-middle">Receive</span></h3>
              <p class="text-base font-normal leading-5 text-center md:w-1/2 xl:w-full xl:text-left text-xs text-gray-500">You contact us through one of our outlets with the details of your vacancy. You can click the button below to review ways to share your vacancy and review the required information we need to publish your vacancy on all our outlets.</p>
            </div>
            <div>
              <h3 class="text-4xl font-bold text-gray-800 mb-1">02<span class="text-sm text-gray-800 font-medium ml-2 align-middle">Validate</span></h3>
              <p class="text-base font-normal leading-5 text-center md:w-1/2 xl:w-full xl:text-left text-xs text-gray-500">Our service officers will receive the details from your organization via the channel you communicated it in. They will review the details provided to validate all required information is available and build validate the legitimacy of the vacancy.</p>
            </div>
            <div>
              <h3 class="text-4xl font-bold text-gray-800 mb-1">03<span class="text-sm text-gray-800 font-medium ml-2 align-middle">Publish</span></h3>
              <p class="text-base font-normal leading-5 text-center md:w-1/2 xl:w-full xl:text-left text-xs text-gray-500">All vacancy details will then go through our standardized categorization process for taxonomy identification and reorganization of information if required so it fits the publishing structure of our outlets, then will be approved for publishing.</p>
            </div>
            <div class="flex flex-col items-center">
              <p class="text-sm">Sign up to HaHu Jobs Enterprise</p>
              <img src="/arrow.svg" alt="HaHu Jobs Logo" class="w-10 mx-auto mb-4" />
              <button class="inline-flex items-center gap-2 bg-teal-600 text-white text-sm font-semibold py-2 px-3 rounded-md hover:bg-teal-600 transition-colors">
                Post Vacancy
                <Icon name="uil:arrow-right" class="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="py-10 md:py-16 bg-gray-200 dark:bg-slate-800">
      <div class="max-w-3xl mx-auto px-4">
        
        <h2 class="text-4xl font-bold text-center text-gray-600 dark:text-white mb-10">
          Our Latest Statistics
        </h2>

        <div class="grid grid-cols-3 gap-4 text-center">
          <div>
            <p class="text-4xl md:text-4xl font-extrabold text-teal-600">
              1.1k
            </p>
            <p class="mt-1 text-base md:text-sm font-bold text-gray-600 dark:text-gray-300">
              Enterprises
            </p>
          </div>
          <div>
            <p class="text-4xl md:text-4xl font-extrabold text-teal-600">
              30.1k
            </p>
            <p class="mt-1 text-base md:text-sm font-bold text-gray-600 dark:text-gray-300">
              Users
            </p>
          </div>

          <div>
            <p class="text-4xl md:text-4xl font-extrabold text-teal-600">
              41
            </p>
            <p class="mt-1 text-base md:text-sm font-bold text-gray-600 dark:text-gray-300">
              Opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="pt-20 pb-2 bg-white px-4 dark:bg-slate-800 dark:text-white">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800">News & Events</h2> 
        </div>

        <p v-if="newsPending" class="text-center">Loading news...</p>
        <p v-else-if="newsError" class="text-center text-red-500">Could not load news.</p>
        
        <div v-else-if="news" class=" relative mx-48 px-5">
          <ClientOnly>
            <Carousel
              :items-to-show="2"
              :wrap-around="true"
              :breakpoints="{
                768: { itemsToShow: 2 },
                1024: { itemsToShow: 2},
              }"
              class="pb-12"
            > 
              <Slide v-for="article in news" :key="article.id" v-slot="{ isActive }">
                <div class="h-full">
                  <NewsCard :news="article" :is-active="isActive" class="h-full dark:bg-slate-800" />
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
  
    </section>
    <div class="flex justify-center items-center pt-2 pb-12 bg-white dark:bg-slate-800 dark:text-white">
      <button
        class="inline-flex items-center gap-2 bg-teal-600 text-white text-xs font-semibold py-2 px-2 rounded-md hover:bg-teal-500 transition-colors"
      >
        More blogs
        <Icon name="uil:external-link-alt" class="h-4 w-4 text-white" />
      </button>
    </div>
    <div class="border-t "></div>


  </div>
</template>

<script setup>
import { NuxtLink } from '#components'


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
.carousel__pagination-button {
  padding: 0;
  margin: 0 0.1px; 
  width: 9px;   
  height: 3px;
  background-color: #D1D5DB; 
  transition: background-color 0.3s;
}

.carousel__pagination-button--active {
  background-color: #14B8A6; 
}
.carousel__pagination-button::after {
    display: none;
}

.carousel__pagination-button:hover {
    background-color: #9CA3AF; 
}
.carousel__pagination-button--active:hover {
    background-color: #0D9488;
}
</style>