export interface APIResponse{
    meals:FullResults[];
}

interface FullResults{
    strMeal:string;
    strCategory:string;
    strArea:string;
    strMealThumb:string;
}

export interface IMeal{
    _id:string;
    strMeal:string;
    strCategory:string;
    strArea:string;
    strMealThumb:string;
}

export class CookbookItem implements IMeal{
    _id!:string;
    strMeal:string;
    strCategory:string;
    strArea:string;
    strMealThumb:string;

    constructor(strMeal:string, strCategory:string, strArea:string, strMealThumb:string){
        this.strMeal = strMeal;
        this.strCategory = strCategory;
        this.strArea = strArea;
        this.strMealThumb = strMealThumb;
    }
}