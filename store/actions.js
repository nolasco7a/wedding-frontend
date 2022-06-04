export default {
  async getGuests({ commit }) {
    try {
      const response = await this.$axios('/guests')
      commit("storeState", {
        key: "guests",
        value: response.data,
      });
    }
    catch (error) {
      console.log(error)
    }
  },
  async getHomeData({ commit }){
    try {
      const response = await this.$axios('/home_data')
      commit("storeState", {
        key: "homeData",
        value: response.data,
      });
    }
    catch (error) {
      console.log(error)
    }
  },
  async getSliderData({ commit }){
      try{
        let response = await this.$axios('/slider')
        commit("storeState", {
            key: "sliderData",
            value: response.data
        });
      }
      catch(error){
          console.log(error)
      }
  },
  async getGifts({ commit }){
    try {
      let response = await this.$axios('/gifts')
      commit("storeState",{
        key: "giftList",
        value: response.data
      })
    } catch (error) {
      console.log(error)
    }
  },
  async getBrideSquad({ commit }){
    try {
      let response = await this.$axios('/bride_squad')
      commit("storeState",{
        key: "brideSquad",
        value: response.data
      })
    } catch (error) {
      console.log(error)
    }
  },
  async getGroomSquad({ commit }){
    try {
      let response = await this.$axios('/groom_squad')
      commit("storeState",{
        key: "groomSquad",
        value: response.data
      })
    } catch (error) {
      console.log(error)
    }
  },
  async getLocations({ commit }){
    try {
      let response = await this.$axios('/locations')
      commit("storeState",{
        key: "locations",
        value: response.data
      })
    } catch (error) {
      console.log(error)
    }
  },

  async getSettings({ commit }){
    try{
        let response =  await this.$axios('/settings')
        commit("storeState",{
          key: "settings",
          value: response.data
        })
      } catch (error) {
        console.log(error)
      }
  }
}

