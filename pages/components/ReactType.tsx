import React from 'react';

interface Props {
  isVisible: boolean;
  children?: any;
}

export const SidebarComponent: React.FC<Props> = props => {
  //---------------css----------------------
  const divStyle = (): React.CSSProperties => ({
    width: props.isVisible ? '23rem' : '0rem',
  });

  //--------------useState------------------
  /**
  const [count, setCount] = React.useState<number | null>(null);
  */

  //--------------useMemo-------------------
  /**
  const calculatedValue = useMemo<string>(() => a + "hello", [a]);

   */

  //---------------useRef--------------------
  //const nameInput = React.useRef<HTMLInputElement | null>(null);

  //------------useCallback------------------
  /**
   const memoizedCallback = useCallback(
    //这里如果需要参数需要定义下
    (a: number) => {
      add(a, b);
    },
    [b]
  );
   */

  //------------useContext---------------------
  /**
  //useContext会自动推端
  const ColorContext = React.createContext({ color: "green" });

  const Welcome = () => {
    const { color } = useContext(ColorContext);
    return <div style={{ color }}>hello world</div>;
  };

  //当然我们也可以自己加上
  interface IColor {
    color: string;
  }

  const ColorContext = React.createContext<IColor>({ color: "green" });
  */

  /** ----------- Evnet ----------------------------*/
  /**
  剪切板事件对象：ClipboardEvent<T = Element>
  拖拽事件对象：DragEvent<T = Element>
  焦点事件对象：FocusEvent<T = Element>
  表单事件对象：FormEvent<T = Element>
  Change事件对象：ChangeEvent<T = Element>
  键盘事件对象：KeyboardEvent<T = Element>
  鼠标事件对象：MouseEvent<T = Element, E = NativeMouseEvent>
  触摸事件对象：TouchEvent<T = Element>
  滚轮事件对象：WheelEvent<T = Element>
  动画事件对象：AnimationEvent<T = Element>
  过渡事件对象：TransitionEvent<T = Element>
   */

  /**
  type State = {
    text: string;
  };
  const App: React.FC = () => {
    const [text, setText] = useState<string>("")

    const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
      setText(e.currentTarget.value);
    };

    return (
      <div>
        <input type="text" value={text} onChange={onChange} />
      </div>
    );
  }
  */
  /** ----------- Element ----------------------------*/
  /*
  a: HTMLAnchorElement;
  body: HTMLBodyElement;
  br: HTMLBRElement;
  button: HTMLButtonElement;
  div: HTMLDivElement;
  h1: HTMLHeadingElement;
  h2: HTMLHeadingElement;
  h3: HTMLHeadingElement;
  html: HTMLHtmlElement;
  img: HTMLImageElement;
  input: HTMLInputElement;
  ul: HTMLUListElement;
  li: HTMLLIElement;
  link: HTMLLinkElement;
  p: HTMLParagraphElement;
  span: HTMLSpanElement;
  style: HTMLStyleElement;
  table: HTMLTableElement;
  tbody: HTMLTableSectionElement;
  video: HTMLVideoElement;
  audio: HTMLAudioElement;
  meta: HTMLMetaElement;
  form: HTMLFormElement;


  这些标签都继承自HTMLElement类型，如果使用时对类型类型要求不高，可以直接写HTMLELement

    <Button
      type="text"
      onClick={(e: React.MouseEvent<HTMLElement>) => {
      handleOperate();
      e.stopPropagation();
    }}
    >
      <img
        src={cancelChangeIcon}
        alt=""
      />
       取消修改
    </Button>

  */

  //最后加一个TS的返回类型，这个和React本身没有关系
  /**
  function foo(type): boolean {
    return type === 0
  }

  type FooType = ReturnType<typeof foo>

  //PS，
  typeof用于获取值的类型，
  keyof 操作符用于获取一个类型的所有键（属性名）组成的联合类型
  */

  return (
    <div id="mySidenav" style={divStyle()}>
      {props?.children}
    </div>
  );
};
