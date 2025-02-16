export async function fetchAddressByZipcode(zipcode) {
  try {
    const response = await fetch(`https://brasilapi.com.br/api/cep/v2/${zipcode}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }
    const data = await response.json();
    return {
      city: data.city,
      street: data.street,
      neighborhood: data.neighborhood,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}