import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { BgColor } from './core/directives/bg-color';
import { Layout } from './core/pages/layout/layout';
import { HomePage } from './core/pages/home-page/home-page';
import { Header } from './core/components/header/header';
import { Footer } from './core/components/footer/footer';
import { AppTooltip } from './core/directives/app-tooltip';
import { AppModal } from './core/directives/app-modal';

@NgModule({
  declarations: [
    App,
    BgColor,
    Layout,
    HomePage,
    Header,
    Footer,
    AppTooltip,
    AppModal
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
