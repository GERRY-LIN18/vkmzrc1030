import {Component, Inject ,ViewContainerRef } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { LocalService } from './local.service';
import { GlobalService } from './global.service';

export interface DialogData {
  animal: string;
  name: string;
}

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'dialog-overview-example',
  templateUrl: 'dialog-overview-example.html',
  providers:[LocalService]

})
export class DialogOverviewExample {
  animal: string;
  name: string;

  constructor(public dialog: MatDialog,
    public viewContainerRef:ViewContainerRef,
    public globalService:GlobalService,
    public localService:LocalService
    ) {}

  openDialog(): void {
    this.globalService.globalCount ++
    this.localService.localCount ++
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: {name: this.name, animal: this.animal},
      viewContainerRef:this.viewContainerRef
    });

  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    public globalService:GlobalService,
    public localService:LocalService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}


/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */