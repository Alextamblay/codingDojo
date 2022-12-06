export default function verifyCollisionWithOnigiri(y1, x1, y2, x2 ){
    const xDistance = x1 - x2;
    const yDistance = y1 - y2;
    


    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2))
}