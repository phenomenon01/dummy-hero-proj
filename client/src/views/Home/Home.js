import React, { useState, useRef } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import CancelIcon from "@material-ui/icons/Cancel";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import keysConfig from "./config";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const App = () => {
  const [loading, setLoading] = useState("");
  const [code, setCode] = useState("");
  const [hero, setHero] = useState("");
  const [error, setError] = useState("");
  const inputBoxRef = useRef();

  const updateInputBox = (v) => {
    setError("");
    setCode(v);
    inputBoxRef.current.focus();
  };

  const sendCode = async () => {
    setHero("");
    setError("");
    if (code === "") return setError("Empty Code");
    try {
      setLoading("sendCode");
      const { data } = await axios.get("/api/call-hero", {
        params: { code },
      });
      setHero(data);
      setLoading("");
    } catch (e) {
      setLoading("");
      setError(
        e.response && e.response.data && e.response.data.errors
          ? e.response.data.errors[0].code
          : "Server Error"
      );
    }
  };

  return (
    <div className="home">
      <Grid container justify="center">
        <Grid item xs={10} sm={8} md={6} lg={5} className="heading">
          <Typography variant="h5" gutterBottom>
            Hero Result : {hero}
          </Typography>
        </Grid>
      </Grid>

      {error && (
        <Grid container justify="center">
          <Grid item xs={10} sm={8} md={6} lg={5}>
            <Typography variant="body2" gutterBottom className="error">
              {error}
            </Typography>
          </Grid>
        </Grid>
      )}
      <Grid container justify="center">
        <Grid item xs={10} sm={8} md={6} lg={5}>
          <TextField
            label="Hero Code"
            variant="outlined"
            className="codeInput"
            value={code}
            inputRef={inputBoxRef}
            onChange={(v) => updateInputBox(v.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => {
                      updateInputBox("");
                      setHero("");
                    }}
                  >
                    <CancelIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid container xs={10} sm={8} md={6} lg={5} className="gridBox">
          {keysConfig.map((k) => (
            <Grid item xs={4} className="cell" key={k.id}>
              <Button
                onClick={() => updateInputBox((code) => `${code}${k.id}`)}
              >
                <div>
                  <Typography variant="h6" gutterBottom>
                    {k.id}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {k.sub}
                  </Typography>
                </div>
              </Button>
            </Grid>
          ))}
          <Grid item xs={4} className="cell" key="*" onClick={() => sendCode()}>
            <Button>
              <div>
                <Typography variant="h6" gutterBottom>
                  *
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Send
                </Typography>
              </div>
              {loading === "sendCode" && (
                <CircularProgress className="position-center" />
              )}
            </Button>
          </Grid>
          <Grid
            item
            xs={4}
            className="cell"
            key="0"
            onClick={() => updateInputBox((code) => `${code}0`)}
          >
            <Button>
              <div>
                <Typography variant="h6" gutterBottom>
                  0
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Zero
                </Typography>
              </div>
            </Button>
          </Grid>
          <Grid
            item
            xs={4}
            className="cell"
            key="#"
            onClick={() => updateInputBox((code) => `${code} `)}
          >
            <Button>
              <div>
                <Typography variant="h6" gutterBottom>
                  #
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Space
                </Typography>
              </div>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
