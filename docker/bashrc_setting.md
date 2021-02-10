# bashの設定
作成日時:2021/2/10

## 1.bash
dockerで立ち上げたコンテナのターミナルは`bash`というものになる

## 2.bashrc
bashrcは、ターミナルを立ち上げた時のbash設定分部。立ち上げるタイミングで毎度読み込まれる。

### 設定

1. bashに色をつけたいとき
```
# Costom terminal
if [ -t 1 ]; then
    textred="\033[1;31m"
    textgreen="\033[1;32m"
    textyellow="\033[1;33m"
    textblue="\033[1;34m"
    textreset="\033[0m"
fi

if [ $UID -eq 0 ]; then
    PS1="\[\033[32m\]\u@\h\[\033[00m\]:\[\033[33m\]\w\[\033[00m\]\\$ "
else
    PS1="\[\033[34m\]\u@\h\[\033[00m\]:\[\033[33m\]\w\[\033[00m\]\\$ "
fi

error() { echo -e $textred$@$textreset > /dev/stderr; }
warning() { echo -e $textyellow$@$textreset > /dev/stderr; }
```
