---
title: 通用参数
order: 100
group:
  # path: /xxx/sdfsdf
  title: 通用
  order: 10
---

## 介绍

为了统一规范, 特制定了全局通用的参数。

## 定义

### 组件尺寸

```dart
enum NeWidgetSize {
  giant,
  large,
  medium,
  small,
  tiny,
}
```

### 状态

```dart
enum NeWidgetState {
  normal,
  hover,
  active,
  focus,
  disabled,
}
```

### 类型

```dart
enum NeWidgetStatus {
  primary,
  success,
  info,
  warning,
  danger,
}
```

### 边框

```dart
enum NeWidgetShape {
  rectangle,
  round,
  semiRound,
}
```

### 样式

```dart
enum NeWidgetAppearance {
  filled,
  outline,
  ghost,
}
```

### 定位

```dart
enum NePositioning {
  left,
  right,
  none,
}

enum NeVerticalPositioning {
  top,
  bottom,
}
```
