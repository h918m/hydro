import { ILocation } from "../types/location";

interface LocationResult {
	error: String | null;
	result: {
		items: ILocation[];
		totalCount: number;
	} 
}

export async function getLocationList(): Promise<LocationResult> {
	const response = await fetch('http://161.97.137.187:1010/api/services/app/HydronetLocalGovernment/GetAll');
	if (!response.ok) {
		throw new Error(`HTTP Error! status: ${response.status}`);
	}
	return response.json();
}