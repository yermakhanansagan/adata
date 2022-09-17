<template>
  <div class="base-input-block">
    <label class="base-input__label">{{ label }}</label>
    <input
      class="base-input"
      type="text"
      :placeholder="placeholder"
      :value="$v.value.$model"
      @input="$emit('input', $event.target.value)"
    />
    <div class="error" v-show="!$v.value.required">Заполните поле</div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
export default {
  name: "BaseInput",
  props: {
    placeholder: { type: String, required: true },
    value: { type: String, required: true },
    label: { type: String, required: true },
  },
  methods: {
    handleinput(e) {
      this.$v.value.touch;
      this.$emit("input", e.event.target);
    },
  },
  validations: {
    value: { required },
  },
};
</script>

<style scoped>
.base-input-block {
  margin-top: 12px;
}

.base-input {
  width: 100%;
  padding: 10px 16px;
  border-radius: 2px;
  border: 0.5px solid #2c3e50;
  box-sizing: border-box;
  margin-top: 12px;
  line-height: 20px;
}

::placeholder {
  color: #2c3e50;
}

.base-input__label {
  size: 14px;
}

.error {
  color: red;
}
</style>
