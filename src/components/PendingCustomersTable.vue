<template>
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="p-4"></th>
            <th
              scope="col"
              class="py-3 px-6"
              v-for="title in titles"
              :key="title.id"
            >
              {{ title }}
            </th>
            <th scope="col" class="py-3 px-6">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in tableData" :key="item.id">
            <td class="p-4 w-4">
              <div class="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-table-search-1" class="sr-only"
                  >checkbox</label
                >
              </div>
            </td>
            <th
              scope="row"
              class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <button @click="$emit('view', item.id)">{{ item.name }}</button>
            </th>
            <td class="py-4 px-6">{{ item.email }}</td>
            <td class="py-4 px-6">{{ item.address_1 }}</td>
            <td class="py-4 px-6">{{ item.phone }}</td>
            <td class="flex items-center py-4 px-6 space-x-3">
              <button
                @click="$emit('view', item.id)"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                View
              </button>
              <button
                @click="$emit('approve', item.id)"
                class="font-medium text-green-600 dark:text-green-500 hover:underline"
              >
                Approve
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: "PendingTableComponent",
    props: ["tableData", "titles"],
  };
  </script>
  
  <style></style>
  