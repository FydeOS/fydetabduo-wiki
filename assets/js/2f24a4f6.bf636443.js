"use strict";(self.webpackChunkfydetab_wiki=self.webpackChunkfydetab_wiki||[]).push([[570],{1960:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var o=i(4848),r=i(8453);const t={id:"WOR",title:"Windows on ARM"},s=void 0,l={id:"os-release-board/WOR",title:"Windows on ARM",description:"Windows on ARM, for Fydetab Duo.",source:"@site/docs/os-release-board/7.Windows on ARM.md",sourceDirName:"os-release-board",slug:"/os-release-board/WOR",permalink:"/os-release-board/WOR",draft:!1,unlisted:!1,editUrl:"https://github.com/FydeOS/fydetabduo-wiki/tree/main/docs/os-release-board/7.Windows on ARM.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"WOR",title:"Windows on ARM"},sidebar:"tutorialSidebar",previous:{title:"AOSP",permalink:"/os-release-board/aosp"},next:{title:"\ud83c\udf5e BredOS",permalink:"/os-release-board/BredOS"}},d={},a=[{value:"\ud83d\udee0\ufe0f Status",id:"\ufe0f-status",level:3},{value:"\u2705 Working",id:"-working",level:4},{value:"\u274c Not Working",id:"-not-working",level:4},{value:"\ud83d\udccb Pre-requirements",id:"-pre-requirements",level:3},{value:"\ud83c\udf10 Getting the Windows Image for ARM",id:"-getting-the-windows-image-for-arm",level:3},{value:"\ud83d\udcbe Flashing the UEFI Firmware to Your SD Card",id:"-flashing-the-uefi-firmware-to-your-sd-card",level:3},{value:"\ud83d\ude80 Booting Windows on ARM",id:"-booting-windows-on-arm",level:3}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Windows on ARM, for Fydetab Duo."}),"\n"]}),"\n",(0,o.jsx)("img",{src:"/img/Windows_Fydetab.jpeg",width:"700",alt:"Example Image"}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsx)(n.p,{children:"Windows on ARM is currently in a developmental state on the Fydetab Duo, and some features may not work as expected."})}),"\n",(0,o.jsx)(n.h3,{id:"\ufe0f-status",children:"\ud83d\udee0\ufe0f Status"}),"\n",(0,o.jsx)(n.h4,{id:"-working",children:"\u2705 Working"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Display (unaccelerated)"}),"\n",(0,o.jsx)(n.li,{children:"Speakers"}),"\n",(0,o.jsx)(n.li,{children:"SD/eMMC"}),"\n",(0,o.jsx)(n.li,{children:"Camera"}),"\n",(0,o.jsx)(n.li,{children:"Folio Keyboard & Touchpad"}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"-not-working",children:"\u274c Not Working"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"All other features are currently unsupported."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"-pre-requirements",children:"\ud83d\udccb Pre-requirements"}),"\n",(0,o.jsx)(n.p,{children:"Before you begin, ensure you have the following:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"MicroSD Card"}),"\n",(0,o.jsx)(n.li,{children:"USB Dongle"}),"\n",(0,o.jsx)(n.li,{children:"USB Drive"}),"\n",(0,o.jsx)(n.li,{children:"UEFI Firmware"}),"\n",(0,o.jsx)(n.li,{children:"Windows Image"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"-getting-the-windows-image-for-arm",children:"\ud83c\udf10 Getting the Windows Image for ARM"}),"\n",(0,o.jsxs)(n.p,{children:["To obtain the correct Windows image for ARM architecture, follow ",(0,o.jsx)(n.a,{href:"https://worproject.com/guides/getting-windows-images",children:"this guide"}),". After downloading the image, use a tool like ",(0,o.jsx)(n.strong,{children:"Rufus"})," to flash the Windows on ARM image to your USB drive."]}),"\n",(0,o.jsx)(n.h3,{id:"-flashing-the-uefi-firmware-to-your-sd-card",children:"\ud83d\udcbe Flashing the UEFI Firmware to Your SD Card"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Download the UEFI Firmware"}),": Get the latest UEFI firmware for Fydetab Duo from the ",(0,o.jsx)(n.a,{href:"https://github.com/edk2-porting/edk2-rk3588/releases",children:"official repository"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Prepare the MicroSD Card"}),": Use a tool like ",(0,o.jsx)(n.strong,{children:"Balena Etcher"})," or ",(0,o.jsx)(n.strong,{children:"Rufus"})," to flash the UEFI firmware onto your MicroSD card."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Insert the MicroSD Card"}),": Carefully insert the MicroSD card into the Fydetab Duo, but leave it slightly protruding\u2014do not fully insert it."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Boot into UEFI"}),": Power on your device, and it should boot directly into the UEFI interface."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"-booting-windows-on-arm",children:"\ud83d\ude80 Booting Windows on ARM"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Plug in the USB Dongle"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Connect Power"}),": Attach the power cable to the USB dongle to ensure sufficient power supply."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Insert the USB Drive"}),": Plug the prepared USB drive into the dongle."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Boot Windows"}),": Power on your device, and it will boot into Windows on ARM."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var o=i(6540);const r={},t=o.createContext(r);function s(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);