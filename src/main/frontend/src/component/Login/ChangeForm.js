let loginData = {
    id: 'abcd',
    passwd: '1234',
    message: 'SUCCESS',
  };
  
  export function changePwd(pwd, loginForm, setLoginForm) {
    setLoginForm({ ...loginForm, userPwd: pwd });
  }
  
  export function changeId(id, loginForm, setLoginForm) {
    setLoginForm({ ...loginForm, userId: id });
  }
  

  export function clickLoginButton(loginForm) {
    //서버로 값을 보내어 db의 내용과 값을 비교함.

    if (
      loginForm.userId == loginData.id &&
      loginForm.userPwd == loginData.passwd
    ) {
      return 'true';
    }
    return 'false';
  }