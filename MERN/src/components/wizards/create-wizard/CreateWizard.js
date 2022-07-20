import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom"

import { createWizard } from '../WizardService'
import { Button, Container, TextField } from '@material-ui/core';

function CreateWizard() {

  const navigate = useNavigate()

  const initialValues = { name: '', age: '', }

  const validationSchema = Yup.object({
    name: Yup.string().required('Please enter a valid name'),
    age: Yup.number().required('Please enter a valid age')
  })

  return (
    <>
      <h2>Create Wizard</h2>
      <Container maxWidth="xs">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          validateOnMount={true}
          onSubmit={values => {
            createWizard(values)
            navigate('/wizard-list/')
          }}
        >
          {({ isValid, isSubmitting }) => (
            <Form>              
              <label htmlFor="name">Name</label>
              <Field name='name' type='text' />
              <ErrorMessage name='name' />
              <br />

              <label htmlFor="age">Age</label>
              <Field name='age' type='number' />
              <ErrorMessage name='age' />
              <br />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={!isValid || isSubmitting}
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  )
}

export default CreateWizard
