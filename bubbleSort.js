<script>

 function bubbleSort(numArr){
    var temp=0;
    for (i=0;i<numArr.length;i++){
        for (j=i+1;j<numArr.length;j++){
            if(numArr[i]>numArr[j]){
                temp=numArr[j];
                numArr[j]=numArr[i];
                numArr[i]=temp;
                
            }
        }
    }
    return numArr;
 }
 arr=[1,4,10,5,2];   
 console.log(bubbleSort(arr))



</script>