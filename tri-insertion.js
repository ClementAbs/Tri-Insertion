'use_strict'



var t=[5,10,15,30,23,17,40,17,12,13,15,18,20,18,21,20,3,17,18,19];


function tri_insertion()
{
    var i=0, j=0;
    var tab=[7,8,10,10,15,17,25,30,45,65,23,18,20,32,35,14,17,21,19,20];
 
    for (i = 1; i < 20; i++) {
        tab[j] = t[i];
        for (j = i; j > 0 && t[j - 1] > tab[i]; j--) {
            t[j] = t[j - 1];
        }
        t[j] = tab[i];
    }
}


tri_insertion(t);

alert(t);
