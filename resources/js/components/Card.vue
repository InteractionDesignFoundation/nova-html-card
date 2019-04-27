<template>
    <card class="flex flex-col items-center justify-center">
        <div class="px-3 py-3">
            <section v-html="card.content">
            </section>
        </div>
    </card>
</template>

<script>
  export default {
    props: [
      'card',
    ],

    mounted() {
      //
    },
  }
</script>
