let bearerToken = "Bearer ";
let tokenset = false;

export function getBearerToken() {
  return bearerToken;
}

export function setBearerToken(newToken) {
  if (tokenset === false) {
    tokenset = true;
    bearerToken = bearerToken + newToken;
  }
}

export const UserMap = new Map();

UserMap.set("65392efd65bb52b90c8fac67", {
  name: "partik1",
  img: "https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg",
});
UserMap.set("65032b7628babc1110191f62", {
  name: "rahul",
  img: "https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg",
});
UserMap.set("650e894081acb6d2f0d1a6c7", {
  name: "manik",
  img: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/366.jpg",
});
UserMap.set("6509655898e8a1dfeaf886d2", {
  name: "nil",
  img: "https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg",
});
UserMap.set("650e894081acb6d2f0d1a6c7", {
  name: "thomas",
  img: "https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg",
});
UserMap.set("6512bba4c3d7db3677f597c2", {
  name: "suyash",
  img: "https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg",
});
UserMap.set("65296bb6a1ea4d2294755723", {
  name: "Nayar",
  img: "https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg",
});
UserMap.set("65296bb6a1ea4d2294755723", {
  name: "Anku",
  img: "http://t1.gstatic.com/images?q=tbn:ANd9GcQO9uxMB1FX2AzaVz_S2H42Gjnm-g925Q1cKF8RClf_P54zoW_DSmtrqcyuyUoqrzNp82Hy",
});
UserMap.set("65392efd65bb52b90c8fac67", {
  name: "Sejal",
  img: "https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg",
});
UserMap.set("65392efd65bb52b90c8fac67", {
  name: "Ankita",
  img: "https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg",
});

