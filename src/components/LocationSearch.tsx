import styled from "styled-components";
import {InputBase, Divider, IconButton, Button, Paper} from "@mui/material";
import {Search} from "@mui/icons-material";


const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  input {
    width: 80%;
    padding: 1em;
    font-size: 20px;
  }
  button {
    margin-left: -120px;
    background: none;
    outline: none;
    border: none;
    font-weight: bold;
    font-size: 1em;
    cursor: pointer; 
  }
`;

export default function LocationSearch() {
  return (
    <Paper component="form"
      sx={{p: "2px 4px", display: "flex", alignItems: "center", width: 600, height: "fit-content", marginTop: "200px"}}
    >
      <InputBase
        sx={{ml:1, flex: 1}}
        placeholder="Search"
        inputProps={{"aria-label": "Search"}}
      />
      <Button disabled>Clear</Button>
      <IconButton type="submit" aria-label="search">
        <Search />
      </IconButton>
    </Paper>
  );
}