import classNames from "classnames";
import { COMPONENTS_CLASS_NAMES, isDisabled } from "../../config";

interface Props {
  id?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode | React.ReactNode[] | React.ReactElement | React.ReactElement[];
  width?: number;
  height?: number;
  onClick?: () => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export function StyledButton({ id, className, type, children, width = 10, height = 2, onClick, disabled = false, style }: Props) {
  style = style ?? {}
  style.width = width + 'rem';
  style.height = height + 'rem';
  return (
    <>
      <style>{css}</style>
      <button id={id} className={classNames(className, COMPONENTS_CLASS_NAMES.styledButton + isDisabled(disabled))} 
        type={type} style={style} onClick={disabled ? undefined : onClick}>
        {children ?? '버튼'}
      </button>
    </>
  );
}

const css = `
  .${COMPONENTS_CLASS_NAMES.styledButton}{
     
  }

  .${COMPONENTS_CLASS_NAMES.styledButton}${COMPONENTS_CLASS_NAMES.__disabled}{
    
  }
`;