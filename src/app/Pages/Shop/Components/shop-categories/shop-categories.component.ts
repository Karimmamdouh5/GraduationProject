import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'CPU',
    children: [{name: 'Intel Core i5'}, {name: 'Intel Core i7'}, {name: 'AMD A10'}],
  },
  {
    name: 'RAM',
    children: [{name: '8GB'}, {name: '16GB'}, {name: '32GB'}],
  },
  {
    name: 'Motherboards',
    children: [{name: 'ANY'}, {name: 'ANY'}, {name: 'ANY'}],
  },
  {
    name: 'Monitors',
    children: [{name: 'Asus'}, {name: 'Samsung'}, {name: 'DELL'}],
  },
  {
    name: 'Supplies',
    children: [{name: 'ANY'}, {name: 'ANY'}, {name: 'ANY'}],
  },
  {
    name: 'Coolers',
    children: [{name: 'ANY'}, {name: 'ANY'}, {name: 'ANY'}],
  },
  {
    name: 'Storage',
    children: [{name: '512GB'}, {name: '1TB'}, {name: '2TB'}],
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
@Component({
  selector: 'app-shop-categories',
  templateUrl: './shop-categories.component.html',
  styleUrls: ['./shop-categories.component.scss']
})
export class ShopCategoriesComponent
{

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;


}
