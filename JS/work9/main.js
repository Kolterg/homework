/*
// 1
// Створити роспорядок дня на Колбеках від 7 до 10 дій

function wakeUp(finished, cb) {
    setTimeout(() => {
        if (finished) {
            console.log('I woke up');
                cb(null, 200);
        } else {
            cb('Your attempts are in vain');
        }
    }, 400)
}

function cookBreakfast(vitalEnergy, cb) {
    setTimeout(() => {
        if (vitalEnergy > 50) {
            console.log('I cooked a delicious breakfast');
            cb(null, vitalEnergy - 50);
        } else {
            cb('Breakfast is not edible');
        }
    },300)
}

function eatBreakfast(breakfastIsDelicious, vitalEnergy, cb) {
    setTimeout(() => {
        if (breakfastIsDelicious) {
            console.log('Eat delicious breakfast');
            cb(null, vitalEnergy + 500);
        } else {
            cb('No eat');
        }
    },400)
}

function driveToWork(vitalEnergy, cb) {
    setTimeout(() => {
        if (vitalEnergy > 100) {
            console.log('Enjoy the road to work');
            cb(null, vitalEnergy + 50);
        } else {
            cb('Slips all road', vitalEnergy + 150);
        }
    }, 500)
}

function toDoWork(vitalEnergy, cb) {
    setTimeout(() => {
        if (vitalEnergy > 300) {
            console.log('Productive work');
            cb(null, vitalEnergy - 300);
        } else {
            cb('Unproductive work', vitalEnergy - 100);
        }
    }, 1200)
}

function goLunchBreak(productive, vitalEnergy, cb) {
    setTimeout(() => {
        if (productive) {
            console.log('Eat a hearty lunch');
            cb(null, vitalEnergy + 300);
        } else {
            cb('Eat a regular lunch', vitalEnergy + 200);
        }
    }, 400)
}

function toDoWork2(vitalEnergy, cb) {
    setTimeout(() => {
        if (vitalEnergy > 300) {
            console.log('Productive work');
            cb(null, vitalEnergy - 300);
        } else {
            cb('Unproductive work', vitalEnergy - 100);
        }
    }, 1800)
}

function driveToHome(vitalEnergy, cb) {
    setTimeout(() => {
        if (vitalEnergy > 200) {
            console.log('It`s be a good day');
        } else {
            console.log('Err');
        }
    }, 500)
}

wakeUp(true, (err, vitalEnergy) => {
    if(!err) {
        console.log(vitalEnergy);
        cookBreakfast(vitalEnergy, (err, vitalEnergy) => {
            if (!err) {
                console.log(vitalEnergy);
                eatBreakfast(true, vitalEnergy, (err, vitalEnergy) => {
                    if (!err) {
                        console.log(vitalEnergy);
                        driveToWork(vitalEnergy, (err, vitalEnergy) => {
                            if (!err) {
                                console.log(vitalEnergy);
                                toDoWork(vitalEnergy, (err, vitalEnergy) => {
                                    if (!err){
                                        console.log(vitalEnergy);
                                        goLunchBreak(true, vitalEnergy, (err, vitalEnergy) => {
                                            if (!err) {
                                                console.log(vitalEnergy);
                                                toDoWork2(vitalEnergy, (err, vitalEnergy) => {
                                                    if (!err) {
                                                        console.log(vitalEnergy);
                                                        driveToHome(vitalEnergy);
                                                    } else {
                                                        console.log(err);
                                                    }
                                                })
                                            } else {
                                                console.log(err);
                                            }
                                        })
                                    } else {
                                        console.log(err);
                                    }
                                })
                            } else {
                                console.log(err);
                            }
                        })
                    } else {
                        console.log(err);
                    }
                })
            } else {
                console.log(err);
            }
        })
    } else {
        console.log(err);
    }
})
*/

// 2
// Створити роспорядок дня на Промисах від 7 до 10 дій

function wakeUp(finished) {
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            if (finished) {
                console.log('I woke up');
                resolve(200);
            } else {
                reject('Your attempts are in vain');
            }
        }, 400)
    )
}

function cookBreakfast(vitalEnergy) {
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            if (vitalEnergy > 50) {
                console.log('I cooked a delicious breakfast');
                resolve(vitalEnergy - 50);
            } else {
                reject('Breakfast is not edible');
            }
        }, 300)
    )
}

function eatBreakfast(breakfastIsDelicious, vitalEnergy) {
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            if (breakfastIsDelicious) {
                console.log('Eat delicious breakfast');
                resolve(vitalEnergy + 500);
            } else {
                reject('No eat');
            }
        }, 400)
    )
}

function driveToWork(vitalEnergy) {
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            if (vitalEnergy > 100) {
                console.log('Enjoy the road to work');
                resolve(vitalEnergy + 50);
            } else {
                console.log('Slips all road');
                reject(vitalEnergy + 150);
            }
        }, 500)
    )
}

function toDoWork(vitalEnergy) {
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            if (vitalEnergy > 300) {
                console.log('Productive work');
                resolve(vitalEnergy - 300);
            } else {
                console.log('Unproductive work');
                reject(vitalEnergy - 100);
            }
        }, 1200)
    )
}

function goLunchBreak(productive, vitalEnergy) {
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            if (productive) {
                console.log('Eat a hearty lunch');
                resolve(vitalEnergy + 300);
            } else {
                console.log('Eat a regular lunch');
                reject(vitalEnergy + 200);
            }
        }, 400)
    )
}

function toDoWork2(vitalEnergy) {
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            if (vitalEnergy > 300) {
                console.log('Productive work');
                resolve(vitalEnergy - 300);
            } else {
                console.log('Unproductive work');
                reject(vitalEnergy - 100);
            }
        }, 1800)
    )
}

function driveToHome(vitalEnergy) {
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            if (vitalEnergy > 200) {
                console.log('It`s be a good day');
                resolve(vitalEnergy)
            } else {
                console.log('Err');
                reject(vitalEnergy);
            }
        }, 500)
    )
}

/*
wakeUp(true)
    .then(value => {
        console.log(value);
        return cookBreakfast(value);
    })
    .then(value => {
        console.log(value);
        return eatBreakfast(true, value);
    })
    .then(value => {
        console.log(value);
        return driveToWork(value);
    })
    .then(value => {
        console.log(value);
        return toDoWork(value);
    })
    .then(value => {
        console.log(value);
        return goLunchBreak(true, value);
    })
    .then(value => {
        console.log(value);
        return toDoWork2(value);
    })
    .then(value => {
        console.log(value);
        return driveToHome(value);
    })
    .then(value => {
        console.log(value);
    })
    .catch(eror => {
        console.log(eror);
    })
    .finally(() => {
        console.log('It`s be a long day!!!');
    })
*/

// 3
// Створити роспорядок дня на Асінк-евейтах від 7 до 10 дій

async function longDay() {
    try {
        let vitalEnergy = await wakeUp(true);
        console.log(vitalEnergy);

        vitalEnergy = await cookBreakfast(vitalEnergy);
        console.log(vitalEnergy);

        vitalEnergy = await eatBreakfast(true, vitalEnergy);
        console.log(vitalEnergy);

        vitalEnergy = await driveToWork(vitalEnergy);
        console.log(vitalEnergy);

        vitalEnergy = await toDoWork(vitalEnergy);
        console.log(vitalEnergy);

        vitalEnergy = await goLunchBreak(true, vitalEnergy);
        console.log(vitalEnergy);

        vitalEnergy = await toDoWork2(vitalEnergy);
        console.log(vitalEnergy);

        await driveToHome(vitalEnergy);
    } catch (err) {
        console.log(err);
    }
}

longDay();
