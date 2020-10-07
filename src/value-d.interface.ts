export interface ValueD<T> {
  v: (x: T) => ({ x: T });
  k: (x: T) => ({ x: T });
}
