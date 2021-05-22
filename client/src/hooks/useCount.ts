import {useTranslation} from "react-i18next";


export const useCount = () => {
    const {t} = useTranslation()
    const takeCount = (number:number):string | undefined => {
        if(number < 999 ) {
            return `${number}`
        } else {
            if(number < 999999) {
                return `${Math.floor(number/1000)} ${t('K')}`
            } else {
                if(number < 999999999 ) {
                    return `${Math.floor(number / 1000000)} ${t('M')}`
                } else {
                    if( number < 999999999) {
                        return `${Math.floor(number / 1000000000)} ${t('B')}`
                    }
                }
            }
        }
    }
    return {takeCount}
}