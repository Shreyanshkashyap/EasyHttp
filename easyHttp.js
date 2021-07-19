class easyHTTP {
    async get(url) {
        try {
            const response = await fetch(url);
            if (response.status >= 200 && response.status <= 299) {
                const data = await response.json(); 
                return data;
            } else {
                throw Error(response.statusText);
            }
        }
        catch (err) {
            return err;
        }
            
    }

    async post(url,data) {
        try {
            const response = await fetch(url,{
                method: 'POST',
                headers: {
                'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (response.status >= 200 && response.status <= 299) {
                const resData = await response.json(); 
                return resData;
            } else {
                throw Error(response.statusText);
            }
        } catch (err) {
            return err;
        }
    }

    async put(url,data) {
        try {
            const response = await fetch(url,{
                method: 'PUT',
                headers: {
                'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (response.status >= 200 && response.status <= 299) {
                const resData = await response.json(); 
                return resData;
            } else {
                throw Error(response.statusText);
            }
        } catch(err) {
            return err;
        }
    }

    async delete(url) {
        try {
            const response = await fetch(url,{
                method: 'DELETE',
                headers: {
                'Content-type': 'application/json'
                },
            });
            if (response.status >= 200 && response.status <= 299) {
                const resData = await response.json(); 
                return resData;
            } else {
                throw Error(response.statusText);
            }
        } catch(err) {
            return err;
        }
    }
}