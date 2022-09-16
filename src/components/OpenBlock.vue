<template>
  <div class="open-block">
    <button class="open-block__button" @click="$emit('click')">
      <img
        class="open-block__image"
        height="24"
        width="24px"
        src="../assets/open.svg"
        alt="open"
      />
    </button>
    <p class="open-block__text">Прописка</p>
  </div>
</template>

<script>
export default {
  name: "OpenBlock",
};
</script>

<style scoped>
.open-block {
  display: flex;
  align-items: center;
}
.open-block__button {
  display: flex;
  align-items: center;
  border: none;
  background: none;
  padding: 0;
  margin-right: 16px;
}
.open-block__button:hover {
  opacity: 0.8;
  cursor: pointer;
}
.open-block__image {
  color: #fff;
}
.open-block__text {
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
}
</style>
