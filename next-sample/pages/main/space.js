import React, { useState, useEffect } from "react";
import { getSpaceListData } from '../../services/SpaceService'

export default function Space() {
  const [spaces, setSpaces] = useState([]);

  const getSpaceList = () => {
    getSpaceListData()
      .then(spaces => {
        console.log(spaces)
        setSpaces(spaces);
      });
  }

  useEffect(() => {
    getSpaceList();
  },[])

  return (
    <div>
      <h1>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <ul>
        {spaces && spaces.length > 0 && spaces.map((spaceObj, index) => (
            <li key={spaceObj.id}>{spaceObj.name} : {spaceObj.username}</li>
          ))}
      </ul>
    </div>
  )
}
