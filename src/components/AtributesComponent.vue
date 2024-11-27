<template>
  <ul class="brand__atributes-list">
    <li
      v-for="attribute in attributes"
      :key="attribute.id"
      class="brand__atributes-item"
    >
      <div class="brand__checkbox-wrapper">
        <input
          type="checkbox"
          class="brand__custom-checkbox"
          :id="attribute.id"
          name="atribute"
        />
        <label class="brand__label" :for="attribute.id">Атрибут</label>
      </div>
      <span class="categories__item-value">3</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    attributes: {
      type: Array,
      required: true,
    },
  },
};
</script>
