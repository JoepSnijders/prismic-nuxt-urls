<template>
  <div class="container">
    <prismic-rich-text :field="document.title" />
    <ul>
      <li v-for="page in allContentPages" :key="page.data.id">
          {{ page }}
          <prismic-link :field="page">
            <prismic-rich-text :field="page.data.title" />
          </prismic-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic, error }) {
    try {
      const document = (await $prismic.api.getSingle('homepage')).data
      const allContentPages = (await $prismic.api.query($prismic.predicates.at('document.type', 'contentpage'))).results
      return {
        document,
        allContentPages
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
}
</style>
