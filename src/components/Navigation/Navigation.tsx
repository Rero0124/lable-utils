import classNames from "classnames";
import { COMPONENTS_CLASS_NAMES } from "../config";
import { Link } from "react-router-dom";

interface Props {
  id?: string;
  className?: string;
  /**
   * if react using react-router-dom.Link tag
   * if next using a tag
   */
  type?: 'react' | 'next';
  pos?: 'top' | 'bottom' | 'left' | 'right';
  height?: number;
  onClick?: () => void;
  style?: React.CSSProperties;
  /**
   * { 
   *  메뉴명1: 'url1',
   *  메뉴명2: 'url2'
   * }
   */
  data: {
    [key: string]: string
  }
}

export function Navigation({ id, className, type = 'react', pos = 'top', height = 100, onClick, style, data }: Props) {
  const getAnchorElement = type === 'react' ? (url: string, name: string) => {
    return <Link to={url}>{name}</Link>
  } : (url: string, name: string) => {
    return <a href={url}>{name}</a>
  }
  return (
    <>
      <style>{css}</style>
      <div id={id} className={classNames(className, COMPONENTS_CLASS_NAMES.navigation, pos)} onClick={onClick} style={style}>
        <ul>
          {
            Object.keys(data).map((k, i) => {
              return <li key={COMPONENTS_CLASS_NAMES.navigation + '_ul_li_' + i}>{getAnchorElement(data[k] ?? '', k ?? data[k] ?? '')}</li>
            })
          }
        </ul>
      </div>
    </>
  )
}

let height = 100;

const css = `
  .${COMPONENTS_CLASS_NAMES.navigation} {
    
  }

  .${COMPONENTS_CLASS_NAMES.navigation} > ul {
    list-style: none;
  }

  .${COMPONENTS_CLASS_NAMES.navigation}.top, .${COMPONENTS_CLASS_NAMES.navigation}.bottom {
    width: 100%;
  }

  .${COMPONENTS_CLASS_NAMES.navigation}.top {
    
  }

  .${COMPONENTS_CLASS_NAMES.navigation}.bottom {
    
  }

  .${COMPONENTS_CLASS_NAMES.navigation}.left, .${COMPONENTS_CLASS_NAMES.navigation}.right {
    height: 100%;
  }

  .${COMPONENTS_CLASS_NAMES.navigation}.left {
    
  }

  .${COMPONENTS_CLASS_NAMES.navigation}.right {
    
  }
`;