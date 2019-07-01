import React from 'react'
import { useRouteData } from 'react-static'
//
import { Link } from 'components/Router'

export default function Blog() {
  const { countries } = useRouteData()
  return (
    <div>
      <h1>Countries</h1>
      <ul>
        {countries.map(country => (
          <li key={country.name}>
            <Link to={`/countries/${country.alpha3Code}/`}>{country.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
