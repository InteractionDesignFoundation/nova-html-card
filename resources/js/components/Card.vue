<template>
  <div v-if="card.withoutCardStyles" class="htmlCard" :class="cardClassList">
    <CardContent
      :content="card.content"
      :with-basic-styles="card.withBasicStyles"
    />
  </div>

  <Card v-else class="htmlCard" :class="cardClassList">
    <div class="px-3 py-3">
      <CardContent
        :content="card.content"
        :with-basic-styles="card.withBasicStyles"
      />
    </div>
  </Card>
</template>

<script>
import CardContent from './CardContent';
export default {
  components: {
    CardContent,
  },
  props: ['card'],
  computed: {
    cardClassList() {
      let classes = '';
      if (this.card.center) {
        classes += ' flex flex-col justify-center text-center';
      }

      return classes;
    },
  },
};
</script>
