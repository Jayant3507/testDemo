import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private sanitizer: DomSanitizer){}

  title = 'jmsTest';
  fieldArray = [
    {
      'name': 'Name',
      "key" : "color",
      "values" : [
         {"value" : "Red"},
         {"value" : "Green"},
         {"value" : "Yellow"}
      ]
    }
  ];

  

  newAttribute: any = {};
  firstField = true;
  firstFieldName = 'First Item name';
  isEditItems: boolean;

  addFieldValue(index) {
    if (this.fieldArray.length <= 2) {
      this.fieldArray.push(this.newAttribute);
      this.newAttribute = {};
    } else {
    }
  }

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
  }

  onEditCloseItems() {
    this.isEditItems = !this.isEditItems;
  }

  logValue() {
    var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.fieldArray));
    console.log(this.fieldArray);
    var a = document.createElement('a');
    a.href = 'data:' + data;
    a.download = 'data.json';
    a.innerHTML = 'download JSON';
    var container = document.getElementById('dw');
    container.appendChild(a);
  }
  
    onItemChange(itemKey, itemValue) {
      console.log(itemKey + ' ' + itemValue);
    }

}
