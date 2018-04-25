export class MakeOrdinal
{

    constructor()
    {
        console.log('MakeOrdinal instantiated');
    }

    public getOrdinal(originalNumber: number):string
    {
        let ordinal:string = "th";
        let tenthPlaceNumber:number;
        let lastPlaceNumber:number;
        let stringOriginalNumber:string = originalNumber.toString();
        
        if(originalNumber > 9)
        {
            tenthPlaceNumber = this.getTenthPlace(originalNumber);
            if(tenthPlaceNumber > 9 && tenthPlaceNumber < 21)
            {
                
                return originalNumber.toString() + ordinal;
            }
            else
            {
                lastPlaceNumber = this.getLastPlace(tenthPlaceNumber);
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

    private getTenthPlace(myNumber:number):number
    {
        let stringNumber:string = myNumber.toString();
        let newNumber:number = Number(stringNumber.slice((stringNumber.length-2), stringNumber.length));
        return newNumber;
    }

    private getLastPlace(myNumber:number):number
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