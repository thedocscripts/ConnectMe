import db from "@/firebase"

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


const citiesRef = db.collection('users');


export default async function handler(req, res) {
  // if (req.method === 'POST') {
  //   // Process a POST request
  //   console.log("hello")
  //   res.send("hello")
  // } else{
    
  //   const snapshot = await citiesRef.get();
  //   var arr = []
  //   snapshot.forEach(doc => {
  //     const data = doc.data()
  //     data.id = doc.id
      
  //     arr.push(data)
  //   });
  //   res.send(arr)
    

  // }
}





