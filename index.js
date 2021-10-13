function distanceFromHqInBlocks(location) {
    let blocks = Math.abs(location - 42);
    
    return blocks;
}

function distanceFromHqInFeet(location) {
    let feet = distanceFromHqInBlocks(location) * 264;

    return feet;
}

function distanceTravelledInFeet(start, destination) {
    let feetDistance = Math.abs(start - destination) * 264;

    return feetDistance;
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    let fare = 0;

    if(distance >=0 && distance <= 400) {
        return 0;
    }
    else if(distance > 400 && distance <= 2000) {
        fare = (distance - 400) * 0.02;
        return fare;
    }
    else if(distance > 2000 && distance <= 2500) {
        return 25;
    }
    else {
        return 'cannot travel that far';
    }
}