<template>
    <div v-if="card.withoutCardStyles" class="htmlCard" :class="cardClassList">
        <div v-html="card.content" class="htmlCard__content">
        </div>
    </div>

    <card v-else class="htmlCard" :class="cardClassList">
        <div class="px-3 py-3">
            <div v-html="card.content" class="htmlCard__content">
            </div>
        </div>
    </card>
</template>

<script>
    export default {
        props: [
            'card',
        ],
        computed: {
            cardClassList() {
                let classes = '';
                if (this.card.center) {
                    classes += ' flex flex-col justify-center text-center';
                }

                return classes;
            },
        },
        mounted() {
            if (this.card.forceFullWidth) {
                this.$parent.$el.classList.remove('w-5/6');
                this.$parent.$el.classList.add('w-full');
            }
        },
    }
</script>

<style>
    .htmlCard {
        height: auto;
    }
    .htmlCard__content > p:not(:last-child) {
        margin-bottom: 1em;
    }
</style>
