import React, { useEffect, useState } from "react";
import { Button } from 'semantic-ui-react'
import CityService from "../services/CityService";
export default function SearchFilter2() {
    const [cities, setCities] = useState([])
    useEffect(() => {
        let cityService = new CityService();
        cityService.getCity().then((result) => {
            setCities(result.data.data);
        });

    }, [])
    return (
        <div>
            <select className="select1" class="ui selection dropdown" style={{ backgroundColor: "white", borderRadius: "10px" }}>
                {cities.map((city) => (
                    <option value={city}>{city.cityName}</option>
                ))};
            </select>
            <Button icon="search" color="green" className="button1"></Button >
        </div>
    );
}
