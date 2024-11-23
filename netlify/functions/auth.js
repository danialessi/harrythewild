exports.handler = async (event, context) => {
    const { password } = JSON.parse(event.body);
    if (password === "mypassword123") {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Accesso consentito!" }),
      };
    }
    return {
      statusCode: 403,
      body: JSON.stringify({ message: "Accesso negato!" }),
    };
  };