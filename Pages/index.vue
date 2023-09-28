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
                                        <div class="mr-4 p-3 text-center">
                                            <span
                                                class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">?</span><span
                                                class="text-sm text-blueGray-400">?</span>
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
                                stuff
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    </main>
</div></template>

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