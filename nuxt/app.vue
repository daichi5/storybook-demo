<script setup lang="ts">

const { $myHelper } = useNuxtApp()

</script>
<template>
  <div>
    <Stack>
      <Text>
        Hello, world!
      </Text>
      <Text>
        {{ $myHelper('hello') }}
      </Text>
      <Cluster>
        <Button />
        <Button />
        <Button />
      </Cluster>
    </Stack>
  </div>
</template>
