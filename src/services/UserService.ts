//en caso de que exista getusertoken, se lo trae, y en caso contrario devuelve un string vacio
export const getUserToken = (): any => {
  const token = localStorage.getItem("token") as any;

  return token;
};

export const setUserToken = (token: string) => {
  localStorage.setItem("token", token);
};
