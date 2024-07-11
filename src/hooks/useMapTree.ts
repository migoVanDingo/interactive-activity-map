import { useEffect, useMemo, useState } from "react"

export const useMapTree = (data: any) => {
  const [mapTree, setMapTree] = useState<any>(null)
  const [rootDescription, setRootDescription] = useState<any>(null)
  const [folderOpen, setFolderOpen] = useState<any>({})
  const folderOrder = [
    "cohort",
    "level",
    "school",
    "quality",
    "date",
    "group_name",
    "video_name",
  ]

  useEffect(() => {
    return () => {
      //console.log('data', data)
      const { desc, preTree } = buildRootDescription(data.formData)
      const uniqueColumnValues = gatherUniqueColumnValues(preTree, data.groups)
      const folderNodes = createFolderNodes(
        data.formData,
        preTree,
      )

      const folderTree = mapFolderChildren(folderNodes)
      const fullTree = mapFileChildren(folderTree, data.groups, preTree)
      //console.log("fullTree", fullTree)
      setRootDescription(desc)
      setMapTree(fullTree)
      setFolderOpen(fullTree.reduce((acc: any, field: any) => {
        acc[field.index] = field.isOpen
        return acc
      },{}))
    }
  }, [data])

  const mapFileChildren = (folderTree: any, groups: any, preTree: any) => {
    //console.log("preTree", preTree)
    //console.log("folderTree", folderTree)

    if(preTree.length !== 0){

    } else {
      folderTree[folderTree.length - 1].children = groups.map((group: any) => {
        return {
          index: "video_name:" + group.video_name,
          key: "video_name",
          value: group.video_name,
          link: group.link,
          isOpen: true,
          isFolder: false,
          
        }
      })
    }

    return folderTree
  }

  const mapFolderChildren = (folderNodes: any) => {
   folderNodes.forEach(
      (folder: any, index: number, arr: any) => {
        if (index + 1 < arr.length) {
          const child = arr[index + 1].index
          folder.children.push(child)
        }
      }
    )

    return folderNodes
  }

  const createFolderNodes = (
    formData: any,
    uniqueColumnValues: any,
  ) => {
    //console.log("formData", formData)
    //For each column in the matrix, create a folder node
    let baseFolder: any[] = []
    folderOrder.forEach((key: string) => {
      const k = key === "group_name" ? "group" : key
      if (formData[k] && formData[k] !== "") {
        baseFolder.push({
          index: k + ":" + formData[k],
          key: k,
          value: formData[k],
          children: [],
          isOpen: true,
          isFolder: true,
        })
      }
    })

    //console.log("baseFolder", baseFolder)

    uniqueColumnValues.forEach((columnArr: any) => {
      const columnKey = Object.keys(columnArr)[0]
      const columnValues = columnArr[columnKey]

      columnValues.forEach((value: any) => {
        baseFolder.push({
          index: columnKey + ":" + value,
          key: columnKey,
          value: value,
          children: [],
          isOpen: true,
          isFolder: true,
        })
      })
    })

    return baseFolder
  }

  const gatherUniqueColumnValues = (preTree: any, groups: any) => {
    const uniqueValues = preTree.map((key: string) => {
      return {
        [key]: [...new Set(groups.map((group: any) => group[key]).sort())],
      }
    })
    return uniqueValues
    //console.log("uniqueValues", uniqueValues)
  }

  const buildRootDescription = (formData: any) => {
    let desc = []
    let preTree = []
    for (const [key, value] of Object.entries(formData)) {
      const k = key === "group" ? "group_name" : key
      if (value === "") {
        preTree.push(k)
      } else {
        desc.push({ [k]: value })
      }
    }

    return { desc, preTree }
  }

  let childSwitch = "SKIP"
  const toggleFolderOpen = (e: any) => {
    let id
    
    if (e.target.id === "") {
      id = e.target.parentElement.id
    } else {
      id = e.target.id
    }
    
 
    const newFolderOpen = { ...folderOpen }
    const folder = findParent(id, mapTree)
    
    toggleChildren(folder.children, newFolderOpen)


  }

  const findParent = (nodeIndex: string, tree: any) => {
    return tree.find((node: any) => node.index === nodeIndex)}

  const toggleChildren = (children: any[], newFolderOpen: any = null) => {

    console.log("children", children)

    children.forEach((child: any) => {
      newFolderOpen[child] = !newFolderOpen[child]
      const parent = findParent(child.index, mapTree)
      console.log("parent", parent)
      if(parent.children.length > 0){

        toggleChildren(parent.children, newFolderOpen)
      }
    })
    
    
  }



  return {
    mapTree,
    rootDescription,
    folderOpen,
    toggleFolderOpen
  }
}
