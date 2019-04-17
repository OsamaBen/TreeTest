import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as go from 'gojs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-go-js',
  templateUrl: './go-js.component.html',
  styleUrls: ['./go-js.component.css']
})
export class GoJsComponent implements OnInit {

  @ViewChild('myDiagramDiv')
  element: ElementRef;
  myDiagram: go.Diagram ;
  cars = [];
   $ = go.GraphObject.make;
  constructor( ) {
  }

  ngOnInit() {
    this.cars = [
      {key: 'A', name: 'Audi', source: 'assets/cars/audi.png'},
      {key: 'B', name: 'Mercedes', source: 'assets/cars/Mercedes-Benz.png'},
      {key: 'C', name: 'Toyota', source: 'assets/cars/Toyota.png'},
    ];
    this.myDiagram  = this.$(go.Diagram, 'myDiagramDiv',
      {
        initialContentAlignment: go.Spot.Center,  // center the content
        'undoManager.isEnabled': true  // enable undo & redo
      });

    this.myDiagram.nodeTemplate =
      this.$(go.Node, 'Horizontal',
        {background: '#44CCFF'},
        //  Picture
        this.$(go.Picture,
          {margin: 10, width: 50, height: 50, background: 'white'},
          new go.Binding('source')),
        // TextBlock
        this.$(go.TextBlock,
          'Default Text',
          {margin: 12, stroke: 'white', font: 'bold 16px sans-serif'},
          new go.Binding('text', 'name'))
      );

    const myModel = this.$(go.GraphLinksModel);

    myModel.nodeDataArray = this.cars ;
    myModel.linkDataArray =
      [
        { from: 'A', to: 'B' },
        { from: 'B', to: 'C' }
      ];
    this.myDiagram.model = myModel;
  }

  addNode(nom , pic ) {
    this.cars.push({name: nom, source: pic});
    const newModel = this.$(go.Model);
    newModel.nodeDataArray = this.cars ;
    this.myDiagram.model = newModel;
  }


}
