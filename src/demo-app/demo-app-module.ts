import {NgModule, ApplicationRef} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
// import {DemoApp, Home} from './demo-app/demo-app';

@NgModule({
  imports: [
    BrowserModule
  ],
})
export class DemoAppModule {
  constructor(private _appRef: ApplicationRef) { }

  ngDoBootstrap() {
    // this._appRef.bootstrap(DemoApp);
  }
}
