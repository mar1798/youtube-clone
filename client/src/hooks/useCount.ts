

export const useCount = () => {
    const takeCount = (number:number):string | undefined => {
        if(number < 999 ) {
            return `${number}`
        } else {
            if(number < 999999) {
                return `${Math.floor(number/1000)} .ТЫС`
            } else {
                if(number < 999999999 ) {
                    return `${Math.floor(number / 1000000)} .МЛН`
                } else {
                    if( number < 999999999) {
                        return `${Math.floor(number / 1000000000)} .МЛРД`
                    }
                }
            }
        }
    }
    return {takeCount}
}