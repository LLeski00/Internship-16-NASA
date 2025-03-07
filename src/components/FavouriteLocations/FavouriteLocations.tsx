import { isFavouriteUnique } from "@/utils/earthImageryUtils";
import { Button } from "@mui/material";
import { LatLng } from "leaflet";
import { FC, useEffect, useState } from "react";

interface FavouriteLocationsProps {
    position: LatLng;
}

const FavouriteLocations: FC<FavouriteLocationsProps> = ({ position }) => {
    const [favourites, setFavourites] = useState<LatLng[]>([]);

    useEffect(() => {
        loadFavourites();
    }, []);

    function loadFavourites() {
        const localStorageData: LatLng[] = JSON.parse(
            localStorage.getItem("favourite-locations") ?? "[]"
        );
        setFavourites(localStorageData);
    }

    function addToFavourites() {
        const localStorageData: LatLng[] = JSON.parse(
            localStorage.getItem("favourite-locations") ?? "[]"
        );
        console.log(localStorageData);
        if (!isFavouriteUnique(localStorageData, position)) return;
        const newFavourites: LatLng[] = [...localStorageData, position];
        localStorage.setItem(
            "favourite-locations",
            JSON.stringify(newFavourites)
        );
        setFavourites(newFavourites);
    }

    function deleteFavourite(favourite: LatLng) {
        const localStorageData: LatLng[] = JSON.parse(
            localStorage.getItem("favourite-locations") ?? "[]"
        );
        const newFavourites: LatLng[] = localStorageData.filter((fav) => {
            return fav.lat !== favourite.lat || fav.lng !== favourite.lng;
        });
        localStorage.setItem(
            "favourite-locations",
            JSON.stringify(newFavourites)
        );
        setFavourites(newFavourites);
    }

    return (
        <div className="favourite-locations">
            <Button onClick={addToFavourites}>
                Add location to favourites
            </Button>
            <h2>Favourite locations:</h2>
            {favourites.length > 0 ? (
                favourites.map((fav) => (
                    <div
                        key={`${fav.lat}, ${fav.lng}`}
                        className="favourite-location"
                    >
                        <p>{`${fav.lat}, ${fav.lng}`}</p>
                        <Button onClick={() => deleteFavourite(fav)}>
                            Delete
                        </Button>
                    </div>
                ))
            ) : (
                <p>No favourites.</p>
            )}
        </div>
    );
};

export default FavouriteLocations;
