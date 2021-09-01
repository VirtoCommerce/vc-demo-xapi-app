export function customMap<T, P>(input: readonly (T | null)[] | null | undefined, callback: (value: T) => P): P[] {
  return input?.filter(x => x != null)
    .map(x => x as T)
    .map<P>(x => {
      return callback(x);
    }) ?? [];
}
