import { Pipe, PipeTransform } from "@angular/core";
@Pipe(
    {
        name:'Figure'
    }
)
export class PriceFigurePipe implements PipeTransform{
    transform(value: any) {
        let res:number
        if(value>=1000 && value<1000000){
            
            
            return((value/1000).toFixed(2)+'K')
            
        }
        else if(value>=1000000 && value<1000000000){
            return((value/1000000).toFixed(2)+'M')
        }
    }

}