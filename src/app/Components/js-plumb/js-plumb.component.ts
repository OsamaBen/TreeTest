import { Component, OnInit } from '@angular/core';
import {jsPlumb} from 'jsplumb';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-js-plumb',
  templateUrl: './js-plumb.component.html',
  styleUrls: ['./js-plumb.component.css']
})
export class JsPlumbComponent implements OnInit {
  buttonName = 'Connect' ;
  jsPlumbInstance;
  isConnected = false;
  jsPlumbSubject: Subject<any> ;
  constructor() {
    this.jsPlumbSubject = new Subject<any>();
  }

  ngOnInit() {
     this.jsPlumbInstance = jsPlumb.getInstance();
  }

  showConnectOnClick() {
    this.isConnected = ! this.isConnected;
    if (this.isConnected) {
      this.buttonName = 'Dissconnect';
      this.connectSourceToTarget();
    } else {
      this.buttonName = 'Connect';
      this.jsPlumbInstance.reset();
    }
  }

  connectSourceToTarget() {
    let labelName;
    labelName = 'connected';
    console.log('jsplumbConnect', this.jsPlumbInstance);
    this.jsPlumbInstance.connect({
      // connector: ['Flowchart', {stub: [212, 67], cornerRadius: 1, alwaysRespectStubs: true}],
      source: 'Source',
      target: 'Target1',
      anchor: ['Right', 'Left'],
      paintStyle: {stroke: '#456', strokeWidth: 4},
      overlays: [
        ['Label', {label: labelName, location: 0.1, cssClass: 'connectingConnectorLabel'}]
      ],
    });
  }

}
