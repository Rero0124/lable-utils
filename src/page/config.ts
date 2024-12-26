interface PagesClassNames {
  [key: string]: string;
  __disabled: string;
  loginPage: string;
  registerPage: string;
}

export const PAGES_CLASS_NAMES: PagesClassNames = {
  __disabled: '__disabled',
  loginPage: 'login-page',
  registerPage: 'register-page',
}

export const isDisabled = (disabled: boolean): string => {
  return disabled ? PAGES_CLASS_NAMES.__disabled : ''
}