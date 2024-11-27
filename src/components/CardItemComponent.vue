<template>
  <div class="card__content-wrap">
    <a class="card__img">
      <img class="card__img-item" src="../assets/logo/box.svg" alt="" />
    </a>
    <div class="card__hit">
      <span class="card__hit-span">Хит продаж</span>
      <img class="card__hit-img" src="../assets/logo/hit.svg" alt="" />
    </div>
    <div class="card__sale">25%</div>
    <div class="card__info">
      <span class="card__brand">{{ card.title }}</span>
      <p class="card__description">
        {{ card.description }}
      </p>
      <div class="card__prices">
        <span v-if="card.inStock === true" class="card__price">{{
          card.price
        }}</span>
        <span v-if="card.inStock === true" class="card__price-old">{{
          card.oldPrice
        }}</span>
      </div>
      <button v-if="card.inStock === true" class="card__btn-true">
        Купить
      </button>
      <button v-else class="card__btn-false">Сообщить о поступлении</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
};
</script>
