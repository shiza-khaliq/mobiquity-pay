import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ChangePinComponent } from '../ui-common/change-pin/change-pin.component';
import { SuccessPinComponent } from '../ui-common/success-pin/success-pin.component';
import { InputBoxComponent } from '../ui-common/input-box/input-box.component';
import { DatePickerComponent } from '../ui-common/date-picker/date-picker.component';
import { ImageUploadComponent } from '../ui-common/image-upload/image-upload.component';
import { PINBoxComponent } from '../ui-common/pin-box/pin-box.component';
import { RadioButtonGroupComponent } from '../ui-common/radio-button-group/radio-button-group.component';
import { SelectBoxComponent } from '../ui-common/select-box/select-box.component';
import { OtpComponent } from './otp/otp.component';
import { ForgetPinComponent } from './forget-pin/forget-pin.component';
import { NgOtpInputModule } from 'ng-otp-input';

const exportcomponents = [
  ChangePinComponent,
  SuccessPinComponent,
  InputBoxComponent,
  DatePickerComponent,
  ImageUploadComponent,
  PINBoxComponent,
  RadioButtonGroupComponent,
  SelectBoxComponent,
  ForgetPinComponent,
  OtpComponent,
];
const ExportModules = [
  ChangePinComponent,
  SuccessPinComponent,
  InputBoxComponent,
  DatePickerComponent,
  ImageUploadComponent,
  PINBoxComponent,
  RadioButtonGroupComponent,
  SelectBoxComponent,
  ForgetPinComponent,
  OtpComponent,
  FormsModule,
  ReactiveFormsModule,
];
@NgModule({
  declarations: exportcomponents,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgOtpInputModule],
  exports: ExportModules,
})
export class UICommonModule {}
