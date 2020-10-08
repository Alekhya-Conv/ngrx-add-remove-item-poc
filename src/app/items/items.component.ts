import { HostListener } from '@angular/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemModel } from '../models/item.model';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  allItems = [];
  itemValue: string;
  @HostListener('window:beforeunload', ['$event'])
  onBeforeUnloadHander(event): void {
    this.itemService.allItems.subscribe(items => {
      if (items) {
        localStorage.setItem('items', JSON.stringify(items));
      }
    });
  }

  constructor(public itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.allItems.subscribe(value => {
      this.allItems = value;
    });
  }

  onItemAddition(event): void {
    if (event.keyCode === 13) {
      this.addItems();
    }
  }

  addItems(): void {
    this.itemService.add({id: this.allItems.length + 1, name: this.itemValue});
    this.itemValue = null;
  }

  removeItems(id): void {
    this.itemService.remove(id);
  }

}
