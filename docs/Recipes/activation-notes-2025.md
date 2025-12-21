# Additional notes for activating brand new Fydetab Duo units after June 2025

## Background
Due to stock management issues, some Fydetab Duo devices may require an additional step during OS activation to be automatically converted to the correct OS image for your region. For more information regarding our data centres and geolocation: https://fydeos.io/datageo

If your Fydetab Duo requires this additional step of image conversion, typically you should get an email to inform you about it from our operation team.

## How-to
Brand new Fydetab Duo ships with FydeOS v18, an older version. The current stable release, at the time of the publication of this article, is v20 "Cosmic Memories," so after the initial setup (out-of-box experience or OOBE), FydeOS will automatically update to the latest version.

If your device is eligible for conversion, following this first OS update, your Fydetab Duo will undergo a powerwash, erasing all data and restarting with the OOBE. This occurs because your OS is automatically converted to the version specific to your region.

It is crucial to understand that this conversion necessitates a powerwash, which will wipe all data. Therefore, it is advisable not to use your Fydetab Duo until the conversion is complete.

After the conversion, you will restart from the OOBE. From this point on, your FydeOS will function as expected, and you can use it normally.

The process is demonstrated in the video below.

<video width="100%" controls>
  <source src={require('/img/com2io.mp4').default} type="video/mp4"/>
  covert com to io
</video>

## Verify if the conversion is successful
Navigate to Settings -> About FydeOS, you can verify whether the version conversion has been successfully completed, by checking if your FydeOS is offered by https://fydeos.io, as shown below.

![verify](/img/verify.png)

## Manually convert if automatic OTA fails
If for whatever reason the abovementioned process didn’t happen or failed in midway, (that your FydeOS is still offered by https://fydeos.com on About FydeOS), you can use the following guide to execute a script to complete the conversion manually.

### **1.Enter Shell**

You can enter “crosh” shell by pressing "Ctrl+Alt+t", and enter “shell” after seeing the “crosh>” prompt, followed by “sudo -i” to gain root privilege. For more information, check this guide: https://fydeos.io/help/knowledge-base/developer-options/developer-mode/terminal-basics-guide/
```
shell
sudo -i
```
![enter shell](/img/shell.png)

### **2.Copy and run the script**

Copy the following command to execute the remote script, and follow the on-screen instructions. 
```
curl -fsSL bit.ly/3IG5tuK | sudo bash
```

![flashing](/img/flashing.png)

Once completed, you will need to reboot your device to begin from OOBE.

