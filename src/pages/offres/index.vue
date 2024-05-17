<script setup lang="ts">
import type { MaisonRecord } from '@/type'
import MaisonCard from '@/components/MaisonCard.vue'
import { allMaisonsSorted } from '@/backend';

const maisonsListe = await allMaisonsSorted()
console.log(maisonsListe)
</script>

<template>
  <h1 class="text-2xl">Toutes les Offres</h1>
  <ul>
    <li v-for="maison in maisonsListe" :key="maison.id">
      <RouterLink
        :to="{
          name: '/offres/[id]',
          params: {
            id: maison.id
          }
        }"
        class="text-red-400 hover:text-red-600"
      >
        {{ maison.nomMaison }}
      </RouterLink>
    </li>
  </ul>
</template>