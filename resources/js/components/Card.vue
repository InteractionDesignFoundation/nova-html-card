<template>
    <card class="flex flex-col justify-center" :class="cardClassList">
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

<style scoped>
    p {
        margin-bottom: 1em;
    }
</style>
