import { Neo, NeoResponse } from "@/types/neo";

function getNeosFromResponse(response: NeoResponse): Neo[] {
    const allNeos: Neo[] = Object.values(response.near_earth_objects).flat();
    return allNeos;
}

export { getNeosFromResponse };
