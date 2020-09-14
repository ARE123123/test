axios.all([callback1,callback2])
.then(axios.spread((res1, res2)=>{
}))