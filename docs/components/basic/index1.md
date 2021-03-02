---
title: Button 按钮
order: 2
group:
  # path: /xxx/sdfsdf
  title: 通用
---

## 介绍

按钮用于触发一个操作，如提交表单。


## 引入

```dart
import 'package:flutter_nebula/flutter_nebula.dart';
```

## 使用

### 按钮类型

<img src="https://i.loli.net/2021/03/02/Dx9RLiPdW8M4ltC.png" width="400px">

按钮支持 `default`、`primary`、`info`、`warning`、`danger` 五种类型，默认为 `default`。

```dart
NeButton(
  onTap: Function(),
  label: Text(enumToString(status)),
  status: NeWidgetStatus.default,
  appearance：WidgetAppearance.filled
));

/// or

NeButton.filled(
  onTap: Function(),
  label: Text(enumToString(status)),
  status: NeWidgetStatus.default,
));
```

### 按钮尺寸

<img src="https://i.loli.net/2021/03/02/7yd3AhV9HW6RG2Y.png" width="400px">

按钮支持 `giant`、`large`、`medium`、`small`、`tiny` 五种大小，默认为 `medium`。

```dart
NeButton(
  onTap: Function(),
  label: Text('size'),
  size: NeWidgetSize.medium,
))
```

### 边框按钮

<img src="https://i.loli.net/2021/03/02/bq3Q5firHXShmoV.png" width="400px">

```dart
NeButton(
  onTap: Function(),
  label: Text(enumToString(status)),
  status: NeWidgetStatus.default,
  appearance：WidgetAppearance.outline
));

/// or

NeButton.outline(
  onTap: Function(),
  label: Text(enumToString(status)),
  status: NeWidgetStatus.default,
));
```

### 文字按钮

<img src="https://i.loli.net/2021/03/02/DUmBfyE3kAVpF6Q.png" width="400px">

```dart
NeButton(
  onTap: Function(),
  label: Text(enumToString(status)),
  status: NeWidgetStatus.default,
  appearance：WidgetAppearance.ghost
));

/// or

NeButton.ghost(
  onTap: Function(),
  label: Text(enumToString(status)),
  status: NeWidgetStatus.default,
));
```

### 按钮边框

<img src="https://i.loli.net/2021/03/02/QWS2E3JM7YByRZC.png" width="400px">

按钮支持 `rectangle`、`round`、`semiRound` 三种边框样式，默认为 `rectangle`。

```dart
NeButton(
  onTap: Function(),
  label: Text(enumToString(status)),
  status: NeWidgetStatus.default,
  shape：NeWidgetShape.rectangle
));
```

### 带有Icon的按钮

<img src="https://i.loli.net/2021/03/02/n8udTBFLbhNMWmP.png" width="400px">

按钮支持 `rectangle`、`round`、`semiRound` 三种边框样式，默认为 `rectangle`。

```dart
NeButton(
  onTap: onClick,
  label: Text('Only leading'),
  leading: NeIcon(EvaIcons.star),
)
NeButton(
  onTap: onClick,
  label: Text('Only trailing'),
  trailing: NeIcon(EvaIcons.star),
)
NeButton(
  onTap: onClick,
  label: Text('Both'),
  leading: NeIcon(EvaIcons.star),
  trailing: NeIcon(EvaIcons.star),
)
```
