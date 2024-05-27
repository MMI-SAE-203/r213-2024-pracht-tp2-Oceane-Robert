<script setup lang="ts">
  import { allEventsByArtisteId } from '@/backend';
import MaisonCard from '@/components/MaisonCard.vue'

  import { useRoute } from 'vue-router/auto'

  const route = useRoute('/agents/[id]')
  console.log('id :', route.params.id)

  const sorteRecordsArtiste = await allEventsByArtisteId(route.params.id)
  console.log(sorteRecordsArtiste)
</script>
<template>
  <div>
    <h1 class="text-xl">Une maison</h1>
    <MaisonCard v-for="maison in sorteRecordsArtiste" :key="maison.id" v-bind="maison" />
  </div>
</template>