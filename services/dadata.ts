import axios from 'axios';

export interface DaDataSuggestion {
  value: string;
  unrestricted_value: string;
  data: {
    postal_code: string | null;
    country: string | null;
    region: string | null;
    city: string | null;
    street: string | null;
    house: string | null;
    flat: string | null;
    house_cadnum: string | null;
    geo_lat: string | null;
    geo_lon: string | null;
    fias_id: string | null;
    kladr_id: string | null;
  };
}

interface DaDataResponse {
  suggestions: DaDataSuggestion[];
}

const dadataClient = axios.create({
  baseURL: '/api/dadata',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const dadataService = {
  async suggest(query: string, count: number = 7): Promise<DaDataSuggestion[]> {
    try {
      const { data } = await dadataClient.post<DaDataResponse>('/suggest', {
        query,
        count,
      });
      return data.suggestions || [];
    } catch (error) {
      console.error('DaData suggest error:', error);
      return [];
    }
  },

  async findCadnum(address: string): Promise<string | null> {
    const suggestions = await this.suggest(address, 1);
    return suggestions[0]?.data?.house_cadnum || null;
  },
};

export const isCadastralNumber = (value: string): boolean => {
  return /^\d{2}:\d{2}:\d{6,7}:\d+$/.test(value.trim());
};
