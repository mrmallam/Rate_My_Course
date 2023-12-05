
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

    static GetUserData(token, onSuccess, onError){
        return fetch('http://localhost:8000/api/user/profile/', {
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
    
    static async UpdateUserProfile(token, field, value, onSuccess, onError){
        try {
            const response = await fetch('http://localhost:8000/api/user/update/', { 
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
                console.log('Data saved successfully to the backend.');
                onSuccess();
            }
        } catch (error) {
            console.error('Error while saving data to the backend:', error);
            onError(error);
        }
    }
}

