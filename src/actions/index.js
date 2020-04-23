import jsonplaceholder from '../apis/jsonplaceholder' 
export const fetchPosts=()=>{
    // bad approach
    const promise=  jsonplaceholder.get('/posts')
    return {
        type:'FETCH_POSTS',
        payload:promise
    }
}