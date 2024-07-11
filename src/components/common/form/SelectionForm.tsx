import { Form } from "react-router-dom"
import SelectInput from "../input/SelectInput"

export interface ISelectionFormProps {
  label: string
  name: string
  defaultValue: string
  options: string[]
  disabled: boolean
}

const SelectionForm = ({
  selectionFormProps,
  formState,
  handleChange,
  formOptions,
  formDisabled,
  handleReset,
  handleSubmit,
}: any) => {
  return (
    <Form method="post" onSubmit={handleSubmit}>
      {selectionFormProps.map(
        (selector: ISelectionFormProps, index: number) => {
          return (
            <SelectInput
              key={index}
              label={selector.label}
              name={selector.name}
              defaultValue={selector.defaultValue}
              handleChange={handleChange}
              value={formState[selector.name]}
              options={formOptions[selector.name]}
              disabled={formDisabled[selector.name]}
            />
          )
        }
      )}

      <button type="submit">submit</button>
      <button type="button" onClick={handleReset}>
        reset
      </button>
    </Form>
  )
}

export default SelectionForm
