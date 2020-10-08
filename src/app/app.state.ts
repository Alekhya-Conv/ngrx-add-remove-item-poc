import { ItemModel } from './models/item.model';

export interface AppState {
  readonly items: ItemModel[];
}
