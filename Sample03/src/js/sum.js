function sum(a, b, callback){
    if(callback){
        callback(a, b);
    }

    return a + b;
}

export default sum;