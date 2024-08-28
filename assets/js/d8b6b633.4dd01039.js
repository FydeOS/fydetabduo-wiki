"use strict";(self.webpackChunkfydetab_wiki=self.webpackChunkfydetab_wiki||[]).push([[597],{7685:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>t,metadata:()=>d,toc:()=>h});var s=l(4848),i=l(8453),r=l(1470),a=l(9365);const t={id:"arch",title:"Arch Linux"},o=void 0,d={id:"os-release-board/arch",title:"Arch Linux",description:'A lightweight and flexible Linux distribution that tries to "Keep It Simple", for Fydetab Duo.',source:"@site/docs/os-release-board/4.Arch Linux.md",sourceDirName:"os-release-board",slug:"/os-release-board/arch",permalink:"/os-release-board/arch",draft:!1,unlisted:!1,editUrl:"https://github.com/FydeOS/fydetabduo-wiki/tree/main/docs/os-release-board/4.Arch Linux.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"arch",title:"Arch Linux"},sidebar:"tutorialSidebar",previous:{title:"Debian",permalink:"/os-release-board/debian"},next:{title:"Ubuntu Touch",permalink:"/os-release-board/ubuntu_touch"}},c={},h=[{value:"\ud83d\udd04 Status",id:"-status",level:2},{value:"\ud83d\udce5 Download",id:"-download",level:2},{value:"\u23ec Installation",id:"-installation",level:2},{value:"Boot from SD Card",id:"boot-from-sd-card",level:3},{value:"Install to eMMC",id:"install-to-emmc",level:3},{value:"\ud83d\udd11Credentials",id:"credentials",level:2},{value:"Preview1",id:"preview1",level:2},{value:"Release note",id:"release-note",level:3},{value:"Download links",id:"download-links",level:3},{value:"\ud83d\udcda Tutorial: Installing KDE Plasma Desktop",id:"-tutorial-installing-kde-plasma-desktop",level:2},{value:"\ud83d\udd27 Flash Image Under Linux",id:"-flash-image-under-linux",level:3},{value:"\ud83c\udf10 Set Up Your Wi-Fi (WLAN0)",id:"-set-up-your-wi-fi-wlan0",level:3},{value:"\ud83e\udde9 Resize the Root Partition",id:"-resize-the-root-partition",level:3},{value:"\ud83d\udd04 Install Updates",id:"-install-updates",level:3},{value:"Set your local time",id:"set-your-local-time",level:3},{value:"Set your language preference / locale",id:"set-your-language-preference--locale",level:3},{value:"\ud83d\udda5\ufe0f Install KDE Plasma",id:"\ufe0f-install-kde-plasma",level:3},{value:"\ud83d\udcdd TODO",id:"-todo",level:3}];function u(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:'A lightweight and flexible Linux distribution that tries to "Keep It Simple", for Fydetab Duo.'}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"arch preview",src:l(1685).A+"",width:"2560",height:"1600"})}),"\n",(0,s.jsx)(n.p,{children:"The official release of Arch Linux for the Fydetab Duo is now available, fully ready to use right out of the box. This version features the KDE Plasma desktop as the default, providing a sleek and efficient user experience."}),"\n",(0,s.jsx)(n.h2,{id:"-status",children:"\ud83d\udd04 Status"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Working:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\ud83d\uddbc\ufe0f Wayland"}),"\n",(0,s.jsx)(n.li,{children:"\ud83c\udf9b\ufe0f GPU rendering using Panthor"}),"\n",(0,s.jsx)(n.li,{children:"\ud83d\udda5\ufe0f Touch Screen"}),"\n",(0,s.jsx)(n.li,{children:"\u2328\ufe0f Integrated keyboard/touchpad"}),"\n",(0,s.jsx)(n.li,{children:"\ud83d\udcf7 Camera"}),"\n",(0,s.jsx)(n.li,{children:"\ud83c\udfa4 Microphone"}),"\n",(0,s.jsx)(n.li,{children:"\ud83d\udd0a Audio"}),"\n",(0,s.jsx)(n.li,{children:"\u270d\ufe0f Stylus"}),"\n",(0,s.jsx)(n.li,{children:"\ud83d\udcf6 Wi-Fi"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Not working:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\ud83d\udcfa USB-C DP output"}),"\n",(0,s.jsx)(n.li,{children:"\ud83d\udd04 Screen rotation"}),"\n",(0,s.jsx)(n.li,{children:"\ud83d\udcf6 Bluetooth"}),"\n",(0,s.jsx)(n.li,{children:"\ud83c\udd94 Fingerprint scanner"}),"\n",(0,s.jsx)(n.li,{children:"\ud83d\udd07 Suspend (currently s2idle, may not always function)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"-download",children:"\ud83d\udce5 Download"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/Linux-for-Fydetab-Duo/images/releases",children:"GitHub Release"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"-installation",children:"\u23ec Installation"}),"\n",(0,s.jsx)(n.h3,{id:"boot-from-sd-card",children:"Boot from SD Card"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Download the Image."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Flash the image to the SD card using Balena Etcher or Rufus."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Insert the SD card into the Fydetab Duo."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Ensure the SD card slot is slightly open to boot from UEFI firmware."})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"install-to-emmc",children:"Install to eMMC"}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(a.A,{value:"linux",label:"\ud83d\udc27 Linux (Debian/Ubuntu)",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["Install ",(0,s.jsx)(n.code,{children:"rkdeveloptool"})]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo apt-get update\nsudo apt-get install -y libudev-dev libusb-1.0-0-dev dh-autoreconf pkg-config libusb-1.0 build-essential git wget\ngit clone https://github.com/rockchip-linux/rkdeveloptool\ncd rkdeveloptool\nwget https://patch-diff.githubusercontent.com/raw/rockchip-linux/rkdeveloptool/pull/73.patch\nwget https://patch-diff.githubusercontent.com/raw/rockchip-linux/rkdeveloptool/pull/85.patch\ngit am *.patch\nautoreconf -i\n./configure\nmake -j$(nproc)\nsudo cp rkdeveloptool /usr/local/sbin/\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u26a1 Flash the Image"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Detect devices"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sudo rkdeveloptool ld\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Flash the image"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sudo rkdeveloptool wl 0 ~/Downloads/xx-xx.img.xz\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Reboot"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sudo rkdeveloptool rd\n"})}),"\n"]}),"\n"]})}),(0,s.jsx)(a.A,{value:"macos",label:"\ud83c\udf4f macOS",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["Install ",(0,s.jsx)(n.code,{children:"rkdeveloptool"})]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"brew install automake autoconf libusb pkg-config git wget\ngit clone https://github.com/rockchip-linux/rkdeveloptool\ncd rkdeveloptool\nwget https://patch-diff.githubusercontent.com/raw/rockchip-linux/rkdeveloptool/pull/73.patch\nwget https://patch-diff.githubusercontent.com/raw/rockchip-linux/rkdeveloptool/pull/85.patch\ngit am *.patch\nautoreconf -i\n./configure\nmake -j$(nproc)\ncp rkdeveloptool /opt/homebrew/bin/\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u26a1 Flash the Image"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Detect devices"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sudo rkdeveloptool ld\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Flash the image"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sudo rkdeveloptool wl 0 ~/Downloads/xx-xx.img.xz\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Reboot"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sudo rkdeveloptool rd\n"})}),"\n"]}),"\n"]})}),(0,s.jsx)(a.A,{value:"windows",label:"\ud83d\udda5\ufe0f Windows",children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Install the ",(0,s.jsx)(n.a,{href:"https://dl.khadas.com/products/edge2/tool/driver-assitant_v5.13.zip",children:"Rockchip Driver"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Driver Install",src:l(696).A+"",width:"395",height:"191"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Download ",(0,s.jsx)(n.a,{href:"https://dl.khadas.com/products/edge2/tool/rkdevtool_release_v3.28.zip",children:"RKDevTool v3.28"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Open RKDevTool."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"RKDevTool",src:l(8821).A+"",width:"901",height:"455"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Download the ",(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:l(7922).A+"",children:"SPI Loader"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Select the loader and image."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/LinuxDroidMaster/Fydetab-Duo-DroidMaster-wiki/raw/main/Images/Linux/BredOS/flashing_tool_config.png",alt:"Select Image"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"Run"}),"."]}),"\n"]}),"\n"]})})]}),"\n",(0,s.jsx)(n.h2,{id:"credentials",children:"\ud83d\udd11Credentials"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"arch/root"})," : ",(0,s.jsx)(n.code,{children:"arch"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"preview1",children:"Preview1"}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Build:"})," preview1-20221219"]}),"\n"]}),(0,s.jsx)(n.h3,{id:"release-note",children:"Release note"}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Hightlight"}),"\nInitial release of Arch Linux port for Fydetab Duo.\nUseful things to note:"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Default login credentials: ",(0,s.jsx)(n.code,{children:"alarm/root"}),": ",(0,s.jsx)(n.code,{children:"alarm"})]}),"\n",(0,s.jsxs)(n.li,{children:["Using ",(0,s.jsx)(n.a,{href:"https://wiki.archlinux.org/title/iwd",children:"iwd"})," to connect to the internet:"]}),"\n",(0,s.jsx)(n.li,{children:"This release of Arch Linux does not bundle with a default Desktop Environment, if you want one, you need to install it yourself"}),"\n"]}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Known issues"}),"\nIt's still in the early porting stage; the following features are still under development:"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Desktop Environment UI is still software rendering, hardware acceleration is unavailable"}),"\n"]}),(0,s.jsx)(n.h3,{id:"download-links",children:"Download links"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://download.fydeos.io/fydetabduo/fydetab_duo-archlinux-update-20221219.img.xz",children:"Direct link"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://fydeos-my.sharepoint.cn/:u:/g/personal/fyde_fydeos_partner_onmschina_cn/EdVSYqlugmdCkhcRd0NUK5MB5e7yv2nhXpFsjJrErH2ElQ?e=34F1RR",children:"Mirror link"})}),"\n"]}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SHA256"}),": ",(0,s.jsx)(n.code,{children:"71b1cf3c6fa4aea650c877eb9fd91eaeb179b53562a534eebce69abe7766570a"})]}),(0,s.jsx)(n.h2,{id:"-tutorial-installing-kde-plasma-desktop",children:"\ud83d\udcda Tutorial: Installing KDE Plasma Desktop"}),(0,s.jsx)(n.p,{children:"This is an initial test installation guide for the Fydetab Duo. In this tutorial, we cover some basic steps to:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Connect to Wi-Fi"}),"\n"]}),(0,s.jsx)(n.h3,{id:"-flash-image-under-linux",children:"\ud83d\udd27 Flash Image Under Linux"}),(0,s.jsx)(n.p,{children:"Assuming:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The Fydetab Duo is connected and in loader mode (see ",(0,s.jsx)(n.a,{href:"https://wiki.fydetabduo.com/flashing_the_fydetab_duo",children:"Fydetab Duo Wiki"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"upgrade_tool"})," is located under ",(0,s.jsx)(n.code,{children:"./foundation-rk3588/rk3588-image-maker/Linux_Upgrade_Tool/upgrade_tool"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The SHA256 sum validated, extracted ",(0,s.jsx)(n.code,{children:"fydetab_duo-archlinux-update-20221219.img"})," image is in the current folder:"]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo ./foundation-rk3588/rk3588-image-maker/Linux_Upgrade_Tool/upgrade_tool uf ./fydetab_duo-archlinux-update-20221219.img\n"})}),(0,s.jsxs)(n.p,{children:["\u26a0\ufe0f ",(0,s.jsx)(n.strong,{children:"Warning:"})," Serious neck stiffness possible as the tty is ",(0,s.jsx)(n.em,{children:"not"})," rotatable with:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"echo 3 > /sys/class/graphics/fbcon/rotate_all\n"})}),(0,s.jsx)(n.p,{children:"Login with:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"Username: root\nPassword: alarm\n"})}),(0,s.jsx)(n.p,{children:"Double your tty font size:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"setfont -d\n"})}),(0,s.jsx)(n.h3,{id:"-set-up-your-wi-fi-wlan0",children:"\ud83c\udf10 Set Up Your Wi-Fi (WLAN0)"}),(0,s.jsxs)(n.p,{children:["Follow the instructions under ",(0,s.jsx)(n.a,{href:"https://wiki.archlinux.org/title/Iwd",children:"Arch Linux Wiki - Iwd"}),". Start by adding some required configuration details:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mkdir /etc/iwd\nnano /etc/iwd/main.conf\n"})}),(0,s.jsx)(n.p,{children:"Insert:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ini",children:"[General]\nEnableNetworkConfiguration=true\n\n[Network]\nEnableIPv6=true\n"})}),(0,s.jsxs)(n.p,{children:["(If you don't have/want IPv6, set ",(0,s.jsx)(n.code,{children:"EnableIPv6=false"}),")"]}),(0,s.jsx)(n.p,{children:"Enable the Iwd network service:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"systemctl enable --now iwd\n"})}),(0,s.jsx)(n.p,{children:"Edit the connection details with:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"iwctl\n"})}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["If you do not know your wireless device name, list all Wi-Fi devices:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"[iwd]# device list\n"})}),"\n","the name for your Wi-Fi device should be listed as ",(0,s.jsx)(n.code,{children:"wlan0"}),", Adapter should be ",(0,s.jsx)(n.code,{children:"phy0"})]}),"\n",(0,s.jsxs)(n.li,{children:["If the device or its corresponding adapter is turned off, turn it on:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"[iwd]# device wlan0 set-property Powered on\n[iwd]# adapter phy0 set-property Powered on\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Initiate a scan for networks (this command will not output anything):","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"[iwd]# station wlan0 scan\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["List all available networks:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"[iwd]# station wlan0 get-networks\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Connect to a network:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"[iwd]# station wlan0 connect SSID\n"})}),"\n"]}),"\n"]}),(0,s.jsxs)(n.p,{children:["Exit iwctl with ",(0,s.jsx)(n.code,{children:"crtl"})," + ",(0,s.jsx)(n.code,{children:"d"})]}),(0,s.jsx)(n.p,{children:"Check if your wlan0 device now has an IP address:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ip --brief address show\n"})}),(0,s.jsx)(n.p,{children:"\ud83d\udca1 Hint: Now you should be able to access the device via SSH..."}),(0,s.jsx)(n.h3,{id:"-resize-the-root-partition",children:"\ud83e\udde9 Resize the Root Partition"}),(0,s.jsx)(n.p,{children:"In this tutorial, only one root partition is available and used, limited to 12 GB. Increase the size of the root partition to the available space (12 GB), as the image comes with only 2 GB of preconfigured available space:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"resize2fs /dev/mmcblk0p1\n"})}),(0,s.jsx)(n.h3,{id:"-install-updates",children:"\ud83d\udd04 Install Updates"}),(0,s.jsxs)(n.p,{children:["Adapt ",(0,s.jsx)(n.code,{children:"sources.list"}),":"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"nano /etc/pacman.d/mirrorlist\n"})}),(0,s.jsxs)(n.p,{children:["Select a fitting mirror near your location and update with the Arch package manager ",(0,s.jsx)(n.code,{children:"pacman"}),":"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pacman -Syyu\n"})}),(0,s.jsxs)(n.p,{children:["Accept the defaults when prompted. During the update, kernel-related files may trigger warnings as they cannot be found and are likely ",(0,s.jsx)(n.em,{children:"not"})," part of the Arch installation (supplied via image, kernel 5.10 is installed)."]}),(0,s.jsx)(n.p,{children:"Check the kernel via:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"uname -a\n"})}),(0,s.jsx)(n.p,{children:"Expected output:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"Linux alarm 5.10.110-fyde #145 SMP Mon Dec 19 07:00:43 UTC 2022 aarch64 GNU/Linux\n"})}),(0,s.jsx)(n.p,{children:"Reboot:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"shutdown -r 0\n"})}),(0,s.jsx)(n.h3,{id:"set-your-local-time",children:"Set your local time"}),(0,s.jsxs)(n.p,{children:["in ",(0,s.jsx)(n.code,{children:"/usr/share/zoneinfo"})," there are all possible locations listed. You can set your local time via e.g."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ln -s /usr/share/zoneinfo/Europe/Berlin /etc/localtime\n"})}),(0,s.jsx)(n.h3,{id:"set-your-language-preference--locale",children:"Set your language preference / locale"}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["select one or more locales in ",(0,s.jsx)(n.code,{children:"/etc/locale.gen"}),". afterwards execute ",(0,s.jsx)(n.code,{children:"locale-gen"})]}),"\n",(0,s.jsx)(n.li,{children:"enable the primarly locale via e.g."}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"localectl set-locale LANG=en_US.UTF-8\n"})}),(0,s.jsxs)(n.p,{children:["otherwise, you can also check and uncomment any available locale in ",(0,s.jsx)(n.code,{children:"/etc/locale.gen"})]}),(0,s.jsx)(n.h3,{id:"\ufe0f-install-kde-plasma",children:"\ud83d\udda5\ufe0f Install KDE Plasma"}),(0,s.jsxs)(n.p,{children:["Follow the instructions at ",(0,s.jsx)(n.a,{href:"https://wiki.archlinux.org/title/KDE",children:"Arch Linux Wiki - KDE"}),". As of July 2024, this will install Plasma 6.1."]}),(0,s.jsx)(n.p,{children:'Install KDE Plasma, display manager, KScreen for display adjustment, Bluetooth, and PackageKit for "Discover" software management integration xorg-xrandr for SDDM screen rotation:'}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pacman -S plasma-meta sddm sddm-kcm kscreen bluez bluez-utils packagekit, xorg-xrandr\n"})}),(0,s.jsx)(n.p,{children:"Accept the defaults when prompted or adjust options to your preference."}),(0,s.jsxs)(n.p,{children:["To adjust screen rotation in SDDM, edit ",(0,s.jsx)(n.code,{children:"/usr/share/sddm/scripts/Xsetup"}),", and add"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"xrandr -o right\n"})}),(0,s.jsxs)(n.p,{children:["in ",(0,s.jsx)(n.code,{children:"/var/lib/sddm/state.conf"}),", you have to add"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"[Last]\n# Name of the last logged-in user.\n# This user will be preselected when the login screen appears\nUser=alarm\n\n\n# Name of the session for the last logged-in user.\n# This session will be preselected when the login screen appears.\nSession=/usr/share/xsessions/plasmax11.desktop\n[X11]\nDisplayCommand=/usr/share/sddm/scripts/Xsetup\n"})}),(0,s.jsx)(n.p,{children:"Start and enable SDDM and Bluetooth:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"systemctl enable --now sddm bluetooth\n"})}),(0,s.jsx)(n.p,{children:"A reboot may be required."}),(0,s.jsx)(n.p,{children:"You will now be greeted by the Plasma SDDM login screen. Currently, as per the configuration above, X11 is preselected. Wayland sessions will only show a black screen."}),(0,s.jsxs)(n.p,{children:["Once logged in (initial password ",(0,s.jsx)(n.code,{children:"alarm"}),"), you can adjust the Plasma desktop settings to rotate."]}),(0,s.jsx)(n.p,{children:"Additional software can now be installed via Discover."}),(0,s.jsx)(n.h3,{id:"-todo",children:"\ud83d\udcdd TODO"}),(0,s.jsxs)(n.p,{children:["As this is a ",(0,s.jsx)(n.em,{children:"very limited"})," environment still, some tasks need to be done, both for the user and on the hardware support, which is limited by the shipped Linux kernel:"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Partitioning: ",(0,s.jsx)(n.em,{children:"only"})," 2 GB root partition, resized to 12 GB. Additional partitioning required & files need moving."]}),"\n",(0,s.jsx)(n.li,{children:"Rotate tty."}),"\n",(0,s.jsx)(n.li,{children:"Replace Iwd."}),"\n",(0,s.jsx)(n.li,{children:"Wayland does not run yet."}),"\n",(0,s.jsx)(n.li,{children:"Hardware: Bluetooth & camera don't work -> kernel build + kernel modules for Bluetooth, but how?"}),"\n",(0,s.jsxs)(n.li,{children:["Hardware: Display is ",(0,s.jsx)(n.em,{children:"only software rendering supported"})," -> kernel build + kernel modules for display, but how?"]}),"\n",(0,s.jsx)(n.li,{children:"Hardware: Other hardware e.g., accelerometer, NPU ..."}),"\n"]})]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},9365:(e,n,l)=>{l.d(n,{A:()=>a});l(6540);var s=l(4164);const i={tabItem:"tabItem_Ymn6"};var r=l(4848);function a(e){let{children:n,hidden:l,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(i.tabItem,a),hidden:l,children:n})}},1470:(e,n,l)=>{l.d(n,{A:()=>w});var s=l(6540),i=l(4164),r=l(3104),a=l(6347),t=l(205),o=l(7485),d=l(1682),c=l(679);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:l}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:l,attributes:s,default:i}}=e;return{value:n,label:l,attributes:s,default:i}}))}(l);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,l])}function p(e){let{value:n,tabValues:l}=e;return l.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:l}=e;const i=(0,a.W6)(),r=function(e){let{queryString:n=!1,groupId:l}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:n,groupId:l});return[(0,o.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function j(e){const{defaultValue:n,queryString:l=!1,groupId:i}=e,r=u(e),[a,o]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=l.find((e=>e.default))??l[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[d,h]=x({queryString:l,groupId:i}),[j,m]=function(e){let{groupId:n}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,r]=(0,c.Dv)(l);return[i,(0,s.useCallback)((e=>{l&&r.set(e)}),[l,r])]}({groupId:i}),g=(()=>{const e=d??j;return p({value:e,tabValues:r})?e:null})();(0,t.A)((()=>{g&&o(g)}),[g]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),m(e)}),[h,m,r]),tabValues:r}}var m=l(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var A=l(4848);function f(e){let{className:n,block:l,selectedValue:s,selectValue:a,tabValues:t}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.a_)(),c=e=>{const n=e.currentTarget,l=o.indexOf(n),i=t[l].value;i!==s&&(d(n),a(i))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const l=o.indexOf(e.currentTarget)+1;n=o[l]??o[0];break}case"ArrowLeft":{const l=o.indexOf(e.currentTarget)-1;n=o[l]??o[o.length-1];break}}n?.focus()};return(0,A.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":l},n),children:t.map((e=>{let{value:n,label:l,attributes:r}=e;return(0,A.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>o.push(e),onKeyDown:h,onClick:c,...r,className:(0,i.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":s===n}),children:l??n},n)}))})}function b(e){let{lazy:n,children:l,selectedValue:r}=e;const a=(Array.isArray(l)?l:[l]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,A.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function v(e){const n=j(e);return(0,A.jsxs)("div",{className:(0,i.A)("tabs-container",g.tabList),children:[(0,A.jsx)(f,{...n,...e}),(0,A.jsx)(b,{...n,...e})]})}function w(e){const n=(0,m.A)();return(0,A.jsx)(v,{...e,children:h(e.children)},String(n))}},7922:(e,n,l)=>{l.d(n,{A:()=>s});const s=l.p+"assets/files/rk3588_spl_loader_v1.09.111-d0efe1c167644cda13288ab87f7abc64.bin"},1685:(e,n,l)=>{l.d(n,{A:()=>s});const s=l.p+"assets/images/arch_preview-930f8edbf7ad25e959357cc8b3c45566.jpeg"},696:(e,n,l)=>{l.d(n,{A:()=>s});const s="data:image/png;base64,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"},8821:(e,n,l)=>{l.d(n,{A:()=>s});const s=l.p+"assets/images/rkdevtool-fbc673332919e8d3802c3e6ffb7a2cb0.png"},8453:(e,n,l)=>{l.d(n,{R:()=>a,x:()=>t});var s=l(6540);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);