import { FC, useContext } from 'react';

import { ErrorMessage, Field, Form, Formik } from 'formik';

import { Button, UserI } from '../../../..';
import { ContextUI } from '../../../../../context/ContextUI';

const initialValues: any = {};

const validate = (values: any) => {
	const errors = {};
	//validations

	return errors;
};

export interface PagePersonFormI {
	personData?: UserI;
}


const onSubmit = () => {}

export const PagePersonsForm: FC<PagePersonFormI> = ({ personData }) => {
	const {
		modal: { setIsOpenModal },
	} = useContext(ContextUI);

	return (
		<Formik
			initialValues={personData || initialValues}
			validate={validate}
			onSubmit={onSubmit}
		>
			{() => {
				return (
					<Form className="flex flex-col gap-y-2 p-2 mt-2">
						<Field
							name="dni"
							type="number"
							placeholder="DNI"
							className={'bg-gray-100 w-full rounded-full px-4 py-2'}
						></Field>
						<ErrorMessage name={'dni'}></ErrorMessage>

						<Field
							name="codigo"
							placeholder="Codigo"
							className={'bg-gray-100 w-full rounded-full px-4 py-2'}
						></Field>
						<ErrorMessage name={'codigo'}></ErrorMessage>

						<Field
							name="nombreCompleto"
							placeholder="Nombre Completo"
							className={'bg-gray-100 w-full rounded-full px-4 py-2'}
						></Field>
						<ErrorMessage name={'nombrecompleto'}></ErrorMessage>

						<Field
							name="ciclo"
							placeholder="Ciclo"
							className={'bg-gray-100 w-full rounded-full px-4 py-2'}
						></Field>
						<ErrorMessage name={'ciclo'}></ErrorMessage>

						<Field
							name="grupo"
							placeholder="Grupo"
							className={'bg-gray-100 w-full rounded-full px-4 py-2'}
						></Field>
						<ErrorMessage name={'grupo'}></ErrorMessage>

						<Field
							name="correo"
							placeholder="Correo"
							className={'bg-gray-100 w-full rounded-full px-4 py-2'}
						></Field>
						<ErrorMessage name={'correo'}></ErrorMessage>
						<div className="flex justify-center">
							<Button
								background={'bg-primary'}
								text={'Guardar cambios'}
								padding={'p-2'}
								rounded={'rounded-full'}
								colorText={'text-white'}
								className={
									' w-1/2 mt-2 font-bold my-1 border hover:border-primary hover:bg-white transition-all hover:text-primary ease-in'
								}
								onClick={() => {
									setIsOpenModal(false);
								}}
							></Button>
						</div>
					</Form>
				);
			}}
		</Formik>
	);
};
