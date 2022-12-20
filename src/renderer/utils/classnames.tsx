type ClassName = string | { [key: string]: boolean };

export default function classnames(...names: ClassName[]): string {
  const _list: string[] = [];

  names.forEach((n) => {
    if (typeof n == "string") {
      _list.push(n);
    } else if (typeof n == "object") {
      Object.keys(n).forEach((k) => {
        if (n[k]) {
          _list.push(k);
        }
      });
    }
  });

  return _list.join(" ");
}
