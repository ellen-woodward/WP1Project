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