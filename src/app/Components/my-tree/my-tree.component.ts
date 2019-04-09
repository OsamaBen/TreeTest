import {Component, OnInit, TemplateRef} from '@angular/core';
import {
  NzFormatEmitEvent,
} from 'ng-zorro-antd';

@Component({
  selector: 'app-my-tree',
  templateUrl: './my-tree.component.html',
  styleUrls: ['./my-tree.component.css']
})
export class MyTreeComponent implements OnInit {

  constructor() { }

  nodes = [
    {
      title: 'parent 1',
      key: '100',
      expanded: true,
      children: [
        {
          title: 'parent 1-0',
          key: '1001',
          expanded: true,
          children: [
            { title: 'leaf', key: '10010', isLeaf: true },
            { title: 'leaf', key: '10011', isLeaf: true },
            { title: 'leaf', key: '10012', isLeaf: true }
          ]
        },
        {
          title: 'parent 1-1',
          key: '1002',
          children: [{ title: 'leaf', key: '10020', isLeaf: true }]
        },
        {
          title: 'parent 1-2',
          key: '1003',
          children: [{ title: 'leaf', key: '10030', isLeaf: true }, { title: 'leaf', key: '10031', isLeaf: true }]
        }
      ]
    }
  ];

  nzEvent(event: NzFormatEmitEvent): void {
    console.log(event);
  }

  ngOnInit(): void {}

}
