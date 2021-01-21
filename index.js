/**
 * params 全局静态字典列表
 */

const metadata = {
  financingStatus: [ // 融资状态
    { value: 'APPLY_FINANCING', label: '申请融资' },
    { value: 'REFUSE_FINANCING', label: '驳回融资' },
    { value: 'FINANCING_REVIEW', label: '资方审核' },
    { value: 'FINANCING_CONFIRM', label: '融资确认' },
    { value: 'CLOSE', label: '融资关闭' },
    { value: 'WAIT_LOAD', label: '待放款' },
    { value: 'LOAD_SUCCESS', label: '已放款' }
  ],
  payMoneyStatus: [ // 还款状态
    { value: 'UN_REPAYMENT', label: '未还款' },
    { value: 'REPAID', label: '已还款' },
    { value: 'OVERDUE_UN_REPAYMENT', label: '逾期未还款' },
  ],
  loanStatus: [
    { value: 'LOAD_SUCCESS', label: '已放款' }
  ],
  unitArr: ['十', '亿', '千', '百', '十', '万', '千', '百', '十', '元', '角', '分'],
  file_list: [
    { url: require('@as/images/ZIP.png'), name: '文档文档文档文档文档.zip' },
    { url: require('@as/images/RAR.png'), name: '宣城市天地人合建筑管理…' },
    { url: require('@as/images/PDF.png'), name: '这里是文件的名称.pdf' },
    { url: require('@as/images/DOC.png'), name: '这里是文件的名称.doc' },
    { url: require('@as/images/DOCX.png'), name: '这里是文件的名称.docx' },
    { url: require('@as/images/JPEG.png'), name: '这里是文件的名称.jpeg' },
    { url: require('@as/images/JPG.png'), name: '这里是文件的名称.jpg' },
    { url: require('@as/images/PNG.png'), name: '这里是文件的名称.png' },
  ],

}

export default metadata
