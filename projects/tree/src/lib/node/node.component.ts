import { Component, Input, OnInit } from '@angular/core';
import { Globals } from '../globals';
import { Node } from './node'

@Component({
    selector: 'tree-node',
    templateUrl: './node.component.html',
    styleUrls: ['../styles/node.component.scss']
})

export class NodeComponent {
    @Input('node') node: Node

    constructor(private globals: Globals) {
    }

    toggle() {
        this.node.IsOpen = !this.node.IsOpen;
    }


}
