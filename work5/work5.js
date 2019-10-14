//9*9的空表，请自行编写这行代码



//倒九九乘法表
str = '<table border="1">'
for(let i=9;i>0;--i){
    str += '<tr>'
    for(var j=i;j>0;--j){
        str +='<td>&nbsp</td>'
    }
    str += '</tr>'
}
str += '</table>'
document.getElementById('table2').innerHTML=str

