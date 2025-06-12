const directorySub: React.FC<{ id: number }> = async ({ id }) => {
    const response = await fetch(`https://teamwebdevelopers.com/MilitaryPCS/api/get-sublocations?locID=${id}`)
    if (!response.ok) {
        throw new Error('Network response was not ok')
    }
    return response.json()

}
export default directorySub