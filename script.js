function login(username, password){
    if(username === admin && password === 'password123'){
        return 'login succesfull';
    }else{
        return 'invalid username or password'
    }
}
async function registerUser(name, email, password) {
    const apiUrl = 'https://tu-api.com/register'; // Reemplaza con la URL de tu API

    const userData = {
        name,
        email,
        password
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || 'Error en el registro');
        }

        console.log('Usuario registrado con éxito:', result);
        return result;
    } catch (error) {
        console.error('Error al registrar usuario:', error.message);
        throw error;
    }
}