export default function useClassMerge(classes: Array<string | undefined>): string {
  if (classes === undefined || classes === null || !Array.isArray(classes) || classes.length === 0) {
    return "";
  }

  return classes
    .filter((item) => item !== undefined && item !== null && item.length !== 0)
    .join(" ")
    .trim();
}
