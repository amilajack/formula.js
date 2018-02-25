
import error from '../lib/error';

import dateTime from '../lib/date-time';

describe('Date & Time', () => {
  test('DATE', () => {
    const date = dateTime.DATE(1900, 1, 1);
    expect(date.getFullYear()).toBe(1900);
    expect(date.getMonth()).toBe(1 - 1);
    expect(date.getDay()).toBe(1);

    expect(dateTime.DATE(1900, 1, -1)).toBe(error.num);
    expect(dateTime.DATE('invalid')).toBe(error.value);
  });

  test('DATEVALUE', () => {
    expect(dateTime.DATEVALUE('1/1/1900')).toBe(1);
    expect(dateTime.DATEVALUE('12/31/9999')).toBe(2958465);
    expect(dateTime.DATEVALUE(1)).toBe(error.value);
    expect(dateTime.DATEVALUE('0/0/0')).toBe(error.value);
  });

  test('DAY', () => {
    expect(dateTime.DAY(1)).toBe(1);
    expect(dateTime.DAY(2958465)).toBe(31);
    expect(dateTime.DAY('1')).toBe(1);
    expect(dateTime.DAY('1/1/1900')).toBe(1);
    expect(dateTime.DAY(new Date(1900, 0, 1))).toBe(1);
    expect(dateTime.DAY(-1)).toBe(error.num);
    expect(dateTime.DAY('a')).toBe(error.value);
  });

  test('DAYS', () => {
    expect(dateTime.DAYS(2, 1)).toBe(1);
    expect(dateTime.DAYS('1/2/1900', '1/1/1900')).toBe(1);
    expect(dateTime.DAYS(new Date(1900, 1, 2), new Date(1900, 1, 1))).toBe(1);
    expect(dateTime.DAYS('a', 1)).toBe(error.value);
    expect(dateTime.DAYS(1, 'a')).toBe(error.value);
  });

  test('DAYS360', () => {
    expect(dateTime.DAYS360('1/1/1901', '1/2/1901', true)).toBe(1);
    expect(dateTime.DAYS360('1/1/1901', '12/31/1901', true)).toBe(359);
    expect(dateTime.DAYS360('1/1/1901', '1/1/1902', true)).toBe(360);
    expect(dateTime.DAYS360('1/1/1901', '2/1/1901', true)).toBe(30);
    expect(dateTime.DAYS360('1/1/1901', '1/2/1901', false)).toBe(1);
    expect(dateTime.DAYS360('1/1/1901', '12/31/1901', false)).toBe(360);
    expect(dateTime.DAYS360('1/1/1901', '1/1/1902', false)).toBe(360);
    expect(dateTime.DAYS360('1/1/1901', '2/1/1901', false)).toBe(30);
    expect(dateTime.DAYS360('1/30/1901', '12/31/1901', false)).toBe(330);
    expect(dateTime.DAYS360('1/1/1901', 'a')).toBe(error.value);
    expect(dateTime.DAYS360('a', '1/2/1901')).toBe(error.value);
    expect(dateTime.DAYS360('1/1/1901', '1/2/1901', 'a')).toBe(error.value);
  });

  test('EDATE', () => {
    expect(dateTime.EDATE('1/1/1900', 0)).toBe(1);
    expect(dateTime.EDATE('1/1/1900', 1)).toBe(32);
    expect(dateTime.EDATE('1/1/1900', 12)).toBe(367);
    expect(dateTime.EDATE('a', 0)).toBe(error.value);
    expect(dateTime.EDATE('1/1/1900', 'a')).toBe(error.value);
  });

  test('EOMONTH', () => {
    expect(dateTime.EOMONTH('1/1/1900', 0)).toBe(31);
    expect(dateTime.EOMONTH('1/1/1900', 1)).toBe(59);
    expect(dateTime.EOMONTH('1/1/1900', 12)).toBe(397);
    expect(dateTime.EOMONTH('a', 0)).toBe(error.value);
    expect(dateTime.EOMONTH('1/1/1900', 'a')).toBe(error.value);
  });

  test('HOUR', () => {
    expect(dateTime.HOUR('1/1/1900')).toBe(0);
    expect(dateTime.HOUR('1/1/1900 1:00')).toBe(1);
    // dateTime.HOUR('1:00').should.equal(1);
    // dateTime.HOUR('0.75').should.equal(18);
    expect(dateTime.HOUR('a')).toBe(error.value);
  });

  test('INTERVAL', () => {
    expect(dateTime.INTERVAL(undefined)).toBe(error.value);
    expect(dateTime.INTERVAL(10000000)).toBe('P3M25DT17H46M40S');
    expect(dateTime.INTERVAL('10000000')).toBe('P3M25DT17H46M40S');
  });

  test('ISOWEEKNUM', () => {
    expect(dateTime.ISOWEEKNUM('1/1/1901')).toBe(1);
    expect(dateTime.ISOWEEKNUM('1/8/1901')).toBe(2);
    expect(dateTime.ISOWEEKNUM('12/29/1901')).toBe(52);
    expect(dateTime.ISOWEEKNUM('6/6/1902')).toBe(23);
    expect(dateTime.ISOWEEKNUM('a')).toBe(error.value);
  });

  test('MINUTE', () => {
    expect(dateTime.MINUTE('1/1/1901')).toBe(0);
    expect(dateTime.MINUTE('1/1/1901 1:01')).toBe(1);
    // dateTime.MINUTE('1:01').should.equal(1);
    expect(dateTime.MINUTE('a')).toBe(error.value);
  });

  test('MONTH', () => {
    expect(dateTime.MONTH('1/1/1900')).toBe(1);
    expect(dateTime.MONTH('12/1/1900')).toBe(12);
    expect(dateTime.MONTH('a')).toBe(error.value);
  });

  test('NETWORKDAYS', () => {
    expect(dateTime.NETWORKDAYS('2013-12-04', '2013-12-04')).toBe(1);
    expect(dateTime.NETWORKDAYS('2013-12-04', '2013-12-05')).toBe(2);
    expect(dateTime.NETWORKDAYS('2013-12-04', '2013-12-06')).toBe(3);
    expect(dateTime.NETWORKDAYS('2013-12-04', '2013-12-07')).toBe(3);
    expect(dateTime.NETWORKDAYS('2013-12-04', '2013-12-08')).toBe(3);
    expect(dateTime.NETWORKDAYS('2013-12-04', '2013-12-09')).toBe(4);
    expect(dateTime.NETWORKDAYS('2013-12-07', '2013-12-07')).toBe(0);
    expect(dateTime.NETWORKDAYS('2013-12-07', '2013-12-08')).toBe(0);
    expect(dateTime.NETWORKDAYS('12/4/2013', '12/4/2013')).toBe(1);
    expect(dateTime.NETWORKDAYS('12/4/2013', '1/4/2014', '1/1/2014')).toBe(22);
    expect(dateTime.NETWORKDAYS('12/4/2013', '1/4/2014', ['1/1/2014', '1/2/2014', '1/3/2014'])).toBe(20);
    expect(dateTime.NETWORKDAYS('a', '1/2/1900')).toBe(error.value);
    expect(dateTime.NETWORKDAYS('1/1/1900', 'a')).toBe(error.value);
    expect(dateTime.NETWORKDAYS('1/1/1900', '2/1/1900', 'a')).toBe(error.value);
  });

  test('NETWORKDAYS.INTL', () => {
    expect(dateTime.NETWORKDAYS.INTL('12/4/2013', '12/5/2013')).toBe(2);
    expect(dateTime.NETWORKDAYS.INTL('12/8/2013', '12/9/2013', 2)).toBe(0);
    expect(dateTime.NETWORKDAYS.INTL('12/4/2013', '12/4/2013', -1)).toBe(error.value);
  });

  test('NOW', () => {
    expect(dateTime.NOW()).toBeInstanceOf(Date);
  });

  test('SECOND', () => {
    expect(dateTime.SECOND('1/1/1900')).toBe(0);
    expect(dateTime.SECOND('1/1/1900 1:00:01')).toBe(1);
    expect(dateTime.SECOND('a')).toBe(error.value);
  });

  test('TIME', () => {
    expect(dateTime.TIME(0, 0, 0)).toBe(0);
    expect(dateTime.TIME(1, 1, 1)).to.approximately(0.04237268518518519, 1e-9);
    expect(dateTime.TIME(-1, -1, -1)).toBe(error.num);
    expect(dateTime.TIME('invalid')).toBe(error.value);
  });

  test('TIMEVALUE', () => {
    expect(dateTime.TIMEVALUE('1/1/1900 00:00:00')).toBe(0);
    expect(dateTime.TIMEVALUE('1/1/1900 12:00:00')).to.approximately(0.5, 1e-9);
    expect(dateTime.TIMEVALUE('a')).toBe(error.value);
  });

  test('TODAY', () => {
    expect(dateTime.TODAY()).toBeInstanceOf(Date);
  });

  test('WEEKDAY', () => {
    expect(dateTime.WEEKDAY('1/1/1901')).toBe(3);
    expect(dateTime.WEEKDAY('1/1/1901', 2)).toBe(2);
    expect(dateTime.WEEKDAY('a')).toBe(error.value);
  });

  test('WEEKNUM', () => {
    expect(dateTime.WEEKNUM('1/1/1900')).toBe(1);
    expect(dateTime.WEEKNUM('2/1/1900')).toBe(5);
    expect(dateTime.WEEKNUM('2/1/1909', 2)).toBe(6);
    expect(dateTime.WEEKNUM('1/1/1901', 21)).toBe(1);
    expect(dateTime.WEEKNUM('a')).toBe(error.value);
  });

  test('WORKDAY', () => {
    expect(dateTime.WORKDAY('1/1/1900', 1).getDate()).toBe(2);
    expect(dateTime.WORKDAY('1/1/1900', 7).getDate()).toBe(10);
    expect(dateTime.WORKDAY('1/1/1900', 2, '1/2/1900').getDate()).toBe(4);
    expect(dateTime.WORKDAY('a', 1, '1/2/1900')).toBe(error.value);
    expect(dateTime.WORKDAY('1/1/1900', 'a')).toBe(error.value);
    expect(dateTime.WORKDAY('1/1/1900', 1, 'a')).toBe(error.value);
    expect(dateTime.WORKDAY('1/1/1900', -1)).toBe(error.num);
  });

  test('WORKDAY.INTL', () => {
    expect(dateTime.WORKDAY.INTL('1/1/1900', 1).getDate()).toBe(2);
    expect(dateTime.WORKDAY.INTL('1/1/1905', 1, 2).getDate()).toBe(3);
    expect(dateTime.WORKDAY.INTL('1/1/1900', 1, 'a')).toBe(error.value);
  });

  test('YEAR', () => {
    expect(dateTime.YEAR('1/1/1900')).toBe(1900);
    expect(dateTime.YEAR('a')).toBe(error.value);
  });

  test('YEARFRAC', () => {
    expect(dateTime.YEARFRAC('1/1/1900', '1/2/1900')).to.approximately(0.002777777777777778, 1e-3);
    expect(dateTime.YEARFRAC('1/31/1900', '3/31/1900', 0)).to.approximately(0.16666666666666666, 1e-3);
    expect(dateTime.YEARFRAC('1/31/1900', '2/1/1900', 0)).to.approximately(0.002777777777777778, 1e-3);
    expect(dateTime.YEARFRAC('1/30/1900', '3/31/1900', 0)).to.approximately(0.16666666666666666, 1e-3);

    expect(dateTime.YEARFRAC('1/1/1900', '1/2/1900', 1)).to.approximately(0.0027397260273972603, 1e-3);
    expect(dateTime.YEARFRAC('1/1/1904', '1/1/1905', 1)).toBe(1);
    expect(dateTime.YEARFRAC('5/1/1903', '5/1/1904', 1)).toBe(1);
    expect(dateTime.YEARFRAC('1/1/1904', '1/2/1904', 1)).to.approximately(0.00273224043715847, 1e-3);

    expect(dateTime.YEARFRAC('1/1/1900', '1/2/1900', 2)).to.approximately(0.002777777777777778, 1e-3);
    expect(dateTime.YEARFRAC('1/1/1900', '1/2/1900', 3)).to.approximately(0.0027397260273972603, 1e-3);
    expect(dateTime.YEARFRAC('1/1/1900', '1/2/1900', 4)).to.approximately(0.002777777777777778, 1e-3);
    expect(dateTime.YEARFRAC('a', '1/2/1900')).toBe(error.value);
    expect(dateTime.YEARFRAC('1/1/1900', 'a')).toBe(error.value);
  });
});
