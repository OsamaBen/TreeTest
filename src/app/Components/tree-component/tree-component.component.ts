import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ITreeOptions, ITreeState, KEYS, TREE_ACTIONS, TreeComponent} from 'angular-tree-component';
import {BehaviorSubject, of, Subject} from 'rxjs';

@Component({
  selector: 'app-tree-component',
  templateUrl: './tree-component.component.html',
  styleUrls: ['./tree-component.component.css']
})
export class TreeComponentComponent implements OnInit , OnDestroy {

  public statee: ITreeState;
  @ViewChild('tree') treeComponent: TreeComponent;
  stateStorage: Subject<any> ;
  nodes = [
    {
      id: 1,
      name: 'Transactions',
      image: '',
      children: [
        {
          id: 2,
          name: 'Templates',
          image: 'assets/icons/template.png',
          children: [
            { id: 3, name: 'tmp1', image: 'assets/icons/standard.png' },
            { id: 4, name: 'tmp2', image: 'assets/icons/standard.png' }
          ]
        },
        {
          id: 5,
          name: 'Achraf Ben Abdallah',
          image: 'assets/icons/user.png',
          children: [
            { id: 6, name: 'Francais des jeux', image: 'assets/icons/school.png' },
            { id: 7, name: 'LPT ADC Cockpit 48', image: 'assets/icons/file.png' }
          ]
        },
        {
          id: 8,
          name: 'Fahmi Ben Falah',
          image: 'assets/icons/user.png',
          children: [
            { id: 9, name: 'Francais des jeux', image: 'assets/icons/school.png' },
            { id: 10, name: 'LPT ADC Cockpit 48', image: 'assets/icons/file.png' }
          ]
        },
        {
          id: 11,
          name: 'Sara Djegjig',
          image: 'assets/icons/user.png',
          children: [
            { id: 12, name: 'Francais des jeux', image: 'assets/icons/school.png' },
            { id: 13, name: 'LPT ADC Cockpit 48', image: 'assets/icons/file.png' }
          ]
        },
        {
          id: 14,
          name: 'James Donald',
          image: 'assets/icons/user.png',
          children: [
            { id: 15, name: 'Francais des jeux', image: 'assets/icons/school.png' },
            { id: 16, name: 'LPT ADC Cockpit 48', image: 'assets/icons/file.png' }
          ]
        }
      ]
    }

  ];
  options: ITreeOptions = {
    isExpandedField: 'expanded',
    actionMapping: {
      mouse: {
        dblClick: (tree, node, $event) => {
          if (node.hasChildren) {
            TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
          }
        }
      },
      keys: {
        [KEYS.ENTER]: (tree, node, $event) => {
          node.expandAll();
        },
        [KEYS.SPACE]: (tree, node, $event) => {
          node.collapseAll();
        }
      }
    },
    allowDrag: (node) => {
      return true;
    },
    allowDrop: (node) => {
      return true;
    },
    allowDragoverStyling: true,
    levelPadding: 10,
    useVirtualScroll: false,
    animateExpand: true,
    scrollOnActivate: false,
    animateSpeed: 30,
    animateAcceleration: 1.2,
    // scrollContainer: document.documentElement // HTML
  };

  constructor() { this.stateStorage = new Subject<any>(); }
  ngOnInit() {
    if (localStorage.treeState) {
      this.treeComponent.treeModel.setState(JSON.parse(localStorage.treeState));
    }
    this.stateStorage.subscribe(state => localStorage.treeState = JSON.stringify(state) );
  }

  show(tr) {
    console.log('tree ', JSON.parse(localStorage.treeState));
  }

  saveState() {
    this.stateStorage.next(this.treeComponent.treeModel.getState());
  }

  ngOnDestroy() {
    localStorage.treeState = JSON.stringify(this.treeComponent.treeModel.getState());
  }

  filterTree(sv) {
    this.treeComponent.treeModel.filterNodes(sv);
  }
}
