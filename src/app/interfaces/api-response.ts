export interface APIResponse{
    meals:FullResults[];
}

interface FullResults{
    strMeal:string;
    strCategory:string;
    strArea:string;
    strMealThumb:string;
    strTags:string;
    strYoutube:string;
    strSource:string;
}

export interface IMeal{
    _id:string;
    strMeal:string;
    strCategory:string;
    strArea:string;
    strMealThumb:string;
    strTags:string;
    strYoutube:string;
    strSource:string;
}

export class CookbookItem implements IMeal{
    _id!:string;
    strMeal:string;
    strCategory:string;
    strArea:string;
    strMealThumb:string;
    strTags:string;
    strYoutube:string;
    strSource:string;

    constructor(strMeal:string, strCategory:string, strArea:string, 
        strMealThumb:string, strTags:string, strYoutube:string, strSource:string)
    {
        this.strMeal = strMeal;
        this.strCategory = strCategory;
        this.strArea = strArea;
        this.strMealThumb = strMealThumb;
        this.strTags = strTags;
        this.strYoutube = strYoutube;
        this.strSource = strSource;
    }
}