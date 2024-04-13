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
      <Text>
        {{ $t('welcome') }}
      </Text>
      <Cluster>
        <Button />
        <Button />
        <Button />
      </Cluster>
    </Stack>
  </div>
</template>
