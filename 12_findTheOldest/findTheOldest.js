const findTheOldest = function(people) {
    let oldest = 0;
    let name;
    let date = new Date().getFullYear();
    for(let i = 0; i < people.length; i++){
        if (people[i].yearOfDeath === undefined) {
            if(date - people[i].yearOfBirth > oldest) {
                oldest = date - people[i].yearOfBirth
                name = people[i];

            }
        }
        else if(people[i].yearOfDeath - people[i].yearOfBirth > oldest) {
            oldest = people[i].yearOfDeath - people[i].yearOfBirth;
            name = people[i];
        }
    }
    return name;
};

// Do not edit below this line
module.exports = findTheOldest;
