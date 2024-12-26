import classNames from "classnames";
import { COMPONENTS_CLASS_NAMES, isDisabled } from "../../config";

interface Props {
  id?: string;
  className?: string;
  children?: React.ReactNode | React.ReactNode[] | React.ReactElement | React.ReactElement[];
  width?: number;
  height?: number;
  onClick?: () => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export function ClickArea ({ id, className = '', children, width = 300, height = 500, onClick, disabled = true, style }: Props) {
  style = style ?? {};
  style.width = width;
  style.height = height;
  return (
    <>
      <style>
        
      </style>
      <a id={id} role="button" className={classNames(className, COMPONENTS_CLASS_NAMES.clickArea + isDisabled(disabled))}
        onClick={disabled ? undefined: onClick} style={style}>
        {children}
      </a>
    </>
  );
}