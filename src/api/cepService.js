export async function fetchAddressByZipcode(zipcode) {
  try {
    const response = await fetch(`https://brasilapi.com.br/api/cep/v2/${zipcode}`);
    
    // Verifica se a resposta foi bem-sucedida
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }

    // Converte a resposta em JSON
    const data = await response.json();
    
    // Verifica se os dados retornados contêm as informações esperadas
    if (data.city && data.street && data.neighborhood) {
      return {
        city: data.city,            // Cidade
        street: data.street,        // Rua
        neighborhood: data.neighborhood, // Bairro
      };
    } else {
      throw new Error("Dados de endereço incompletos.");
    }
    
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;  // Retorna null em caso de erro
  }
}
