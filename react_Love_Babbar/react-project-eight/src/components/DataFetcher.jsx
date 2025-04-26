import React, { useEffect, useState } from 'react'

const DataFetcher = () => {

    const[data, setData] = useState([]);
    const[loading, setLoading] = useState(false);

    //It will run only on first render
    useEffect(() => {
      fetch('https://jsonpplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
    
    }, []);
    

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
            {data.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
      )}
    </div>
  )
}

export default DataFetcher
