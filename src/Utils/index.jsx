import AndroidSafeArea from './AndroidSafeArea'

const generatePasscode = (length) => {
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_~";
  let passcode = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    passcode += charset.charAt(randomIndex);
  }

  return passcode;
}

const validateEmail = (email) => /\S+@\S+\.\S+/.test(email)

export { generatePasscode, validateEmail, AndroidSafeArea }