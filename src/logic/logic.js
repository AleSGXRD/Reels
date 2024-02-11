
function GetListNumbers( range , repeat ){
    let list = '';
    for(let j =0; j<repeat ; j++){
        for(let i =1; i <= range; i++){
            list += i + ' ';
        }
    }

    return list.split(' ');
}

export { GetListNumbers }