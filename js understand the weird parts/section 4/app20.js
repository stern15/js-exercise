function buildFunction(){
    var arr=[];
    for (var i = 0; i < 3 ;i++ ){
        arr.push(
            function(){
                console.log(i);
            }
        );
    }
    return arr;
}
var fs = buildFunction();
fs[0]();
fs[1]();
fs[2]();





















function buildFunction2(){
    var arr=[];
    for (var i = 0; i < 3 ;i++ ){
        let j = i;
        arr.push(
            function(){
                console.log(j);
            }
        );
    }
    return arr;
}
var fs2 = buildFunction2();
fs2[0]();
fs2[1]();
fs2[2]();

