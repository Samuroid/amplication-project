import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const TaskEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="user.id" reference="User" label="Assigned To">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <NumberInput
          step={1}
          label="Estimation (days)"
          source="estimationDays"
        />
        <DateTimeInput label="Start Date" source="startDate" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "New", value: "New" },
            { label: "Pending", value: "Pending" },
            { label: "Ongoing", value: "Ongoing" },
            { label: "Done", value: "Done" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
