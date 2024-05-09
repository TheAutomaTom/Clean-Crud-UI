<template>
  <div class="absolute">
    <div class="flex items-start justify-center text-center">
      <div class="text-center rounded-md"
           role="dialog"
           aria-modal="true"
      >
        <h3>Log in</h3>
        <input>
        <input>
        <div class="flex justify-center py-4">
          Cancel
        </div>
        <div @click="$emit('close')">
          Enter
        </div>

      </div>

    </div>
  </div>
</template>