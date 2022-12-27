import style from "./index.module.scss";
import classnames from "@renderer/utils/classnames";

interface HeaderProps {
  title: string;
}

function HeaderClose() {
  return (
    <button className={style.headerActionButton}>
      <span className={classnames("icon", "icon-cancel")}></span>
    </button>
  );
}

function HeaderMinimize() {
  return (
    <button className={style.headerActionButton}>
      <span className={classnames("icon", "icon-cancel")}></span>
    </button>
  );
}

export default function Header({ title }: HeaderProps) {
  console.log(style);
  return (
    <header
      className={classnames("toolbar", "toolbar-header", style.layoutHeader)}
    >
      <div className={classnames(style.headerActions, style.prev)}></div>

      <h1 className="title">{title}</h1>

      <div className={classnames(style.headerActions, style.post)}>
        <HeaderClose />
        <HeaderMinimize />
      </div>
    </header>
  );
}
