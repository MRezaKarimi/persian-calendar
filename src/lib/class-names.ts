export function classNames(...classes: (string | Record<string, boolean>)[]) {
  return classes
    .flatMap((item) => {
      if (typeof item === "string") return item;
      return Object.entries(item)
        .filter(([_, value]) => value)
        .map(([key]) => key);
    })
    .filter(Boolean)
    .join(" ");
}
