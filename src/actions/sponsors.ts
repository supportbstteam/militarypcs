const sponsors = async () => {
    const response = await fetch('https://teamwebdevelopers.com/MilitaryPCS/api/sponsors')
    if (!response.ok) {
        throw new Error('Network response was not ok')
    }
    return response.json()

}
export default sponsors