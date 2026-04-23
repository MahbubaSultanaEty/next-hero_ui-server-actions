'use client'
import { CreateATask, NewTaskAction } from "@/lib/actions";
import {
  Button,
  Input,
  Label,
  ListBox,
  Modal,
  TextField,
  Select,
  Form,
  FieldError,
} from "@heroui/react";

const NewTask = () => {
  return (
    <div className="w-10/12 mx-auto">
      <h2 className="text-right font-semibold text-2xl">Add a New Task</h2>
      <Form action={NewTaskAction} className="flex flex-col gap-4">
              <TextField
                  isRequired
                  minLength={5}
                  validate={(value) => {
                      if (value.length < 5) {
                          return 'title must be at least 5 characters or longer'
                      }
                  }}
                  className="w-full" name="title" type="text">
          <Label>Task Title</Label>
                  <Input placeholder="Enter your task title" />
                  <FieldError/>
        </TextField>
        <TextField className="w-full" name="description" type="email">
          <Label>Task Description</Label>
          <Input placeholder="description" type="text" />
        </TextField>

        <Select name="priority" className="w-full" placeholder="Select one">
          <Label>Priority</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Item id="low" textValue="low">
                Low
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="medium" textValue="medium">
                Medium
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="high" textValue="high">
                High
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>

        <Select
          name="status
                              "
          className="w-full"
          placeholder="Select one"
        >
          <Label>Status</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Item id="pending" textValue="Pending">
                Pending
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="in-progress" textValue="In-progress">
                In-progress
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="completed" textValue="Completed">
                Completed
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>

        <TextField className="w-full" name="assignedTo">
          <Label>Asigned To</Label>
          <Input placeholder="Task Asigned To" />
        </TextField>
        
          <Button slot="close" variant="secondary">
            Cancel
          </Button>
          <Button type="submit" as="button">
            Submit Task
          </Button>
        
      </Form>
    </div>
  );
};

export default NewTask;
