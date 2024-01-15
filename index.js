function findMatching(drivers, name) {
    return drivers.filter((el) => el.toLowerCase().includes(name.toLowerCase()));
}
function fuzzyMatch(drivers, element) {
    return drivers.filter(driver => driver.slice(0, element.length) === element);
}
function matchName(drivers, name) {
    const matchingDrivers= []
    for (const driver of drivers) {
        if (driver.name === name) {
            matchingDrivers.push(driver);
        }
    }
    return matchingDrivers;
}
