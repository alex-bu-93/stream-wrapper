import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { registerLocaleData }   from '@angular/common';
import en                       from '@angular/common/locales/en';
import { HttpClientModule }     from '@angular/common/http';
import { NzTableModule }        from 'ng-zorro-antd/table';
import { en_US, NZ_I18N }       from 'ng-zorro-antd/i18n';
import { NzDividerModule }      from 'ng-zorro-antd/divider';
import { NzButtonModule }       from 'ng-zorro-antd/button';
import { StreamWrapperModule } from './stream-wrapper';
import { AppComponent }         from './app.component';

registerLocaleData(en);

const ANT_DESIGN_MODULES = [NzTableModule, NzDividerModule, NzButtonModule];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ANT_DESIGN_MODULES,

    StreamWrapperModule // Add wrapper's module here
  ],
  declarations: [AppComponent],
  providers: [{provide: NZ_I18N, useValue: en_US}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
