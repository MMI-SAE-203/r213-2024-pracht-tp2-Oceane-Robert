<script setup lang="ts">

import type { MaisonRecord } from '@/types'

const maisonsListe: MaisonRecord[] = [
  {
    adresse: 'Chemin de la Loubre Bartouille, 06850 Briançonnet, France ',
    collectionId: 'rv28856lfscmmzm',
    collectionName: 'maison',
    created: '2024-04-11 12:20:29.446Z',
    favori: false,
    id: '5qiagd9unxag8zv',
    image: ['259030383_IlMbqeksn9.jpg', '259030850_uslMJi2kSy.jpg'],
    nbChambres: 2,
    nbSdb: 2,
    nomMaison: 'Le chalet ',
    prix: 120000,
    surface: 90,
    updated: '2024-04-11 12:20:29.446Z'
  },
  {
    adresse: 'Wochenbrunnweg, 6352 Ellmau, Autriche',
    collectionId: 'rv28856lfscmmzm',
    collectionName: 'maison',
    created: '2024-04-11 12:22:41.131Z',
    favori: true,
    id: 'nfg31320jzotr2m',
    image: ['524736598_x8qzpGSes6.jpg', '340356918_2FpXBMRJQG.jpg', '524737101_fVMm5XQCF8.jpg'],
    nbChambres: 3,
    nbSdb: 1,
    nomMaison: 'Wochenbrunner Chalets',
    prix: 240000,
    surface: 120,
    updated: '2024-04-11 12:22:41.131Z'
  },
  {
    adresse: 'Calle San Isidro número 32 Casa rural, 16120 Valera de Abajo, Espagne',
    collectionId: 'rv28856lfscmmzm',
    collectionName: 'maison',
    created: '2024-04-11 12:25:04.094Z',
    favori: false,
    id: 'wz9p91cig1p7lec',
    image: [
      '236966778_p9vWGfILJU.jpg',
      '236967012_SBGOp6zd71.jpg',
      '377281552_RdtTaBq54p.jpg',
      '236967258_vV409isAYW.jpg'
    ],
    nbChambres: 3,
    nbSdb: 2,
    nomMaison: 'Casa rural La Marquesa',
    prix: 50000,
    surface: 120,
    updated: '2024-04-11 12:25:04.094Z'
  },
  {
    adresse: 'Besançon (25000)',
    collectionId: 'rv28856lfscmmzm',
    collectionName: 'maison',
    created: '2024-04-11 12:28:57.354Z',
    favori: true,
    id: 'otpacj3lj4pjg08',
    image: ['0ob9s32081uenrgpy2ywq5kmwhwyw3u3be73vug00_jiNUkryslV.webp'],
    nbChambres: 5,
    nbSdb: 3,
    nomMaison: 'Maison 2 étages',
    prix: 645000,
    surface: 191,
    updated: '2024-04-11 12:28:57.354Z'
  },
  {
    adresse: 'Quartier Centre - Chapelle des Buis',
    collectionId: 'rv28856lfscmmzm',
    collectionName: 'maison',
    created: '2024-04-11 12:33:11.018Z',
    favori: true,
    id: '401yhob7ogd7viz',
    image: [
      '1002bzh1rwc6jn6516noycoiwjqka7fihofqjg4u8_BnbalvRSRZ.webp',
      '1famq080k7mlqg6q77xzyty28n4pir3mr9yiwnvk0_WtfEamY7GI.webp',
      '0elplq81zlzjbuihqmxfzn09devg2pyv2a3ozi740_bPzZy0osSZ.webp',
      '002wi6qi90wvcfby217tnxoptnu88yxnhcxqdig74_CTcwngD1Z6.webp',
      '21z548myhvy22hcdpara38wd0faj0vavnkx9m3bls_KSVDarTPss.webp'
    ],
    nbChambres: 6,
    nbSdb: 2,
    nomMaison: 'Maison lumineuse',
    prix: 495000,
    surface: 160,
    updated: '2024-04-11 12:34:05.062Z'
  }
]

console.log(maisonsListe)
</script>

<template>
  <h1 class="text-2xl">Bonjour monde !</h1>
</template>
