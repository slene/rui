import { cloneDeep } from 'lodash';
import type { RapidEntityFormConfig } from '~/rapid-extension/rocks';
import type { PrRapidPage } from '~/types/pr-types';


const formConfig: Partial<RapidEntityFormConfig> = {
  items: [
    {
      type: 'auto',
      code: 'name',
    },
    {
      type: 'auto',
      code: 'url',
    },
    {
      type: 'auto',
      code: 'secret',
    },
    {
      type: 'auto',
      code: 'namespace',
    },
    {
      type: 'auto',
      code: 'modelSingularCode',
    },
    {
      type: 'auto',
      code: 'events',
    },
    {
      type: 'auto',
      code: 'enabled',
    },
  ],
}

const page: PrRapidPage = {
  code: 'sys_webhook_list',
  name: 'Webhook',
  title: 'Webhook管理',
  templateType: 'rapidPage',
  view: [
    {
      $type: "sonicEntityList",
      entityCode: "Webhook",
      viewMode: "table",
      listActions: [
        {
          $type: "sonicToolbarNewEntityButton",
          text: "新建",
          icon: "PlusOutlined",
          actionStyle: "primary",
        }
      ],
      extraActions: [
        {
          $type: "sonicToolbarFormItem",
          formItemType: "search",
          placeholder: "Search",
          actionEventName: "onSearch",
          filterMode: "contains",
          filterFields: ["name", "url", "modelSingularCode"],
        }
      ],
      columns: [
        {
          columnType: 'auto',
          code: 'name',
          width: '200px',
        },
        {
          columnType: 'auto',
          code: 'url',
        },
        {
          columnType: 'auto',
          code: 'secret',
          width: '200px',
        },
        {
          columnType: 'auto',
          code: 'namespace',
          width: '100px',
        },
        {
          columnType: 'auto',
          code: 'modelSingularCode',
          width: '200px',
        },
        {
          columnType: 'auto',
          code: 'events',
          width: '300px',
        },
        {
          columnType: 'auto',
          code: 'enabled',
          width: '100px',
        },
      ],
      actions: [
        {
          $type: "sonicRecordActionEditEntity",
          code: 'edit',
          actionType: "edit",
          actionText: '修改',
        },
        {
          $type: "sonicRecordActionDeleteEntity",
          code: 'delete',
          actionType: 'delete',
          actionText: '删除',
          dataSourceCode: "list",
          entityCode: "Webhook",
        },
      ],
      newForm: cloneDeep(formConfig),
      editForm: cloneDeep(formConfig),
      searchForm: {
        entityCode: 'Webhook',
        items: [
          {
            type: 'auto',
            code: 'name',
            filterMode: 'contains',
          },
          {
            type: 'auto',
            code: 'url',
            filterMode: 'contains',
          },
          {
            type: 'auto',
            code: 'modelSingularCode',
            filterMode: 'contains',
          },
          {
            type: 'auto',
            code: 'enabled',
            filterMode: 'eq',
            defaultValue: true,
          },
        ],
      },
    },
  ],
};

export default page;