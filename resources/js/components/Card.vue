<template>
    <card class="flex flex-col justify-center htmlCard" :class="cardClassList">
        <div class="px-3 py-3">
            <section v-html="card.content" class="htmlCard__content">
            </section>
        </div>
    </card>
</template>

<script>
  export default {
    props: [
      'card',
    ],
    computed: {
      textClassList() {
        return this.card.center ? 'text-center' : '';
      },
      cardClassList() {
        const classes = [];
        if (this.card.center) {
          classes.push('items-center');
        }

        return classes.join(' ');
      },
    },
    mounted() {
      //
    },
  }
</script>

<style>
    .htmlCard__content > p {
        margin-bottom: 1em;
    }
</style>

<style scoped>
    .card-panel {
        min-height: 150px;
        height: auto;
    }
</style>
