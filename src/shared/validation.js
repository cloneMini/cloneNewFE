export const idVal = (nickname) => {
  const _reg = /[A-Za-z0-9]{4,20}$/;
  console.log(_reg.test(nickname));
  return _reg.test(nickname);
};

export const idVal1 = (nickname) => {
  
  const _reg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  return _reg.test(nickname);
};
export const pwdVal = (password) => {
  const _reg = /[A-Za-z0-9]{4,30}$/;

  return _reg.test(password);
};

export const searchKeywordValidation = (keyword) => {
  const _reg = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣\s|0-9a-zA-z]{1,30}$/;

  return _reg.test(keyword);
};
