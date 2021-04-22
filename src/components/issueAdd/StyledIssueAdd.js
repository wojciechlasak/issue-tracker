import styled from 'styled-components';

export const AddButton = styled.button`
  position: fixed;
  bottom: 3em;
  right: 3em;
  border-radius: 50%;
  border: none;
  background-color: ${props => props.theme.colors.blue};
  width: 4.5em;
  height: 4.5em;
  color: #fff;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }

  span {
    font-size: 4em;
  }
`;

export const Label = styled.label``;

export const InputText = styled.input`
  display: block;
  width: 50%;
  margin-bottom: 1.5em;
  font: inherit;
  color: inherit;
  padding: 0.5em;
`;

export const InputTextArea = styled.textarea`
  display: block;
  width: 100%;
  resize: none;
  height: 5em;
  margin-bottom: 1.5em;
  font: inherit;
  color: inherit;
  padding: 0.5em;
`;
