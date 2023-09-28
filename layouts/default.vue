<template>
  <div
    class="fixed inset-0 flex lg:overflow-hidden antialiased font-sans text-gray-700 dark:text-gray-200 dark:bg-gray-900 select-none"
  >
    <div class="flex flex-col flex-1 min-w-0 overflow-hidden">
      <slot />
    </div>
  </div>
</template>

<script>
export default {};
</script>