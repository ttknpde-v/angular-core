import {Component, OnInit} from '@angular/core';
import {ServiceDebug} from "../attribute-sub-first/service/service-debug";
import {brackets} from "../../objects/brackets";
@Component({
  selector: 'app-for-service-debug',
  templateUrl: './for-service-debug.component.html',
  styleUrls: ['./for-service-debug.component.css']
})
export class ForServiceDebugComponent implements OnInit {
  protected readonly brackets = brackets;
  private _title : string = 'ForServiceDebugComponent class was working';
  private serviceDebug : ServiceDebug
  constructor(serviceDebug: ServiceDebug) {
    // same @Autowrite in spring boot
    console.log('ForServiceDebugComponent constructor\'s is working')
    this.serviceDebug = serviceDebug;
  }

  ngOnInit(): void {
    this.serviceDebug.info('CDI did good')
  }

  get title(): string {
    return this._title;
  }
}
