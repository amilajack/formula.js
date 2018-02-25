import mathTrig from './math-trig';
import statistical from './statistical';
import engineering from './engineering';
import dateTime from './date-time';

function set(fn, root) {
  if (root) {
    for (const i in root) {
      fn[i] = root[i];
    }
  }
  return fn;
}

export const BETADIST = statistical.BETA.DIST;
export const BETAINV = statistical.BETA.INV;
export const BINOMDIST = statistical.BINOM.DIST;
export const CEILING = exports.ISOCEILING = set(mathTrig.CEILING.MATH, mathTrig.CEILING);
export const CEILINGMATH = mathTrig.CEILING.MATH;
export const CEILINGPRECISE = mathTrig.CEILING.PRECISE;
export const CHIDIST = statistical.CHISQ.DIST;
export const CHIDISTRT = statistical.CHISQ.DIST.RT;
export const CHIINV = statistical.CHISQ.INV;
export const CHIINVRT = statistical.CHISQ.INV.RT;
export const CHITEST = statistical.CHISQ.TEST;
export const CONFIDENCE = set(statistical.CONFIDENCE.NORM, statistical.CONFIDENCE);
export const COVAR = statistical.COVARIANCE.P;
export const COVARIANCEP = statistical.COVARIANCE.P;
export const COVARIANCES = statistical.COVARIANCE.S;
export const CRITBINOM = statistical.BINOM.INV;
export const EXPONDIST = statistical.EXPON.DIST;
export const ERFCPRECISE = engineering.ERFC.PRECISE;
export const ERFPRECISE = engineering.ERF.PRECISE;
export const FDIST = statistical.F.DIST;
export const FDISTRT = statistical.F.DIST.RT;
export const FINVRT = statistical.F.INV.RT;
export const FINV = statistical.F.INV;
export const FLOOR = set(mathTrig.FLOOR.MATH, mathTrig.FLOOR);
export const FLOORMATH = mathTrig.FLOOR.MATH;
export const FLOORPRECISE = mathTrig.FLOOR.PRECISE;
export const FTEST = statistical.F.TEST;
export const GAMMADIST = statistical.GAMMA.DIST;
export const GAMMAINV = statistical.GAMMA.INV;
export const GAMMALNPRECISE = statistical.GAMMALN.PRECISE;
export const HYPGEOMDIST = statistical.HYPGEOM.DIST;
export const LOGINV = statistical.LOGNORM.INV;
export const LOGNORMINV = statistical.LOGNORM.INV;
export const LOGNORMDIST = statistical.LOGNORM.DIST;
export const MODE = set(statistical.MODE.SNGL, statistical.MODE);
export const MODEMULT = statistical.MODE.MULT;
export const MODESNGL = statistical.MODE.SNGL;
export const NEGBINOMDIST = statistical.NEGBINOM.DIST;
export const NETWORKDAYSINTL = dateTime.NETWORKDAYS.INTL;
export const NORMDIST = statistical.NORM.DIST;
export const NORMINV = statistical.NORM.INV;
export const NORMSDIST = statistical.NORM.S.DIST;
export const NORMSINV = statistical.NORM.S.INV;
export const PERCENTILE = set(statistical.PERCENTILE.EXC, statistical.PERCENTILE);
export const PERCENTILEEXC = statistical.PERCENTILE.EXC;
export const PERCENTILEINC = statistical.PERCENTILE.INC;
export const PERCENTRANK = set(statistical.PERCENTRANK.INC, statistical.PERCENTRANK);
export const PERCENTRANKEXC = statistical.PERCENTRANK.EXC;
export const PERCENTRANKINC = statistical.PERCENTRANK.INC;
export const POISSON = set(statistical.POISSON.DIST, statistical.POISSON);
export const POISSONDIST = statistical.POISSON.DIST;
export const QUARTILE = set(statistical.QUARTILE.INC, statistical.QUARTILE);
export const QUARTILEEXC = statistical.QUARTILE.EXC;
export const QUARTILEINC = statistical.QUARTILE.INC;
export const RANK = set(statistical.RANK.EQ, statistical.RANK);
export const RANKAVG = statistical.RANK.AVG;
export const RANKEQ = statistical.RANK.EQ;
export const SKEWP = statistical.SKEW.P;
export const STDEV = set(statistical.STDEV.S, statistical.STDEV);
export const STDEVP = statistical.STDEV.P;
export const STDEVS = statistical.STDEV.S;
export const TDIST = statistical.T.DIST;
export const TDISTRT = statistical.T.DIST.RT;
export const TINV = statistical.T.INV;
export const TTEST = statistical.T.TEST;
export const VAR = set(statistical.VAR.S, statistical.VAR);
export const VARP = statistical.VAR.P;
export const VARS = statistical.VAR.S;
export const WEIBULL = set(statistical.WEIBULL.DIST, statistical.WEIBULL);
export const WEIBULLDIST = statistical.WEIBULL.DIST;
export const WORKDAYINTL = dateTime.WORKDAY.INTL;
export const ZTEST = statistical.Z.TEST;
