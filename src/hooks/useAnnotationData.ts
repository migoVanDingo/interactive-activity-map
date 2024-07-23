import { useState } from "react"

export const useAnnotationData = (data: any) => {
  const { annotationData } = data

  const [participants, setParticipants] = useState([])
  const [actions, setActions] = useState([])
  const [selectedAnnotation, setSelectedAnnotation] = useState<string>("")
  const [actionListFormValues, setActionListFormValues] = useState<any[]>([])
  const [participantListFormValues, setParticipantListFormValues] = useState<any[]>([])

  const handleUpdateParticipants = (participant: any) => {}
  const handleUpdateActions = (action: any) => {}   
  const toggleParticipantList = (participant: any) => {}
  const toggleActionList = (action: any) => {}

  return {
    participants,
    actions,
    selectedAnnotation,
    actionListFormValues,
    participantListFormValues,
    handleUpdateParticipants,
    handleUpdateActions,
    setSelectedAnnotation
  }
}
