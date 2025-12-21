# 2025年6月后激活全新的Fydetab Duo设备的补充说明

## 背景
由于库存管理方面的问题，部分Fydetab Duo设备在操作系统激活期间可能需要执行一项额外的步骤，以便为让设备使用适用于您所在地区的操作系统映像。有关我们数据中心和地理定位的更多信息，请访问：https://fydeos.io/datageo

如果您的Fydetab Duo需要进行该映像转换的额外步骤，通常您会收到我们运营团队发送的通知邮件。

## 操作指南
全新Fydetab Duo出厂预装FydeOS v18，这是一个较旧的版本。截至本文发布时，当前稳定版本为v20“Cosmic Memories”，因此在完成初始设置（开箱体验，即OOBE）后，FydeOS将自动更新至最新版本。

如果您的设备符合转换条件，在首次操作系统更新之后，您的Fydetab Duo将执行一次清除数据恢复出厂设置（Powerwash），擦除所有数据并重新进入OOBE。这是因为您的操作系统已自动转换为特定于您所在地区的版本。

请您注意，**此转换过程需要进行清除数据恢复出厂设置**，这会清除设备上的所有用户数据。因此，建议您在转换完成之前不要使用Fydetab Duo。

转换完成后，您将从OOBE重新开始。从此之后，您的FydeOS将正常工作，您可以正常使用。

下面的视频演示了该过程。

<video width="100%" controls>
  <source src={require('/img/com2io.mp4').default} type="video/mp4"/>
  covert com to io
</video>

## 验证转换是否成功
进入“设置” → “关于FydeOS”，您可以检查您的FydeOS是否由 https://fydeos.io 提供，从而验证版本转换是否已完成，如下图所示。

![verify](/img/verify.png)

## 若自动OTA失败，手动进行转换
如果由于某些原因上述过程未发生或中途失败（在“关于FydeOS”中您的FydeOS仍由 https://fydeos.com 提供），您可以按照以下指南执行脚本来手动完成转换。

### **1. 进入Shell**
您可以按“Ctrl+Alt+t”进入“crosh” shell，看到“crosh>”提示符后输入“shell”，然后输入“sudo -i”以获取root权限。更多信息请参阅此指南：https://fydeos.io/help/knowledge-base/developer-options/developer-mode/terminal-basics-guide/
```
shell
sudo -i
```
![enter shell](/img/shell.png)

### **2. 复制并运行脚本**
复制以下命令以执行远程脚本，并按照屏幕上的指示操作。
```
curl -fsSL bit.ly/3IG5tuK | sudo bash
```

![flashing](/img/flashing.png)

完成后，您需要重启设备以从OOBE开始。

