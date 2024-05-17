<script setup lang="ts">
import type { MaisonRecord } from '@/type'
import MaisonCard from '@/components/MaisonCard.vue'
import { allMaisonsSorted } from '@/backend';

const maisonsListe = await allMaisonsSorted()
console.log(maisonsListe)
</script>

<template>
  <h1 class="text-2xl">Bonjour monde !</h1>
  <MaisonCard 
    v-for="maison in maisonsListe" 
    :key="maison.id" 
    v-bind="maison"
  />
</template>