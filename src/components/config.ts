interface ComponentsClassNames {
  [key: string]: string;
  __disabled: string;
  __closed: string;
  clickArea: string;
  styledButton: string;
  swipeToggle: string;
  navigation: string;
  popup: string;
}

export const COMPONENTS_CLASS_NAMES: ComponentsClassNames = {
  __disabled: '__disabled',
  __closed: '__closed',
  clickArea: 'click-area',
  styledButton: 'styled-button',
  swipeToggle: 'swipe-toggle',
  navigation: 'navigation',
  popup: 'popup',
}

export const isDisabled = (disabled: boolean): string => {
  return disabled ? COMPONENTS_CLASS_NAMES.__disabled : ''
}

export const isClosed = (closed: boolean): string => {
  return closed ? COMPONENTS_CLASS_NAMES.__closed : ''
}