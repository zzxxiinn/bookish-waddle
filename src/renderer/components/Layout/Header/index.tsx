import style from "./index.module.scss";
import cn from "@/utils/classnames";

interface HeaderProps {
  title: string;
}

function HeaderClose() {
  return <span className="icon icon-cancel"></span>;
}

export default function Header({ title }: HeaderProps) {
  console.log(style);
  return (
    <header className={cn("toolbar", "toolbar-header", style.layoutHeader)}>
      <div className={cn(style.headerActions, style.prev)}></div>

      <h1 className="title">{title}</h1>

      <div className={cn(style.headerActions, style.post)}>
        <HeaderClose />
      </div>
    </header>
  );
}
