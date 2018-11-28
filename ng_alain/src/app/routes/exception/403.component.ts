import {Component, Inject} from '@angular/core';
import {NzModalService} from 'ng-zorro-antd';
import {DA_SERVICE_TOKEN, ITokenService} from "@delon/auth";

@Component({
  selector: 'exception-403',
  template: `
    <exception type="403" style="min-height: 500px; height: 80%;"></exception>`,
})
export class Exception403Component {
  constructor(modalSrv: NzModalService
    , @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,) {
    modalSrv.closeAll();
    this.tokenService.clear();
    console.log('clear token done')
  }
}
