---
sidebar_position: 2.6
id: nixos-fydetab
title: NixOS
---

> Fydetab Duo 的 NixOS 版本，基于 flakes 的社区移植版。

[NixOS](https://nixos.org) 通过 [fyde-nix](https://github.com/NixOnFyde/fyde-nix) 原生运行在 Fydetab Duo 上——这是一个由 [@skifli](https://github.com/skifli) 维护的 nix flake。它基于厂商的 6.12 内核构建，默认桌面为 labwc 与 ReGreet，最终目标是实现与 FydeOS 的功能对等。

![预览](/img/fyde-nix.webp)

## ✨ 已支持的功能

- 🎮 通过 **Panthor + Mesa** 实现的 GPU 加速。
- 📶 Wi-Fi 6 与蓝牙（AP6275P / BCM4362A2）。
- 🖥️ 触摸屏、触控笔、自动旋转与霍尔传感器（合盖即休眠）。
- 💤 深度睡眠与唤醒，包括通过合盖触发。
- 📺 USB-C DisplayPort 输出（Alt Mode）。
- 🔊 音频（ES8388 + PipeWire）、麦克风与 500 万像素摄像头。
- 🛰️ LTE 模块（Quectel EM05-G）与 📦 NPU（RK3588S，6 TOPS）。
- 🔧 模块化的 NixOS 模块——按需取用；并配有 Cachix 缓存，重新构建平均耗时不到一分钟。

## 尚未支持

- 指纹识别（工作量较大，但仍是长期目标之一）。

## 📥 下载

镜像发布在 [fyde-nix GitHub Releases](https://github.com/NixOnFyde/fyde-nix/releases/latest) 页面，以 `fydetab-duo-nixos.img.zst` 分卷的形式提供。请先合并分卷，用 `zstd` 解压，然后烧录：

```
cat fydetab-duo-nixos.img.zst.part-a* > fydetab-duo-nixos.img.zst # 将所有分卷合并为一个文件
zstd -d fydetab-duo-nixos.img.zst # 解压镜像
```

## 💾 安装

:::important
fyde-nix 使用的是**原始 U-Boot**，而非 UEFI 启动。如果你此前使用的是基于 Arch 的镜像（它们采用 UEFI），请先刷回原厂 FydeOS，再全新安装。
:::

- **microSD**：执行 `sudo dd if=fydetab-duo-nixos.img of=/dev/sdX bs=4M conv=fsync status=progress`，然后插卡开机。
- **eMMC**：在已启动的系统中执行 `fydetab-install-to-emmc` 并按提示确认；也可以参照官方[刷写 Fydetab Duo](/flashing_the_fydetab_duo)文档，通过 USB 使用 `rkdeveloptool` 烧录。

默认登录账户为 `user` / `fydetab`。镜像还附带了 `fydetab-update` 与 `fydetab-snapshot` 等工具，可在更新出问题后回滚系统。

## 🔗 相关链接

更多深入且及时的信息请参阅以下链接：

- [fyde-nix 代码仓库](https://github.com/NixOnFyde/fyde-nix)
- [安装指南](https://github.com/NixOnFyde/fyde-nix/blob/main/docs/SETUP.md)
- [与 FydeOS 的功能对等情况](https://github.com/NixOnFyde/fyde-nix/blob/main/docs/PARITY.md)

:::caution
fyde-nix 是一个采用 MIT 许可证的独立项目，**并未获得 Fyde Innovations 的官方背书**。
:::

:::note
如果你在使用过程中遇到任何问题，欢迎[提交 issue](https://github.com/NixOnFyde/fyde-nix/issues)。
:::
