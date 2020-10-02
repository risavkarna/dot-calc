export interface ValueD<T> {
  v: (x: T) => ({ x: T });
}
