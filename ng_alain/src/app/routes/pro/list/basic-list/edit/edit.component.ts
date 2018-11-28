import {Component} from '@angular/core';
import {NzMessageService, NzModalRef} from 'ng-zorro-antd';

@Component({
  selector: 'app-basic-list-edit',
  templateUrl: './edit.component.html',
})
export class ProBasicListEditComponent {
  record: any = {};
  schema: { properties: { title: { type: string; title: string; maxLength: number }; createdAt: { type: string; title: string; format: string }; owner: { type: string; title: string; enum: ({ value: string; label: string })[] }; subDescription: { type: string; title: string; ui: { widget: string; autosize: { minRows: number; maxRows: number } } } }; required: string[]; ui: { spanLabelFixed: number; grid: { span: number } } } = {
    properties: {
      title: {type: 'string', title: '任务名称', maxLength: 50},
      createdAt: {type: 'string', title: '开始时间', format: 'date'},
      owner: {
        type: 'string',
        title: '任务负责人',
        enum: [
          {value: 'asdf', label: 'asdf'},
          {value: '卡色', label: '卡色'},
          {value: 'cipchk', label: 'cipchk'},
        ],
      },
      subDescription: {
        type: 'string',
        title: '产品描述',
        ui: {
          widget: 'textarea',
          autosize: {minRows: 2, maxRows: 6},
        },
      },
    },
    required: ['title', 'createdAt', 'owner'],
    ui: {
      spanLabelFixed: 150,
      grid: {span: 24},
    },
  };

  constructor(private modal: NzModalRef, private msgSrv: NzMessageService) {
  }

  save(value: any) {
    console.log("save value " + JSON.stringify(value));
    this.msgSrv.success('保存成功');
    this.modal.close(value);
  }

  close() {
    this.modal.destroy();
  }
}
