import { Button, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as PostsApi from "../network/posts_api";
import TextInputField from "./form/TextInputField";


const AddPostDialog = ({ postToEdit, onDismiss, onPostSaved }) => {

	const { register, handleSubmit, formState : { errors, isSubmitting } } = useForm({
		defaultValues: {
			title:	(postToEdit && postToEdit.title)	? postToEdit.title	: "",
			text:	(postToEdit && postToEdit.text)		? postToEdit.text	: "",
		}
	});

	async function onSubmit(input) {
		try {
			let postResponse;
			if(postToEdit) {
				postResponse = await PostsApi.updatePost(input);
			} else {
				postResponse = await PostsApi.createPost(input);
			}
			onPostSaved(postResponse);
		} catch (error) {
			console.error(error);
			alert(error);
		}
	}
	
	return (
		<Modal show onHide={onDismiss}>
			<Modal.Header closeButton>
				<Modal.Title>
					{postToEdit ? "Edit note" : "Add note"}
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

export default AddPostDialog;