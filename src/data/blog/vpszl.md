---
title: "保存一点创建VPS服务器协议的资料"
description: "最近发现很多有需要的东西在电脑上没保存，一直找不到又得重先去搜索"
pubDatetime: 2025-06-27T12:00:00Z
author: "简墨"
tags: ["资料"]
---
最近发现很多有需要的东西在电脑上没保存，一直找不到又得重先去搜索，以下是一些常用的代码：
S-UI面板安装所需的各种经典的版本：
VERSION=1.3.3 && bash <(curl -Ls https://raw.githubusercontent.com/alireza0/s-ui/$VERSION/install.sh) $VERSION

VERSION=1.2.2 && bash <(curl -Ls https://raw.githubusercontent.com/alireza0/s-ui/$VERSION/install.sh) $VERSION

VERSION=1.3.2 && bash <(curl -Ls https://raw.githubusercontent.com/alireza0/s-ui/$VERSION/install.sh) $VERSION

VERSION=1.0.0 && bash <(curl -Ls https://raw.githubusercontent.com/alireza0/s-ui/$VERSION/install.sh) $VERSION

bash <(curl -Ls https://raw.githubusercontent.com/alireza0/s-ui/master/install.sh)

本地电脑安装S-UI 面板要用到的各类代码：

ssh root@45.62.108.151 -p 22

ssh -L 2095:127.0.0.1:2095 root@45.62.108.151

HKW13hxs3IdU

http://45.62.108.151:2095/app/

http://127.0.0.1:2095/app/

重启 SSH 服务：sudo systemctl restart sshd

以后再来填加，备用
