<template>
  <div class="cluster">
    <slot></slot>
  </div>
</template>

<style scoped>
.cluster {
  display: flex;
  flex-direction: row;
  gap: 8px;
}
</style>
