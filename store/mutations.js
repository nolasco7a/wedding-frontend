export default {
  storeState(state, payload) {
    var { key, value } = payload;
    state[key] = value;
  },
}