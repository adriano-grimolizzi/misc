import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom"

import { createWizard } from '../WizardService'
import { Button, Container, Grid, TextField } from '@material-ui/core';

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
          isInitialValid={false}
          onSubmit={values => {
            createWizard(values)
            navigate('/wizard-list/')
          }}
        >
          {({ isValid, isSubmitting }) => (
            <Form>
              <Field name='name'>
                {({ field, meta: { error, value, initialValue, touched } }) => (
                  <TextField
                    variant="outlined"
                    margin="dense"
                    fullWidth
                    required
                    autoFocus
                    id="name"
                    type="text"
                    placeholder='Name'
                    error={(touched || value !== initialValue) && Boolean(error)}
                    helperText={touched || value !== initialValue ? error : ''}
                    {...field}
                  />
                )}
              </Field>
              <Field name='age'>
                {({ field, meta: { error, value, initialValue, touched } }) => (
                  <TextField
                    variant="outlined"
                    margin="dense"
                    fullWidth
                    required
                    id="age"
                    type="number"
                    placeholder='Age'
                    error={(touched || value !== initialValue) && Boolean(error)}
                    helperText={touched || value !== initialValue ? error : ''}
                    {...field}
                  />
                )}
              </Field>
              <Grid container spacing={2} direction="row" alignItems="center">
                <Grid item>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    disabled={!isValid || isSubmitting}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  )
}

export default CreateWizard
