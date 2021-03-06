import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Input from './Input';
import formVerification from './verification/formVerification';
// import {
//   requestAllTitles,
//   receiveAllTitles,
// } from '../../store/reducers/titles/actions';
import { DragAndDropContext } from '../../contexts/DragAndDropContext';

function Form({ collection, placeholder, column, setModalToggle, columnId }) {
  let initialState = { userInput: '', collection };
  const [formData, setFormData] = useState(initialState);
  const [formStatus, setFormStatus] = useState('idle');
  const [formError, setFormError] = useState(null);
  const {
    actions: { fetchDocuments, refetchDocuments },
  } = useContext(DragAndDropContext);

  const handleChange = (val, keyName) => {
    setFormData({ ...formData, [keyName]: val });
  };
  // console.log('FORM DATA', formData);
  // console.log('COLUMN ', column);
  console.log('COL ID', initialState);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setFormStatus('pending');
    let noError = formVerification(formData);
    if (!noError) {
      setFormError(`${column.placeholder_name} cannot be empty`);
    }
    if (noError) {
      fetch(`/${collection}/add-document`, {
        method: 'POST',
        body: JSON.stringify({ ...formData }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((json) => {
          setModalToggle(false);
          setFormStatus('idle');
          setFormError(null);
          console.log('JSON ', json);

          refetchDocuments(collection, columnId);
          // const fetchingTitles = async () => {
          //   dispatch(request_reducer());
          //   try {
          //     const fetch_response = await fetch_api();
          //     const newDataFormat = {
          //       [columnId]: {
          //         collection: fetch_response.collection,
          //         placeholder_name: fetch_response.placeholder_name,
          //         items: fetch_response.titles,
          //       },
          //     };
          //     // console.log('NEW FORMAT ', newDataFormat);
          //     dispatch(receive_reducer(newDataFormat));
          //     // setSidebarColumn(newDataFormat);
          //   } catch (error) {
          //     console.error('ERROR: ', error.message);
          //   }
          // };
          // fetchingTitles();

          // const fetchingTitles = async () => {
          //   // setStatus('loading');
          //   try {
          //     const fetch_response = await fetchAllTitles();
          //     const newDataFormat = {
          //       [uuid()]: {
          //         name: fetch_response.collection,
          //         placeholder_name: fetch_response.placeholder_name,
          //         items: fetch_response.titles,
          //       },
          //     };
          //     setSidebarColumn(newDataFormat);
          //     // setStatus('idle');
          //   } catch (error) {
          //     // setStatus('error');
          //     console.error('ERROR: ', error.message);
          //   }
          // };
          // fetchingTitles();
          // if (json.status != 201) {
          //   console.error(json.message, json.error);
          // }
        });
    }
  };

  return (
    <Wrapper>
      <Input
        name="userInput"
        placeholder={`${column.placeholder_name}: `}
        type="text"
        value={formData.userInput}
        handleChange={handleChange}
      />
      {formError ? <ErrorMsg>{formError}</ErrorMsg> : null}
      <button onClick={handleSubmit} className="create_btn">
        Create
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .create_btn {
    /* margin-top: 200px; */
    margin-top: 120px;
    width: 70px;
  }
`;
const ErrorMsg = styled.div`
  border: 1px solid red;
  background-color: rgba(255, 0, 0, 0.2); ;
`;

export default Form;
