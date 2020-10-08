import {Injectable as ItemActions} from '@angular/core';
import {Action} from '@ngrx/store';
import {ItemModel} from './../models/item.model';

export const ADD_ITEM = '[ItemModel] Add';
export const REMOVE_ITEM = '[ItemModel] Remove';

export class AddItem implements Action {
  readonly type = ADD_ITEM;
  constructor(public payload: ItemModel) { }
}

export class RemoveItem implements Action {
  readonly type = REMOVE_ITEM;
  constructor(public id: number) { }
}

export type Actions = AddItem | RemoveItem;
