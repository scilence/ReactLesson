function sum(a, b, callback){
    let c = 0;
    if(callback){
        c = callback(a, b) || 0;
    }

    return a + b + c;
}

export default sum;