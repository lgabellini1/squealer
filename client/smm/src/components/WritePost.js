import { Button, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as NotesApi from "../network/notes_api";
import TextInputField from "./forn/TextInputField";


const WritePost = ({ noteToEdit, onDismiss, onNoteSaved }) => {

	const { register, handleSubmit, formState : { errors, isSubmitting } } = useForm({
		defaultValues: {
			title: noteToEdit?.title || "",
			text: noteToEdit?.text || "",
		}
	});

	async function onSubmit(input) {
		try {
			let noteResponse;
			if(noteToEdit) {
				noteResponse = await NotesApi.updateNote(input);
			} else {
				noteResponse = await NotesApi.createNote(input);
			}
			onNoteSaved(noteResponse);
		} catch (error) {
			console.error(error);
			alert(error);
		}
	}
	
	return (
		<Modal show onHide={onDismiss}>
			<Modal.Header closeButton>
				<Modal.Title>
					{noteToEdit ? "Edit note" : "Add note"}
				</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				<Form id="addEditNoteForm" onSubmit={handleSubmit(onSubmit)}>
					<TextInputField
						name="title"
						label="Title"
						type="text"
						placeholder="Title"
						register={register}
						registerOptions={{ required: "Required" }}
						error={errors.title}
					/>

					<TextInputField
						name="text"
						label="Text"
						as="textarea"
						rows={5}
						placeholder="Text"
						register={register}
					/>
				</Form>
			</Modal.Body>

			<Modal.Footer>
				<Button
					type="submit"
					form="addEditNoteForm"
					disabled={isSubmitting}
				>
					Save
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default WritePost;