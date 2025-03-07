import { LatLng } from "leaflet";

function isFavouriteUnique(
    localStorageData: LatLng[],
    newFavourite: LatLng
): boolean {
    if (
        localStorageData.some(
            (fav) =>
                fav.lat === newFavourite.lat && fav.lng === newFavourite.lng
        )
    )
        return false;
    return true;
}

export { isFavouriteUnique };
