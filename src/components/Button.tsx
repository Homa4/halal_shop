import { ReactElement } from "react";

interface PropsInfo {
  onClick: VoidFunction;
  children: string;
  className: string;
}

function Button(props: PropsInfo): ReactElement {
  const { onClick, children, className } = props;
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export default Button;
