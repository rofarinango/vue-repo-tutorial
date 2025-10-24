<script setup lang="ts">
import ChatBubble from './ChatBubble.vue';
</script>

<template>
  <div class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
      <ChatBubble :its-mine="true" message="Hola Mundo" />
      <ChatBubble
        :its-mine="false"
        message="no"
        image="https://yesno.wtf/assets/no/14-cb78bf7104f848794808d61b9cd83eba.gif"
      />
    </div>
  </div>
</template>
