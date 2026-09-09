---
sidebar_position: 2.6
id: nixos-fydetab
title: NixOS
---

> NixOS for Fydetab Duo - a community port based on flakes.

[NixOS](https://nixos.org) running natively on the Fydetab Duo, via [fyde-nix](https://github.com/NixOnFyde/fyde-nix) — a nix flake maintained by [@skifli](https://github.com/skifli). It is built on a vendor 6.12 kernel and by default ships labwc + ReGreet as the desktop, with the final goal of feature parity with FydeOS.

![Preview](/img/fyde-nix.webp)

## ✨ What works

- 🎮 GPU acceleration via **Panthor + Mesa**.
- 📶 Wi-Fi 6 and Bluetooth (AP6275P / BCM4362A2).
- 🖥️ Touchscreen, stylus, auto-rotate and hall sensor (lid-close suspends).
- 💤 Deep suspend/resume, including from the lid.
- 📺 USB-C DisplayPort altmode.
- 🔊 Audio (ES8388 + PipeWire), microphone and 5 MP camera.
- 🛰️ LTE modem (Quectel EM05-G) and 📦 NPU (RK3588S, 6 TOPS).
- 🔧 Modular NixOS modules - cherry-pick only what you need, and a Cachix cache so rebuilds take on average under a minute.

## Not working

- Fingerprint reader (a longer project but one of the long term goals).

## 📥 Download

Images are released on the [fyde-nix GitHub Releases](https://github.com/NixOnFyde/fyde-nix/releases/latest) page as `fydetab-duo-nixos.img.zst` parts. Combine them, decompress with `zstd`, then flash:

```
cat fydetab-duo-nixos.img.zst.part-a* > fydetab-duo-nixos.img.zst # Combines all parts into one file
zstd -d fydetab-duo-nixos.img.zst # Decompresses the image
```

## 💾 Installation

:::important
fyde-nix uses the **original U-Boot**, not UEFI boot. If you're coming from an Arch-based image (which uses UEFI), re-flash the original FydeOS first - then install fresh.
:::

- **microSD**: `sudo dd if=fydetab-duo-nixos.img of=/dev/sdX bs=4M conv=fsync status=progress`, insert and boot.
- **eMMC**: from the live system, run `fydetab-install-to-emmc` and accept the prompts, or flash over USB with `rkdeveloptool` following the official [Flashing guide](/flashing_the_fydetab_duo) documentation.

The default login is `user` / `fydetab`. Extra tools bundled with the image include `fydetab-update` and `fydetab-snapshot` for rolling back after a bad update.

## 🔗 Links

For more in-depth and up-to-date information please see the following links:

- [fyde-nix repository](https://github.com/NixOnFyde/fyde-nix)
- [Setup guide](https://github.com/NixOnFyde/fyde-nix/blob/main/docs/SETUP.md)
- [Feature parity with FydeOS](https://github.com/NixOnFyde/fyde-nix/blob/main/docs/PARITY.md)

:::caution
fyde-nix is an independent project under the MIT license and is **not endorsed by Fyde Innovations**.
:::

:::note
If you encounter any issues with the build, feel free to open [an issue](https://github.com/NixOnFyde/fyde-nix/issues).
:::
