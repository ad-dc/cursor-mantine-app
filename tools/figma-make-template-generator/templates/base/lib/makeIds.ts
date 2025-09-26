export function makeId(parts: Array<string | number | undefined | null>) {
  return parts
    .filter((p) => p !== undefined && p !== null && String(p).trim() !== "")
    .map((p) => String(p).trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""))
    .join(":");
}

export function withMakeId<T extends { [key: string]: any }>(props: T, id?: string) {
  return id ? { ...props, ["data-make-id"]: id } : props;
}
