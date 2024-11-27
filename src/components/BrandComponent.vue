<template>
  <div class="brand__wrapper">
    <div class="brand__title-wrapper">
      <h2 class="brand__title">Бренд</h2>
      <a href="#" class="brand__clear-input">Очистить</a>
    </div>
    <div class="header__text-field">
      <div
        class="header__text-field__icon header__text-field__icon_search brand__icon_search"
      >
        <input
          class="header__text-field__input brand__input"
          type="text"
          placeholder="Поиск"
        />
      </div>
    </div>

    <AtributesComponent :attributes="attributesList" />
  </div>
</template>

<script>
import AtributesComponent from './AtributesComponent.vue';
import { v4 as uuidv4 } from 'uuid';

export default {
  components: {
    AtributesComponent,
  },
  data() {
    return {
      attributesList: [
        { id: uuidv4() },
        { id: uuidv4() },
        { id: uuidv4() },
        { id: uuidv4() },
        { id: uuidv4() },
        { id: uuidv4() },
      ],
    };
  },
};
</script>
