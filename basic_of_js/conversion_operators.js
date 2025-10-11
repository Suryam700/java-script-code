{
    let score1 = 23
    let score2 = "23"
    let score3 = "23abc"

    console.log(typeof score1)
    console.log(typeof(score2))

    let score2InNumber = Number(score2)
    // convert score2: string to number(int) dataType by using Number() --> function
    console.log(typeof(score2InNumber))


    let score3InNumber = Number(score3) // this function cann't change "23abc" to number it's a bug of JS that type of score3InNumber is number in real it isn't a number 
    console.log(typeof(score3InNumber))
    console.log(score3InNumber) // NaN 
}

{
    let variable1 = null
    let variable1InNumber = Number(variable1) // this function convert null -> 0
    console.log(typeof variable1InNumber)
    console.log(variable1InNumber) // 0

    /*
    when we trying these dataType convert into number dataType:
        null => 0
        undefined => NaN
        boolean => true = 1 and false = 0
        str => NaN...
    */
}

console.log(typeof(NaN)) // number

{
    let isLoggedIn = 1
    let isLoggedInInboolean = Boolean(isLoggedIn)
    console.log(typeof isLoggedInInboolean)
    console.log(isLoggedInInboolean)

    /*
    when we trying these dataType convert into boolean dataType:
        1 => true and 0 => false
        "" => false
        "someStr" => true...
    */
}


{
    let variable = undefined
    let variableInString = String(variable)
    console.log(variableInString)
    console.log(typeof variableInString)

    /*
    when we trying these dataType convert into string dataType:
        number => "number"
        boolean => string
        null => string
        undefined => string...
    */
}