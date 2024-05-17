<script setup lang="ts">
  import { getMaisonById } from '@/backend';
import MaisonCard from '@/components/MaisonCard.vue'

  import { useRoute } from 'vue-router/auto'

  const route = useRoute('/offres/[id]')
  console.log('id :', route.params.id)

  const maison = await getMaisonById(route.params.id)
  console.log(maison)
</script>
<template>
  <div>
    <h1 class="text-xl">Une maison</h1>
    <MaisonCard v-bind="maison" />
  </div>
</template>