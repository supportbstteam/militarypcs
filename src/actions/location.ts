const location = async () => {
    const response = await fetch('https://teamwebdevelopers.com/MilitaryPCS/api/location')
    if (!response.ok) {
        throw new Error('Network response was not ok')
    }
    return response.json()

}
export default location