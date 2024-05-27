<script setup lang="ts">
import type { AgentRecord } from '@/type'
import MaisonCard from '@/components/MaisonCard.vue'
import { allAgentSorted} from '@/backend';

const agentListe = await allAgentSorted()
console.log(agentListe)
</script>

<template>
  <h1 class="text-2xl">Toutes les agents</h1>
  <ul>
    <li v-for="agent in agentListe" :key="agent.id">
      <RouterLink
        :to="{
          name: '/agents/[id]',
          params: {
            id: agent.id
          }
        }"
        class="text-red-400 hover:text-red-600"
      >
        {{agent.Prenom}} {{ agent.Nom}}
      </RouterLink>
    </li>
  </ul>
</template>