import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addCommentThunk } from "./store/modules/user/thunks";
import { useState } from "react";
import { Container, Button, TextField, Card } from "@material-ui/core";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [input, setInput] = useState("");
  function onChangeInput(e) {
    setInput(e);
  }

  return (
    <div className="App">
      <header className="App-header">
        {user.comments.length > 0 && (
          <Container>
            <h1>{user.name}</h1>
          </Container>
        )}
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "10px",
            alignItems: "flex-end",
          }}
        >
          {user.comments.map((user, index) => (
            <Card
              sx={{
                width: "220px",
                textAlign: "left",
                backgroundColor: "darkblue",
                color: "white",
                padding: "10px",
                margin: "10px 0 10px 0",
              }}
              key={index}
            >
              {user}
            </Card>
          ))}
          <Container sx={{ display: "flex" }}>
            <TextField
              fullWidth
              onChange={(e) => onChangeInput(e.target.value)}
              variant="outlined"
            />

            <Button
              variant="contained"
              color="primary"
              onClick={() => dispatch(addCommentThunk(input))}
            >
              Enviar
            </Button>
          </Container>
        </Card>
      </header>
    </div>
  );
}

export default App;
