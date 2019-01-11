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
// redux异步操作
export function removeAsync(){
    //可以返回一函数
    return dispatch => {
        setTimeout(()=>{
            dispatch(reducestate())
        },2000)
    }
}
