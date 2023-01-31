export function destructionObject(object){
    const {special} = object;
    let result = new Array();
    for (var index in special){
        const {id, name, icon, description = 'Описание недоступно'} = special[index];
        result.push([id, name, icon, description]);
    }
    return result;
}