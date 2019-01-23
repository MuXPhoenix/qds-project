## 采矿智慧生产指挥单元 ansteel-mining
blending-index 采矿综合质量配矿优化决策模块-首页
```
表单名称：采矿综合质量配矿优化决策模块
表单内容：计划类型--时间段选择器  入选指标--目标品味  含泥量  粒度
结尾：生成配矿策略  取消

表格名称：配矿策略
表格内容：时间  计划  采区  铲车  所需车辆  是否穿孔  是否爆破  操作  （选择按钮）
```
blending-dailyplan 采矿综合质量配矿优化决策模块-日计划
```
筛选：时间段选择器
表格名称：配矿策略
表格内容：时间  计划  采区  铲车  所需车辆  是否穿孔  是否爆破  操作  （选择按钮）
```
gis-index 采矿综合信息管理模块（GIS）-首页
```
名称：采矿综合信息管理模块（GIS）
1、生产计划----生产计划导入…
2、三维实体建模----布孔设计导入...  钻孔设计导入…  爆破设计导入…  区块设计导入…

表格名称:生产计划
表格内容：日计划  日期  采剥总量  资产总量  矿石  岩石  矿石破碎  岩石破碎  北破  北破输出  铁运量  穿孔米道  潜孔钻米道  爆破量  调选供矿  辅料量  分流量
岩石：总量  资产  外委：小计  东邦南  东邦北  西邦
调选供矿：小计  采场供矿  鞍千供调选
计划：日计划 周计划  月计划  季计划 年计划

表格名称:布孔计划
表格内容：日期  布孔采区  钻孔编号及位置  倾斜角度  钻孔深度  所需钻机数

表格名称: 爆破计划
表格内容：日期  时间  爆破采区  爆破位置  填装炸药量  爆破人员

表格名称:区块设计
表格内容：区块编号  所属采区  平均品位  总方量  剥采比

```
公共
```
报警页面：
表格名称：报警
报警内容:序号  编号  设备种类  警报项目  报警内容  报警时间  报警地点

最新任务页面：
表格名称：最新任务
表格内容：序号  编号  设备种类  最新任务  更新时间

交接班页面：
表格名称：交接班
表格内容：设备编号  设备名称  上一班人员  当班人员  申请状态  时间  交接地点

加油调度页面：
表格名称：加油调度
表格内容：序号  设备编码  设备种类  当前油量  申请时间  申请状态  加油点  加油时间段

状态页面：
表格名称：--状态
表格内容：设备编号  参数显示  运行状态  故障原因  通话  当前位置  运行轨迹查询
故障原因:线路故障  机械故障  钻头故障  履带故障

设置页面：
各参数选项：电流  电压  转速  油量
报警值：10A  30V  5000  20L
```
drilling-index 牙轮生产智能指挥模块-首页
```
图
```
drilling-status 牙轮生产智能指挥模块-状态
```
表格名称：牙轮钻机状态
表格内容：设备编号  参数显示  运行状态  故障原因  通话  当前位置  累计钻孔深度  运行轨迹查询
参数显示：电流  电压  转速  油量

```
drilling-alarm 牙轮生产智能指挥模块-报警
```
同公共
```
drilling-task 牙轮生产智能指挥模块-最新任务
```
同公共
```
drilling-dutyshift 牙轮生产智能指挥模块-交接班
```
同公共
```
drilling-fuelling 牙轮生产智能指挥模块-加油调度
```
同公共
```
drilling-setting 牙轮生产智能指挥模块-设置
```
同公共
```
scraper-index 铲装品位智能跟踪模块-首页
```
页面
```
scraper-status 铲装品位智能跟踪模块-状态
```
表格名称：电铲状态
表格内容：设备编号  参数显示  运行状态  故障原因  通话  当前位置  累计铲数  运行轨迹查询
```
scraper-alarm 铲装品位智能跟踪模块-报警
```
同公共
```
scraper-task 铲装品位智能跟踪模块-最新任务
```
同公共
```
scraper-dutyshift 铲装品位智能跟踪模块-交接班
```
同公共
```
scraper-fuelling 铲装品位智能跟踪模块-加油调度
```
同公共
```
scraper-setting 铲装品位智能跟踪模块-设置
```
同公共
```

tramcar-index 电动轮-首页
```
同公共
```
tramcar-status 电动轮-状态
```
同公共
```
tramcar-alarm 电动轮-报警
```
同公共
```
tramcar-task 电动轮-最新任务
```
同公共
```
tramcar-dutyshift 电动轮-交接班
```
同公共
```
tramcar-fuelling 电动轮-加油调度
```
同公共
```
tramcar-setting 电动轮-设置
```
同公共
```
tanktruck-index 油槽车-首页 ?
```

```
tanktruck-status 油槽车-状态
```
同公共
```
tanktruck-alarm 油槽车-报警
```

```
tanktruck-task 油槽车-最新任务
```
同公共
```
tanktruck-dutyshift 油槽车-交接班
```

```
tanktruck-fuelling 油槽车-加油调度
```
同公共
```
tanktruck-setting 油槽车-设置
```
同公共
```
otherautomobile-index 外勤车-首页 ?
```

```
otherautomobile-status 外勤车-状态
```
同公共
```
otherautomobile-alarm 外勤车-报警
```
同公共
```
otherautomobile-task 外勤车-最新任务
```

```
otherautomobile-dutyshift 外勤车-交接班
```
同公共
```
otherautomobile-fuelling 外勤车-加油调度
```
同公共
```
otherautomobile-setting 外勤车-设置
```
同公共
```

projectautomobile-index 工程车-首页 ?
```

```
projectautomobile-status 工程车-状态
```
同公共
```
projectautomobile-alarm 工程车-报警
```
同公共
```
projectautomobile-task 工程车-最新任务
```
同公共
```
projectautomobile-dutyshift 工程车-交接班
```
同公共
```
projectautomobile-fuelling 工程车-加油调度
```
同公共
```
projectautomobile-setting 工程车-设置
```
同公共
```
