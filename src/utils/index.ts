const transformFromData = (data: { [key: string]: string }) => {
    const formData = new FormData();
    for (const key in data) {
        data[key] && formData.append(key, data[key]);
    }
    return formData;
};
export {
    transformFromData
}
