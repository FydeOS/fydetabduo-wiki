"use strict";(self.webpackChunkfydetab_wiki=self.webpackChunkfydetab_wiki||[]).push([[122],{6788:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>r,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var i=n(4848),t=n(8453);const s={id:"flashing_the_fydetab_duo",title:"\u26a1\ufe0f Flashing the Fydetab Duo"},a=void 0,d={id:"flashing_the_fydetab_duo",title:"\u26a1\ufe0f Flashing the Fydetab Duo",description:"Here is a step-by-step guide for flashing a new OS onto your Fydetab Duo.",source:"@site/docs/3.Flashing the Fydetab Duo.md",sourceDirName:".",slug:"/flashing_the_fydetab_duo",permalink:"/flashing_the_fydetab_duo",draft:!1,unlisted:!1,editUrl:"https://github.com/FydeOS/fydetabduo-wiki/tree/main/docs/3.Flashing the Fydetab Duo.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"flashing_the_fydetab_duo",title:"\u26a1\ufe0f Flashing the Fydetab Duo"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcbb Operating system options",permalink:"/operating_system_options"},next:{title:"\ud83d\udee0\ufe0f Hacking your Fydetab Duo",permalink:"/category/\ufe0f-hacking-your-fydetab-duo"}},r={},l=[{value:"To make Fydetab Duo boot into Loader Mode",id:"to-make-fydetab-duo-boot-into-loader-mode",level:2},{value:"1. Prepare your device",id:"1-prepare-your-device",level:3},{value:"2. Enter Loader/Maskrom Mode",id:"2-enter-loadermaskrom-mode",level:3},{value:"3. Check the status",id:"3-check-the-status",level:3},{value:"Utilising an image flashing tool",id:"utilising-an-image-flashing-tool",level:2},{value:"Using Linux",id:"using-linux",level:3},{value:"Download &amp; installation",id:"download--installation",level:4},{value:"Flash an image",id:"flash-an-image",level:4},{value:"Using macOS",id:"using-macos",level:3},{value:"Using Windows",id:"using-windows",level:3},{value:"See also",id:"see-also",level:2}];function h(e){const o={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.p,{children:"Here is a step-by-step guide for flashing a new OS onto your Fydetab Duo."}),"\n",(0,i.jsx)(o.h2,{id:"to-make-fydetab-duo-boot-into-loader-mode",children:"To make Fydetab Duo boot into Loader Mode"}),"\n",(0,i.jsx)(o.h3,{id:"1-prepare-your-device",children:"1. Prepare your device"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"Assure that your Fydetab Duo has been shutdown before connecting it with a usb cable to your computer."}),"\n",(0,i.jsxs)(o.li,{children:["Connect your Fydetab Duo to the computer you'll use for the OS flash.","\n",(0,i.jsx)(o.admonition,{type:"note",children:(0,i.jsx)(o.p,{children:"Due to an oversight by our factory supplier, the type-c cable that comes with the Fydetab Duo doesn\u2019t support data transfer, so you won\u2019t be able to get into Loader Mode with it. Please use a different type-c cable that can handle data transfers."})}),"\n"]}),"\n",(0,i.jsx)(o.li,{children:"Ensure the device is powered off before proceeding. If it powers on automatically, turn it off again to avoid unintended operations."}),"\n"]}),"\n",(0,i.jsx)(o.h3,{id:"2-enter-loadermaskrom-mode",children:"2. Enter Loader/Maskrom Mode"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Step 1:"})," Press and hold the volume up (vol+) button."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Step 2:"})," While holding the vol+ button, briefly press the power button for 0.5 to 1 second."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Step 3:"})," Release both buttons simultaneously to Enter ",(0,i.jsx)(o.strong,{children:"Loader Mode"})," (Note: If releasing the buttons simultaneously does not work, it is better to release the power button and afterwards the vol+ button)."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Step 4 (Windows only):"})," Use RockdevTool to switch to ",(0,i.jsx)(o.strong,{children:"Maskrom Mode"})," (see Windows section below).\n",(0,i.jsx)(o.img,{src:n(4372).A+"",width:"970",height:"456"}),"\n",(0,i.jsx)(o.img,{src:n(2294).A+"",width:"970",height:"456"})]}),"\n"]}),"\n",(0,i.jsx)(o.h3,{id:"3-check-the-status",children:"3. Check the status"}),"\n",(0,i.jsx)(o.p,{children:"If successful, your flashing device should be able to connect to the Fydetab Duo."}),"\n",(0,i.jsxs)(o.blockquote,{children:["\n",(0,i.jsx)(o.p,{children:"[!NOTE]\nOn devices with first generation firmware: The device\u2019s LED will remain off, and the screen will stay completely dark."}),"\n",(0,i.jsx)(o.p,{children:"On devices with later generation firmware: The screen displays an image indicating that the device is in Loader Mode. Note that this image may not always appear due to display issues."}),"\n"]}),"\n",(0,i.jsx)(o.h2,{id:"utilising-an-image-flashing-tool",children:"Utilising an image flashing tool"}),"\n",(0,i.jsx)(o.p,{children:"Unix based systems can flash images onto the Fydetab Duo by using Rockchip's upgrade tool. Windows systems use their RKDevTool."}),"\n",(0,i.jsx)(o.h3,{id:"using-linux",children:"Using Linux"}),"\n",(0,i.jsxs)(o.p,{children:["The linux upgrade tool is a proprietary solution developed by Rockchip for flashing images onto various storage devices such as SPI, eMMC, SD Card, and more. Unlike open-source ",(0,i.jsx)(o.a,{href:"https://github.com/rockchip-linux/rkdeveloptool",children:"rkdeveloptool"})," software, this tool does not provide access to its source code. Instead, it is distributed solely in ",(0,i.jsx)(o.strong,{children:"binary executable"})," form, allowing users to utilize the provided executable files for the purpose of flashing images onto their desired storage devices."]}),"\n",(0,i.jsxs)(o.p,{children:["The ",(0,i.jsx)(o.code,{children:"upgrade_tool"})," binary can be downloaded from within openFyde's GitHub repository: ",(0,i.jsx)(o.a,{href:"https://github.com/openFyde/foundation-rk3588/blob/main/rk3588-image-maker/Linux_Upgrade_Tool",children:"openFyde/foundation-rk3588"}),"."]}),"\n",(0,i.jsxs)(o.p,{children:["Checkout the following ",(0,i.jsx)(o.a,{href:"https://github.com/vicharak-in/Linux_Upgrade_Tool",children:"GitHub repository"})," regarding required software dependencies and usage."]}),"\n",(0,i.jsx)(o.h4,{id:"download--installation",children:"Download & installation"}),"\n",(0,i.jsxs)(o.p,{children:["Follow the Link ",(0,i.jsx)(o.a,{href:"https://github.com/openFyde/foundation-rk3588/blob/main/rk3588-image-maker/Linux_Upgrade_Tool/upgrade_tool",children:"upgrade_tool"})," and download the file in raw format onto your computer. The raw download button on GitHub is located at the top right corner of the page as shown in the image below. Any location will do to save and execute the file (e.g. ",(0,i.jsx)(o.code,{children:"~/Downloads/"}),", ",(0,i.jsx)(o.code,{children:"/opt/Linux_Update_Tool/"}),", ",(0,i.jsx)(o.code,{children:"/usr/bin/"}),")."]}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{alt:"github raw download button",src:n(7187).A+"",width:"2094",height:"411"})}),"\n",(0,i.jsx)(o.p,{children:"Open a terminal and make the downloaded file executable:"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:"sudo chmod +x /path/to/upgrade_tool\n"})}),"\n",(0,i.jsx)(o.h4,{id:"flash-an-image",children:"Flash an image"}),"\n",(0,i.jsx)(o.admonition,{type:"note",children:(0,i.jsx)(o.p,{children:"Unarchive compressed downloaded images using your favourite tool before flashing them!"})}),"\n",(0,i.jsx)(o.p,{children:"Fire up a terminal session and issue the following command:"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:"sudo ./path/to/upgrade_tool uf /path/to/unarchived/image-name.img\n"})}),"\n",(0,i.jsx)(o.h3,{id:"using-macos",children:"Using macOS"}),"\n",(0,i.jsxs)(o.blockquote,{children:["\n",(0,i.jsx)(o.p,{children:"Require macOS > 10.15"}),"\n"]}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["Download the upgrade tools ",(0,i.jsx)(o.a,{href:"https://download.fydeos.io/utils/upgrade_tool_v2.3_mac.zip",children:"here"}),"."]}),"\n",(0,i.jsx)(o.li,{children:"Unarchive the downloaded update image file using your favourite tool."}),"\n",(0,i.jsxs)(o.li,{children:["Fire up a terminal session and issue the following commands:","\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:"chmod +x upgrade_tool\nsudo ./upgrade_tool uf <filename of the update image>.img\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(o.h3,{id:"using-windows",children:"Using Windows"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsxs)(o.p,{children:["Download and install the ",(0,i.jsx)(o.a,{href:"https://dl.radxa.com/tools/windows/DriverAssitant_v5.0.zip",children:"Rockchip Driver"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsxs)(o.p,{children:["Download the RKDevTool ",(0,i.jsx)(o.a,{href:"https://download.fydeos.io/utils/windows_RKDevTool_Release_v2.92.zip",children:"here"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsxs)(o.p,{children:["It's a GUI tool, so it's pretty self-explanatory. For detailed instructions, ",(0,i.jsx)(o.a,{href:"https://wiki.radxa.com/Android/android_tool",children:"here"})," and ",(0,i.jsx)(o.a,{href:"https://opensource.rock-chips.com/wiki_AndroidTool",children:"here"})," are good references."]}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"To flash the official images use the second tab of the software"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{src:n(53).A+"",width:"966",height:"414"})}),"\n",(0,i.jsx)(o.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.a,{href:"https://opensource.rock-chips.com/wiki_Upgradetool",children:"Linux_Upgrade_Tool - Rockchip open source Document"})}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.a,{href:"https://github.com/vicharak-in/Linux_Upgrade_Tool",children:"vicharak-in/Linux_Upgrade_Tool: // Rockchip Upgrade Tool for flashing images to Linux"})}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.a,{href:"https://wiki.radxa.com/Rock/flash_the_image",children:"Rock/flash the image - Radxa Wiki"})}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.a,{href:"https://dl.radxa.com/tools/",children:"Radxa Index & Download of tools"})})]})}function c(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},53:(e,o,n)=>{n.d(o,{A:()=>i});const i=n.p+"assets/images/flashing_official_imges_windows-46683da21320531641998ee5e6155442.png"},4372:(e,o,n)=>{n.d(o,{A:()=>i});const i=n.p+"assets/images/go_maskrom_mode-c89da62ed52ff0716a05e6eee1f85120.png"},2294:(e,o,n)=>{n.d(o,{A:()=>i});const i=n.p+"assets/images/maskrom_mode_in_rockdev-9e3e505c2b3a91f6cf1145bf796659ca.png"},7187:(e,o,n)=>{n.d(o,{A:()=>i});const i=n.p+"assets/images/upgrade-tool_github_linux_download-raw-76581704eda1c38ea58851701e26691f.jpg"},8453:(e,o,n)=>{n.d(o,{R:()=>a,x:()=>d});var i=n(6540);const t={},s=i.createContext(t);function a(e){const o=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(s.Provider,{value:o},e.children)}}}]);