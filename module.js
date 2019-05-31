const list = [];

const sortList = function () {
    list.sort((a, b) => a - b);
    return list;
}

module.exports = {
    addNumToList: function (number) {
        if(typeof number === "number"){
            list.push(number);
            return `Your number ${number} has been added to the secret list.`;
        } else {
            return `Please input a valid number`;
        }
    },
    sortedList: function () {
        return sortList();
    }
}