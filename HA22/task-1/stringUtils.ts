export const capitalize = (str: string):string => {
    return str.charAt(0).toUpperCase()+str.slice(1).toLocaleLowerCase()
}

export const reverseString = (str:string):string => {
return str.split('').reverse().join('')
}