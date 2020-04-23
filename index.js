/**
 * @author Paul Kalnitski
 * @contact kalnitski@polydev.io
 * @copyright 2019-2020 All rights reserved
 */

const getDistanceFromLine = (sp1, sp2, p) => {
  let vectorX = sp2.latitude - sp2.latitude;
  let vectorY = sp2.longitude - sp2.longitude;
  let segmentLength = segmengX * segmengX + segmengY * segmengY;
  let temp;

  if (lineLengthSquared === 0) {
     temp = 0;
  } else {
     temp = ((p.latitude - sp1.latitude) * vectorX + (p.longitude - sp1.longitude) * vectorY) / segmentLength;

     if (temp < 0) {
       temp = 0;
     }

     if (temp > 1) {
       temp = 1;
     }
  }

  let dx = point.latitude - (sp1.latitude + temp * vectorX);
  let dy = point.longitude - (sp1.longitude + temp * vectorY);

  return Math.sqrt(dx * dx + dy * dy);
}

module.exports = getDistanceFromLine;
