import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-CWm8iOWw.js';
import 'html2canvas-pro';

const QRCodeLimitLength = [
  [17, 14, 11, 7],
  [32, 26, 20, 14],
  [53, 42, 32, 24],
  [78, 62, 46, 34],
  [106, 84, 60, 44],
  [134, 106, 74, 58],
  [154, 122, 86, 64],
  [192, 152, 108, 84],
  [230, 180, 130, 98],
  [271, 213, 151, 119],
  [321, 251, 177, 137],
  [367, 287, 203, 155],
  [425, 331, 241, 177],
  [458, 362, 258, 194],
  [520, 412, 292, 220],
  [586, 450, 322, 250],
  [644, 504, 364, 280],
  [718, 560, 394, 310],
  [792, 624, 442, 338],
  [858, 666, 482, 382],
  [929, 711, 509, 403],
  [1003, 779, 565, 439],
  [1091, 857, 611, 461],
  [1171, 911, 661, 511],
  [1273, 997, 715, 535],
  [1367, 1059, 751, 593],
  [1465, 1125, 805, 625],
  [1528, 1190, 868, 658],
  [1628, 1264, 908, 698],
  [1732, 1370, 982, 742],
  [1840, 1452, 1030, 790],
  [1952, 1538, 1112, 842],
  [2068, 1628, 1168, 898],
  [2188, 1722, 1228, 958],
  [2303, 1809, 1283, 983],
  [2431, 1911, 1351, 1051],
  [2563, 1989, 1423, 1093],
  [2699, 2099, 1499, 1139],
  [2809, 2213, 1579, 1219],
  [2953, 2331, 1663, 1273]
];
var QRMode;
(function(QRMode2) {
  QRMode2[QRMode2["MODE_NUMBER"] = 1] = "MODE_NUMBER";
  QRMode2[QRMode2["MODE_ALPHA_NUM"] = 2] = "MODE_ALPHA_NUM";
  QRMode2[QRMode2["MODE_8BIT_BYTE"] = 4] = "MODE_8BIT_BYTE";
  QRMode2[QRMode2["MODE_KANJI"] = 8] = "MODE_KANJI";
})(QRMode || (QRMode = {}));
var QRErrorCorrectLevel;
(function(QRErrorCorrectLevel2) {
  QRErrorCorrectLevel2[QRErrorCorrectLevel2["L"] = 1] = "L";
  QRErrorCorrectLevel2[QRErrorCorrectLevel2["M"] = 0] = "M";
  QRErrorCorrectLevel2[QRErrorCorrectLevel2["Q"] = 3] = "Q";
  QRErrorCorrectLevel2[QRErrorCorrectLevel2["H"] = 2] = "H";
})(QRErrorCorrectLevel || (QRErrorCorrectLevel = {}));
var QRMaskPattern;
(function(QRMaskPattern2) {
  QRMaskPattern2[QRMaskPattern2["PATTERN000"] = 0] = "PATTERN000";
  QRMaskPattern2[QRMaskPattern2["PATTERN001"] = 1] = "PATTERN001";
  QRMaskPattern2[QRMaskPattern2["PATTERN010"] = 2] = "PATTERN010";
  QRMaskPattern2[QRMaskPattern2["PATTERN011"] = 3] = "PATTERN011";
  QRMaskPattern2[QRMaskPattern2["PATTERN100"] = 4] = "PATTERN100";
  QRMaskPattern2[QRMaskPattern2["PATTERN101"] = 5] = "PATTERN101";
  QRMaskPattern2[QRMaskPattern2["PATTERN110"] = 6] = "PATTERN110";
  QRMaskPattern2[QRMaskPattern2["PATTERN111"] = 7] = "PATTERN111";
})(QRMaskPattern || (QRMaskPattern = {}));
class QRBitBuffer {
  constructor() {
    this.buffer = [];
    this.length = 0;
  }
  get(index) {
    const bufIndex = Math.floor(index / 8);
    return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) == 1;
  }
  put(num, length) {
    for (let i = 0; i < length; i++) {
      this.putBit((num >>> length - i - 1 & 1) == 1);
    }
  }
  getLengthInBits() {
    return this.length;
  }
  putBit(bit) {
    const bufIndex = Math.floor(this.length / 8);
    if (this.buffer.length <= bufIndex) {
      this.buffer.push(0);
    }
    if (bit) {
      this.buffer[bufIndex] |= 128 >>> this.length % 8;
    }
    this.length++;
  }
}
class QRRSBlock {
  constructor(totalCount, dataCount) {
    this.RS_BLOCK_TABLE = [
      [1, 26, 19],
      [1, 26, 16],
      [1, 26, 13],
      [1, 26, 9],
      [1, 44, 34],
      [1, 44, 28],
      [1, 44, 22],
      [1, 44, 16],
      [1, 70, 55],
      [1, 70, 44],
      [2, 35, 17],
      [2, 35, 13],
      [1, 100, 80],
      [2, 50, 32],
      [2, 50, 24],
      [4, 25, 9],
      [1, 134, 108],
      [2, 67, 43],
      [2, 33, 15, 2, 34, 16],
      [2, 33, 11, 2, 34, 12],
      [2, 86, 68],
      [4, 43, 27],
      [4, 43, 19],
      [4, 43, 15],
      [2, 98, 78],
      [4, 49, 31],
      [2, 32, 14, 4, 33, 15],
      [4, 39, 13, 1, 40, 14],
      [2, 121, 97],
      [2, 60, 38, 2, 61, 39],
      [4, 40, 18, 2, 41, 19],
      [4, 40, 14, 2, 41, 15],
      [2, 146, 116],
      [3, 58, 36, 2, 59, 37],
      [4, 36, 16, 4, 37, 17],
      [4, 36, 12, 4, 37, 13],
      [2, 86, 68, 2, 87, 69],
      [4, 69, 43, 1, 70, 44],
      [6, 43, 19, 2, 44, 20],
      [6, 43, 15, 2, 44, 16],
      [4, 101, 81],
      [1, 80, 50, 4, 81, 51],
      [4, 50, 22, 4, 51, 23],
      [3, 36, 12, 8, 37, 13],
      [2, 116, 92, 2, 117, 93],
      [6, 58, 36, 2, 59, 37],
      [4, 46, 20, 6, 47, 21],
      [7, 42, 14, 4, 43, 15],
      [4, 133, 107],
      [8, 59, 37, 1, 60, 38],
      [8, 44, 20, 4, 45, 21],
      [12, 33, 11, 4, 34, 12],
      [3, 145, 115, 1, 146, 116],
      [4, 64, 40, 5, 65, 41],
      [11, 36, 16, 5, 37, 17],
      [11, 36, 12, 5, 37, 13],
      [5, 109, 87, 1, 110, 88],
      [5, 65, 41, 5, 66, 42],
      [5, 54, 24, 7, 55, 25],
      [11, 36, 12],
      [5, 122, 98, 1, 123, 99],
      [7, 73, 45, 3, 74, 46],
      [15, 43, 19, 2, 44, 20],
      [3, 45, 15, 13, 46, 16],
      [1, 135, 107, 5, 136, 108],
      [10, 74, 46, 1, 75, 47],
      [1, 50, 22, 15, 51, 23],
      [2, 42, 14, 17, 43, 15],
      [5, 150, 120, 1, 151, 121],
      [9, 69, 43, 4, 70, 44],
      [17, 50, 22, 1, 51, 23],
      [2, 42, 14, 19, 43, 15],
      [3, 141, 113, 4, 142, 114],
      [3, 70, 44, 11, 71, 45],
      [17, 47, 21, 4, 48, 22],
      [9, 39, 13, 16, 40, 14],
      [3, 135, 107, 5, 136, 108],
      [3, 67, 41, 13, 68, 42],
      [15, 54, 24, 5, 55, 25],
      [15, 43, 15, 10, 44, 16],
      [4, 144, 116, 4, 145, 117],
      [17, 68, 42],
      [17, 50, 22, 6, 51, 23],
      [19, 46, 16, 6, 47, 17],
      [2, 139, 111, 7, 140, 112],
      [17, 74, 46],
      [7, 54, 24, 16, 55, 25],
      [34, 37, 13],
      [4, 151, 121, 5, 152, 122],
      [4, 75, 47, 14, 76, 48],
      [11, 54, 24, 14, 55, 25],
      [16, 45, 15, 14, 46, 16],
      [6, 147, 117, 4, 148, 118],
      [6, 73, 45, 14, 74, 46],
      [11, 54, 24, 16, 55, 25],
      [30, 46, 16, 2, 47, 17],
      [8, 132, 106, 4, 133, 107],
      [8, 75, 47, 13, 76, 48],
      [7, 54, 24, 22, 55, 25],
      [22, 45, 15, 13, 46, 16],
      [10, 142, 114, 2, 143, 115],
      [19, 74, 46, 4, 75, 47],
      [28, 50, 22, 6, 51, 23],
      [33, 46, 16, 4, 47, 17],
      [8, 152, 122, 4, 153, 123],
      [22, 73, 45, 3, 74, 46],
      [8, 53, 23, 26, 54, 24],
      [12, 45, 15, 28, 46, 16],
      [3, 147, 117, 10, 148, 118],
      [3, 73, 45, 23, 74, 46],
      [4, 54, 24, 31, 55, 25],
      [11, 45, 15, 31, 46, 16],
      [7, 146, 116, 7, 147, 117],
      [21, 73, 45, 7, 74, 46],
      [1, 53, 23, 37, 54, 24],
      [19, 45, 15, 26, 46, 16],
      [5, 145, 115, 10, 146, 116],
      [19, 75, 47, 10, 76, 48],
      [15, 54, 24, 25, 55, 25],
      [23, 45, 15, 25, 46, 16],
      [13, 145, 115, 3, 146, 116],
      [2, 74, 46, 29, 75, 47],
      [42, 54, 24, 1, 55, 25],
      [23, 45, 15, 28, 46, 16],
      [17, 145, 115],
      [10, 74, 46, 23, 75, 47],
      [10, 54, 24, 35, 55, 25],
      [19, 45, 15, 35, 46, 16],
      [17, 145, 115, 1, 146, 116],
      [14, 74, 46, 21, 75, 47],
      [29, 54, 24, 19, 55, 25],
      [11, 45, 15, 46, 46, 16],
      [13, 145, 115, 6, 146, 116],
      [14, 74, 46, 23, 75, 47],
      [44, 54, 24, 7, 55, 25],
      [59, 46, 16, 1, 47, 17],
      [12, 151, 121, 7, 152, 122],
      [12, 75, 47, 26, 76, 48],
      [39, 54, 24, 14, 55, 25],
      [22, 45, 15, 41, 46, 16],
      [6, 151, 121, 14, 152, 122],
      [6, 75, 47, 34, 76, 48],
      [46, 54, 24, 10, 55, 25],
      [2, 45, 15, 64, 46, 16],
      [17, 152, 122, 4, 153, 123],
      [29, 74, 46, 14, 75, 47],
      [49, 54, 24, 10, 55, 25],
      [24, 45, 15, 46, 46, 16],
      [4, 152, 122, 18, 153, 123],
      [13, 74, 46, 32, 75, 47],
      [48, 54, 24, 14, 55, 25],
      [42, 45, 15, 32, 46, 16],
      [20, 147, 117, 4, 148, 118],
      [40, 75, 47, 7, 76, 48],
      [43, 54, 24, 22, 55, 25],
      [10, 45, 15, 67, 46, 16],
      [19, 148, 118, 6, 149, 119],
      [18, 75, 47, 31, 76, 48],
      [34, 54, 24, 34, 55, 25],
      [20, 45, 15, 61, 46, 16]
    ];
    this.totalCount = totalCount;
    this.dataCount = dataCount;
  }
  getRSBlocks(typeNumber, errorCorrectLevel) {
    const rsBlock = this.getRsBlockTable(typeNumber, errorCorrectLevel);
    if (rsBlock == void 0) {
      throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + errorCorrectLevel);
    }
    const length = rsBlock.length / 3;
    const list = [];
    for (let i = 0; i < length; i++) {
      const count = rsBlock[i * 3 + 0];
      const totalCount = rsBlock[i * 3 + 1];
      const dataCount = rsBlock[i * 3 + 2];
      for (let j = 0; j < count; j++) {
        list.push(new QRRSBlock(totalCount, dataCount));
      }
    }
    return list;
  }
  getRsBlockTable(typeNumber, errorCorrectLevel) {
    switch (errorCorrectLevel) {
      case QRErrorCorrectLevel.L:
        return this.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
      case QRErrorCorrectLevel.M:
        return this.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
      case QRErrorCorrectLevel.Q:
        return this.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
      case QRErrorCorrectLevel.H:
        return this.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
      default:
        return void 0;
    }
  }
}
class QR8bitByte {
  constructor(data) {
    this.mode = QRMode.MODE_8BIT_BYTE;
    this.data = data;
    this.parsedData = [];
    for (let i = 0, l = this.data.length; i < l; i++) {
      const byteArray = [];
      const code = this.data.charCodeAt(i);
      if (code > 65536) {
        byteArray[0] = 240 | (code & 1835008) >>> 18;
        byteArray[1] = 128 | (code & 258048) >>> 12;
        byteArray[2] = 128 | (code & 4032) >>> 6;
        byteArray[3] = 128 | code & 63;
      } else if (code > 2048) {
        byteArray[0] = 224 | (code & 61440) >>> 12;
        byteArray[1] = 128 | (code & 4032) >>> 6;
        byteArray[2] = 128 | code & 63;
      } else if (code > 128) {
        byteArray[0] = 192 | (code & 1984) >>> 6;
        byteArray[1] = 128 | code & 63;
      } else {
        byteArray[0] = code;
      }
      this.parsedData.push(...byteArray);
    }
    this.parsedData = Array.prototype.concat.apply([], this.parsedData);
    if (this.parsedData.length != this.data.length) {
      this.parsedData.unshift(191);
      this.parsedData.unshift(187);
      this.parsedData.unshift(239);
    }
  }
  getLength() {
    return this.parsedData.length;
  }
  write(buffer) {
    for (let i = 0, l = this.parsedData.length; i < l; i++) {
      buffer.put(this.parsedData[i], 8);
    }
  }
}
class QRMath {
  constructor() {
    this.EXP_TABLE = new Array(256);
    this.LOG_TABLE = new Array(256);
    for (let i = 0; i < 8; i++) {
      this.EXP_TABLE[i] = 1 << i;
    }
    for (let i = 8; i < 256; i++) {
      this.EXP_TABLE[i] = this.EXP_TABLE[i - 4] ^ this.EXP_TABLE[i - 5] ^ this.EXP_TABLE[i - 6] ^ this.EXP_TABLE[i - 8];
    }
    for (let i = 0; i < 255; i++) {
      this.LOG_TABLE[this.EXP_TABLE[i]] = i;
    }
  }
  glog(n) {
    if (n < 1) {
      throw new Error("glog(" + n + ")");
    }
    return this.LOG_TABLE[n];
  }
  gexp(n) {
    while (n < 0) {
      n += 255;
    }
    while (n >= 256) {
      n -= 255;
    }
    return this.EXP_TABLE[n];
  }
}
class QRPolynomial {
  constructor(num, shift) {
    this.qrMath = new QRMath();
    if (num.length == void 0) {
      throw new Error(num.length + "/" + shift);
    }
    let offset = 0;
    while (offset < num.length && num[offset] == 0) {
      offset++;
    }
    this.num = new Array(num.length - offset + shift);
    for (let i = 0; i < num.length - offset; i++) {
      this.num[i] = num[i + offset];
    }
  }
  get(index) {
    return this.num[index];
  }
  getLength() {
    return this.num.length;
  }
  multiply(e) {
    const num = new Array(this.getLength() + e.getLength() - 1);
    for (let i = 0; i < this.getLength(); i++) {
      for (let j = 0; j < e.getLength(); j++) {
        num[i + j] ^= this.qrMath.gexp(this.qrMath.glog(this.get(i)) + this.qrMath.glog(e.get(j)));
      }
    }
    return new QRPolynomial(num, 0);
  }
  mod(e) {
    if (this.getLength() - e.getLength() < 0) {
      return this;
    }
    const ratio = this.qrMath.glog(this.get(0)) - this.qrMath.glog(e.get(0));
    const num = new Array(this.getLength());
    for (let i = 0; i < this.getLength(); i++) {
      num[i] = this.get(i);
    }
    for (let i = 0; i < e.getLength(); i++) {
      num[i] ^= this.qrMath.gexp(this.qrMath.glog(e.get(i)) + ratio);
    }
    return new QRPolynomial(num, 0).mod(e);
  }
}
class QRCodeModel {
  constructor(typeNumber, errorCorrectLevel) {
    this.qrUtil = new QRUtil();
    this.PAD0 = 236;
    this.PAD1 = 17;
    this.typeNumber = typeNumber;
    this.errorCorrectLevel = errorCorrectLevel;
    this.modules = [];
    this.moduleCount = 0;
    this.dataCache = [];
    this.dataList = [];
  }
  addData(data) {
    const newData = new QR8bitByte(data);
    this.dataList.push(newData);
    this.dataCache = [];
  }
  isDark(row, col) {
    if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) {
      throw new Error(row + "," + col);
    }
    return this.modules[row][col];
  }
  getModuleCount() {
    return this.moduleCount;
  }
  makeImpl(test, maskPattern) {
    this.moduleCount = this.typeNumber * 4 + 17;
    this.modules = new Array(this.moduleCount);
    for (let row = 0; row < this.moduleCount; row++) {
      this.modules[row] = new Array(this.moduleCount);
      for (let col = 0; col < this.moduleCount; col++) {
        this.modules[row][col] = null;
      }
    }
    this.setupPositionProbePattern(0, 0);
    this.setupPositionProbePattern(this.moduleCount - 7, 0);
    this.setupPositionProbePattern(0, this.moduleCount - 7);
    this.setupPositionAdjustPattern();
    this.setupTimingPattern();
    this.setupTypeInfo(test, maskPattern);
    if (this.typeNumber >= 7) {
      this.setupTypeNumber(test);
    }
    if (this.dataCache.length == 0) {
      this.dataCache = this.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);
    }
    this.mapData(this.dataCache, maskPattern);
  }
  getBestMaskPattern() {
    let minLostPoint = 0;
    let pattern = 0;
    for (let i = 0; i < 8; i++) {
      this.makeImpl(true, i);
      const lostPoint = this.qrUtil.getLostPoint(this);
      if (i == 0 || minLostPoint > lostPoint) {
        minLostPoint = lostPoint;
        pattern = i;
      }
    }
    return pattern;
  }
  make() {
    this.makeImpl(false, this.getBestMaskPattern());
  }
  setupPositionProbePattern(row, col) {
    for (let r = -1; r <= 7; r++) {
      if (row + r <= -1 || this.moduleCount <= row + r)
        continue;
      for (let c = -1; c <= 7; c++) {
        if (col + c <= -1 || this.moduleCount <= col + c)
          continue;
        if (0 <= r && r <= 6 && (c == 0 || c == 6) || 0 <= c && c <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4) {
          this.modules[row + r][col + c] = true;
        } else {
          this.modules[row + r][col + c] = false;
        }
      }
    }
  }
  /*
      public createMovieClip(target_mc, instance_name, depth) {
      let qr_mc = target_mc.createEmptyMovieClip(instance_name, depth);
      let cs = 1;
      this.make();
      for (let row = 0; row < this.modules.length; row++) {
          let y = row * cs;
          for (let col = 0; col < this.modules[row].length; col++) {
              let x = col * cs;
              let dark = this.modules[row][col];
              if (dark) {
                  qr_mc.beginFill(0, 100);
                  qr_mc.moveTo(x, y);
                  qr_mc.lineTo(x + cs, y);
                  qr_mc.lineTo(x + cs, y + cs);
                  qr_mc.lineTo(x, y + cs);
                  qr_mc.endFill();
              }
          }
      }
      return qr_mc;
  }
      */
  setupTimingPattern() {
    for (let r = 8; r < this.moduleCount - 8; r++) {
      if (this.modules[r][6] != null) {
        continue;
      }
      this.modules[r][6] = r % 2 == 0;
    }
    for (let c = 8; c < this.moduleCount - 8; c++) {
      if (this.modules[6][c] != null) {
        continue;
      }
      this.modules[6][c] = c % 2 == 0;
    }
  }
  setupPositionAdjustPattern() {
    const pos = this.qrUtil.getPatternPosition(this.typeNumber);
    for (let i = 0; i < pos.length; i++) {
      for (let j = 0; j < pos.length; j++) {
        const row = pos[i];
        const col = pos[j];
        if (this.modules[row][col] != null) {
          continue;
        }
        for (let r = -2; r <= 2; r++) {
          for (let c = -2; c <= 2; c++) {
            if (r == -2 || r == 2 || c == -2 || c == 2 || r == 0 && c == 0) {
              this.modules[row + r][col + c] = true;
            } else {
              this.modules[row + r][col + c] = false;
            }
          }
        }
      }
    }
  }
  setupTypeNumber(test) {
    const bits = this.qrUtil.getBCHTypeNumber(this.typeNumber);
    for (let i = 0; i < 18; i++) {
      const mod = !test && (bits >> i & 1) == 1;
      this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
    }
    for (let i = 0; i < 18; i++) {
      const mod = !test && (bits >> i & 1) == 1;
      this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
    }
  }
  setupTypeInfo(test, maskPattern) {
    const data = this.errorCorrectLevel << 3 | maskPattern;
    const bits = this.qrUtil.getBCHTypeInfo(data);
    for (let i = 0; i < 15; i++) {
      const mod = !test && (bits >> i & 1) == 1;
      if (i < 6) {
        this.modules[i][8] = mod;
      } else if (i < 8) {
        this.modules[i + 1][8] = mod;
      } else {
        this.modules[this.moduleCount - 15 + i][8] = mod;
      }
    }
    for (let i = 0; i < 15; i++) {
      const mod = !test && (bits >> i & 1) == 1;
      if (i < 8) {
        this.modules[8][this.moduleCount - i - 1] = mod;
      } else if (i < 9) {
        this.modules[8][15 - i - 1 + 1] = mod;
      } else {
        this.modules[8][15 - i - 1] = mod;
      }
    }
    this.modules[this.moduleCount - 8][8] = !test;
  }
  mapData(data, maskPattern) {
    let inc = -1;
    let row = this.moduleCount - 1;
    let bitIndex = 7;
    let byteIndex = 0;
    for (let col = this.moduleCount - 1; col > 0; col -= 2) {
      if (col == 6)
        col--;
      while (true) {
        for (let c = 0; c < 2; c++) {
          if (this.modules[row][col - c] == null) {
            let dark = false;
            if (byteIndex < data.length) {
              dark = (data[byteIndex] >>> bitIndex & 1) == 1;
            }
            const mask = this.qrUtil.getMask(maskPattern, row, col - c);
            if (mask) {
              dark = !dark;
            }
            this.modules[row][col - c] = dark;
            bitIndex--;
            if (bitIndex == -1) {
              byteIndex++;
              bitIndex = 7;
            }
          }
        }
        row += inc;
        if (row < 0 || this.moduleCount <= row) {
          row -= inc;
          inc = -inc;
          break;
        }
      }
    }
  }
  createData(typeNumber, errorCorrectLevel, dataList) {
    const qrRSBlock = new QRRSBlock(0, 0);
    const rsBlocks = qrRSBlock.getRSBlocks(typeNumber, errorCorrectLevel);
    const buffer = new QRBitBuffer();
    for (let i = 0; i < dataList.length; i++) {
      const data = dataList[i];
      buffer.put(data.mode, 4);
      buffer.put(data.getLength(), this.qrUtil.getLengthInBits(data.mode, typeNumber));
      data.write(buffer);
    }
    let totalDataCount = 0;
    for (let i = 0; i < rsBlocks.length; i++) {
      totalDataCount += rsBlocks[i].dataCount;
    }
    if (buffer.getLengthInBits() > totalDataCount * 8) {
      throw new Error("code length overflow. (" + buffer.getLengthInBits() + ">" + totalDataCount * 8 + ")");
    }
    if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
      buffer.put(0, 4);
    }
    while (buffer.getLengthInBits() % 8 != 0) {
      buffer.putBit(false);
    }
    while (true) {
      if (buffer.getLengthInBits() >= totalDataCount * 8) {
        break;
      }
      buffer.put(this.PAD0, 8);
      if (buffer.getLengthInBits() >= totalDataCount * 8) {
        break;
      }
      buffer.put(this.PAD1, 8);
    }
    return this.createBytes(buffer, rsBlocks);
  }
  createBytes(buffer, rsBlocks) {
    let offset = 0;
    let maxDcCount = 0;
    let maxEcCount = 0;
    const dcdata = new Array(rsBlocks.length);
    const ecdata = new Array(rsBlocks.length);
    for (let r = 0; r < rsBlocks.length; r++) {
      const dcCount = rsBlocks[r].dataCount;
      const ecCount = rsBlocks[r].totalCount - dcCount;
      maxDcCount = Math.max(maxDcCount, dcCount);
      maxEcCount = Math.max(maxEcCount, ecCount);
      dcdata[r] = new Array(dcCount);
      for (let i = 0; i < dcdata[r].length; i++) {
        dcdata[r][i] = 255 & buffer.buffer[i + offset];
      }
      offset += dcCount;
      const rsPoly = this.qrUtil.getErrorCorrectPolynomial(ecCount);
      const rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1);
      const modPoly = rawPoly.mod(rsPoly);
      ecdata[r] = new Array(rsPoly.getLength() - 1);
      for (let i = 0; i < ecdata[r].length; i++) {
        const modIndex = i + modPoly.getLength() - ecdata[r].length;
        ecdata[r][i] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
      }
    }
    let totalCodeCount = 0;
    for (let i = 0; i < rsBlocks.length; i++) {
      totalCodeCount += rsBlocks[i].totalCount;
    }
    const data = new Array(totalCodeCount);
    let index = 0;
    for (let i = 0; i < maxDcCount; i++) {
      for (let r = 0; r < rsBlocks.length; r++) {
        if (i < dcdata[r].length) {
          data[index++] = dcdata[r][i];
        }
      }
    }
    for (let i = 0; i < maxEcCount; i++) {
      for (let r = 0; r < rsBlocks.length; r++) {
        if (i < ecdata[r].length) {
          data[index++] = ecdata[r][i];
        }
      }
    }
    return data;
  }
}
class QRUtil {
  constructor() {
    this.data = {
      PATTERN_POSITION_TABLE: [
        [],
        [6, 18],
        [6, 22],
        [6, 26],
        [6, 30],
        [6, 34],
        [6, 22, 38],
        [6, 24, 42],
        [6, 26, 46],
        [6, 28, 50],
        [6, 30, 54],
        [6, 32, 58],
        [6, 34, 62],
        [6, 26, 46, 66],
        [6, 26, 48, 70],
        [6, 26, 50, 74],
        [6, 30, 54, 78],
        [6, 30, 56, 82],
        [6, 30, 58, 86],
        [6, 34, 62, 90],
        [6, 28, 50, 72, 94],
        [6, 26, 50, 74, 98],
        [6, 30, 54, 78, 102],
        [6, 28, 54, 80, 106],
        [6, 32, 58, 84, 110],
        [6, 30, 58, 86, 114],
        [6, 34, 62, 90, 118],
        [6, 26, 50, 74, 98, 122],
        [6, 30, 54, 78, 102, 126],
        [6, 26, 52, 78, 104, 130],
        [6, 30, 56, 82, 108, 134],
        [6, 34, 60, 86, 112, 138],
        [6, 30, 58, 86, 114, 142],
        [6, 34, 62, 90, 118, 146],
        [6, 30, 54, 78, 102, 126, 150],
        [6, 24, 50, 76, 102, 128, 154],
        [6, 28, 54, 80, 106, 132, 158],
        [6, 32, 58, 84, 110, 136, 162],
        [6, 26, 54, 82, 110, 138, 166],
        [6, 30, 58, 86, 114, 142, 170]
      ],
      G15: 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0,
      G18: 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0,
      G15_MASK: 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1
    };
  }
  getBCHTypeInfo(data) {
    let d = data << 10;
    while (this.getBCHDigit(d) - this.getBCHDigit(this.data.G15) >= 0) {
      d ^= this.data.G15 << this.getBCHDigit(d) - this.getBCHDigit(this.data.G15);
    }
    return (data << 10 | d) ^ this.data.G15_MASK;
  }
  getBCHTypeNumber(data) {
    let d = data << 12;
    while (this.getBCHDigit(d) - this.getBCHDigit(this.data.G18) >= 0) {
      d ^= this.data.G18 << this.getBCHDigit(d) - this.getBCHDigit(this.data.G18);
    }
    return data << 12 | d;
  }
  getBCHDigit(data) {
    let digit = 0;
    while (data != 0) {
      digit++;
      data >>>= 1;
    }
    return digit;
  }
  getPatternPosition(typeNumber) {
    return this.data.PATTERN_POSITION_TABLE[typeNumber - 1];
  }
  getMask(maskPattern, i, j) {
    switch (maskPattern) {
      case QRMaskPattern.PATTERN000:
        return (i + j) % 2 == 0;
      case QRMaskPattern.PATTERN001:
        return i % 2 == 0;
      case QRMaskPattern.PATTERN010:
        return j % 3 == 0;
      case QRMaskPattern.PATTERN011:
        return (i + j) % 3 == 0;
      case QRMaskPattern.PATTERN100:
        return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;
      case QRMaskPattern.PATTERN101:
        return i * j % 2 + i * j % 3 == 0;
      case QRMaskPattern.PATTERN110:
        return (i * j % 2 + i * j % 3) % 2 == 0;
      case QRMaskPattern.PATTERN111:
        return (i * j % 3 + (i + j) % 2) % 2 == 0;
      default:
        throw new Error("bad maskPattern:" + maskPattern);
    }
  }
  getErrorCorrectPolynomial(errorCorrectLength) {
    const qrMath = new QRMath();
    let a = new QRPolynomial([1], 0);
    for (let i = 0; i < errorCorrectLength; i++) {
      a = a.multiply(new QRPolynomial([1, qrMath.gexp(i)], 0));
    }
    return a;
  }
  getLengthInBits(mode, type) {
    if (1 <= type && type < 10) {
      switch (mode) {
        case QRMode.MODE_NUMBER:
          return 10;
        case QRMode.MODE_ALPHA_NUM:
          return 9;
        case QRMode.MODE_8BIT_BYTE:
          return 8;
        case QRMode.MODE_KANJI:
          return 8;
        default:
          throw new Error("mode:" + mode);
      }
    } else if (type < 27) {
      switch (mode) {
        case QRMode.MODE_NUMBER:
          return 12;
        case QRMode.MODE_ALPHA_NUM:
          return 11;
        case QRMode.MODE_8BIT_BYTE:
          return 16;
        case QRMode.MODE_KANJI:
          return 10;
        default:
          throw new Error("mode:" + mode);
      }
    } else if (type < 41) {
      switch (mode) {
        case QRMode.MODE_NUMBER:
          return 14;
        case QRMode.MODE_ALPHA_NUM:
          return 13;
        case QRMode.MODE_8BIT_BYTE:
          return 16;
        case QRMode.MODE_KANJI:
          return 12;
        default:
          throw new Error("mode:" + mode);
      }
    } else {
      throw new Error("type:" + type);
    }
  }
  getLostPoint(qrCode) {
    const moduleCount = qrCode.getModuleCount();
    let lostPoint = 0;
    for (let row = 0; row < moduleCount; row++) {
      for (let col = 0; col < moduleCount; col++) {
        let sameCount = 0;
        const dark = qrCode.isDark(row, col);
        for (let r = -1; r <= 1; r++) {
          if (row + r < 0 || moduleCount <= row + r) {
            continue;
          }
          for (let c = -1; c <= 1; c++) {
            if (col + c < 0 || moduleCount <= col + c) {
              continue;
            }
            if (r == 0 && c == 0) {
              continue;
            }
            if (dark == qrCode.isDark(row + r, col + c)) {
              sameCount++;
            }
          }
        }
        if (sameCount > 5) {
          lostPoint += 3 + sameCount - 5;
        }
      }
    }
    for (let row = 0; row < moduleCount - 1; row++) {
      for (let col = 0; col < moduleCount - 1; col++) {
        let count = 0;
        if (qrCode.isDark(row, col))
          count++;
        if (qrCode.isDark(row + 1, col))
          count++;
        if (qrCode.isDark(row, col + 1))
          count++;
        if (qrCode.isDark(row + 1, col + 1))
          count++;
        if (count == 0 || count == 4) {
          lostPoint += 3;
        }
      }
    }
    for (let row = 0; row < moduleCount; row++) {
      for (let col = 0; col < moduleCount - 6; col++) {
        if (qrCode.isDark(row, col) && !qrCode.isDark(row, col + 1) && qrCode.isDark(row, col + 2) && qrCode.isDark(row, col + 3) && qrCode.isDark(row, col + 4) && !qrCode.isDark(row, col + 5) && qrCode.isDark(row, col + 6)) {
          lostPoint += 40;
        }
      }
    }
    for (let col = 0; col < moduleCount; col++) {
      for (let row = 0; row < moduleCount - 6; row++) {
        if (qrCode.isDark(row, col) && !qrCode.isDark(row + 1, col) && qrCode.isDark(row + 2, col) && qrCode.isDark(row + 3, col) && qrCode.isDark(row + 4, col) && !qrCode.isDark(row + 5, col) && qrCode.isDark(row + 6, col)) {
          lostPoint += 40;
        }
      }
    }
    let darkCount = 0;
    for (let col = 0; col < moduleCount; col++) {
      for (let row = 0; row < moduleCount; row++) {
        if (qrCode.isDark(row, col)) {
          darkCount++;
        }
      }
    }
    const ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
    lostPoint += ratio * 10;
    return lostPoint;
  }
}
class QRCode {
  constructor(userOptions) {
    this.options = {
      content: "",
      padding: 8,
      width: 256,
      height: 256,
      typeNumber: 4,
      color: "#000000",
      background: "#ffffff",
      ecl: "M",
      container: "svg",
      join: true
    };
    if (typeof userOptions === "string")
      userOptions = { content: userOptions };
    if (userOptions) {
      for (const i in userOptions) {
        this.options[i] = userOptions[i];
      }
    }
    if (this.options.content.length === 0 || this.options.content.length > 7e3) {
      throw new Error("Expected 'content' to be non-empty and less than 6K !");
    }
    if (this.options.padding < 1)
      this.options.padding = 1;
    if (this.options.width < 1)
      this.options.width = 256;
    if (this.options.height < 1)
      this.options.height = 256;
    const content = this.options.content;
    const type = this._getTypeNumber(content, this.options.ecl);
    const ecl = this._getErrorCorrectLevel(this.options.ecl);
    this.qrCodeModel = new QRCodeModel(type, ecl);
    this.qrCodeModel.addData(content);
    this.qrCodeModel.make();
  }
  _getErrorCorrectLevel(ecl) {
    switch (ecl) {
      case "L":
        return QRErrorCorrectLevel.L;
      case "M":
        return QRErrorCorrectLevel.M;
      case "Q":
        return QRErrorCorrectLevel.Q;
      case "H":
        return QRErrorCorrectLevel.H;
      default:
        throw new Error("Unknown error correction level: " + ecl);
    }
  }
  _getTypeNumber(content, ecl) {
    const length = this._getUTF8Length(content);
    let type = 1;
    let limit = 0;
    for (let i = 0, len = QRCodeLimitLength.length; i <= len; i++) {
      const table = QRCodeLimitLength[i];
      if (!table) {
        throw new Error("Content too long: expected " + limit + " but got " + length);
      }
      switch (ecl) {
        case "L":
          limit = table[0];
          break;
        case "M":
          limit = table[1];
          break;
        case "Q":
          limit = table[2];
          break;
        case "H":
          limit = table[3];
          break;
        default:
          throw new Error("Unknown error correction level: " + ecl);
      }
      if (length <= limit) {
        break;
      }
      type++;
    }
    if (type > QRCodeLimitLength.length) {
      throw new Error("Content too long");
    }
    return type;
  }
  _getUTF8Length(content) {
    const result = encodeURI(content).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
    return result.length + (result.length != content.length ? 3 : 0);
  }
  svg() {
    const EOL = "";
    const width = this.options.width;
    const height = this.options.height;
    const modules = this.qrCodeModel.modules;
    const length = modules.length;
    const xsize = width / (length + 2 * this.options.padding);
    const ysize = height / (length + 2 * this.options.padding);
    const join = this.options.join;
    const bgrect = '<rect x="0" y="0" width="' + width + '" height="' + height + '" style="fill:' + this.options.background + ';shape-rendering:crispEdges;"/>' + EOL;
    let modrect = "";
    let pathdata = "";
    for (let y = 0; y < length; y++) {
      for (let x = 0; x < length; x++) {
        const module = modules[x][y];
        if (module) {
          let px = x * xsize + this.options.padding * xsize;
          let py = y * ysize + this.options.padding * ysize;
          if (join) {
            let w = xsize + px;
            let h = ysize + py;
            px = Number.isInteger(px) ? Number(px) : px.toFixed(2);
            py = Number.isInteger(py) ? Number(py) : py.toFixed(2);
            w = Number.isInteger(w) ? Number(w) : w.toFixed(2);
            h = Number.isInteger(h) ? Number(h) : h.toFixed(2);
            pathdata += "M" + px + "," + py + " V" + h + " H" + w + " V" + py + " H" + px + " Z ";
          } else {
            modrect += '<rect x="' + px.toString() + '" y="' + py.toString() + '" width="' + xsize + '" height="' + ysize + '" style="fill:' + this.options.color + ';shape-rendering:crispEdges;"/>' + EOL;
          }
        }
      }
    }
    if (join) {
      modrect = '<path x="0" y="0" style="fill:' + this.options.color + ';shape-rendering:crispEdges;" d="' + pathdata + '" />';
    }
    let svg = "";
    switch (this.options.container) {
      case "svg":
        svg += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' + width + '" height="' + height + '">' + EOL;
        svg += bgrect + modrect;
        svg += "</svg>";
        break;
      case "svg-viewbox":
        svg += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ' + width + " " + height + '">' + EOL;
        svg += bgrect + modrect;
        svg += "</svg>";
        break;
      default:
        svg += bgrect + modrect;
        break;
    }
    return svg;
  }
}
const Qrcode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { content = "" } = $$props;
  let { backgroundColor = "#ffffff" } = $$props;
  let { color = "#000000" } = $$props;
  let { errorCorrection = "M" } = $$props;
  let { isResponsive = false } = $$props;
  let { padding = 4 } = $$props;
  let { size = 150 } = $$props;
  const opt = {
    background: backgroundColor,
    color,
    container: isResponsive ? "svg-viewbox" : "svg",
    content,
    ecl: errorCorrection,
    height: size,
    join: true,
    padding,
    typeNumber: 4,
    width: size
  };
  const qrCode = new QRCode(opt);
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  if ($$props.backgroundColor === void 0 && $$bindings.backgroundColor && backgroundColor !== void 0)
    $$bindings.backgroundColor(backgroundColor);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.errorCorrection === void 0 && $$bindings.errorCorrection && errorCorrection !== void 0)
    $$bindings.errorCorrection(errorCorrection);
  if ($$props.isResponsive === void 0 && $$bindings.isResponsive && isResponsive !== void 0)
    $$bindings.isResponsive(isResponsive);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<!-- HTML_TAG_START -->${qrCode.svg()}<!-- HTML_TAG_END -->`;
});
const QRGen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let qrcodes = [];
  let currentCodeIndex = 0;
  return `<div class="navbar bg-base-100 shadow"><div class="navbar-start" data-svelte-h="svelte-t7efjo"><a class="btn btn-square btn-ghost text-xl" href="/"><i class="fal fa-long-arrow-left"></i></a></div> <div class="navbar-center"></div> <div class="navbar-end"><button class="btn btn-square btn-ghost" data-svelte-h="svelte-14d1mrf"><i class="fal fa-plus"></i></button></div></div> <div class="container mx-auto p-4 mt-12">${qrcodes.length > 0 ? `<div class="flex flex-row justify-center items-center"><div class="card card-compact w-96"><div class="card-body">${qrcodes.length > 1 ? `<button class="absolute left-0 btn btn-square z-10" data-svelte-h="svelte-14xrdes"><i class="fal fa-chevron-left"></i></button>` : ``} <div id="qr-code" style="margin:0 auto">${validate_component(Qrcode, "QRCode").$$render(
    $$result,
    {
      size: 300,
      content: qrcodes[currentCodeIndex].url
    },
    {},
    {}
  )} <h2 class="text-xl text-center">${escape(qrcodes[currentCodeIndex].pin)}</h2></div> ${qrcodes.length > 1 ? `<button class="absolute right-0 btn btn-square z-10" data-svelte-h="svelte-1hbcpbi"><i class="fal fa-chevron-right"></i></button>` : ``} <div class="card-actions justify-end"><button class="btn btn-primary" data-svelte-h="svelte-1fyguif">Drucken</button></div></div></div></div>` : ``}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(QRGen, "QRCodeGen").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-C6jGM_nG.js.map
