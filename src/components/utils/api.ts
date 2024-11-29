export const fetchProducts = async (
    categoryId: string,
    orderBy: string,
    offset: number,
    limit: number
  ): Promise<{ data: any[]; total: number }> => {
    const response = await fetch(
      `http://localhost:5000/products?categories=${categoryId}&orderBy=${orderBy}&offset=${offset}&limit=${limit}`
    );
  
    if (!response.ok) {
      throw new Error("Hiba a termékek betöltésekor");
    }
  
    return response.json();
  };
  