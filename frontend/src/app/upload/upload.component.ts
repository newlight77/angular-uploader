import { Component } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';
import { UploadService } from './upload.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
  constructor(public dialog: MatDialog, public uploadService: UploadService) { }

  public openUploadDialog() {
    let dialogRef = this.dialog.open(DialogComponent, { width: '50%', height: '50%' });
  }
}
