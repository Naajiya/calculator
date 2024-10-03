display=(content)=>{
    console.log(content);
    
    output.value +=content
}

clearAll=()=>{
    output.value=''
}

showResult=()=>{
    try{
        output.value=eval(output.value)
    }catch{
        output.value=''
        output.placeholder="invalid expression"
    }finally{
        console.log('this is finaly');
        
    }
    
}

RemveEnd=()=>{
   output.value=output.value.slice(0,-1)
   
}