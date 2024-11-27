<template>
  <main>
    <section class="section">
      <div class="container">
        <div class="content-wrapper">
          <aside class="side-nav">
            <categories-component />
            <price-component />
            <brand-component />
            <size-component />
          </aside>

          <div class="card__wrapper">
            <card-item-component
              v-for="card in goods"
              :key="card.id"
              :card="card"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import CategoriesComponent from '@/components/CategoriesComponent.vue';
import CardItemComponent from '@/components/CardItemComponent.vue';
import PriceComponent from '@/components/PriceComponent.vue';
import BrandComponent from '@/components/BrandComponent.vue';
import SizeComponent from '@/components/SizeComponent.vue';

export default {
  components: {
    CategoriesComponent,
    CardItemComponent,
    PriceComponent,
    BrandComponent,
    SizeComponent,
  },
  computed: {
    goods() {
      return this.$store.getters['getGoods'];
    },
  },
};
</script>
