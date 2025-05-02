// utils/fetchNEOs.ts
import axios from 'axios';

export interface NEO {
  name: string;
  diameter: number;
  velocity?: string;
  missDistance?: string;
  isHazardous: boolean;
}

export async function fetchNEOs(apiKey: string, startDate: string): Promise<NEO[]> {
  try {
  
    const response = await axios.get(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${startDate}&api_key=${apiKey}`
    );
    const rawData = response.data.near_earth_objects;

    const parsedData: NEO[] = Object.values(rawData).flat().map((neo: any) => ({
      id: neo.id,
      name: neo.name,
      diameter: parseFloat(neo.estimated_diameter.feet.estimated_diameter_max.toFixed(2)),
      velocity: neo.close_approach_data[0]?.relative_velocity?.miles_per_hour,
      missDistance: neo.close_approach_data[0]?.miss_distance?.miles,
      isHazardous: neo.is_potentially_hazardous_asteroid,
    }));19
    

    return parsedData;
  } catch (error) {
    console.log(typeof(startDate));
    console.error('Error fetching NEO data:', error);
    return [];
  }
}
