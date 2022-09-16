<template>
  <button class="base-button" v-bind:class="type" @click="$emit('click')">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    label: { type: String, required: true },
    type: {
      type: String,
      required: true,
      validator(value) {
        return ["cancel", "submit"].includes(value);
      },
    },
  },
};
</script>

<style scoped>
.base-button {
  padding: 6px 30px;
  border-radius: 2px;
  border: none;
  font-size: 14px;
  line-height: 20px;
}
:hover {
  opacity: 0.9;
  cursor: pointer;
}

.cancel {
  background: rgba(189, 199, 206, 0.3);
  color: #2c3e50;
}

.submit {
  background: #007aff;
  color: #fff;
}
</style>
