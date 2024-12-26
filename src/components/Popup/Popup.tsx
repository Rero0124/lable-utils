import classNames from "classnames";
import { COMPONENTS_CLASS_NAMES, isClosed } from "../config";
import { useEffect, useState } from "react";

interface Props {
  id?: string;
  className?: string;
  children?: React.ReactNode | React.ReactNode[] | React.ReactElement | React.ReactElement[];
  template?: 'basic';
  width?: number;
  height?: number;
  onOpen?: () => void;
  onClose?: () => void;
  closed?: boolean;
  style?: React.CSSProperties;
}

export function Popup({ id, className, children, width = 30, height = 20, onOpen, onClose, template = 'basic', closed = false, style }: Props) {
  const [popupClosed, setPopupClosed] = useState<boolean>(closed);
  style = style ?? {}
  style.width = width + 'rem';
  style.height = height + 'rem';

  useEffect(() => {
    setPopupClosed(closed);
  }, [closed])

  useEffect(() => {
    if(popupClosed && onClose) onClose();
    if(!popupClosed && onOpen) onOpen();
  }, [popupClosed])

  return (
    <>
      <style>{css}</style>
      <div id={id} className={classNames(className, COMPONENTS_CLASS_NAMES.popup + isClosed(popupClosed))} style={style}>
        <div><button onClick={() => {setPopupClosed(true);}}>닫기</button></div>
        <div>
          {children}
        </div>
      </div>
    </>
  );
}

const css = `
  .${COMPONENTS_CLASS_NAMES.popup} {
    display: block;
  }

  .${COMPONENTS_CLASS_NAMES.popup}${COMPONENTS_CLASS_NAMES.__closed} {
    display: none;
  }
`;