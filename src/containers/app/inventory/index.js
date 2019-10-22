import React, { useState, useEffect } from 'react'

const InventoryContainer = () => {
  const [inventory, setInventory] = useState("")


  useEffect(() => {
    setInventory("Inventory Content")
  }, [])

   return(
    <>
      <h1>{inventory}</h1>
    </>
  )
}

export default InventoryContainer
