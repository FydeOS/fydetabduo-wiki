---
sidebar_position: 2.5
id: omarchy
title: Omarchy
---

> Fydetab Duo 的 Omarchy 版本，由 FydeOS 团队维护的原生 aarch64 移植版。

[Omarchy](https://omarchy.org) 是 DHH 打造的一套预设风格鲜明的 Arch Linux 桌面方案，以 Hyprland 为核心：平铺式 Wayland 合成器、精选的应用集合，以及统一的快捷键与主题，全部开箱即用。官方发行版面向 x86 PC。

本镜像是 Omarchy 针对 Fydetab Duo 的原生 aarch64 移植版，基于 Arch Linux ARM 构建，采用 `linux-fydetab` 6.12 内核，并附带完整的 Omarchy 桌面（Hyprland 与 Omarchy shell），登录界面为 SDDM。

![Omarchy on Fydetab Duo](/img/omarchy-desktop.webp)

板级支持开箱即用：

- Wi-Fi 与蓝牙
- 通过 panthor 与 Mesa 实现的 Mali G610 GPU 加速
- 深度睡眠与唤醒
- 音频
- 传感器
- 屏幕触控，并已针对竖向 DSI 屏幕配置 HiDPI 缩放

根文件系统采用 btrfs 并支持快照：`omarchy-update` 会在更新系统前创建快照，因此当某次更新出现问题时，可以将系统回滚到快照。

## 📥 下载

镜像发布在构建流水线的 GitHub Releases 页面：

- [Linux-for-Fydetab-Duo/imagebuild releases](https://github.com/Linux-for-Fydetab-Duo/imagebuild/releases)

请选择标题为 **Omarchy for Fydetab Duo** 的最新版本。资源文件名形如 `ArchLinux-ARM-Fydetab-Duo-Omarchy-uboot-<date>.img.xz`，其 SHA-256 校验和列在发布说明中。

## 💾 安装

烧录方式与 Arch Linux 镜像完全相同。请先使用 `unxz` 解压下载的文件，然后任选其一：

- **从 SD 卡启动**：使用 Balena Etcher 或 Rufus 将 `.img` 文件烧录到 SD 卡，将卡插入 Fydetab Duo 并从中启动。
- **安装到内置 eMMC**：让设备进入 Loader 模式，通过 USB 使用 `rkdeveloptool`（Linux 与 macOS）或 RKDevTool（Windows）烧录 `.img` 文件。

完整步骤——进入 Loader 模式、loader 文件、驱动安装以及故障排查——请参阅 [Arch Linux 安装指南](/Available-OS/ArchLinux/arch-install)，并将其中的镜像文件名替换为 Omarchy 镜像。

### 首次启动

首次启动会将根文件系统扩展至整个存储空间，因此耗时会比后续启动更长。

镜像中没有预置的用户账户。设备会显示设置界面，供你创建自己的用户名和密码，随后登录 Omarchy 会话。部分初始化步骤需要联网；如果设备处于离线状态，这些步骤会在之后的登录时重试。

## ⚠️ 已知限制

- 暂不支持全盘加密，而官方 x86 版 Omarchy 默认启用加密。该功能已在计划中。
- Omarchy 安装菜单中的部分条目在 ARM 上不可用：包括 1Password、Spotify、Dropbox 等仅支持 x86 的应用，以及少数尚未提供 aarch64 软件包的项目。
- 目前启动过程为文本模式，没有图形启动画面。
