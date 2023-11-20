import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';

const LoginDialog = () => {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setUsername('');
    setPassword('');
    setError('');
  };

  const handleLogin = () => {
    // Basic hardcoded credentials for demonstration purposes
    const validUsername = 'user';
    const validPassword = 'pass';

    if (username === validUsername && password === validPassword) {
      // Successful login
      console.log('Login successful!');
      handleClose();
    } else {
      // Invalid credentials
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <Button data-testid="login" onClick={handleOpen}>
        Login
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="login-dialog">
        <DialogTitle id="login-dialog">Login</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Username"
            type="text"
            fullWidth
            data-testid="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            data-testid="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!error}
            helperText={error}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} data-testid="cancel">
            Cancel
          </Button>
          <Button onClick={handleLogin} data-testid="dia-login">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LoginDialog;
