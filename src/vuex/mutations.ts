const mutations = {
    updateHello(state: any, data: string) {
      state.Hello = data;
    },
    updateWorld(state: any, data: string) {
      state.World = data;
    },
    updateloginUser(state: any, data: string) {
      state.loginUser = data;
    },
    upsearchType(state: any, data: string) {
      state.searchType = data;
    },
};
export {
  mutations,
};
