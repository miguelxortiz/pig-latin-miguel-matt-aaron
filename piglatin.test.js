// Find a way to check if words start with vowels

// Check if input is Letter and not numbers or special chars

// If word starts with const. find how many leading const. and push to end of word.

// describe ("letterCheck", () => {
//     let str = "hello world"
//     test("checks if inputs are letters and not numbers", () => {
//         expect(letterCheck(123)).toBe(alert(`Please input only letters`))
//         expect(letterCheck(str)).toBe(str)
//     })
// })

// const letterCheck = (str) => {
//     if(str.includes("1")){
//         alert(`Please input only letters`)
//     } else if (str.includes("2")) {
//         alert(`Please input only letters`)
//     } else if (str.includes("3")) {
//         alert(`Please input only letters`)
//     } else if (str.includes("4")) {
//         alert(`Please input only letters`)
//     } else if (str.includes("5")) {
//         alert(`Please input only letters`)
//     } else if (str.includes("6")) {
//         alert(`Please input only letters`)
//     } else if (str.includes("7")) {
//         alert(`Please input only letters`)
//     } else if (str.includes("8")) {
//         alert(`Please input only letters`)
//     } else if (str.includes("9")) {
//         alert(`Please input only letters`)
//     } else if (str.includes("0")) {
//         alert(`Please input only letters`)
//     } else {
//         return str
//     }
// }

// let str = 123
//
// // const letterCheck = (str) => {
//     if (str.includes("1") === true || str.includes("2") === true || str.includes("3") === true || str.includes("4") === true || str.includes("5") === true || str.includes("6") === true || str.includes("7") === true || str.includes("8") === true || str.includes("9") === true || str.includes("0") === true) {
// //         alert(`Please input only letters`)
// //     } else {
// //         return str
//     }
// }
// console.log(letterCheck(str))
//
// //
// const letterCheck = () => {
//     let userInput= document.getElementById("userInput").value
//     if (Number.isInteger(userInput) === true) {
//         alert(`Please input only letters`)
//     } else {
//         return userInput
//     }
// }
//

describe ("pigLatin", () => {
    let test1 = "squat"
    let test2 = "hi are you here"
    test("translates userinput to pigLatin", () => {
        expect(pigLatin(test1)).toBe("atsqu-ay")
        expect(pigLatin(test2)).toBe("ih-ay are-way ouy-ay ereh-ay")
    })
})

// const pigLatin = (letters) => {
//     let arr = letters.split(" ")
//     let outcomeArr = []
//     if (arr.forEach(letters))  {
//         outcomeArr.push(`${letters}-way`)
//         // If words start with consonant then remove the first set of consonants to the end and add "ay"
//     } else if () {
//
//     }
// }


const pigLatin = () => {
    let userInput= document.getElementById("userInput").value
    let arr = userInput.split(" ")
    let vowels = ["a", "e", "i", "o", "u"]
    let outcomeArr = []
    arr.forEach(word => {
        if (word.startsWith("a") === true || word.startsWith("e") === true || word.startsWith("i") === true || word.startsWith("o") === true || word.startsWith("u") === true) {
            outcomeArr.push(`${word}-way`)
        } else if (word.startsWith("qu") || word.startsWith("Qu")){
            let newArr2 = word.split("")
            let vowelIndex2 = newArr2.findIndex(index2=>{
                if(index2 === "a" || index2 === "e" || index2 === "i" || index2 === "o"){
                    return index2
                }
            })
            outcomeArr.push(`${word.substring(vowelIndex2)}${word.substring(0, vowelIndex2)}-ay`)
        } else {
            let newArr = word.split("")
            if (word[1] === "q"){
                outcomeArr.push(`${word.substring(3)}${word.substring(0,3)}-ay`)
            } else {
                let vowelIndex = newArr.findIndex(index=>{
                    if (index === "a" || index === "e" || index === "i" || index === "o" || index === "u" && index != "q") {
                        return index
                    }
                })
                //This word.substring(0, vowelIndex) will take consonants out of word and add the end of the word and then add ay
                outcomeArr.push(`${word.substring(vowelIndex)}${word.substring(0, vowelIndex)}-ay`)
            }
        }

    })
    document.getElementById("userOutput").innerHTML = outcomeArr.join(" ")
    // return outcomeArr.join(" ")
}

// const translate = () => {
//     const check = letterCheck()
//     const pig = pigLatin(letters)
//     document.getElementById("userOutput").innerHTML = translate
// }
// console.log(pigLatin("i hope this works guys quiet squeal"))


// for (let i=0; i<vowels.length; i++) {
    //     for (let j=0; j<newArr.length; j++) {
        //         if (vowels[i] === newArr[j]) {
            //             return newArr.indexOf(newArr[j])
            //         }
            //     }
            // }
