import { Formik, Form as FormFormik, Field, ErrorMessage } from 'formik';
import { Button } from '..';

interface FormI {
	email: string;
	password: string;
}

export const Form = () => (
	<Formik
		//valores iniciales
		initialValues={{ email: '', password: '' }}
		//validacionesal hacer submit en el formulario que se envia como children
		validate={(values: FormI) => {
			const errors: any = {};
			if (!values.email) {
				errors.email = 'Required';
			} else if (
				!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
			) {
				errors.email = 'Invalid email address';
			}

			if (!values.password) {
				errors.password = 'contraseña requerida';
			} else if (values.password.length < 3) {
				errors.password = 'la contraseña debe ser mayor a 6 carácteres';
			}

			return errors;
		}}
		// Lo que ejecuta el formulario después de las validaciones
		onSubmit={(values: FormI, { setSubmitting }) => {
			console.log({ values });

			setSubmitting(false);
		}}
	>
		{/* isSubmitting por defecto es true, osea que si no especifico en el 
			onSubmit que quiero que sea false luego de que se ejecute el onSubmit el boton
			  de submit del formulario se desactivara */}
		{({ isSubmitting }: { isSubmitting: boolean }) => (
			<FormFormik className="flex flex-col p-8">
				<Field
					className="px-4 py-2 rounded-full mb-1 bg-gray-100"
					type="email"
					placeholder="ingresar email"
					name="email"
				/>
				<ErrorMessage name="email" className="text-red-600" component="div" />
				<Field
					className="px-4 py-2 rounded-full  bg-gary-100"
					type="password"
					name="password"
					placeholder="ingresar contraseña"
				/>
				<ErrorMessage name="password" component="div" />
				<Button
					type={'submit'}
					background={' bg-primary'}
					text={'Submit'}
					padding={'px-4 py-1'}
					rounded={'rounded-full'}
					colorText={'text-white'}
					className={'font-bold w-28'}
					disabled={isSubmitting}
				></Button>
			</FormFormik>
		)}
	</Formik>
);
