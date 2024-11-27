<template>
  <div class="brand__wrapper">
    <div class="brand__title-wrapper">
      <h2 class="brand__title">Размер</h2>
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
