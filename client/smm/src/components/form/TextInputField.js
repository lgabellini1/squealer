import { Form } from "react-bootstrap";


const TextInputField = ( { name, label, register, registerOptions, error, ...props} ) => {
	return (
		<Form.Group className="mb-3" controlId={name + "-input"}>
			<Form.Label>{label}</Form.Label>
			<Form.Control
				{...props}
				{...register(name, registerOptions)}
				isInvalid={!!error}
			/>
			<Form.Control.Feedback type="invalid">
				{error?.message}
			</Form.Control.Feedback>
		</Form.Group>
	);
}

export default TextInputField;