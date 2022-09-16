<template>
  <div class="address-block">
    <p class="address-block__title">{{ title }}</p>
    <div class="address-block__content">
      <BaseInput
        placeholder="Укажите область/город"
        label="Область/Город республиканского значения"
      />
      <BaseInput placeholder="Улица" label="Укажите улицу" />
      <BaseInput placeholder="Регион/район" label="Укажите регион/район" />
      <BaseInput placeholder="№ дома" label="Укажите № дома" />
      <BaseInput
        placeholder="Населенный пункт/Город"
        label="Укажите населенный пункт/город"
      />
    </div>
  </div>
</template>

<script>
import BaseInput from "./BaseInput.vue";
export default {
  name: "AddressBlock",
  components: { BaseInput },
  props: { title: { type: String, required: true } },
};
</script>

<style scoped>
.address-block {
  margin-bottom: 24px;
}
.address-block__title {
  margin-bottom: 16px;
  font-weight: 600;
  line-height: 24px;
}

.address-block__content {
  display: grid;
  grid-template-columns: 4fr 1fr;
  column-gap: 12px;
}
</style>
