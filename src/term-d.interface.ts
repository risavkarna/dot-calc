import { ValueD } from "./value-d.interface";
import { DefinitionD } from './definition-d.interface';

export interface TermD<T> {
  val: (x: ValueD<T>) => ({ x: ValueD<T> });
  var: (x: ValueD<T>) => ({ x: ValueD<T> });

  app: (x: DefinitionD<T>, y: ValueD<T>) => ({
    x: DefinitionD<T>,
    y: ValueD<T>
  });

  sel: (x: ValueD<T>) => ({ x: ValueD<T> });
  loc: (x: DefinitionD<T>) => ({ x: DefinitionD<T> });
  def: (x: DefinitionD<T>) => ({ x: DefinitionD<T> });
}
