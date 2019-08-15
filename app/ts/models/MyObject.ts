import { Printable } from './Printable';
import { Equal } from './Equal';

export interface MyObject<T> extends Printable, Equal<T> {

}