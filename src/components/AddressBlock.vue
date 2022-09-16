<template>
  <div class="address-block">
    <p class="address-block__title">{{ title }}</p>
    <div class="address-block__content" v-if="content">
      <BaseInput
        placeholder="Укажите область/город"
        label="Область/Город республиканского значения"
        v-model="content.area"
      />
      <BaseInput
        placeholder="Улица"
        label="Укажите улицу"
        v-model="content.street"
      />
      <BaseInput
        placeholder="Регион/район"
        label="Укажите регион/район"
        v-model="content.region"
      />
      <BaseInput
        placeholder="№ дома"
        label="Укажите № дома"
        v-model="content.houseNumber"
      />
      <BaseInput
        placeholder="Населенный пункт/Город"
        label="Укажите населенный пункт/город"
        v-model="content.city"
      />
    </div>
  </div>
</template>

<script>
import BaseInput from "./BaseInput.vue";
export default {
  name: "AddressBlock",
  components: { BaseInput },
  props: {
    title: { type: String, required: true },
    type: { type: String, required: true },
  },
  computed: {
    content: {
      get: function () {
        if (this.type === "address") {
          return this.$store.getters.StateAddress;
        }
        if (this.type === "registrationAddress") {
          return this.$store.getters.StateRegistrationAddress;
        }
        return null;
      },
      set: function (value) {
        if (this.type === "address") {
          this.address(value);
        }
        if (this.type === "registrationAddress") {
          this.registrationAddress(value)
        }
      },
    },
  },
  methods: {
    address(value) {
      this.$store.commit("setAddress", value);
    },
    registrationAddress(value) {
      this.$store.commit("setRegistrationAddress", value);
    }
  },
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
