// // Tresholds are [MinScore, VirusesSpeed, pointsPerVirus]
const thresholds = [
  [1500, 1500, 10],
  [1000, 850, 10],
  [800, 450, 8],
  [450, 300, 6],
  [200, 200, 4],
  [40, 175, 3],
  [0, 150, 2],
];

const findVelocity = (score) => thresholds.find(([limit]) => score >= limit)[1];
const findAvoidedVirusPoints = (score) => thresholds.find(([limit]) => score >= limit)[2];

export { thresholds, findVelocity, findAvoidedVirusPoints };
