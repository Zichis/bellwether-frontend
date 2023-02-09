<template>
  <div class="home">
    <NavBar />
    <div class="banner h-screen pt-20 flex items-center justify-center">
      <div class="text-center px-10">
        <h1 class="animate__animated animate__slideInDown text-4xl lg:text-7xl font-light text-yellow-400">
          YOU HAVE WASTE RIGHT?
        </h1>
        <h1 class="animate__animated animate__slideInUp font-bold text-4xl text-yellow-400">WE REMOVE</h1>
        <router-link to="/get-started"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 my-10 inline-block">Register
          Here</router-link>
      </div>
    </div>
    <div class="text-center p-10 lg:p-20 bg-gray-800 text-white">
      <h2 class="animate__animated animate__slideInRight text-3xl font-bold mb-5">Contemporary Top Notch Services</h2>
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
        <h2 class="text-3xl font-bold mb-12 v-motion-roll-visible-bottom">Services</h2>
        <div class="grid md:grid-cols-3 lg:gap-x-12">
          <div class="mb-12 md:mb-0">
            <div class="flex justify-center mb-5">
              <img src="../../assets/service1pro.jpeg" alt="services">
            </div>
            <h5 class="text-lg font-bold mb-4">Sustainable Waste Collection</h5>
            <p class="text-gray-500">
              The collection of separate solid waste streams, such as organic garbage, plastics, glass, etc
            </p>
          </div>

          <div class="mb-12 md:mb-0">
            <div class="flex justify-center mb-5">
              <img src="../../assets/service2.jpg" alt="services">
            </div>
            <h5 class="text-lg font-bold mb-4">Environmental Protection</h5>
            <p class="text-gray-500">
              Promoting the preservation of natural resources for future generations and ensuring the safeguarding of
              biodiversity
            </p>
          </div>

          <div class="mb-12 md:mb-0">
            <div class="flex justify-center mb-5">
              <img src="../../assets/service3pro.png" alt="services">
            </div>
            <h5 class="text-lg font-bold mb-4">Sustainable Environmental Sanitation</h5>
            <p class="text-gray-500">
              Protection and promotion of human health by providing a clean environment and breaking the cycle of
              disease.
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
    <!--<div class="text-center p-5 bg-gray-300">
      <section class="mb-32 text-gray-800">
        <h2 class="text-3xl font-bold text-center text-gray-700 mb-12">Pricing</h2>
        <h3 class="text-2xl font-bold text-center text-gray-700 mb-12">Residential Location</h3>
        <div class="bg-white rounded-md shadow-md overflow-scroll">
          <table class="border-collapse border border-slate-400 w-full">
            <thead>
              <tr class="bg-blue-500 text-white">
                <th class="border border-slate-300 p-5">Collection Plan</th>
                <th class="border border-slate-300 ...">Quantity of Waste Allowed per week</th>
                <th class="border border-slate-300 ...">Quantity of Waste Allowed per month</th>
                <th class="border border-slate-300 ...">Service charge</th>
                <th class="border border-slate-300 ...">Cost for Every Extra Garbage bag</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-slate-300 p-5">Bronze Plan</td>
                <td class="border border-slate-300 ...">2 Garbage Bags</td>
                <td class="border border-slate-300 ...">8 garbage bags</td>
                <td class="border border-slate-300 ...">₦3,500</td>
                <td class="border border-slate-300 ...">₦500</td>
              </tr>
              <tr>
                <td class="border border-slate-300 p-5">Silver Plan</td>
                <td class="border border-slate-300 ...">4 Garbage Bags</td>
                <td class="border border-slate-300 ...">16 Garbage Bags</td>
                <td class="border border-slate-300 ...">₦6,500</td>
                <td class="border border-slate-300 ...">₦500</td>
              </tr>
              <tr>
                <td class="border border-slate-300 p-5">Gold Plan</td>
                <td class="border border-slate-300 ...">6 Garbage Bags</td>
                <td class="border border-slate-300 ...">24 Garbage Bags</td>
                <td class="border border-slate-300 ...">₦10,000</td>
                <td class="border border-slate-300 ...">₦500</td>
              </tr>
              <tr>
                <td class="border border-slate-300 p-5">Custom Plan</td>
                <td class="border border-slate-300 ..." colspan="4">Base on Agreement with Bellwether</td>
              </tr>
            </tbody>
          </table>
          <div class="p-5 text-red-600 text-left">
            <h4 class="font-bold">Note</h4>
            <ul>
              <li>The custom service is for those with waste quantities that are not on the collection plan</li>
              <li>Register five (5) persons before the 20th of every month and get 10% discount on your service charge</li>
              <li>Pay for a full year and get 10% discount on your service charge</li>
            </ul>
          </div>
        </div>
        <h3 class="text-2xl font-bold text-center text-gray-700 mb-12 mt-10">Commercial Location</h3>
        <div class="bg-white rounded-md shadow-md overflow-scroll">
          <table class="border-collapse border border-slate-400 w-full">
            <thead>
              <tr class="bg-blue-500 text-white">
                <th class="border border-slate-300 p-5">Collection Plan</th>
                <th class="border border-slate-300 ...">Quantity of Waste Allowed per week</th>
                <th class="border border-slate-300 ...">Quantity of Waste Allowed per month</th>
                <th class="border border-slate-300 ...">Service charge</th>
                <th class="border border-slate-300 ...">Cost for Every Extra Garbage bag</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-slate-300 p-5">Bronze Plan</td>
                <td class="border border-slate-300 ...">120 Liters Bin x2</td>
                <td class="border border-slate-300 ...">120 Liters x 8</td>
                <td class="border border-slate-300 ...">₦15,000</td>
                <td class="border border-slate-300 ...">₦3,000</td>
              </tr>
              <tr>
                <td class="border border-slate-300 p-5">Silver Plan</td>
                <td class="border border-slate-300 ...">240 Liters Bin x2</td>
                <td class="border border-slate-300 ...">240 Liters x 8</td>
                <td class="border border-slate-300 ...">₦25,000</td>
                <td class="border border-slate-300 ...">₦6,000</td>
              </tr>
              <tr>
                <td class="border border-slate-300 p-5">Gold Plan</td>
                <td class="border border-slate-300 ...">360 Liters Bin x2</td>
                <td class="border border-slate-300 ...">360 Liters x 8</td>
                <td class="border border-slate-300 ...">₦35,000</td>
                <td class="border border-slate-300 ...">₦9,000</td>
              </tr>
              <tr>
                <td class="border border-slate-300 p-5">Platnium Plan</td>
                <td class="border border-slate-300 ...">660 Liters Bin x2</td>
                <td class="border border-slate-300 ...">660 Liters x 8</td>
                <td class="border border-slate-300 ...">₦45,000</td>
                <td class="border border-slate-300 ...">₦12,000</td>
              </tr>
              <tr>
                <td class="border border-slate-300 p-5">Diamond Plan</td>
                <td class="border border-slate-300 ...">1100 Liters Bin x2</td>
                <td class="border border-slate-300 ...">1100liters x 8</td>
                <td class="border border-slate-300 ...">₦55,000</td>
                <td class="border border-slate-300 ...">₦15,000</td>
              </tr>
              <tr>
                <td class="border border-slate-300 p-5">Custom Plan</td>
                <td class="border border-slate-300 ..." colspan="4">Base on Agreement with Bellwether</td>
              </tr>
            </tbody>
          </table>
          <div class="p-5 text-red-600 text-left">
            <h4 class="font-bold">Note</h4>
            <ul>
              <li>The custom service is for those with waste quantities that are not on the collection plan</li>
              <li>Register three (3) persons within the 20th of every month and get 10% discount on service charge</li>
            </ul>
          </div>
        </div>
      </section>
    </div>-->
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
  name: "HomePage",
  components: {},
};
</script>

<style scoped>
.banner {
  background: linear-gradient(to right,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)),
    url("../../assets/bg.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
