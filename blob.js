/**
 功能：文件流处理
 作者：程杰
 邮箱：chengjie@cebc.cn
 创建时间：2021/1/7
 **/

import store from "../../store";

// 文件下载
export function downloadAdditionalFile (res, fileName) {
  if ('msSaveOrOpenBlob' in navigator) {
    window.navigator.msSaveOrOpenBlob(res.data, fileName); //ie使用的下载方式
  } else {
    let url = window.URL.createObjectURL(new Blob([res.data])) // 谷歌浏览器的下载方式
    let link = document.createElement('a')
    link.style.display = 'none'
    link.href = url
    link.setAttribute('download', fileName)
    document.body.appendChild(link)
    link.click()
  }
}
// 文件下载 兼容Ie
export function downloadOneFiles (res) {
  // let filename = res.headers['content-disposition'].replace('attachment;filename=', '');
  // const filename = res.headers('content-disposition').split(';')[1].split('filename=')[1];
  let str = res.headers['content-disposition'].indexOf('=')
  let filename = res.headers['content-disposition'].slice(str + 1);

  let conentType = res.headers['content-type'];
  const blob = new Blob([res.data], { type: conentType });
  if (typeof window.navigator.msSaveBlob !== 'undefined') {
    window.navigator.msSaveBlob(blob, filename)
  } else {
    const blobURL = window.URL.createObjectURL(blob)
    const tempLink = document.createElement('a')
    tempLink.style.display = 'none'
    tempLink.href = blobURL
    tempLink.setAttribute('download', filename)
    if (typeof tempLink.download === 'undefined') {
      tempLink.setAttribute('target', '_blank')
    }
    document.body.appendChild(tempLink)
    tempLink.click()
    document.body.removeChild(tempLink)
    window.URL.revokeObjectURL(blobURL)
  }
  store.commit("app/SET_LOADING",false);
}

// excel 文件导出下载
export function exportVoucherExcel (res) {
  let str = res.headers['content-disposition'].indexOf('=')
  let filename = res.headers['content-disposition'].slice(str + 1);
  let blob=new Blob([res.data],{type:"application/vnd.ms-excel"});//然后创建blob对象，文件类型设置为excel的类型
  let blobURL = window.URL.createObjectURL(blob);//然后创建一个可访问的URL
  let tempLink = document.createElement('a');//创建a标签去下载
  tempLink.style.display = 'none';
  tempLink.href = blobURL;
  tempLink.setAttribute('download', filename+".xlsx");
  if (typeof tempLink.download === 'undefined') {
    tempLink.setAttribute('target', '_blank');
  }
  document.body.appendChild(tempLink);
  tempLink.click();
  document.body.removeChild(tempLink);
  window.URL.revokeObjectURL(blobURL);
}
