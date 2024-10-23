// Nuxt only scans files at the top level of the composables/ directory


// nuxt.config.ts

// export default defineNuxtConfig({
//   imports: {
//     dirs: [
//       // Scan top-level modules
//       'composables',
//       // ... or scan modules nested one level deep with a specific name and file extension
//       'composables/*/index.{ts,js,mjs,mts}',
//       // ... or scan all modules within given directory
//       'composables/**'
//     ]
//   }
// })


export const useFoo = () => {
  return useState('foo', () => 'bar')
}
