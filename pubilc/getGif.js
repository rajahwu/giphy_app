// export async function getGif() {
//    const response = await fetch('https://api.giphy.com/v1/gifs/trending?api_key=ZCNXPzzaYhfKJpId4RDpwLNfPzh5VCJ6&limit=30&rating=pg-13')
//     const data = await response.json()
//     return data
// }

export async function getGif() {
    const response = await fetch('https://api.giphy.com/v1/gifs/search?api_key=ZCNXPzzaYhfKJpId4RDpwLNfPzh5VCJ6&q=strong%2C+gym%2Cworkout&&limit=30&offset=0&rating=r&lang=en')
     const data = await response.json()
     return data
 }

 