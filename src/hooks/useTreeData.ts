import { useState } from "react"

export const useTreeData = (data: any) => {

  const [folderOpen, setFolderOpen] = useState<any>(data.reduce((acc: any, field: any) => {
    acc[field.index] = field.isOpen
    return acc
  },{}))

  return { folderOpen, setFolderOpen }

}