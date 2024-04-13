<script setup lang="ts">


const isActive = ref(false)

</script>

<template>
  <div>
    <Button @click="isActive = !isActive" >hello-button</Button>
    <Stack>
      <Text v-if="isActive">
        Activated
      </Text>
      <Text v-else>
        Deactivated
      </Text>
      <TextField />
    </Stack>  
  </div>
</template>
