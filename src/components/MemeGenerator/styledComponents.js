import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100vh;
  padding: 40px;
  display: flex;
  justify-content: space-between;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 45%;
`

export const Heading = styled.h1`
  color: #35469c;
  font-family: 'Roboto';
`
export const Input = styled.input`
  border: 1px solid #d7dfe9;
  padding: 15px;
  border-radius: 4px;
  margin-bottom: 20px;
  outline: none;
  margin-top: 0px;
`

export const Label = styled.label`
  color: #7e858e;
  font-family: 'Roboto';
  font-size: 13px;
  margin-bottom: 5px;
`
export const Select = styled.select`
  border: 1px solid #d7dfe9;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
  outline: none;
  margin-top: 0px;
`

export const CustomButton = styled.button`
  color: #ffffff;
  padding: 10px;
  width: 100px;
  border-width: 0px;
  background-color: #0b69ff;
  font-family: 'Roboto';
  border-radius: 4px;
`

export const MemeContainer = styled.div`
  width: 45%;
  background-image: url(${props => props.imageLink});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`
export const Text = styled.p`
  color: #ffffff;
  font-size: ${props => props.fontSize}px;
  font-family: 'Roboto';
`
