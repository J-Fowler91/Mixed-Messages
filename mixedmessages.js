function generateRandomNumber() {
    return Math.floor(Math.random() * num)

}

const collectiveWisdom = {
    signInfo: ['moon', 'earth', 'neptune', 'sun'],
    fortuneOutOut: ['bad luck', 'very bad luck', 'good luck', 'great luck'],
    advice: ['go to the gym', 'go to dinner', 'trust no one', 'play more'],
}


let personalWisdom = []


for( let prop in collectiveWisdom) {
    let optionIdx = generateRandomNumber(collectiveWisdom[prop].length)


    switch(prop) {
        case 'signInfo':
            personalWisdom.push(`Your sign right now is a "${collectiveWisdom[prop][optionIdx]}".`)
            break
            case 'fortune OutPut':
            personalWisdom.push(`You are having: ${collectiveWisdom[prop][optionIdx]}".`)
            break
            case 'advice':
            personalWisdom.push(`You should: ${collectiveWisdom[prop][optionIdx]}".`)
            break
            default:
                personalWisdom.push('There is not enough info.')

    }

}

function formatWisdom() {
    const formatted = personalWisdom.join('\n')
    console.log(formatted)
}

formatWisdom(personalWisdom)