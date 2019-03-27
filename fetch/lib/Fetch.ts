export async function fetchAsync(url: string) {
    const data = await (await (fetch(url)
        .catch((error) => {
            throw new Error(error);
        })
    ));
    return data;
}

export async function fetchAsyncFake(callback, delay: number = 350) {
    setTimeout(callback, delay);
}
