
export default class APIService {
    static LoginUser(body){
        return fetch(`http://127.0.0.1:8000/auth/`, {
            'method': 'POST',
            headers: {
              'Content-Type':'application/json',
            },
            body:JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static RegisterUser(body){
        return fetch(`http://127.0.0.1:8000/api/users/`, {
            'method': 'POST',
            headers: {
              'Content-Type':'application/json',
            },
            body:JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static InsertReview(body, token){
        return fetch(`http://localhost:8000/api/Review/`, {
            'method': 'POST',
            headers: {
              'Content-Type':'application/json',
            //   'Authorization':`Token ${token}`
            },
            body:JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static GetUserData(token, username, onSuccess, onError){
        return fetch(`http://localhost:8000/api/users/${username}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            onSuccess(data);
        })
        .catch(error => {
            onError(error);
        });
    }

    static async UpdateUserProfile(token, username, field, value, onSuccess, onError){
        try {
            const response = await fetch(`http://localhost:8000/api/users/${username}/`, { 
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                },
                body: JSON.stringify({ [field]: value }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error data:', errorData);
                onError(new Error('Failed to save data to the backend.'));
            } else {
                const resp = await response.json();

                // check if username already exists
                if (resp.username && resp.username[0].includes("already exists.")){
                    onError(resp.username[0]);
                } else {
                    onSuccess("Data saved successfully to the backend.");
                }
            }
        } catch (error) {
            console.error('Error while saving data to the backend:', error);
            onError(error);
        }
    }

    static async ChangePassword(token, username, oldPassword, onSuccess, onError){
        try {
            const response = await fetch(`http://localhost:8000/api/users/${username}/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                },
                body: JSON.stringify({ password: oldPassword, username: username }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.log('Error data:', errorData);
                onError(errorData);
            } else {
                console.log('Password changed successfully.');
                onSuccess('Password changed successfully.');
            }

        } catch (error) {
            console.error('Error while changing password:', error);
            onError(error);
        }
    }
}

