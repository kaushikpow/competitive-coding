//given powers array and armor which can be used in only one array index. return minimum power

console.log(func([1, 3, 5, 2], 3));

function func(damage, armor) {
  let result=1;
  let max=Math.max(...damage);
   let index=damage.indexOf(max);
   for(let i =0;i<damage.length;i++){
       if(i==index){
           if(damage[i] - armor >0 )
               result+=damage[i]-armor;
       
       index=null;
       continue;
       }
       
       result+=damage[i]
   }
   return result;
}
