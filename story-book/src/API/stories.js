

// define the data source 

const BASE_URL= "https://sms-express-app-1-production-a843.up.railway.app/api";

export async function getStories(){
    const response = await fetch(`${BASE_URL}/stories`);

    if(!response.ok){
        throw new Error("Failed to fetch stories");
    }
    return response.json();
}


export async function createStory(story) {
    const response = await fetch(`${BASE_URL}/stories`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(story),
    })

    if(!response.ok){
        throw new Error("Failed to create story");
    }

    return response.json();
}


export async function getStoryById(id) {
    const response = await fetch(`${BASE_URL}/stories/${id}`);
    if(!response.ok){
        throw new Error("Failed to fetch story");
    }
    return response.json();
}


export async function updateStoryById(id, updatedStory) {
    const response = await fetch(`${BASE_URL}/stories/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedStory),
    });

    if(!response.ok) {
        throw new Error("Failed to update story");
    }
    return response.json();
}

export async function deleteStoryById(id) {
    const response = await fetch(`${BASE_URL}/stories/${id}`, {
        method: "DELETE",
    });

    if(!response.ok) {
        throw new Error("Failed to delete story");
    }
    return response.json();
    
}