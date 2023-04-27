export function jewelryExists(jewelryId) {
    const data = {
        "data": { id: jewelryId }
    };
     return fetch(`https://dashboard.trillion.jewelry/trillionwebapp/publication-status/${jewelryId}`, {
        method: "POST",
        mode: "cors",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Cache-Control": "no-cache"
        },
        body: JSON.stringify(data),
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            return data
        })
}