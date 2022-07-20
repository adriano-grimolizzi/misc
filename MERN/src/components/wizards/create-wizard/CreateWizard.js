import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom"

import { createWizard } from '../WizardService'

function CreateWizard() {

  const navigate = useNavigate()

  return (
    <>
      <h2>Create Wizard</h2>
      <Formik
        initialValues={{ name: '', age: '', }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required('Required'),
          age: Yup.number()
            .required('Required')
        })}
        onSubmit={(values) => {
          createWizard(values)
          navigate('/wizard-list/')
        }}
      >
        <Form>
          <label htmlFor="name">Name</label>
          <Field name='name' type='text' />
          <ErrorMessage name='name' />
          <br />

          <label htmlFor="age">Age</label>
          <Field name='age' type='number' />
          <ErrorMessage name='age' />
          <br />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  )
}

export default CreateWizard
