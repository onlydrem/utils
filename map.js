
const PDF = require('@as/images/PDF.png')
const ZIP = require('@as/images/ZIP.png')
const RAR = require('@as/images/RAR.png')
const DOC = require('@as/images/DOC.png')
const DOCX = require('@as/images/DOCX.png')
const JPEG = require('@as/images/JPEG.png')
const JPG = require('@as/images/JPG.png')
const PNG = require('@as/images/PNG.png')
const File = require('@as/images/file.png')

import BOC from '@as/images/bank-zg.png'//中国
import ICBC from '@as/images/bank-gs.png'//工商
import CCB from '@as/images/bank-js.png'//建设
import ABC from '@as/images/bank-ny.png'//建设
import CMB from '@as/images/bank-zs.png'//招商
import SHBANK from '@as/images/bank-sh.png'//招商
import CITIC from '@as/images/bank-zx.png'//中信
import CZBANK from '@as/images/bank-cz.png'//浙商
import WNBANK from '@as/images/bank-wn.png'//浙商

export function mapImages (fileType) {
  var map = new Map();
  map.set('pdf', PDF)
  map.set('PDF', PDF)
  map.set('zip', ZIP)
  map.set('ZIP', ZIP)
  map.set('rar', RAR)
  map.set('RAR', RAR)
  map.set('doc', DOC)
  map.set('DOC', DOC)
  map.set('docx', DOCX)
  map.set('DOCX', DOCX)
  map.set('jpeg', JPEG)
  map.set('JPEG', JPEG)
  map.set('jpg', JPG)
  map.set('JPG', JPG)
  map.set('png', PNG)
  map.set('PNG', PNG)
  map.set(null, File)
  return map.get(fileType)
}

export function mapIcon () {
  var map = new Map()
  map.set('voucher_count_reject_issue_task', 're-issue')
  map.set('voucher_count_check_issue_task', 'issue-review')
  map.set("voucher_count_confirm_reject_task", 'rejection-confirmation')
  map.set("financing_signature_task", 'financing-sign')
  return map
}

export function mapCorePath () {
  var map = new Map()
  map.set('voucher_count_reject_issue_task', "reissue")
  map.set('voucher_count_check_issue_task', 'issue-review')
  map.set("voucher_count_confirm_reject_task", 're-confirmation')
  map.set("financing_signature_task", 'financing-signature')
  return map
}
export function mapCoreColor () {
  var map = new Map()
  map.set('voucher_count_reject_issue_task', "card-panel-num1")
  map.set('voucher_count_check_issue_task', "card-panel-num2")
  map.set("voucher_count_confirm_reject_task", "card-panel-num3")
  map.set("financing_signature_task", "card-panel-num4")
  return map
}
export function mapOrdPath (name) {
  var map = new Map()
  map.set('voucher_count_reject_issue_task', "rejection-issue")
  map.set("voucher_count_sign_for_task", 'receipt-certificate')
  map.set("voucher_count_reject_transfer_task", 'receipt-assignment')
  map.set("voucher_count_check_transfer_task", 'transfer-review')
  map.set("voucher_count_confirm_reject_task", 'rejection-confirmation')
  map.set("financing_signature_task", 'financing-signature')
  return map.get(name)
}
export function mapOrdColor (color) {
  var map = new Map()
  map.set('voucher_count_reject_issue_task', "card-panel-num1")
  map.set("voucher_count_sign_for_task", "card-panel-num2")
  map.set("voucher_count_reject_transfer_task", "card-panel-num3")
  map.set("voucher_count_check_transfer_task", "card-panel-num4")
  map.set("voucher_count_confirm_reject_task", "card-panel-num5")
  map.set("financing_signature_task", "card-panel-num6")
  return map.get(color)
}
export function mapOrdIcon (icon) {
  var map = new Map()
  map.set('voucher_count_reject_issue_task', "re-issue")
  map.set("voucher_count_sign_for_task", "receipt-certificate")
  map.set("voucher_count_reject_transfer_task", "reject-transfer")
  map.set("voucher_count_check_transfer_task", "transfer-review")
  map.set("voucher_count_confirm_reject_task", "rejection-confirmation")
  map.set("financing_signature_task", "financing-sign")
  return map.get(icon)
}





  export function getUrl(code) {
      switch (code) {
        case 'shbank': //上海
          return SHBANK
          break
        case 'citic': //中信
          return CITIC
          break
        case 'cmb': //招商
          return CMB
          break
        case 'boc': //中国
          return BOC
          break
        case 'abc': //农业
          return ABC
          break
        case 'icbc': //工商
          return ICBC
          break
        case 'ccb': //建设
          return CCB
          break
        case 'czbank': //浙商
          return CZBANK
          break
        case 'wrcb': //皖南
          return WNBANK
          break

      }
}
