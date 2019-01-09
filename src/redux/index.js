export const addnum = '增加数量';
export const reducenum = '减少数量';
export function reducer(state=0,action){
    switch(action.type){
        case addnum:
            return state + 5
        case reducenum:
            return state - 5
        default:
            return 80
    }
}
export function addstate(){
    return{
        type : addnum
    }
}
export function reducestate(){
    return {
        type: reducenum
    }
}
