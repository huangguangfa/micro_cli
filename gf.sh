#!/bin/bash
set -e
shFilePath=$(cd `dirname $0`; pwd)
#系统列表名称
sysList=('app' 'car' 'login' 'sys' 'all')
IP="106.54.70.48"
#获取当前分支
branch=$(git symbolic-ref --short HEAD)
#开始
echo "\033[35m 当前分支是：${branch} \033[0m"
read -p $'\033[36m 准备进行自动化部署操作、是否继续 y or n  \033[0m ' isbuild
if [ "$isbuild" != 'y' ];then
    exit
fi
echo "\033[36m 目前四个个系统 \033[0m \033[35m【 ${sysList[*]} 】 \033[0m "
read -p $'\033[36m 请选择部署的项目 或 输入 all \033[0m' changeSysName
isSys=$(echo "${sysList[@]}" | grep -wq "${changeSysName}" &&  echo "yes" || echo "no")
#是否存在系统
if [ "$isSys" == 'no' ];then
    echo "\033[31m 没有对应的系统、已退出 \033[0m"
    exit
fi

#没有buildFile文件夹的话就新建一个
if [ -d "$shFilePath/buildFile" ]; then
    rm -rf './buildFile/'
    mkdir "buildFile"  
fi

#项目文件夹名称
fileName=""
#打包
function build() {
    cd $1
    echo "\033[32m $1准备打包... \033[0m" 
    yarn build 
    mv $shFilePath/$1/$2 $shFilePath/buildFile
    echo "\033[32m $1打包成功、包移动至buildFile \033[0m" 
}
#上传服务器
function uploadServe() {
    rsync -a -e "ssh -p 22" $shFilePath/buildFile*  root@$IP:/home/
    echo "\033[32m 自动化部署成功！ \033[0m"
}
#单个项目部署文件名转换
function getFileName() {
    case $1 in
        'app')
            fileName="main-app";;
        'car')
            fileName="subapp-car";;
        'login')
            fileName="subapp-login";;
        'sys')
            fileName="subapp-sys";;
        *)
            echo "error"
    esac
}
#按需打包
if [ "$changeSysName" == 'all' ];then
    for i in "${sysList[@]}"; do
        if [ "$i" != 'app' ];then
            cd ..
        fi
        if [ "$i" != 'all' ];then
            getFileName $i
            build $fileName $i
        fi
    done
else
    getFileName $changeSysName
    build $fileName $changeSysName
fi

#部署
uploadServe 









