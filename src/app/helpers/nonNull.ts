export function nonNull<T>(value: T): value is NonNullable<T> {
  return value != null;
}
