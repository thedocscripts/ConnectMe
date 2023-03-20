function checkifalreadyloggedin(){

}


export async function getuserdata(_email){
    if(await getuser(_email)){
        return true
    }else{
        return false
    }
}