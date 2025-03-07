import { isFavouriteUnique } from "@/utils/earthImageryUtils";
import { Button } from "@mui/material";
import { LatLng } from "leaflet";
import { FC, useEffect, useState } from "react";
import "./FavouriteLocations.css";

interface FavouriteLocationsProps {
    position: LatLng;
    setPosition: Function;
}

const FavouriteLocations: FC<FavouriteLocationsProps> = ({
    position,
    setPosition,
}) => {
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
        if (!isFavouriteUnique(localStorageData, position)) return;
        const newFavourites: LatLng[] = [...localStorageData, position];
        localStorage.setItem(
            "favourite-locations",
            JSON.stringify(newFavourites)
        );
        setFavourites(newFavourites);
    }

    function deleteFavourite(e: React.MouseEvent, favourite: LatLng) {
        e.stopPropagation();
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
            <Button onClick={addToFavourites} variant="contained">
                Add location to favourites
            </Button>
            <h2>Favourite locations:</h2>
            {favourites.length > 0 ? (
                <div className="favourites-list">
                    {favourites.map((fav) => (
                        <div
                            key={`${fav.lat}, ${fav.lng}`}
                            className="favourite-location"
                            onClick={() => setPosition(fav)}
                        >
                            <p>{`${fav.lat}, ${fav.lng}`}</p>
                            <Button
                                onClick={(e) => deleteFavourite(e, fav)}
                                variant="contained"
                            >
                                Delete
                            </Button>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No favourites.</p>
            )}
        </div>
    );
};

export default FavouriteLocations;
