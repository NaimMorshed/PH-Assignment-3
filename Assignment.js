function kilometerToMeter(km) {
    if (km < 0 || typeof km != "number" || km == null) {
        return "Unexpected value!";
    }
    else {
        return km * 1000;
    }
}

function budgetCalculator(ghori, phone, laptop) {
    if (typeof (ghori || phone || laptop) != "number" || ghori == null || phone == null || laptop == null || (ghori || phone || laptop) < 0) {
        return "Unexpected value!";
    }
    else {
        return (ghori * 50) + (phone * 100) + (laptop * 500);
    }
}

function hotelCost(perNight) {
    if (perNight > 0 && perNight <= 10) {
        return perNight * 100;
    }
    else if (perNight > 10 && perNight <= 20) {
        return perNight * 80;
    }
    else if (perNight > 20) {
        return perNight * 50;
    }
    else {
        return "Unexpected value!"
    }
}

function megaFriend(friends) {
    if (typeof friends == 'object') {
        for (let i = 0; i < friends.length; i++) {
            //Checking data type
            if (typeof friends[i] != 'string') {
                return "Names should be string type value!";
            }
        }
        let max = friends[0].length;
        let index = 0;
        //Finding the maximum 
        for (let i = 0; i < friends.length; i++) {
            if (friends[i].length > max) {
                max = friends[i].length;
                index = i;
            }
        }
        return friends[index];
    }
    else {
        return "Unexpected value!"
    }
}
