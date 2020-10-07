import { DefinitionD } from './definition-d.interface';
import { ValueD } from './value-d.interface';

export const funcMeta = <T>(x: DefinitionD<T>) => ({x});

export interface TypeD<T> {
  top: () => ({ x: any });

  sel: (x: ValueD<T>) => ({ x: ValueD<T> });

  fn: typeof funcMeta;
  method: (x : typeof funcMeta) => ({x: T});

  type: (x: T) => T;

  rec: (x: DefinitionD<T>) => ([typeof funcMeta, typeof funcMeta]);
  int: (x: DefinitionD<T>) => ([typeof funcMeta | DefinitionD<T>]);

  uni: (x: DefinitionD<T>) => ([typeof funcMeta, ValueD<T>]);

  bottom: () => never;
}
