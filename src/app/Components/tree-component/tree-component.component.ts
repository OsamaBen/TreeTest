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
      name: 'Template',
      image: '',
      children: [
        {
          id: 2,
          name: 'Transactions',
          image: 'assets/icons/transaction.png',
          children: [
            {id: 3, name: 'tmp1', image: 'assets/icons/standard.png'},
            {id: 4, name: 'tmp2', image: 'assets/icons/standard.png'}
          ]
        },
        {
          id: 5,
          name: 'Structures',
          image: 'assets/icons/structure.png',
          children: [
            {id: 6, name: 'Struce1', image: 'assets/icons/school.png'},
            {id: 7, name: 'Struct2', image: 'assets/icons/file.png'}
          ]
        },
      ]
    },
    {
      id: 17,
      name: 'Categorized  Transactions',
      image: '',
      children: [
        {
          id: 18,
          name: 'Country',
          image: 'assets/icons/flag.png',
          children: [
            {id: 19,
             name: 'N -Cedant',
             image: 'assets/icons/standard.png',
             children: [
                {id: 20,
                  name: 'N- Program',
                  image: 'assets/icons/standard.png',
                  children: [
                    {id: 21,
                      name: 'N- UW Year',
                      image: 'assets/icons/standard.png',
                      children: [
                        {id: 22,
                          name: 'N- Transactions',
                          image: 'assets/icons/standard.png'
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
      ]
    },
    {
      id: 24,
      name: 'Draft',
      image: '',
      children: [
        {
          id: 25,
          name: 'User 1',
          image: 'assets/icons/user.png',
          children: [
            {id: 26, name: 'Transactions', image: 'assets/icons/transaction.png'},
            {id: 27, name: 'Structures', image: 'assets/icons/structure.png'}
          ]
        },
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
