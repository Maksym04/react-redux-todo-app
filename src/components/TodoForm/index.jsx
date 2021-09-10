import classNames from 'classnames';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { connect } from 'react-redux';
import { createTask } from '../../actions';
import { TODO_SCHEMA } from '../../utils/validatingSchemas';
import Header from '../Header';
import TodosList from '../TodosList';
import styles from './TodoForm.module.sass';

function TodoForm (props) {
  const { createTaskAction } = props;

  const initialTask = {
    body: '',
  };

  const addTask = (values, formikBag) => {
    createTaskAction(values);
    formikBag.resetForm();
  };

  return (
    <section className={styles.todoBlock}>
      <Header />
      <article className={styles.tasksBlock}>
        <Formik
          initialValues={initialTask}
          onSubmit={addTask}
          validationSchema={TODO_SCHEMA}
        >
          {formikProps => (
            <Form className={styles.formBlock}>
              <div className={styles.inputBlock}>
                <Field name='body'>
                  {({ field, form, meta }) => {
                    const inputClassNames = classNames(styles.inputBox, {
                      [styles.validInput]: !meta.error && meta.touched,
                      [styles.invalidInput]: meta.error && meta.touched,
                    });
                    return (
                      <input
                        {...field}
                        placeholder='Enter todo here'
                        className={inputClassNames}
                      />
                    );
                  }}
                </Field>
                <button className={styles.submitButton} type='submit'>
                  Submit
                </button>
                <ErrorMessage
                  name='body'
                  component='div'
                  className={styles.errorBox}
                />
              </div>
            </Form>
          )}
        </Formik>
        <TodosList />
      </article>
    </section>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    createTaskAction: data => {
      dispatch(createTask(data));
    },
  };
};

export default connect(null, mapDispatchToProps)(TodoForm);
