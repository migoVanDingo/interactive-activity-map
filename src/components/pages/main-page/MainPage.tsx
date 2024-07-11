import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useLoaderData, useNavigate, useNavigation } from "react-router-dom"
import { GroupAPI } from "../../../api/GroupAPI"
import { useSelectGroups } from "../../../hooks/useSelectGroups"
import { setGroups } from "../../../store/slices/groups"
import { loadingMessages } from "../../../utility/constants"
import SelectionForm from "../../common/form/SelectionForm"
import LoadingSpinner from "../../common/LoadingSpinner"
import { mainSelectionFormProps } from "./mainSelectionFormProps"

const MainPage = () => {
  // Generic Hooks
  const groups = useLoaderData() //Gets data from loader
  const navigation = useNavigation() //Gets navigation state
  const loading = navigation.state === "loading"

  const nav = useNavigate() //Navigates to a new location
  const dispatch = useDispatch() // Updates redux store

  // Custom hook handles form state and options on the main page
  const {
    formState,
    handleChange,
    formOptions,
    formDisabled,
    activityMapGroups,
    handleReset,
  } = useSelectGroups(mainSelectionFormProps, groups)

  useEffect(() => {
    dispatch(setGroups(groups))
  }, [groups])

  // Handles form submission, sets data to local storage and navigates to the Activity Map page
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    //console.log("Form State: ", formState)

    localStorage.setItem("formData", JSON.stringify(formState))
    localStorage.setItem("groups", JSON.stringify(activityMapGroups))
    nav("/map")
  }

  if (loading) {
    return <LoadingSpinner message={loadingMessages.data} />
  } else
    return (
      <SelectionForm
        selectionFormProps={mainSelectionFormProps}
        formState={formState}
        handleChange={handleChange}
        formOptions={formOptions}
        formDisabled={formDisabled}
        handleReset={handleReset}
        handleSubmit={handleSubmit}
      />
    )
}

export default MainPage

// Loader imported on route in App.tsx
export const loader = () => {
  const groups = GroupAPI.getGroups()
  return groups
}
