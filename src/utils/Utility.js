const baseUrl = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public`

export const getAvailabilityByDistrict =  async (districtId,date) => {
    const res = await fetch(`${baseUrl}/findByDistrict?district_id=${districtId}&date=${date}`,{
        headers: {
            'Content-type': 'Application/json'
        }
    })
    const response = await res.json()
    return response;
}
