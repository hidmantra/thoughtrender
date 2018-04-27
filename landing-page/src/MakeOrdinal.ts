/**
 * This class is used to convert any positive whole number into an ordinal number
 * 
 * @author Deriv Diggs
 * @version 1.0
 */
export class MakeOrdinal
{

    constructor()
    {
        console.log('MakeOrdinal instantiated');
    }

    /**
     * returns the ordinal value of any posive whole number
     * 
     * @param originalNumber should be positive whole number
     */
    public getOrdinal(originalNumber: number):string
    {
        let ordinal:string = "th";
        let tensPlaceNumber:number;
        let lastPlaceNumber:number;
        
        if(originalNumber > 9)
        {
            tensPlaceNumber = this.getTensPlace(originalNumber);
            if(tensPlaceNumber > 9 && tensPlaceNumber < 21)
            {
                
                return originalNumber.toString() + ordinal;
            }
            else
            {
                lastPlaceNumber = this.getOnesPlace(tensPlaceNumber);
            }
        }
        else
        {
            lastPlaceNumber = originalNumber;
        }
        
        switch(lastPlaceNumber)
        {
            case 1:
            {
                ordinal = "st";
                break;
            }
            case 2:
            {
                ordinal = "nd";
                break;
            }
            case 3:
            {
                ordinal = "rd";
                break;
            }
            default:
            {
                ordinal = "th";
                break;
            }
        }
        return originalNumber.toString() + ordinal;
    }

    /**
     * returns the ones and tens place of any number
     * 
     * @param myNumber the base number 
     */
    private getTensPlace(myNumber:number):number
    {
        let stringNumber:string = myNumber.toString();
        let newNumber:number = Number(stringNumber.slice((stringNumber.length-2), stringNumber.length));
        return newNumber;
    }

    /**
     * returns the number in the ones place
     * 
     * @param myNumber the base number
     */
    private getOnesPlace(myNumber:number):number
    {
        let newNumber:number;
        if(myNumber > 10)
        {
            let stringNumber:string = myNumber.toString();
            newNumber = Number(stringNumber.slice(1,2));
        }
        else
        {
            newNumber = myNumber;
        }
        
        return newNumber;
    }
}