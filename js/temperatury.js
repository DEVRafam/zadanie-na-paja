export const celToFar = (val) => val * 1.8 + 32;
export const farToCel = (val) => ((val - 32) / 1.8).toFixed(2);
export const celToKel = (val) => val * 1 + 273;
export const kelToCel = (val) => val - 273;
//
export default {
    celToFar,
    farToCel,
    celToKel,
    kelToCel,
};
