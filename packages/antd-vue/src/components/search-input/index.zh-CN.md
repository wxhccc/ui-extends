### Attributes

| 参数          | 类型    | 说明                                        | 可选值 | 默认值 |
| :------------ | :------ | :------------------------------------------ | :----- | :----- |
| value/v-model | string  | 绑定值                                      | --     | --     |
| btn-props     | object  | 搜索按钮的绑定属性对象                      | --     | --     |
| loading       | boolean | 搜索按钮是否加载中， 也可以通过btnProps传入 | --     | false  |

### Events

| 参数  | 说明                         | 回调参数                |
| :---- | :--------------------------- | :---------------------- |
| input | 点击搜索按钮或按回车键时触发 | (value: string) => void |