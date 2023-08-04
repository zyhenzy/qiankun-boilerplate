import request from "@/utils/request";

// @ts-ignore
export function login(data): Promise {
  // return request({
  //   url: '/vue-element-admin/user/login',
  //   method: 'post',
  //   data
  // })
  console.log(data);
  // @ts-ignore
  return Promise.resolve({
    message: "token001",
  });
}

export function logout() {
  return request({
    url: "/vue-element-admin/user/logout",
    method: "post",
  });
}

export function getSort() {
  return request({
    url: "/sort",
    method: "get",
  });
}
