export async function jewelryExists(jewelryId) {
    const response = await fetch(`https://dashboard.trillion.jewelry:8001/trillionwebapp/publication-status/${jewelryId}`, {
        method: "GET",
    })
    const data = await response.json();    
    return data.isPublishedWebSDK;
}