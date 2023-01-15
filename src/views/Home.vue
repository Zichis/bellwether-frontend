<template>
  <div class="home">
    <nav
      class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <a href="https://flowbite.com/" class="flex items-center">
          <!--<img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo">-->
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Bellwether</span>
        </a>
        <div class="flex md:order-2">
          <button type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Get started
          </button>
          <button data-collapse-toggle="navbar-sticky" type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul
            class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#"
                class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                aria-current="page">Home</a>
            </li>
            <li>
              <a href="#"
                class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
            </li>
            <li>
              <a href="#"
                class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
            </li>
            <li>
              <a href="#"
                class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="banner h-screen pt-20 flex items-center justify-center">
      <div class="text-center px-10">
        <h1 class="text-4xl lg:text-7xl font-light text-yellow-400">
          YOU HAVE WASTE RIGHT?
        </h1>
        <h1 class="font-bold text-4xl text-yellow-400">WE REMOVE</h1>
      </div>
    </div>
    <div class="text-center p-10 lg:p-20 bg-gray-800 text-white">
      <h2 class="text-3xl font-bold mb-5">Contemporary Top Notch Services</h2>
      <p class="text-2xl font-thin">
        Bellwether Recycling Limited is a waste management company with state of
        the art strategies and solutions to provide a sustainable circular
        economy waste management. Our goal is to consistently provide
        sustainable state of the art and contemporary waste management
        solutions, policies, practices and services that are of superior quality
        that will promote a sustainable, healthy and clean environment.
      </p>
    </div>
    <div class="text-center p-5">
      <section class="mb-32 text-gray-800 text-center">
        <h2 class="text-3xl font-bold mb-12">Services</h2>
        <div class="grid md:grid-cols-3 lg:gap-x-12">
          <div class="mb-12 md:mb-0">
            <div class="p-4 bg-blue-600 rounded-lg shadow-lg inline-block mb-6">
              <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor"
                  d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z">
                </path>
              </svg>
            </div>
            <h5 class="text-lg font-bold mb-4">Support 24/7</h5>
            <p class="text-gray-500">
              Laudantium totam quas cumque pariatur at doloremque hic quos quia
              eius. Reiciendis optio minus mollitia rerum labore facilis
              inventore voluptatem ad, quae quia sint. Ullam.
            </p>
          </div>

          <div class="mb-12 md:mb-0">
            <div class="p-4 bg-blue-600 rounded-lg shadow-lg inline-block mb-6">
              <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor"
                  d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z">
                  >
                </path>
              </svg>
            </div>
            <h5 class="text-lg font-bold mb-4">Safe and solid</h5>
            <p class="text-gray-500">
              Eum nostrum fugit numquam, voluptates veniam neque quibusdam ullam aspernatur odio
              soluta, quisquam dolore animi mollitia a omnis praesentium, expedita nobis!
            </p>
          </div>

          <div class="mb-12 md:mb-0">
            <div class="p-4 bg-blue-600 rounded-lg shadow-lg inline-block mb-6">
              <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path fill="currentColor"
                  d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z">
                </path>
              </svg>
            </div>
            <h5 class="text-lg font-bold mb-4">Extremely fast</h5>
            <p class="text-gray-500">
              Enim cupiditate, minus nulla dolor cumque iure eveniet facere ullam beatae hic
              voluptatibus dolores exercitationem? Facilis debitis aspernatur amet nisi?
            </p>
          </div>
        </div>
      </section>
    </div>
    <div class="text-center p-10 lg:p-20 bg-gray-800 text-white">
      <p class="text-4xl lg:text-7xl font-thin">
        Metamorphosing the waste management industry with our top notch
        solutions, startegies and services.
      </p>
    </div>
    <!--<div class="text-center p-5 bg-gray-600">
      <section class="mb-32 text-gray-800">
        <h2 class="text-3xl font-bold text-center text-white mb-12">Pricing</h2>

        <div class="grid lg:grid-cols-3 gap-6 lg:gap-x-12">
          <div class="mb-6 lg:mb-0">
            <div class="block rounded-lg shadow-lg bg-white h-full">
              <div class="p-6 border-b border-gray-300 text-center">
                <p class="uppercase mb-4 text-sm">
                  <strong>Basic</strong>
                </p>
                <h3 class="text-2xl mb-6">
                  <strong>$ 129</strong>
                  <small class="text-gray-500 text-sm">/year</small>
                </h3>

                <button type="button"
                  class="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out w-full"
                  style="background-color: hsl(0, 0%, 95%)" data-mdb-ripple="true" data-ripple-color="primary">
                  Buy
                </button>
              </div>
              <div class="p-6">
                <ol class="list-inside">
                  <li class="mb-4 flex items-center">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                      class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512">
                      <path fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                      </path>
                    </svg>Unlimited updates
                  </li>
                  <li class="mb-4 flex items-center">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                      class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512">
                      <path fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                      </path>
                    </svg>Git repository
                  </li>
                  <li class="mb-4 flex items-center">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                      class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512">
                      <path fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                      </path>
                    </svg>npm installation
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div class="mb-6 lg:mb-0">
            <div class="block rounded-lg shadow-lg bg-white h-full">
              <div class="p-6 border-b border-gray-300 text-center">
                <p class="uppercase mb-4 text-sm">
                  <strong>Advanced</strong>
                </p>
                <h3 class="text-2xl mb-6">
                  <strong>$ 299</strong>
                  <small class="text-gray-500 text-sm">/year</small>
                </h3>
                <button type="button"
                  class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true" data-ripple-color="light">
                  Buy
                </button>
              </div>
              <div class="p-6">
                <ol class="list-inside">
                  <li class="mb-4 flex items-center">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                      class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512">
                      <path fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                      </path>
                    </svg>Unlimited updates
                  </li>
                  <li class="mb-4 flex items-center">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                      class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512">
                      <path fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                      </path>
                    </svg>Git repository
                  </li>
                  <li class="mb-4 flex items-center">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                      class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512">
                      <path fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                      </path>
                    </svg>npm installation
                  </li>
                  <li class="mb-4 flex items-center">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                      class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512">
                      <path fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                      </path>
                    </svg>Code examples
                  </li>
                  <li class="mb-4 flex items-center">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                      class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512">
                      <path fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                      </path>
                    </svg>Premium snippets
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div class="mb-6 lg:mb-0">
            <div class="block rounded-lg shadow-lg bg-white h-full">
              <div class="p-6 border-b border-gray-300 text-center">
                <p class="uppercase mb-4 text-sm">
                  <strong>Enterprise</strong>
                </p>
                <h3 class="text-2xl mb-6">
                  <strong>$ 499</strong>
                  <small class="text-gray-500 text-sm">/year</small>
                </h3>
                <button type="button"
                  class="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out w-full"
                  style="background-color: hsl(0, 0%, 95%)" data-mdb-ripple="true" data-ripple-color="primary">
                  Buy
                </button>
              </div>
              <div class="p-6">
                <ol class="list-inside">
                  <li class="mb-4 flex items-center">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                      class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512">
                      <path fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                      </path>
                    </svg>Unlimited updates
                  </li>
                  <li class="mb-4 flex items-center">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                      class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512">
                      <path fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                      </path>
                    </svg>Git repository
                  </li>
                  <li class="mb-4 flex items-center">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                      class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512">
                      <path fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                      </path>
                    </svg>npm installation
                  </li>
                  <li class="mb-4 flex items-center">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                      class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512">
                      <path fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                      </path>
                    </svg>Code examples
                  </li>
                  <li class="mb-4 flex items-center">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                      class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512">
                      <path fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                      </path>
                    </svg>Premium snippets
                  </li>
                  <li class="mb-4 flex items-center">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                      class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512">
                      <path fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                      </path>
                    </svg>Premium support
                  </li>
                  <li class="mb-4 flex items-center">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                      class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512">
                      <path fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                      </path>
                    </svg>Drag&amp;Drop builder
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>-->
    <footer class="bg-gray-700 text-center lg:text-left">
      <div class="text-gray-100 text-center p-4" style="background-color: rgba(0, 0, 0, 0.2)">
        © 2021 Copyright: Bellwether
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
.banner {
  background: linear-gradient(to right,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)),
    url("../assets/recycle.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
