import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { NzButtonModule }         from 'ng-zorro-antd/button';
import { NzResultModule }         from 'ng-zorro-antd/result';
import { NzSpinModule }           from 'ng-zorro-antd/spin';
import { WithLoadingPipe }        from './with-loading.pipe';
import { StreamWrapperComponent } from './stream-wrapper.component';

const ANT_DESIGN_MODULES = [NzButtonModule, NzResultModule, NzSpinModule];

@NgModule({
  declarations: [StreamWrapperComponent, WithLoadingPipe],
  imports: [CommonModule, ANT_DESIGN_MODULES],
  exports: [StreamWrapperComponent]
})
export class StreamWrapperModule {
}
