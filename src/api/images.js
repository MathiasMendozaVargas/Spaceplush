export async function getImages(url) {
    const data = await fetch(url);
    return await data.json();
}