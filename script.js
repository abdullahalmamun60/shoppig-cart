//Plus button phone number update+1
document.getElementById("phonePlus").addEventListener("click", function () {
    var phoneCount = document.getElementById("phoneCount")
    let phoneCountUpdate = parseInt(phoneCount.value)
    phoneCountUpdate += 1;
    //console.log(typeof phoneCountUpdate,phoneCountUpdate)
    phoneCount.value = phoneCountUpdate;
    var getPhonePrice = document.getElementById("phonePrice").innerText
    var phonePrice = parseInt(getPhonePrice)
    //console.log(getPhonePrice,typeof phonePrice)
    var finalPhonePrice = 1290 * phoneCountUpdate;
    //console.log(finalPhonePrice,typeof finalPhonePrice)
    document.getElementById("phonePrice").innerText = finalPhonePrice;
    var phonePriceUpdate = parseInt(document.getElementById("phonePrice").innerText);
    var casePriceUpdate = parseInt(document.getElementById("casePrice").innerText);
    var totalPrice = phonePriceUpdate + casePriceUpdate;
    document.getElementById("totalPrice").innerText = totalPrice;
    document.getElementById("totalPrice1").innerText = totalPrice;
})

//Minus button phone number update-1
document.getElementById("phoneMinus").addEventListener("click", function () {
    var phoneCount = document.getElementById("phoneCount")
    let phoneCountUpdate = parseInt(phoneCount.value)
    phoneCountUpdate -= 1;
    if (phoneCountUpdate < 0) {
        alert("Number of phone can't be less than 0")
    }
    else {
        phoneCount.value = phoneCountUpdate;
        var phonePrice = document.getElementById("phonePrice")
        phoneCount.value = phoneCountUpdate;
        var getPhonePrice = document.getElementById("phonePrice").innerText
        var phonePrice = parseInt(getPhonePrice)
        //console.log(getPhonePrice,typeof phonePrice)
        var finalPhonePrice = 1290 * phoneCountUpdate;
        //console.log(finalPhonePrice,typeof finalPhonePrice)
        document.getElementById("phonePrice").innerText = finalPhonePrice;
        // var phoneTotalPrice =  document.getElementById("phonePrice").innerText
        var phonePriceUpdate = parseInt(document.getElementById("phonePrice").innerText);
        var casePriceUpdate = parseInt(document.getElementById("casePrice").innerText);
        var totalPrice = phonePriceUpdate + casePriceUpdate;
        document.getElementById("totalPrice").innerText = totalPrice;
        document.getElementById("totalPrice1").innerText = totalPrice;
    }
})
//case plus button
document.getElementById("casePlus").addEventListener("click", function () {
    var caseCount = document.getElementById("caseCount")
    let caseCountUpdate = parseInt(caseCount.value)
    caseCountUpdate += 1;
    //console.log(typeof phoneCountUpdate,phoneCountUpdate)
    caseCount.value = caseCountUpdate;
    var getCasePrice = document.getElementById("casePrice").innerText
    var casePrice = parseInt(getCasePrice)
    //console.log(getPhonePrice,typeof phonePrice)
    var finalCasePrice = 59 * caseCountUpdate;
    //console.log(finalPhonePrice,typeof finalPhonePrice)
    document.getElementById("casePrice").innerText = finalCasePrice;
    // var caseTotalPrice= document.getElementById("casePrice").innerText
    var phonePriceUpdate = parseInt(document.getElementById("phonePrice").innerText);
    var casePriceUpdate = parseInt(document.getElementById("casePrice").innerText);
    var totalPrice = phonePriceUpdate + casePriceUpdate;
    document.getElementById("totalPrice").innerText = totalPrice;
    document.getElementById("totalPrice1").innerText = totalPrice;
})

//case minus button
document.getElementById("caseMinus").addEventListener("click", function () {
    var caseCount = document.getElementById("caseCount")
    let caseCountUpdate = parseInt(caseCount.value)
    caseCountUpdate -= 1;
    if (caseCountUpdate < 0) {
        alert("Number of case can't be less than 0")
    }
    else {
        caseCount.value = caseCountUpdate;
        var casePrice = document.getElementById("casePrice")
        caseCount.value = caseCountUpdate;
        var getCasePrice = document.getElementById("casePrice").innerText
        var casePrice = parseInt(getCasePrice)
        //console.log(getPhonePrice,typeof phonePrice)
        var finalCasePrice = 59 * caseCountUpdate;
        //console.log(finalPhonePrice,typeof finalPhonePrice)
        document.getElementById("casePrice").innerText = finalCasePrice;

        ///////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////
        var phonePriceUpdate = parseInt(document.getElementById("phonePrice").innerText);
        var casePriceUpdate = parseInt(document.getElementById("casePrice").innerText);
        var totalPrice = phonePriceUpdate + casePriceUpdate;
        document.getElementById("totalPrice").innerText = totalPrice;
        document.getElementById("totalPrice1").innerText = totalPrice;
    }
})

// var finalTotalPrice =phoneTotalPrice + caseTotalPrice;
// console.log(finalTotalPrice)
// var finalPrice = parseInt(document.getElementById("totalPrice").value)
// console.log(finalPrice, typeof finalPrice)
// document.getElementById("totalPrice").innerText = phoneTotalPrice + caseTotalPrice;

var phonePriceUpdate = parseInt(document.getElementById("phonePrice").innerText);
var casePriceUpdate = parseInt(document.getElementById("casePrice").innerText);
var totalPrice = phonePriceUpdate + casePriceUpdate;
document.getElementById("totalPrice").innerText = totalPrice;
document.getElementById("totalPrice1").innerText = totalPrice;
//phone price update
// var phonePrice = document.getElementById("phonePrice")
// var phonePriceUpdate = parseInt(phonePrice.innerText)
// var finalPhonePrice = phonePriceUpdate * phoneCountUpdate;