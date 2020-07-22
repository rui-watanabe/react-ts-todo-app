import React, { useState } from "react"
import { AddItemButton } from "./styles"
import { NewItemForm } from "./NewItemForm"

interface AddNewItemProps {
  onAdd(text: string): void
  toggleButtonText: string
  dark?: boolean
}

export const AddNewItem = (props: AddNewItemProps) => {
  const [showHome, setShowHome] = useState(false)
  const { onAdd, toggleButtonText, dark } = props

  if (showHome) {
    return (
      <NewItemForm
        onAdd={(text) => {
          onAdd(text)
          setShowHome(false)
        }}
      />
    )
  }

  return (
    <AddItemButton dark={dark} onClick={() => setShowHome(true)}>
      {toggleButtonText}
    </AddItemButton>
  )
}
