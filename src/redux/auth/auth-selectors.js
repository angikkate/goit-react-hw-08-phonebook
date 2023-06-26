export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectName = state => state.auth.user.name;

export const selectIsFetchingCurrentUser = state =>
  state.auth.isFetchingCurrentUser;

export const selectError = state => state.auth.error;
