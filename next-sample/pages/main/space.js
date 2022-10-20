import React, { useState, useEffect } from "react";
import { getSpaceListData, retDataTrans } from '../../services/SpaceService'
import { Header } from '../../components/Header'

export default function Space() {
  const [spaces, setSpaces] = useState([]);

  const getSpaceList = () => {
    getSpaceListData()
      .then(spaces => {
        spaces = retDataTrans(spaces);
        setSpaces(spaces);
      });
  }

  useEffect(() => {
    getSpaceList();
  },[])

  return (
    <div>
      <Header></Header>
      <h1>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <ul>
        {spaces && spaces.length > 0 && spaces.map((spaceObj, index) => (
            <li key={spaceObj.spaceUUID}>{spaceObj.spaceName} : {spaceObj.spaceUUID}</li>
          ))}
      </ul>
    </div>
  )
}
