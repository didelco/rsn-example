import React from 'react'
import { useRouteData } from 'react-static'
//
import { Link } from 'components/Router'

export default function Post() {
  const { country } = useRouteData()
  console.log(country)

  return (
    <div>
      <Link className="back-button" to="/countries/">
        {'<'} Back
      </Link>
      <br />

      <h1>{country.name}</h1>
      <img src={country.flag} width="300px" />
      <p>{country.body}</p>
      <p>
        <b>Capital:</b> {country.capital}
      </p>
      <p>
        <b>Region:</b> {country.region}
      </p>
      <p>
        <b>Subregion:</b> {country.subregion}
      </p>
      <p>
        <b>Population: </b>
        {country.population}
      </p>
      <p>
        <b>Area: </b>
        {country.area}
      </p>
      <p>
        <b>Timezone: </b>
        {country.timezones}
      </p>
    </div>
  )
}
