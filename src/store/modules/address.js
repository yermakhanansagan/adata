const state = {
  address: {
    area: "",
    street: "",
    region: "",
    houseNumber: "",
    city: "",
  },
  registrationAddress: {
    area: "",
    street: "",
    region: "",
    houseNumber: "",
    city: "",
  },
};

const getters = {
  StateAddress: (state) => state.address,
  StateRegistrationAddress: (state) => state.registrationAddress,
};

const actions = {};

const mutations = {
  setAddress(state, address) {
    state.address = address;
  },
  setRegistrationAddress(state, address) {
    state.registrationAddress = address;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
