<template>
  <div v-html="content" class="htmlCard__content"></div>
</template>

<script>
export default {
  props: ['content'],
};
</script>

<style lang="scss">
.htmlCard__content {
  p:not(:last-child) {
    margin-bottom: 1em;
  }
}
</style>
