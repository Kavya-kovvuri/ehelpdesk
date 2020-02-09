import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {SharedCommonModule, SharedLibsModule, StorageManagerService} from './';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {DatePipe} from '@angular/common';
import {NoActionDirective} from 'app/shared/directive/no-action.directive';
import {LoaderComponent} from 'app/shared/loader/loader.component';
import {OutsideClickDirective} from 'app/shared/directive/outside-click.directive';

@NgModule({
  imports: [SharedLibsModule, SharedCommonModule, FontAwesomeModule],
  declarations: [NoActionDirective, LoaderComponent, OutsideClickDirective],
  providers: [DatePipe, StorageManagerService],
  entryComponents: [],
  exports: [SharedCommonModule, DatePipe, FontAwesomeModule, NoActionDirective, LoaderComponent, OutsideClickDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {
}
