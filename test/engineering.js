
import error from '../lib/error';

import engineering from '../lib/engineering';

describe('Engineering', () => {
  test('BESSELI', () => {
    expect(engineering.BESSELI(1.5, 1)).to.approximately(0.981666, 10e-6);
    expect(engineering.BESSELI(1.5, 2)).to.approximately(0.337835, 10e-6);
    expect(engineering.BESSELI('invalid')).toBe(error.value);
  });

  test('BESSELJ', () => {
    expect(engineering.BESSELJ(1.9, 2)).to.approximately(0.329926, 10e-6);
    expect(engineering.BESSELJ('invalid')).toBe(error.value);
  });

  test('BESSELK', () => {
    expect(engineering.BESSELK(1.5, 1)).to.approximately(0.277388, 10e-6);
    expect(engineering.BESSELK('invalid')).toBe(error.value);
  });

  test('BESSELY', () => {
    expect(engineering.BESSELY(2.5, 1)).to.approximately(0.145918, 10e-6);
    expect(engineering.BESSELY('invalid')).toBe(error.value);
  });

  test('BIN2DEC', () => {
    expect(engineering.BIN2DEC(1100100)).toBe(100);
    expect(engineering.BIN2DEC(1111111111)).toBe(-1);
    expect(engineering.BIN2DEC('101010')).toBe(42);
    expect(engineering.BIN2DEC(1000000000)).toBe(-512);
    expect(engineering.BIN2DEC(1234567890)).toBe(error.num);
    expect(engineering.BIN2DEC('a')).toBe(error.num);
  });

  test('BIN2HEX', () => {
    expect(engineering.BIN2HEX(11111011, 4)).toBe('00fb');
    expect(engineering.BIN2HEX(1110)).toBe('e');
    expect(engineering.BIN2HEX(1111111111)).toBe('ffffffffff');
    expect(engineering.BIN2HEX('a')).toBe(error.num);
    expect(engineering.BIN2HEX(1, 'a')).toBe(error.value);
    expect(engineering.BIN2HEX(1, -1)).toBe(error.num);
    expect(engineering.BIN2HEX('101010')).toBe('2a');
    expect(engineering.BIN2HEX(111111111)).toBe('1ff');
    expect(engineering.BIN2HEX(1000000000)).toBe('fffffffe00');
    expect(engineering.BIN2HEX('Hello World!')).toBe(error.num);
    expect(engineering.BIN2HEX(1234567890)).toBe(error.num);
    expect(engineering.BIN2HEX(101010101010)).toBe(error.num);
    expect(engineering.BIN2HEX(101010, 1)).toBe(error.num);
    expect(engineering.BIN2HEX(101010, -4)).toBe(error.num);
    expect(engineering.BIN2HEX(101010, 'Hello World!')).toBe(error.value);
  });

  test('BIN2OCT', () => {
    expect(engineering.BIN2OCT(1001, 3)).toBe('011');
    expect(engineering.BIN2OCT(1100100)).toBe('144');
    expect(engineering.BIN2OCT(1111111111)).toBe('7777777777');
    expect(engineering.BIN2OCT('a')).toBe(error.num);
    expect(engineering.BIN2OCT(1, 'a')).toBe(error.value);
    expect(engineering.BIN2OCT(1, -1)).toBe(error.num);
    expect(engineering.BIN2OCT('101010')).toBe('52');
    expect(engineering.BIN2OCT(101010, 4.5)).toBe('0052');
    expect(engineering.BIN2OCT('Hello World!')).toBe(error.num);
    expect(engineering.BIN2OCT(1234567890)).toBe(error.num);
    expect(engineering.BIN2OCT(101010101010)).toBe(error.num);
    expect(engineering.BIN2OCT(101010, 1)).toBe(error.num);
    expect(engineering.BIN2OCT(101010, -4)).toBe(error.num);
    expect(engineering.BIN2OCT(101010, 'Hello World!')).toBe(error.value);
  });

  test('BITAND', () => {
    expect(engineering.BITAND(1, 5)).toBe(1);
    expect(engineering.BITAND(13, 25)).toBe(9);
    expect(engineering.BITAND('a', 1)).toBe(error.value);
    expect(engineering.BITAND(-1, 1)).toBe(error.num);
    expect(engineering.BITAND(1.1, 1)).toBe(error.num);
    expect(engineering.BITAND(281474976710656, 1)).toBe(error.num);
    expect(engineering.BITAND('Hello World!', 1)).toBe(error.value);
  });

  test('BITLSHIFT', () => {
    expect(engineering.BITLSHIFT(4, 2)).toBe(16);
    expect(engineering.BITLSHIFT('a', 1)).toBe(error.value);
    expect(engineering.BITLSHIFT(-1, 1)).toBe(error.num);
    expect(engineering.BITLSHIFT(1.1, 1)).toBe(error.num);
    expect(engineering.BITLSHIFT(281474976710656, 1)).toBe(error.num);
    expect(engineering.BITLSHIFT(1, 54)).toBe(error.num);
    expect(engineering.BITLSHIFT('Hello World!', 1)).toBe(error.value);
  });

  test('BITOR', () => {
    expect(engineering.BITOR(23, 10)).toBe(31);
    expect(engineering.BITOR('a', 1)).toBe(error.value);
    expect(engineering.BITOR(-1, 1)).toBe(error.num);
    expect(engineering.BITOR(1.1, 1)).toBe(error.num);
    expect(engineering.BITOR(281474976710656, 1)).toBe(error.num);
    expect(engineering.BITOR('Hello World!', 1)).toBe(error.value);
  });

  test('BITRSHIFT', () => {
    expect(engineering.BITRSHIFT(13, 2)).toBe(3);
    expect(engineering.BITRSHIFT('a', 1)).toBe(error.value);
    expect(engineering.BITRSHIFT(-1, 1)).toBe(error.num);
    expect(engineering.BITRSHIFT(1.1, 1)).toBe(error.num);
    expect(engineering.BITRSHIFT(281474976710656, 1)).toBe(error.num);
    expect(engineering.BITRSHIFT(1, 54)).toBe(error.num);
    expect(engineering.BITLSHIFT(0, 0)).toBe(0);
    expect(engineering.BITLSHIFT(1.5, 1)).toBe(error.num);
    expect(engineering.BITLSHIFT('Hello World!', 1)).toBe(error.value);
  });

  test('BITXOR', () => {
    expect(engineering.BITXOR(5, 3)).toBe(6);
    expect(engineering.BITXOR('a', 1)).toBe(error.value);
    expect(engineering.BITXOR(-1, 1)).toBe(error.num);
    expect(engineering.BITXOR(1.1, 1)).toBe(error.num);
    expect(engineering.BITXOR(281474976710656, 1)).toBe(error.num);
    expect(engineering.BITXOR('Hello World!', 1)).toBe(error.value);
  });

  test('COMPLEX', () => {
    expect(engineering.COMPLEX(3, 4)).toBe('3+4i');
    expect(engineering.COMPLEX(3, 4, 'j')).toBe('3+4j');
    expect(engineering.COMPLEX(0, 1)).toBe('i');
    expect(engineering.COMPLEX(1, 0)).toBe('1');
    expect(engineering.COMPLEX(0, 0)).toBe(0);
    expect(engineering.COMPLEX('a', 1)).toBe(error.value);
    expect(engineering.COMPLEX(1, 1, 'k')).toBe(error.value);
  });

  test('CONVERT', () => {
    expect(engineering.CONVERT(1, 'lbm', 'kg')).to.approximately(0.45359237, 1e-9);
    // engineering.CONVERT(68, 'F', 'C').should.equal(20);
    expect(engineering.CONVERT(2.5, 'ft', 'sec')).toBe(error.na);
    expect(engineering.CONVERT(engineering.CONVERT(100, 'ft', 'm'), 'ft', 'm')).to.approximately(9.290304, 1e-9);
    expect(engineering.CONVERT('a', 1)).toBe(error.value);
    expect(engineering.CONVERT(1, 'invalid', 'invalid')).toBe(error.na);
    expect(engineering.CONVERT(1, 'da', 'invalid')).toBe(error.na);
    expect(engineering.CONVERT(1, 'ki', 'invalid')).toBe(error.na);
    expect(engineering.CONVERT(1, 'invalid', 'da')).toBe(error.na);
    expect(engineering.CONVERT(1, 'invalid', 'ki')).toBe(error.na);

    expect(engineering.CONVERT(2, 'mi', 'yd')).toBe(3520);
    expect(engineering.CONVERT(2, 'nm', 'mm')).to.approximately(0.000002, 1e-9);
    expect(engineering.CONVERT(2, 'kg', 'lbm')).to.approximately(4.409245243697551, 1e-9);
    expect(engineering.CONVERT(2, 'g', 'lbm')).to.approximately(0.004409245243697552, 1e-9);
    expect(engineering.CONVERT(2, 'mg', 'lbm')).to.approximately(0.000004409245243697551, 1e-9);
    expect(engineering.CONVERT(3583, 'byte', 'kbyte')).to.approximately(3.583, 1e-9);
    expect(engineering.CONVERT(3583, 'byte', 'bit')).toBe(28664);
    expect(engineering.CONVERT(64, 'kibyte', 'bit')).toBe(524288);
    expect(engineering.CONVERT('Lots of', 'mi', 'yard')).toBe(error.value);
    expect(engineering.CONVERT(1, 'mi', 'yard')).toBe(error.na);
  });

  test('DEC2BIN', () => {
    expect(engineering.DEC2BIN(9)).toBe('1001');
    expect(engineering.DEC2BIN(9, 4)).toBe('1001');
    expect(engineering.DEC2BIN(-100)).toBe('1110011100');
    expect(engineering.DEC2BIN('a')).toBe(error.value);
    expect(engineering.DEC2BIN(512)).toBe(error.num);
    expect(engineering.DEC2BIN(1, 'a')).toBe(error.value);
    expect(engineering.DEC2BIN(1, -1)).toBe(error.num);
  });

  test('DEC2HEX', () => {
    expect(engineering.DEC2HEX(100, 4)).toBe('0064');
    expect(engineering.DEC2HEX(-54)).toBe('ffffffffca');
    expect(engineering.DEC2HEX(28)).toBe('1c');
    expect(engineering.DEC2HEX(549755813888)).toBe(error.num);
    expect(engineering.DEC2HEX(64, 1)).toBe(error.num);
    expect(engineering.DEC2HEX('a')).toBe(error.value);
    expect(engineering.DEC2HEX(1, 'a')).toBe(error.value);
    expect(engineering.DEC2HEX(1, -1)).toBe(error.num);
  });

  test('DEC2OCT', () => {
    expect(engineering.DEC2OCT(58)).toBe('72');
    expect(engineering.DEC2OCT(58, 3)).toBe('072');
    expect(engineering.DEC2OCT(-100)).toBe('7777777634');
    expect(engineering.DEC2OCT('a')).toBe(error.value);
    expect(engineering.DEC2OCT(549755813888)).toBe(error.num);
    expect(engineering.DEC2OCT(1, 'a')).toBe(error.value);
    expect(engineering.DEC2OCT(1, -1)).toBe(error.num);
  });

  test('DELTA', () => {
    expect(engineering.DELTA(5, 4)).toBe(0);
    expect(engineering.DELTA(5, 5)).toBe(1);
    expect(engineering.DELTA(0.5, 0)).toBe(0);
    expect(engineering.DELTA('a')).toBe(error.value);
  });

  // TODO: find cases where upper_bound is used
  test('ERF', () => {
    expect(engineering.ERF(0.745)).to.approximately(0.7079289200957377, 1e-9);
    expect(engineering.ERF(1)).to.approximately(0.8427007929497149, 1e-9);
    expect(engineering.ERF('a')).toBe(error.value);
  });

  // TODO
  test('ERF.PRECISE', () => {
    expect(engineering.ERF.PRECISE).toThrowError('ERF.PRECISE is not implemented');
  });

  test('ERFC', () => {
    expect(engineering.ERFC(1)).to.approximately(0.1572992070502851, 1e-9);
    expect(engineering.ERFC('a')).toBe(error.value);
  });

  // TODO
  test('ERFC.PRECISE', () => {
    expect(engineering.ERFC.PRECISE).toThrowError('ERFC.PRECISE is not implemented');
  });

  test('GESTEP', () => {
    expect(engineering.GESTEP(5, 4)).toBe(1);
    expect(engineering.GESTEP(5, 5)).toBe(1);
    expect(engineering.GESTEP(-4, -5)).toBe(1);
    expect(engineering.GESTEP(-1)).toBe(0);
    expect(engineering.GESTEP('a')).toBe(error.value);
  });

  test('HEX2BIN', () => {
    expect(engineering.HEX2BIN('F', 8)).toBe('00001111');
    expect(engineering.HEX2BIN('B7')).toBe('10110111');
    expect(engineering.HEX2BIN('FFFFFFFFFF')).toBe('1111111111');
    expect(engineering.HEX2BIN('z')).toBe(error.num);
    expect(engineering.HEX2BIN('200')).toBe(error.num);
    expect(engineering.HEX2BIN(1, 'a')).toBe(error.value);
    expect(engineering.HEX2BIN(1, -1)).toBe(error.num);
  });

  test('HEX2DEC', () => {
    expect(engineering.HEX2DEC('A5')).toBe(165);
    expect(engineering.HEX2DEC('FFFFFFFF5B')).toBe(-165);
    expect(engineering.HEX2DEC('3DA408B9')).toBe(1034160313);
    expect(engineering.HEX2DEC('z')).toBe(error.num);
  });

  test('HEX2OCT', () => {
    expect(engineering.HEX2OCT('F', 3)).toBe('017');
    expect(engineering.HEX2OCT('3B4E')).toBe('35516');
    expect(engineering.HEX2OCT('FFFFFFFF00')).toBe('7777777400');
    expect(engineering.HEX2OCT('z')).toBe(error.num);
    expect(engineering.HEX2OCT('FFDFFFFFFF')).toBe(error.num);
    expect(engineering.HEX2OCT(1, 'a')).toBe(error.value);
    expect(engineering.HEX2OCT(1, -1)).toBe(error.num);
  });

  test('IMABS', () => {
    expect(engineering.IMABS('5+12i')).toBe(13);
    expect(engineering.IMABS('a')).toBe(error.value);
  });

  test('IMAGINARY', () => {
    expect(engineering.IMAGINARY('3+4i')).toBe(4);
    expect(engineering.IMAGINARY('i')).toBe(1);
    expect(engineering.IMAGINARY('+i')).toBe('+1');
    expect(engineering.IMAGINARY('-j')).toBe('-1');
    expect(engineering.IMAGINARY('0-j')).toBe(-1);
    expect(engineering.IMAGINARY('4')).toBe(0);
    expect(engineering.IMAGINARY(0)).toBe(0);
    expect(engineering.IMAGINARY('1+k')).toBe(error.num);
  });

  test('IMARGUMENT', () => {
    expect(engineering.IMARGUMENT('3+4i')).to.approximately(0.9272952180016122, 1e-9);
    expect(engineering.IMARGUMENT('a')).toBe(error.value);
    expect(engineering.IMARGUMENT(0)).toBe(error.div0);
    expect(engineering.IMARGUMENT('2i')).toBe(Math.PI / 2);
    expect(engineering.IMARGUMENT('-2i')).toBe(-Math.PI / 2);
    expect(engineering.IMARGUMENT('2')).toBe(0);
    expect(engineering.IMARGUMENT('-2')).toBe(-Math.PI);
    expect(engineering.IMARGUMENT('-1+2i')).to.approximately(2.0344439357957027, 1e-9);
    expect(engineering.IMARGUMENT('-1-2i')).to.approximately(-2.0344439357957027, 1e-9);
  });

  test('IMCONJUGATE', () => {
    expect(engineering.IMCONJUGATE('3+4i')).toBe('3-4i');
    expect(engineering.IMCONJUGATE('a')).toBe(error.value);
  });

  test('IMCOS', () => {
    const im = engineering.IMCOS('1+i');
    expect(engineering.IMREAL(im)).to.approximately(0.8337300251311491, 1e-9);
    expect(engineering.IMAGINARY(im)).to.approximately(-0.9888977057628651, 1e-9);
    expect(engineering.IMCOS('a')).toBe(error.value);
    expect(engineering.IMCOS(true)).toBe(error.value);
  });

  test('IMCOSH', () => {
    const im = engineering.IMCOSH('4+3i');
    expect(engineering.IMREAL(im)).to.approximately(-27.034945603074224, 1e-9);
    expect(engineering.IMAGINARY(im)).to.approximately(3.851153334811777, 1e-9);
    expect(engineering.IMCOSH('a')).toBe(error.value);
    expect(engineering.IMCOSH(true)).toBe(error.value);
  });

  test('IMCOT', () => {
    const im = engineering.IMCOT('4+3i');
    expect(engineering.IMREAL(im)).to.approximately(0.0049011823943044056, 1e-9);
    expect(engineering.IMAGINARY(im)).to.approximately(-0.9992669278059017, 1e-9);
    expect(engineering.IMCOT('a')).toBe(error.value);
    expect(engineering.IMCOT(true)).toBe(error.value);
  });

  test('IMCSC', () => {
    expect(engineering.IMCSC('1+i')).toBe('0.6215180171704283-0.3039310016284264i');
    expect(engineering.IMCSC(true)).toBe(error.value);
    expect(engineering.IMCSC(false)).toBe(error.value);
    expect(engineering.IMCSC('Hello World!')).toBe(error.num);
  });

  test('IMCSC', () => {
    expect(engineering.IMCSCH('1+i')).toBe('0.3039310016284264-0.6215180171704283i');
    expect(engineering.IMCSCH(true)).toBe(error.value);
    expect(engineering.IMCSCH(false)).toBe(error.value);
    expect(engineering.IMCSCH('Hello World!')).toBe(error.num);
  });

  test('IMDIV', () => {
    expect(engineering.IMDIV('-238+240i', '10+24i')).toBe('5+12i');
    expect(engineering.IMDIV('a', 'i')).toBe(error.value);
    expect(engineering.IMDIV('i', '0')).toBe(error.num);
    expect(engineering.IMDIV('j', '1')).toBe('j');
    expect(engineering.IMDIV('1', 'j')).toBe('-1j');
  });

  test('IMEXP', () => {
    const im = engineering.IMEXP('1+i');
    expect(engineering.IMREAL(im)).to.approximately(1.4686939399158851, 1e-9);
    expect(engineering.IMAGINARY(im)).to.approximately(2.2873552871788423, 1e-9);
    expect(engineering.IMEXP('a')).toBe(error.value);
  });

  test('IMLN', () => {
    const im = engineering.IMLN('3+4i');
    expect(engineering.IMREAL(im)).to.approximately(1.6094379124341003, 1e-9);
    expect(engineering.IMAGINARY(im)).to.approximately(0.9272952180016122, 1e-9);
    expect(engineering.IMLN('a')).toBe(error.value);
  });

  test('IMLOG10', () => {
    const im = engineering.IMLOG10('3+4i');
    expect(engineering.IMREAL(im)).to.approximately(0.6989700043360187, 1e-9);
    expect(engineering.IMAGINARY(im)).to.approximately(0.4027191962733731, 1e-9);
    expect(engineering.IMLOG10('a')).toBe(error.value);
  });

  test('IMLOG2', () => {
    const im = engineering.IMLOG2('3+4i');
    expect(engineering.IMREAL(im)).to.approximately(2.321928094887362, 1e-9);
    expect(engineering.IMAGINARY(im)).to.approximately(1.3378042124509761, 1e-9);
    expect(engineering.IMLOG2('a')).toBe(error.value);
  });

  test('IMPOWER', () => {
    const im = engineering.IMPOWER('2+3i', 3);
    expect(engineering.IMREAL(im)).to.approximately(-45.99999999999999, 1e-9);
    expect(engineering.IMAGINARY(im)).to.approximately(9.000000000000007, 1e-9);
    expect(engineering.IMPOWER('2+3i', 'a')).toBe(error.value);
    expect(engineering.IMPOWER('a', 1)).toBe(error.value);
  });

  test('IMPRODUCT', () => {
    expect(engineering.IMPRODUCT('3+4i', '5-3i')).toBe('27+11i');
    expect(engineering.IMPRODUCT('1+2i', '30+0i')).toBe('30+60i');
    expect(engineering.IMPRODUCT('a', '1')).toBe(error.value);
  });

  test('IMREAL', () => {
    expect(engineering.IMREAL('6-9i')).toBe(6);
    expect(engineering.IMREAL('i')).toBe(0);
    expect(engineering.IMREAL('+i')).toBe(0);
    expect(engineering.IMREAL('-j')).toBe(0);
    expect(engineering.IMREAL('0-j')).toBe(0);
    expect(engineering.IMREAL('4')).toBe('4');
    expect(engineering.IMREAL(0)).toBe(0);
    expect(engineering.IMREAL('1+k')).toBe(error.num);
    expect(engineering.IMREAL('+1+j')).toBe(1);
    expect(engineering.IMREAL('-1+j')).toBe(-1);
    expect(engineering.IMREAL('4j')).toBe(0);
  });

  test('IMSEC', () => {
    const im = engineering.IMSEC('4+3i');
    expect(engineering.IMREAL(im)).to.approximately(-0.06529402785794704, 1e-9);
    expect(engineering.IMAGINARY(im)).to.approximately(-0.07522496030277322, 1e-9);
    expect(engineering.IMSEC(true)).toBe(error.value);
    expect(engineering.IMSEC('a')).toBe(error.value);
  });

  test('IMSECH', () => {
    const im = engineering.IMSECH('4+3i');
    expect(engineering.IMREAL(im)).to.approximately(-0.03625349691586887, 1e-9);
    expect(engineering.IMAGINARY(im)).to.approximately(-0.005164344607753179, 1e-9);
    expect(engineering.IMSECH(true)).toBe(error.value);
    expect(engineering.IMSECH('a')).toBe(error.value);
  });

  test('IMSIN', () => {
    const im = engineering.IMSIN('4+3i');
    expect(engineering.IMREAL(im)).to.approximately(-7.61923172032141, 1e-9);
    expect(engineering.IMAGINARY(im)).to.approximately(-6.5481200409110025, 1e-9);
    expect(engineering.IMSIN('a')).toBe(error.value);
    expect(engineering.IMSIN(true)).toBe(error.value);
  });

  test('IMSINH', () => {
    const im = engineering.IMSINH('4+3i');
    expect(engineering.IMREAL(im)).to.approximately(-27.016813258003932, 1e-9);
    expect(engineering.IMAGINARY(im)).to.approximately(3.853738037919377, 1e-9);
    expect(engineering.IMSINH('a')).toBe(error.value);
    expect(engineering.IMSINH(true)).toBe(error.value);
  });

  test('IMSQRT', () => {
    const im = engineering.IMSQRT('1+i');
    expect(engineering.IMREAL(im)).to.approximately(1.0986841134678098, 1e-9);
    expect(engineering.IMAGINARY(im)).to.approximately(0.45508986056222733, 1e-9);
    expect(engineering.IMSQRT('a')).toBe(error.value);
  });

  test('IMSUB', () => {
    expect(engineering.IMSUB('13+4j', '5+3j')).toBe('8+j');
    expect(engineering.IMSUB('13', '5+3j')).toBe('8-3j');
    expect(engineering.IMSUB('a', '5+3i')).toBe(error.value);
  });

  test('IMSUM', () => {
    expect(engineering.IMSUM('3+4i', '5-3i')).toBe('8+i');
    expect(engineering.IMSUM('a', '5+3i')).toBe(error.value);
  });

  test('IMTAN', () => {
    const im = engineering.IMTAN('4+3i');
    expect(engineering.IMREAL(im)).to.approximately(0.004908258067495992, 1e-9);
    expect(engineering.IMAGINARY(im)).to.approximately(1.000709536067233, 1e-9);
    expect(engineering.IMTAN('a')).toBe(error.value);
    expect(engineering.IMTAN(true)).toBe(error.value);
  });

  test('OCT2BIN', () => {
    expect(engineering.OCT2BIN('3')).toBe('11');
    expect(engineering.OCT2BIN('3', 3)).toBe('011');
    expect(engineering.OCT2BIN('7777777000')).toBe('1000000000');
    expect(engineering.OCT2BIN('a')).toBe(error.num);
    expect(engineering.OCT2BIN('1000')).toBe(error.num);
    expect(engineering.OCT2BIN('1', 'a')).toBe(error.value);
    expect(engineering.OCT2BIN('1', -1)).toBe(error.num);
  });

  test('OCT2DEC', () => {
    expect(engineering.OCT2DEC('54')).toBe(44);
    expect(engineering.OCT2DEC('7777777533')).toBe(-165);
    expect(engineering.OCT2DEC('a')).toBe(error.num);
  });

  test('OCT2HEX', () => {
    expect(engineering.OCT2HEX('100')).toBe('40');
    expect(engineering.OCT2HEX('100', 4)).toBe('0040');
    expect(engineering.OCT2HEX('7777777533', 3)).toBe('ffffffff5b');
    expect(engineering.OCT2HEX('a')).toBe(error.num);
    expect(engineering.OCT2HEX('4000000000')).toBe('ffe0000000');
    expect(engineering.OCT2HEX('1', 'a')).toBe(error.value);
    expect(engineering.OCT2HEX('1', -1)).toBe(error.num);
  });
});
