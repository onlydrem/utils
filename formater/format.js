/**
 功能：
 作者：程杰
 邮箱：chengjie@cebc.cn
 创建时间：2021/1/6
 **/
/**
 *
 * @param {number} num  千分位 保留两位小数
 */
export function toThousandFilter (num) {
  if (!num) {
    return num + '.00'
  } else {
    return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
  }
}

/**
 *
 * @param {num } num // 千分位 保留两位小数
 */
export function price (a) {
  if(a == null || a == undefined) return ''
  var num = Number(a);
  if (!num) { // 等于0
    return num + '.00';
  } else { // 不等于0
    num = Math.round((num) * 100) / 10000;
    num = num.toFixed(2);
    num += ''; // 转成字符串
    var reg = num.indexOf('.') > -1 ? /(\d{1,3})(?=(?:\d{3})+\.)/g : /(\d{1,3})(?=(?:\d{3})+$)/g; // 千分符的正则
    return num.replace(reg, '$1,') // 千分位格式化
  }
}

/**
 *  金额转大写
 * @param num
 * @returns {any}
 */
export function numParse (num) {
  var num = Number(num);
  var map = new Map();
  map.set(0, '零')
  map.set(1, '壹')
  map.set(2, '贰')
  map.set(3, '叁')
  map.set(4, '肆')
  map.set(5, '伍')
  map.set(6, '陆')
  map.set(7, '柒')
  map.set(8, '捌')
  map.set(9, '玖')
  return map.get(num)
}

/**
 *  阿拉伯数字转换成大写汉字
 * @param money
 * @returns {string}
 */
export function numberParseChina (money) {
  // 汉字的数字
  var cnNums = new Array('零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖');
  // 基本单位
  var cnIntRadice = new Array('', '拾', '佰', '仟');
  // 对应整数部分扩展单位
  var cnIntUnits = new Array('', '万', '亿', '兆');
  // 对应小数部分单位
  var cnDecUnits = new Array('角', '分', '毫', '厘');
  // 整数金额时后面跟的字符
  var cnInteger = '整';
  // 整型完以后的单位
  var cnIntLast = '圆';
  // 最大处理的数字
  var maxNum = 999999999999999.9999;
  // 金额整数部分
  var integerNum;
  // 金额小数部分
  var decimalNum;
  // 输出的中文金额字符串
  var chineseStr = '';
  // 分离金额后用的数组，预定义
  var parts;
  if (money == '') { return ''; }
  money = parseFloat(money);
  if (money >= maxNum) {
    // 超出最大处理数字
    return '';
  }
  if (money == 0) {
    chineseStr = cnNums[0] + cnIntLast + cnInteger;
    return chineseStr;
  }
  // 转换为字符串
  money = money.toString();
  if (money.indexOf('.') == -1) {
    integerNum = money;
    decimalNum = '';
  } else {
    parts = money.split('.');
    integerNum = parts[0];
    decimalNum = parts[1].substr(0, 4);
  }
  // 获取整型部分转换
  if (parseInt(integerNum, 10) > 0) {
    var zeroCount = 0;
    var IntLen = integerNum.length;
    for (var i = 0; i < IntLen; i++) {
      var n = integerNum.substr(i, 1);
      var p = IntLen - i - 1;
      var q = p / 4;
      var m = p % 4;
      if (n == '0') {
        zeroCount++;
      } else {
        if (zeroCount > 0) {
          chineseStr += cnNums[0];
        }
        // 归零
        zeroCount = 0;
        chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
      }
      if (m === 0 && zeroCount < 4) {
        chineseStr += cnIntUnits[q];
      }
    }
    chineseStr += cnIntLast;
  }
  // 小数部分
  if (decimalNum != '') {
    var decLen = decimalNum.length;
    // eslint-disable-next-line no-redeclare
    for (var i = 0; i < decLen; i++) {
      // eslint-disable-next-line no-redeclare
      var n = decimalNum.substr(i, 1);
      if (n != '0') {
        chineseStr += cnNums[Number(n)] + cnDecUnits[i];
      }
    }
  }
  if (chineseStr == '') {
    chineseStr += cnNums[0] + cnIntLast + cnInteger;
  } else if (decimalNum == '') {
    chineseStr += cnInteger;
  }
  return chineseStr;
}

/**
 *  小写转成大写金额
 * @param number
 * @returns {string}
 */
export function fTransformNumber(number) {
  var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  var chins = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
  var money = ['元', '拾', '佰', '仟', '万', '拾', '佰', '仟', '亿', '', '', '']
  var money1 = ['角', '分']
  var numbers = number.split('.')
  var chin = ''
  var chin1 = ''
  for (var i = numbers[0].length; i > 0; i--) {
    var s = numbers[0].charAt(numbers[0].length - i)
    chin += chins[s] + money[i - 1]
  }
  if (numbers[1] != null) {
    for (var j = 0; j < numbers[1].length; j++) {
      var b = numbers[1].charAt(j)
      chin1 += chins[b] + money1[j]
    }
  }
  var china = chin + chin1
  return china
}
