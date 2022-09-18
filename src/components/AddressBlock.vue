<template>
  <div class="address-block">
    <p class="address-block__title">{{ title }}</p>
    <div class="address-block__content" v-if="content">
      <BaseInput
        placeholder="Укажите область/город"
        label="Область/Город республиканского значения"
        v-model="$v.content.area.$model"
        :error="!$v.content.area.required"
      />
      <BaseInput
        placeholder="Улица"
        label="Укажите улицу"
        v-model="$v.content.street.$model"
        :error="!$v.content.street.required"
      />
      <BaseInput
        placeholder="Регион/район"
        label="Укажите регион/район"
        v-model="$v.content.region.$model"
        :error="!$v.content.region.required"
      />
      <BaseInput
        placeholder="№ дома"
        label="Укажите № дома"
        v-model="$v.content.houseNumber.$model"
        :error="!$v.content.houseNumber.required"
      />
      <BaseInput
        placeholder="Населенный пункт/Город"
        label="Укажите населенный пункт/город"
        v-model="$v.content.city.$model"
        :error="!$v.content.city.required"
      />
    </div>
  </div>
</template>

<script>
import BaseInput from "./BaseInput.vue";
import { required } from "vuelidate/lib/validators";
export default {
  name: "AddressBlock",
  components: { BaseInput },
  props: {
    title: { type: String, required: true },
    type: {
      type: String,
      required: true,
      validator(value) {
        return ["address", "registrationAddress"].includes(value);
      },
    },
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
          this.registrationAddress(value);
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
    },
  },
  validations: {
    content: {
      area: { required },
      region: { required },
      street: { required },
      houseNumber: { required },
      city: { required },
    },
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
