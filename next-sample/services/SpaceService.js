export async function getSpaceListData() {

    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        return await response.json();
    }catch(error) {
        return [];
    }
    
}
