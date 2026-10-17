'use strict';

/**
 * 
 * @param {number} fatherAge 
 * @param {number} sonAge 
 * @returns {number}
 */

function getYearsToDoubleAge(fatherAge, sonAge) {
    if (fatherAge < 0 || sonAge < 0 || fatherAge - sonAge < 15) {
        return NaN;
    }

    const years = fatherAge - 2 * sonAge;

    return years;
}

/**
 * 
 * @param {number} year 
 * @returns {string}
 */

function declensionWordYear(year) {
    const lastTwo = year % 100;
    const last = year % 10;

    if (lastTwo >= 11 && lastTwo <= 14) {
        return 'лет';
    }
    if (last === 1) {
        return 'год';
    }
    if (last >= 2 && last <= 4) {
        return 'года';
    }
    return 'лет';
}

/**
 * 
 * @param {number} fatherAge 
 * @param {number} sonAge 
 * @returns {string} 
 */

function getYearsToDoubleAgeMessage(fatherAge, sonAge) {
    if (fatherAge < 0 || sonAge < 0 || fatherAge - sonAge < 15) {
        return 'Некорректные данные';
    }

    const years = getYearsToDoubleAge(fatherAge, sonAge);
    const yearsText = declensionWordYear(years);

    if (years === 0) {
        return `Отец сейчас вдвое старше сына.`;
    }
    if (years > 0) {
        return `Отец будет вдвое старше сына через ${years} ${yearsText}.`;
    }
    return `Отец был вдвое старше сына ${Math.abs(years)} ${yearsText} назад.`;
}

console.log(getYearsToDoubleAgeMessage(40, 26));
console.log(getYearsToDoubleAgeMessage(40, 25));
console.log(getYearsToDoubleAgeMessage(40, 20));
console.log(getYearsToDoubleAgeMessage(40, 19));