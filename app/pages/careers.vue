<template>
    <div class="graph-paper"></div>
  </template>
  
  <script setup>
  // No additional script needed for basic implementation
  </script>
  
  <style scoped>
  .graph-paper {
    background-image: 
      linear-gradient(to right, rgba(220, 220, 220, 0.6) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(220, 220, 220, 0.6) 1px, transparent 1px);
    background-size: 80px 80px;  /* Changed from 40px to 80px */
    width: 100%;
    height: 100vh;
    background-color: white;
  }
  </style>