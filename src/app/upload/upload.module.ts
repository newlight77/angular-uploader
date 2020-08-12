import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload.component';
import { DialogComponent } from './dialog/dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UploadService } from './upload.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { DemoMaterialModule } from '../material.module';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: UploadComponent, pathMatch: 'full' },
    ],
  }
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    UploadComponent,
    DialogComponent
  ],
  exports: [UploadComponent, RouterModule],
  entryComponents: [DialogComponent], // Add the DialogComponent as entry component
  providers: [UploadService]
})
export class UploadModule { }
