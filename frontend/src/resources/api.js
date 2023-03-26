// API endpoints
export const getClinicsData = async () => {
    const response = await fetch(`http://localhost:3030/clinics`);
    const result  = await response.json();
    return result;
}


export const getPatientsData = async (clinicId) => {
    const response = await fetch(`http://localhost:3030/patients/${clinicId}`);
    const result  = await response.json();
    return result;
}

