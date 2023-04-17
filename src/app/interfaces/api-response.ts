export interface APIResponse{
    result:FullResults
}

export interface FullResults{
    acpower:number
    yieldtoday:number
    yieldtotal:number
    feedinpower:number
    soc:number
    uploadTime:string
    batPower:number
    powerdc1:number
    powerdc2:number
}