import {Action as itemReducer} from '@ngrx/store';
import {ItemModel} from './../models/item.model';
import * as ItemActions from './../actions/update-items.actions';


export let dataFromLocalStorage = localStorage.getItem('items');
export let initialItemState: ItemModel[] = dataFromLocalStorage ? JSON.parse(dataFromLocalStorage) : [];

export function itemReducer(state = initialItemState, action: ItemActions.Actions): ItemModel[] {
    switch (action.type) {
        case ItemActions.ADD_ITEM:
            return [...state, action.payload];
        case ItemActions.REMOVE_ITEM:
            console.log(state);
            return [...state.slice(0, action.id), ...state.slice(action.id + 1)];
        default:
            return state;
    }
}
