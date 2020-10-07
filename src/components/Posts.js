import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
    <h1>COVID-19 RECORD</h1>
<div>
    <table border="4">
        <thead>
            <th className="hcountry">Country</th>
            <th className="hcases">Total Cases</th>
            <th className="htcases">New Cases</th>
            <th className="hdeaths">Total Deaths</th>
            <th className="htdeaths">New Deaths</th>
            <th className="hrecover">Recovered</th>
            <th className="hactive">Active Cases</th>
        </thead>
        <tbody>
    {
        posts.length ?
        posts.map(post => (
            <tr>
                <td className="country">{post.country}</td>
                <td className="cases">{post.cases}</td>
                <td className="tcases">{post.todayCases}</td>
                <td className="deaths">{post.deaths}</td>
                <td className="tdeaths">{post.todayDeaths}</td>
                <td className="recover">{post.recovered}</td>
                <td className="active">{post.active}</td>
            </tr>
        )):
        null
    }
    </tbody>
    </table>
</div>
</div>
)
}

export default Posts;