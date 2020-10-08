import {Injectable} from '@angular/core';
import * as ItemsActions from './../actions/update-items.actions';
import {Store} from '@ngrx/store';
import {AppState} from './../app.state';
import {ItemModel} from './../models/item.model';
import { Observable } from 'rxjs';

@Injectable()
export class ItemService {
    public allItems: Observable<ItemModel[]> = new Observable<[]>();

    constructor(private store: Store<AppState>) {
        this.allItems = this.store.select('items');
    }

    public add(data: ItemModel): void {
        this.store.dispatch(new ItemsActions.AddItem(data));
        this.allItems = this.store.select('items');
    }

    public remove(id: number): void {
        this.store.dispatch(new ItemsActions.RemoveItem(id));
        this.allItems = this.store.select('items');
    }
}
