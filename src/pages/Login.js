import React from 'react';

class Login extends React.Component {
  state = {
    inputPlayerName: '',
    inputGravatarEmail: '',
  };

  validateInputs = (name, email) => {
    const minLength = 1;
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const validateName = name.length >= minLength;
    const validateEmail = emailRegex.test(email);
    return validateName && validateEmail;
  };

  render() {
    const { inputPlayerName, inputGravatarEmail } = this.state;
    return (
      <div className="container-login">
        <div className="login-page">

          <div>
            <input
              id="inputPlayerName"
              name="inputPlayerName"
              type="text"
              placeholder="Nome"
              className="password-input"
              data-testid="input-player-name"
              onChange={ ({ target }) => this.setState({ [target.name]: target.value }) }
              value={ inputPlayerName }
            />
          </div>
          <div>
            <input
              id="inputGravatarEmail"
              name="inputGravatarEmail"
              type="email"
              placeholder="E-mail"
              className="email-input"
              data-testid="input-gravatar-email"
              onChange={ ({ target }) => this.setState({ [target.name]: target.value }) }
              value={ inputGravatarEmail }
            />
          </div>
          <div>
            <button
              id="btnPlay"
              name="btnPlay"
              type="button"
              className="login-button"
              data-testid="btn-play"
              disabled={ !this.validateInputs(inputPlayerName, inputGravatarEmail) }
            >
              Entrar
            </button>
          </div>
        </div>
      </div>

    );
  }
}

export default Login;
