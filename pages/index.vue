<template>
  <div>
    <nuxt-content
      :document="page"
      class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto"
    />
  </div>
</template>


<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('index').fetch()

    return {
      page,
    }
  },
}
</script>