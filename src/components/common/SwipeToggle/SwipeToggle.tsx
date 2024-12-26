import classNames from "classnames";
import { COMPONENTS_CLASS_NAMES, isDisabled } from "../../config";

interface Props {
  id?: string;
  className?: string;
  name?: string;
  template?: 'basic';
  width?: number;
  height?: number;
  onClick?: (() => void) | ((v: boolean) => void);
  disabled?: boolean;
}

export function SwipeToggle ({ id, className, name, width = 300, height = 500, onClick, template = 'basic', disabled = false }: Props) {
  const style: React.CSSProperties = { width: width, height: height };
  const toggleFunc = () => {
    (async () => {
      return true;
    })().then(r => { if(onClick) onClick(r)})
  }
  return (
    <>
      <style>{css}</style>
      <div id={id} className={classNames(className, COMPONENTS_CLASS_NAMES.swipeToggle + isDisabled(disabled), template)} onClick={toggleFunc} style={style}>
        <input type="checkbox" name={name}/>
      </div>
    </>
  );
}

const css = `
  
`;