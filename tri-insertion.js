



var t= new Array(); // Assigné a t la valeur 0


 for(var i=0; i<19; i++)   // t est undefined
 {
t.push(prompt("Entrer 20 valeurs à trier entre 0 et 100"));
console.log(t);
 }

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
 
