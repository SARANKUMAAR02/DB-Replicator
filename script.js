let count=1
function Replicator(){

    fetch('https://api-thirukkural.vercel.app/api?num='+count)
    .then((res)=>{
        if(res.ok){
            console.log('success')
        }
        else{
            console.log('failed')
        }
        return res.json()})
    .then((msg)=>{
        const l1 =msg.line1;
        const l2 =msg.line2;
        const ct =msg.chap_tam;
        Post(l1,l2,ct,count)
        count++
        
    })
    .catch((err)=>{
        console.log('oops error occured')

    })
}


function Post(l1,l2,ct,count){

    fetch('http://localhost:4000/work/thiru/',{
        method : 'POST',
        headers : {'content-type':'application/json'},
        body : JSON.stringify({
        line1:  l1,
        line2:  l2,
        chap_tam: ct,
        id: count
        })

    })
    .then((msg)=> msg.json())
    .then((json)=>console.log(json))
}

// let setin=setInterval(()=>{
//     if(count==1331){
//         clearInterval(setin)
//     }
//     Replicator()

// },1000)

