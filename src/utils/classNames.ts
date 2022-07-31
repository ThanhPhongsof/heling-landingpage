export default function classNames(...args: Array<string>) {
  return args
    .reduce((acc: any, value: any) => {
      if (typeof value === "string") {
        return acc.concat(value.split(" "));
      }
      return acc.concat(Object.values(value));
    }, [])
    .join(" ");
}
