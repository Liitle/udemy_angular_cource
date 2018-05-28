import {Component} from '@angular/core';

@Component({
  selector: 'app-displayparagraph',
  templateUrl: './displayparagraph.component.html',
  styleUrls: ['./displayparagraph.component.css']
})
export class DisplayparagraphComponent {
  isHidden = true;
  logList = [];

  logToggle() {
    this.logList.push(Date.now());
  }
}
