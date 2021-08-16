export function nullable<T, U>(value: T | null | undefined, action: (arg: T) => U): U | null {
  return value !== undefined && value !== null ? action(value) : null;
}
