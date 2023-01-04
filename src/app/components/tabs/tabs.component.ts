import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular'

@Component({
   selector: 'app-tabs',
   templateUrl: './tabs.component.html',
      styleUrls: ['./tabs.component.scss'],
    })
export class TabsPage implements OnInit {

  // @ViewChild('tabs', {static: true}) tabs:IonTabs | undefined

  constructor() { }

  ngOnInit() {
    //  this.tabs!.select('habits')
  }
}