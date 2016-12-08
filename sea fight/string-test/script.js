function validate(phoneNumber) {
    if (phoneNumber.length > 8 || phoneNumber.length < 7) {
        return false;
    };
    if (phoneNumber.length === 8) {
        if (phoneNumber.charAt(3) !== "-") {
            return false
        }
    }
    newArray = phoneNumber.split('-');
    for (var i = 0; i < newArray.length; i++) {
        if (isNaN(newArray[i])) {
            return false;
        } else {
            return true;
        }
    }
}
var validateResult = validate("123-4567");
console.log(validateResult);