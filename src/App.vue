<template>
  <div id="app">
    <OpenBlock @click="onOpen" />
    <SideTransition>
      <div class="registration-block" v-if="show">
        <AddressBlock title="Адрес прописки" type="address" />
        <AddressBlock
          title="Адрес временной прописки"
          type="registrationAddress"
        />
        <div class="buttons-block">
          <BaseButton label="Отмена" type="cancel" @click="onCancel" />
          <BaseButton
            label="Сохранить"
            type="submit"
            class="left-space"
            @click="onSave"
          />
        </div>
      </div>
    </SideTransition>
  </div>
</template>

<script>
import AddressBlock from "./components/AddressBlock.vue";
import OpenBlock from "./components/OpenBlock.vue";
import BaseButton from "./components/BaseButton.vue";
import SideTransition from "./transitions/SideTransition.vue";

export default {
  name: "App",
  components: {
    AddressBlock,
    OpenBlock,
    BaseButton,
    SideTransition,
  },
  data: () => {
    return {
      show: false,
    };
  },
  methods: {
    onOpen() {
      this.show = !this.show;
    },
    onSave() {
      this.$store.commit("setAddress", this.$store.getters.StateAddress);
      this.$store.commit(
        "setRegistrationAddress",
        this.$store.getters.StateRegistrationAddress
      );
    },
    onCancel() {
      const payload = {
        area: "",
        street: "",
        region: "",
        houseNumber: "",
        city: "",
      };
      this.$store.commit("setAddress", payload);
      this.$store.commit("setRegistrationAddress", payload);
    },
  },
};
</script>

<style>
#app {
  color: #2c3e50;
  box-sizing: border-box;
  margin: 0 16px;
}
.buttons-block {
  margin-top: 30px;
}
.left-space {
  margin-left: 16px;
}
</style>
