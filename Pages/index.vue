<template>
    <div class="container1">
        <!-- component -->
        <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css">
        <link rel="stylesheet"
            href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css">

        <main class="profile-page">
            <section class="relative block h-500-px">
                <div class="absolute top-0 w-full h-full bg-center bg-cover" style="
            background-image: url(https://images.pexels.com/photos/9958671/pexels-photo-9958671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
          ">
                    <span id="blackOverlay" class="w-full h-full absolute opacity-50 bg-black"></span>
                </div>
                <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
                    style="transform: translateZ(0px)">
                    <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                        <polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
                    </svg>
                </div>
            </section>
            <section class="relative py-16 bg-blueGray-200">
                <div class="container mx-auto px-4">
                    <div
                        class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                        <div class="px-6">
                            <div class="flex flex-wrap justify-center">
                                <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                    <div class="relative">
                                        <img alt="..."
                                            src="https://media.licdn.com/dms/image/D5603AQE8N69NPE2Gwg/profile-displayphoto-shrink_200_200/0/1694646955795?e=1701302400&v=beta&t=C-sGubNlNpweroRSkRzf4M8FRQYfyFDxkg35NM6Y_vM"
                                            class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px">
                                    </div>
                                </div>
                                <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                    <div class="py-6 px-3 mt-32 sm:mt-0">
                                        <button class="active bg-green-700 hover:bg-green-900 p-2 rounded-md text-white"
                                            type="button" @click="toggle">
                                            About Me
                                        </button>
                                    </div>
                                </div>
                                <div class="w-full lg:w-4/12 px-4 lg:order-1">
                                    <div class="flex justify-center py-4 lg:pt-4 pt-8">
                                        <div class="mr-4 p-3 text-center">
                                            <span
                                                class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">26</span><span
                                                class="text-sm text-blueGray-400">Age</span>
                                        </div>
                                        <div class="lg:mr-4 p-3 text-center">
                                            <span
                                                class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">5</span><span
                                                class="text-sm text-blueGray-400">Years of Experience</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center mt-12" v-if="showlinks">
                                <h3 class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                    John Romagno
                                </h3>
                                <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                    <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                                    Carmel, NY
                                </div>
                                <div class="mb-2 text-blueGray-600 mt-10">
                                    <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>NASM-CPT & FullStack Web
                                    Developer
                                </div>
                                <div class="mb-2 text-blueGray-600">
                                    <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>Sage Colleges
                                </div>
                            </div>
                            <div class="mt-10 py-10 border-t border-blueGray-200 text-center" v-if="showlinks">
                                <div class="flex flex-wrap justify-center">
                                    <div class="w-full lg:w-9/12 px-4">
                                        <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                                            I am passionate about helping individuals achieve their health and fitness
                                            goals. With over half a decade of experience in the fitness industry, I have had the
                                            privilege of working with clients from all walks of life. My approach to
                                            personal training goes beyond just physical fitness; I focus on creating
                                            holistic and sustainable lifestyle changes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-10 py-10 border-t border-blueGray-200 text-center" v-if="!showlinks">
                                Helping others through health & wellness
                            </div>
                        </div>
                    </div>
                </div>

                
<div class="py-16 white">  
    <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <h2 class="mb-12 text-center text-2xl text-gray-900 font-bold md:text-4xl">What's our customers say</h2>
        <div class="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
          <div class="row-span-2 p-6 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-8">
            <div class="h-full flex flex-col justify-center space-y-4">
              <img class="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/second_user.webp" alt="user avatar" height="220" width="220" loading="lazy">
              <p class="text-gray-600 md:text-xl"> <span class="font-serif">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus. <span class="font-serif">"</span></p>
              <div>
                  <h6 class="text-lg font-semibold leading-none">Jane Doe</h6>
                  <span class="text-xs text-gray-500">Product Designer</span>
              </div>
            </div>
          </div>

          <div class="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
            <img class="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/first_user.webp" alt="user avatar" height="220" width="220" loading="lazy">
            <div class="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
              <p class="text-gray-600"> <span class="font-serif">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus. <span class="font-serif">"</span></p>
              <div>
                  <h6 class="text-lg font-semibold leading-none">Jane Doe</h6>
                  <span class="text-xs text-gray-500">Product Designer</span>
              </div>
            </div>
          </div>
          <div class="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
            <img class="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/third_user.webp" alt="user avatar" height="220" width="220" loading="lazy">
            <div class="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
              <p class="text-gray-600"> <span class="font-serif">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus. <span class="font-serif">"</span></p>
              <div>
                  <h6 class="text-lg font-semibold leading-none">Jane Doe</h6>
                  <span class="text-xs text-gray-500">Product Designer</span>
              </div>
            </div>
          </div>
        </div>
    </div>
</div>

<!-- component -->
<!-- Tailwind Play: https://play.tailwindcss.com/qIqvl7e7Ww  -->


<div class="flex min-h-screen items-center justify-start bg-white">
    <div class="mx-auto w-full max-w-lg">
      <h1 class="text-4xl font-medium">Contact us</h1>
      <p class="mt-3">Email me at johnromagno@gmail.com or leave your message for me:</p>
  
      <form action="https://api.web3forms.com/submit" class="mt-10">
      
      <!-- This is a working contact form. 
           Get your free access key from: https://web3forms.com/  -->
  
        <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" /> 
        <div class="grid gap-6 sm:grid-cols-2">
          <div class="relative z-0">
            <input type="text" name="name" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
            <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your name</label>
          </div>
          <div class="relative z-0">
            <input type="text" name="email" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
            <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your email</label>
          </div>
          <div class="relative z-0 col-span-2">
            <textarea name="message" rows="5" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" "></textarea>
            <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your message</label>
          </div>
        </div>
        <button type="submit" class="mt-5 rounded-md bg-black px-10 py-2 text-white">Send Message</button>
      </form>
    </div>
  </div>
        </section>
    </main>
</div>
</template>

<script>
    export default {
        data() {
            return {
                showlinks: false
            }
        },
        methods:{
            toggle() {
                this.showlinks = !this.showlinks
            }
        }
    }
</script>