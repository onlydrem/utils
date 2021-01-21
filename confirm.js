/**
 功能：提示
 作者：程杰
 邮箱：chengjie@cebc.cn
 创建时间：2021/1/7
 **/

import { MessageBox } from "element-ui";
import Vue from "vue";

const postVo = {
    text: "确认执行此次操作吗？",
    title: "提示",
    buttonText: "确定",
    callback: (action) => {
        console.log("action", action)
    },
    cancelButtonClass: 'cancel-button-class',
    confirmButtonClass: 'confirm-button-class'
}
export function confirmMsg(postVo) {
    return MessageBox.confirm(postVo.text, postVo.title, {
        cancelButtonText: "取消",
        confirmButtonText: postVo.buttonText,
        center: true,
        callback: postVo.callback,
        cancelButtonClass: postVo.cancelButtonClass,
        confirmButtonClass: postVo.confirmButtonClass
    });
}

export function messageTips(tips = "恭喜你，这是一条成功消息", type = "") {
    setTimeout(() => {
        this.$message({
            message: tips,
            type: type
        });
    }, 500);
}

export function finishMessage(text = "修改成功") {
    const v = new Vue();
    const h = v.$createElement;
    const that = this;
    setTimeout(() => {
        v.$message({
            offset: 300,
            iconClass: "undefined",
            message: h(
                "div", {
                    style: " width:230px; height: 104px;"
                }, [
                    h("img", {
                        style: "width: 64px;height:64px; border-radius: 50%; margin: 8px auto",
                        attrs: { src: require("../../assets/images/success.png") }
                    }),
                    h(
                        "span", {
                            style: "display: inline-block; width:100%; text-align: center; line-height: 20px; color: #fff"
                        },
                        text
                    )
                ]
            ),
            center: true,
            duration: 3000,
            customClass: "icon-success",
            withoutAnimation: true
        });
    });
}
