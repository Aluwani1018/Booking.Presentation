import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule } from '@angular/forms';;
import { routing } from './account.routing';
import { UserService } from '../shared/services/user-service.service';
import { SharedModule } from '../shared/modules/shared.module';
import { EmailValidator} from '../directives/email.validator.directive';

@NgModule({
  imports: [
    CommonModule,FormsModule,routing, SharedModule
  ],
  declarations: [RegistrationFormComponent,EmailValidator, LoginFormComponent],
  providers:    [ UserService ]
})
export class AccountModule { }
