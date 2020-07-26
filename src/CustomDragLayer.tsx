import React from "react"
import { XYCoord, useDragLayer } from "react-dnd"
import { Column } from "./Column"
import { CustomDragLayerContainer } from "./styles"
import { Card } from "./Card"
import { DragItem } from "./DragItem"

export const CustomDragLayer: React.FC = () => {
  const {
    isDragging,
    item,
    currentOffset,
  }: {
    isDragging: boolean
    item: DragItem
    currentOffset: XYCoord | null
  } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }))

  if (!isDragging) {
    return null
  }

  if (item.type === "COLUMN") {
    return (
      <CustomDragLayerContainer>
        <div style={getItemStyles(currentOffset)}>
          <Column
            id={item.id}
            text={item.text}
            index={item.index}
            isPreview={true}
          />
        </div>
      </CustomDragLayerContainer>
    )
  } else if (item.type === "CARD") {
    return (
      <CustomDragLayerContainer>
        <div style={getItemStyles(currentOffset)}>
          <Card
            id={item.id}
            columnId={item.columnId}
            text={item.text}
            index={item.index}
            isPreview={true}
          />
        </div>
      </CustomDragLayerContainer>
    )
  } else {
    return null
  }
}

function getItemStyles(currentOffset: XYCoord | null): React.CSSProperties {
  if (!currentOffset) {
    return {
      display: "none",
    }
  }
  const { x, y } = currentOffset
  const transform = `translate(${x}px, ${y}px)`
  return {
    transform,
    WebkitTransform: transform,
  }
}
